# 03 - Tech & Data Architecture

## 1. Stack Overview

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Mobile Framework | React Native (Expo SDK) | Single codebase for iOS + Android. Expo simplifies builds, OTA updates, push notifications. Team doesn't need native iOS/Android expertise. |
| Language | TypeScript (everywhere) | Shared types between frontend and backend. Catches bugs at compile time. Industry standard. |
| UI Library | NativeWind (Tailwind for RN) or Tamagui | Fast styling, responsive, supports RTL via Tailwind's rtl: prefix or Tamagui's RTL prop. |
| State Management | Zustand + React Query (TanStack Query) | Zustand for local UI state. React Query for server state (caching, refetching, optimistic updates). |
| Offline DB | WatermelonDB | SQLite-based, reactive, built for React Native. Handles sync conflicts. Critical for gym basements. |
| Backend Framework | NestJS | TypeScript, modular, great for REST + WebSocket. Strong ecosystem (guards, interceptors, pipes). |
| ORM | Prisma | Type-safe DB access, auto-generated types shared with frontend, great migration system. |
| Database | PostgreSQL | Battle-tested, excellent for relational data (coach-client-plan relationships), JSON support for flexible event data. |
| Cache / Queues | Redis (Upstash or Railway Redis) | Session cache, rate limiting, background job queues (BullMQ). |
| File Storage | Cloudflare R2 | S3-compatible, no egress fees (critical for progress photos/videos), cheap. |
| Auth | Supabase Auth or Clerk | Phone OTP built-in, social login, JWT tokens, session management. Clerk is simpler; Supabase is cheaper at scale. |
| Push Notifications | Expo Push + Firebase Cloud Messaging | Expo handles token management. FCM for Android (dominant in Egypt). APNs via Expo for iOS. |
| Payments | Paymob SDK | Egyptian payment gateway. Cards, Fawry, wallets (Vodafone Cash, Orange, Etisalat). |
| Analytics | PostHog (cloud) | Event tracking, funnels, session replay, feature flags. Free tier generous. Self-hostable later. |
| Error Monitoring | Sentry | Crash reporting, performance monitoring. Free tier sufficient for alpha. |
| Email/SMS | Resend (email) + Twilio or MessageBird (SMS OTP) | Resend for transactional email. SMS for OTP in Egypt (most critical auth channel). |
| CI/CD | GitHub Actions | Free for public repos, cheap for private. Runs tests, builds Expo EAS, deploys API. |
| Hosting | Railway or Render | Simple, affordable PaaS. Auto-scaling. PostgreSQL + Redis add-ons included. Graduate to AWS/GCP at scale. |
| BI / Dashboard | Metabase (self-hosted on Railway) | Free, connects to PostgreSQL read replica. SQL-based dashboards for internal metrics. |

## 2. Monorepo Structure

```
fitmax/
├── apps/
│   ├── coach/                    # Expo app - Coach mobile
│   │   ├── app/                  # File-based routing (Expo Router)
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/               # Zustand stores
│   │   ├── services/             # API calls
│   │   ├── app.json
│   │   └── package.json
│   ├── client/                   # Expo app - Client mobile
│   │   ├── app/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── services/
│   │   ├── db/                   # WatermelonDB models + sync
│   │   ├── app.json
│   │   └── package.json
│   └── api/                      # NestJS backend
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/
│       │   │   ├── coaches/
│       │   │   ├── clients/
│       │   │   ├── workouts/
│       │   │   ├── diets/
│       │   │   ├── measurements/
│       │   │   ├── chat/
│       │   │   ├── billing/
│       │   │   ├── notifications/
│       │   │   └── analytics/
│       │   ├── common/           # Guards, interceptors, pipes
│       │   ├── prisma/           # Prisma schema + migrations
│       │   └── main.ts
│       └── package.json
├── packages/
│   ├── types/                    # Shared TypeScript types/interfaces
│   │   ├── src/
│   │   │   ├── user.ts
│   │   │   ├── workout.ts
│   │   │   ├── diet.ts
│   │   │   ├── measurement.ts
│   │   │   └── events.ts
│   │   └── package.json
│   ├── ui/                       # Shared UI components
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   └── package.json
│   ├── utils/                    # Shared utilities
│   │   ├── src/
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── constants.ts
│   │   └── package.json
│   └── config/                   # Shared config (eslint, tsconfig, etc.)
│       ├── eslint-preset.js
│       ├── tsconfig.base.json
│       └── package.json
├── turbo.json                    # Turborepo pipeline config
├── pnpm-workspace.yaml
├── package.json
└── .github/
    └── workflows/
        ├── ci.yml                # Lint + test on PR
        ├── deploy-api.yml        # Deploy API on merge to main
        └── build-mobile.yml      # EAS Build trigger
```

### Tooling

| Tool | Purpose |
|------|---------|
| pnpm | Package manager (fast, disk-efficient, workspace support) |
| Turborepo | Monorepo build orchestration (caching, parallel tasks) |
| ESLint + Prettier | Code quality and formatting |
| Husky + lint-staged | Pre-commit hooks (format, lint, type-check) |
| Expo EAS | Cloud builds for iOS/Android (no Mac needed for iOS builds) |

## 3. Database Schema

### Entity Relationship Diagram

```
users (1) ──── (1) coaches
users (1) ──── (1) clients
coaches (M) ──── (N) clients  [via coach_clients]
coaches (1) ──── (N) workout_templates
coaches (1) ──── (N) diet_templates
workout_templates (1) ──── (N) template_exercises
template_exercises (1) ──── (N) prescribed_sets
clients (1) ──── (N) workout_sessions
workout_sessions (1) ──── (N) set_logs
clients (1) ──── (N) body_measurements
clients (1) ──── (N) progress_photos
coaches (1) ──── (N) subscriptions
events (denormalized - everything flows here)
```

### Core Tables

```sql
-- Base user account (both coaches and clients)
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone           VARCHAR(20) UNIQUE NOT NULL,
    phone_verified  BOOLEAN DEFAULT FALSE,
    email           VARCHAR(255),
    display_name    VARCHAR(100) NOT NULL,
    avatar_url      VARCHAR(500),
    locale          VARCHAR(5) DEFAULT 'ar',      -- 'ar' or 'en'
    timezone        VARCHAR(50) DEFAULT 'Africa/Cairo',
    role            VARCHAR(10) NOT NULL,          -- 'coach' or 'client'
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Coach-specific profile
CREATE TABLE coaches (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    bio             TEXT,
    specializations TEXT[],                        -- ['weight_loss', 'bodybuilding', 'nutrition']
    logo_url        VARCHAR(500),
    brand_color     VARCHAR(7),                    -- hex color for white-label
    subscription_tier VARCHAR(20) DEFAULT 'free',  -- 'free','lite','starter','pro','elite'
    max_clients     INT DEFAULT 3,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Client-specific profile
CREATE TABLE clients (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    date_of_birth   DATE,
    gender          VARCHAR(10),
    height_cm       DECIMAL(5,1),
    activity_level  VARCHAR(20),                   -- 'sedentary','light','moderate','active','very_active'
    goal            VARCHAR(30),                   -- 'lose_fat','build_muscle','maintain','recomp'
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Many-to-many: which coach manages which client
CREATE TABLE coach_clients (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id        UUID REFERENCES coaches(id) ON DELETE CASCADE,
    client_id       UUID REFERENCES clients(id) ON DELETE CASCADE,
    status          VARCHAR(20) DEFAULT 'active',  -- 'active','paused','archived'
    invite_code     VARCHAR(10) UNIQUE,
    joined_at       TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(coach_id, client_id)
);

-- Exercise library (global + coach-custom)
CREATE TABLE exercises (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_en         VARCHAR(100) NOT NULL,
    name_ar         VARCHAR(100),
    muscle_group    VARCHAR(30) NOT NULL,          -- 'chest','back','legs','shoulders','arms','core','cardio'
    equipment       VARCHAR(30),                   -- 'barbell','dumbbell','machine','cable','bodyweight','band'
    video_url       VARCHAR(500),
    thumbnail_url   VARCHAR(500),
    instructions    TEXT,
    is_global       BOOLEAN DEFAULT TRUE,          -- false = coach-created custom exercise
    created_by      UUID REFERENCES coaches(id),
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Workout template (the "program" a coach designs)
CREATE TABLE workout_templates (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id        UUID REFERENCES coaches(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    description     TEXT,
    duration_weeks  INT,
    days_per_week   INT,
    difficulty      VARCHAR(20),                   -- 'beginner','intermediate','advanced'
    is_template     BOOLEAN DEFAULT TRUE,          -- true = reusable template, false = client-specific
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Exercises within a template (ordered)
CREATE TABLE template_exercises (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id     UUID REFERENCES workout_templates(id) ON DELETE CASCADE,
    exercise_id     UUID REFERENCES exercises(id),
    day_number      INT NOT NULL,                  -- 1-7 (which day of the week)
    order_index     INT NOT NULL,                  -- order within the day
    notes           TEXT,                          -- coach notes ("go heavy", "slow eccentric")
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Prescribed sets (what the coach wants the client to do)
CREATE TABLE prescribed_sets (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_exercise_id UUID REFERENCES template_exercises(id) ON DELETE CASCADE,
    set_number      INT NOT NULL,
    target_reps     INT,
    target_weight_kg DECIMAL(6,2),
    target_rpe      DECIMAL(3,1),                 -- Rate of Perceived Exertion (1-10)
    rest_seconds    INT DEFAULT 90,
    set_type        VARCHAR(20) DEFAULT 'working', -- 'warmup','working','dropset','amrap'
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Assignment: which client gets which template
CREATE TABLE plan_assignments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_client_id UUID REFERENCES coach_clients(id) ON DELETE CASCADE,
    workout_template_id UUID REFERENCES workout_templates(id),
    diet_template_id UUID REFERENCES diet_templates(id),
    start_date      DATE NOT NULL,
    end_date        DATE,
    status          VARCHAR(20) DEFAULT 'active',  -- 'active','completed','paused'
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Actual workout session logged by client
CREATE TABLE workout_sessions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id       UUID REFERENCES clients(id) ON DELETE CASCADE,
    template_id     UUID REFERENCES workout_templates(id),
    day_number      INT,
    started_at      TIMESTAMPTZ NOT NULL,
    completed_at    TIMESTAMPTZ,
    duration_minutes INT,
    notes           TEXT,
    mood_rating     INT,                          -- 1-5 how they felt
    offline_created BOOLEAN DEFAULT FALSE,        -- was this logged offline?
    synced_at       TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Individual set logs (THE GOLD MINE - most granular data)
CREATE TABLE set_logs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id      UUID REFERENCES workout_sessions(id) ON DELETE CASCADE,
    exercise_id     UUID REFERENCES exercises(id),
    set_number      INT NOT NULL,
    actual_reps     INT NOT NULL,
    actual_weight_kg DECIMAL(6,2),
    actual_rpe      DECIMAL(3,1),
    set_type        VARCHAR(20) DEFAULT 'working',
    is_pr           BOOLEAN DEFAULT FALSE,        -- personal record flag
    logged_at       TIMESTAMPTZ DEFAULT NOW(),
    offline_created BOOLEAN DEFAULT FALSE
);

-- Diet template
CREATE TABLE diet_templates (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id        UUID REFERENCES coaches(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    description     TEXT,
    total_calories  INT,
    total_protein_g INT,
    total_carbs_g   INT,
    total_fat_g     INT,
    is_template     BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Meals within a diet template
CREATE TABLE meals (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    diet_template_id UUID REFERENCES diet_templates(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,         -- "Breakfast", "Lunch", "Suhoor"
    time_hint       TIME,                         -- suggested time
    order_index     INT NOT NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Food items within a meal
CREATE TABLE meal_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meal_id         UUID REFERENCES meals(id) ON DELETE CASCADE,
    food_id         UUID REFERENCES foods(id),
    quantity_g      DECIMAL(7,1),
    custom_name     VARCHAR(100),                 -- if food_id is null, coach typed custom
    custom_calories INT,
    custom_protein_g DECIMAL(5,1),
    custom_carbs_g  DECIMAL(5,1),
    custom_fat_g    DECIMAL(5,1),
    order_index     INT NOT NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Egyptian food database
CREATE TABLE foods (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_en         VARCHAR(100) NOT NULL,
    name_ar         VARCHAR(100),
    category        VARCHAR(30),                  -- 'protein','carbs','fat','dairy','fruit','vegetable','snack','egyptian_street'
    calories_per_100g INT NOT NULL,
    protein_per_100g DECIMAL(5,1),
    carbs_per_100g  DECIMAL(5,1),
    fat_per_100g    DECIMAL(5,1),
    fiber_per_100g  DECIMAL(5,1),
    serving_size_g  INT,                          -- typical serving
    serving_name    VARCHAR(50),                  -- "1 plate", "1 piece", "1 cup"
    is_verified     BOOLEAN DEFAULT FALSE,
    source          VARCHAR(50),                  -- 'usda','coach_submitted','manual'
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Body measurements over time
CREATE TABLE body_measurements (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id       UUID REFERENCES clients(id) ON DELETE CASCADE,
    measured_at     DATE NOT NULL,
    weight_kg       DECIMAL(5,1),
    body_fat_pct    DECIMAL(4,1),
    waist_cm        DECIMAL(5,1),
    chest_cm        DECIMAL(5,1),
    arm_cm          DECIMAL(5,1),
    thigh_cm        DECIMAL(5,1),
    hip_cm          DECIMAL(5,1),
    neck_cm         DECIMAL(5,1),
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Progress photos
CREATE TABLE progress_photos (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id       UUID REFERENCES clients(id) ON DELETE CASCADE,
    photo_url       VARCHAR(500) NOT NULL,
    photo_type      VARCHAR(10) NOT NULL,         -- 'front','side','back'
    taken_at        DATE NOT NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Coach subscriptions / billing
CREATE TABLE subscriptions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_id        UUID REFERENCES coaches(id) ON DELETE CASCADE,
    tier            VARCHAR(20) NOT NULL,         -- 'free','lite','starter','pro','elite'
    status          VARCHAR(20) DEFAULT 'active', -- 'active','cancelled','past_due','trialing'
    paymob_subscription_id VARCHAR(100),
    current_period_start TIMESTAMPTZ,
    current_period_end   TIMESTAMPTZ,
    amount_egp      INT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Chat messages
CREATE TABLE messages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coach_client_id UUID REFERENCES coach_clients(id) ON DELETE CASCADE,
    sender_id       UUID REFERENCES users(id),
    content         TEXT,
    media_url       VARCHAR(500),
    media_type      VARCHAR(20),                  -- 'image','voice','video','file'
    is_read         BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Denormalized event log (analytics gold mine)
CREATE TABLE events (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id        UUID NOT NULL,                -- user who performed the action
    actor_role      VARCHAR(10) NOT NULL,         -- 'coach' or 'client'
    event_type      VARCHAR(50) NOT NULL,         -- see taxonomy below
    entity_type     VARCHAR(30),                  -- 'workout','set','diet','measurement','message'
    entity_id       UUID,
    properties      JSONB DEFAULT '{}',           -- flexible key-value pairs
    client_ts       TIMESTAMPTZ,                  -- when it happened on device
    server_ts       TIMESTAMPTZ DEFAULT NOW(),    -- when server received it
    session_id      VARCHAR(50),                  -- group events by app session
    app_version     VARCHAR(20),
    platform        VARCHAR(10)                   -- 'ios','android'
);

CREATE INDEX idx_events_actor ON events(actor_id, server_ts DESC);
CREATE INDEX idx_events_type ON events(event_type, server_ts DESC);
CREATE INDEX idx_events_entity ON events(entity_type, entity_id);
CREATE INDEX idx_set_logs_exercise ON set_logs(exercise_id, logged_at DESC);
CREATE INDEX idx_measurements_client ON body_measurements(client_id, measured_at DESC);
CREATE INDEX idx_sessions_client ON workout_sessions(client_id, started_at DESC);
```

## 4. Analytics Event Taxonomy

Every meaningful action in the app fires an event to PostHog AND to our `events` table.

### Coach Events

| Event Type | Trigger | Key Properties |
|-----------|---------|---------------|
| `coach.signup` | Coach completes registration | `referral_source` |
| `coach.client_added` | Coach adds a new client | `invite_method` (manual/link) |
| `coach.template_created` | Coach saves a workout template | `exercise_count`, `days_per_week` |
| `coach.diet_created` | Coach saves a diet template | `meal_count`, `total_calories` |
| `coach.plan_assigned` | Coach assigns plan to client | `client_id`, `template_type` |
| `coach.dashboard_viewed` | Coach opens analytics dashboard | `time_spent_seconds` |
| `coach.message_sent` | Coach sends chat message | `media_type`, `word_count` |
| `coach.client_archived` | Coach archives a client | `relationship_duration_days` |

### Client Events

| Event Type | Trigger | Key Properties |
|-----------|---------|---------------|
| `client.signup` | Client joins via invite code | `coach_id`, `invite_source` |
| `client.workout_started` | Client begins a workout session | `template_id`, `day_number` |
| `client.set_logged` | Client logs a single set | `exercise_id`, `reps`, `weight_kg`, `rpe`, `is_pr`, `offline` |
| `client.workout_completed` | Client finishes session | `duration_minutes`, `sets_completed`, `sets_skipped` |
| `client.diet_viewed` | Client opens diet plan | `meal_viewed` |
| `client.measurement_logged` | Client records body measurement | `measurement_types` (which fields filled) |
| `client.photo_uploaded` | Client uploads progress photo | `photo_type` |
| `client.message_sent` | Client sends chat message | `media_type` |
| `client.streak_updated` | Daily streak count changes | `streak_count`, `streak_broken` |

### System Events

| Event Type | Trigger | Key Properties |
|-----------|---------|---------------|
| `system.notification_sent` | Push notification dispatched | `notification_type`, `recipient_role` |
| `system.notification_opened` | User taps notification | `notification_type`, `delay_seconds` |
| `system.sync_completed` | Offline data synced to server | `records_synced`, `conflict_count` |
| `system.subscription_changed` | Coach tier changes | `old_tier`, `new_tier`, `reason` |
| `system.error` | Unhandled error occurred | `error_type`, `stack_trace`, `screen` |

## 5. Offline-First Strategy

### Why Offline Matters

Egyptian gyms often have poor connectivity (basement floors, thick concrete, overcrowded cell towers near popular gyms). If a client can't log their set in real-time, the data is lost or they stop using the app.

### Architecture

```
┌─────────────────────────────────────────────┐
│  Client App                                  │
│  ┌─────────────┐     ┌───────────────────┐  │
│  │ React Query │────▶│  WatermelonDB     │  │
│  │ (UI state)  │◀────│  (SQLite local)   │  │
│  └─────────────┘     └───────────────────┘  │
│                              │               │
│                        Sync Engine           │
│                      (when online)           │
└──────────────────────────────│───────────────┘
                               ▼
                    ┌───────────────────┐
                    │   NestJS API      │
                    │   (server truth)  │
                    └───────────────────┘
```

### What Works Offline (Client App)

| Feature | Offline Support | Sync Strategy |
|---------|----------------|---------------|
| Log sets (reps/weight/RPE) | Full | Queue locally, push on reconnect |
| View today's workout | Full (cached) | Pull latest when online |
| View diet plan | Full (cached) | Pull latest when online |
| Rest timer | Full | Local only, no sync needed |
| View workout history | Full (local data) | Merge on sync |
| Log body measurements | Full | Queue locally, push on reconnect |
| Take progress photos | Full (stored locally) | Upload on WiFi (configurable) |
| Chat | No (requires connectivity) | N/A |
| Receive new plan assignments | No | Pulled on reconnect |

### Conflict Resolution

- **Last-write-wins** for most data (set logs, measurements)
- **Server-wins** for plan assignments (coach is the authority)
- **Merge** for workout sessions (combine offline + any server edits)
- Conflicts are rare because coach and client edit different entities

## 6. Environments

| Environment | Purpose | Infra |
|-------------|---------|-------|
| Local | Developer machine | Docker Compose (Postgres + Redis), Expo Go on phone |
| Staging | Pre-release testing with Dragon | Railway (free tier or $5/mo), separate DB |
| Production | Live users | Railway (paid), managed Postgres, Redis, R2 |

### Environment Variables

```
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
PAYMOB_API_KEY=
PAYMOB_INTEGRATION_ID=
CLOUDFLARE_R2_ACCESS_KEY=
CLOUDFLARE_R2_SECRET_KEY=
CLOUDFLARE_R2_BUCKET=
POSTHOG_KEY=
SENTRY_DSN=
EXPO_PUSH_TOKEN=
FCM_SERVER_KEY=
SMS_PROVIDER_KEY=         # Twilio or MessageBird
RESEND_API_KEY=
```

## 7. Security & Privacy

### Data Protection

- All API calls over HTTPS (TLS 1.3)
- JWT tokens with short expiry (15 min access + 7 day refresh)
- Progress photos stored in private R2 bucket (signed URLs, expire in 1 hour)
- Phone numbers hashed in analytics/events (never in PostHog)
- Coach can only access their own clients' data (row-level security via NestJS guards)

### PII Handling

| Data Type | Classification | Storage | Access |
|-----------|---------------|---------|--------|
| Phone number | PII | Encrypted at rest | Auth only |
| Name, photo | PII | Standard DB | Coach + Client |
| Body measurements | Sensitive Health | Standard DB | Client + their coach only |
| Progress photos | Sensitive Health | Private R2 bucket | Client + their coach only (signed URLs) |
| Workout logs | Health | Standard DB | Client + their coach |
| Chat messages | Private | Standard DB | Sender + Receiver only |
| Events/Analytics | Anonymized | Events table / PostHog | Internal team only |

### Compliance Notes (Egypt)

- Egypt's Personal Data Protection Law (Law No. 151/2020) applies
- Requires: consent for data collection, right to access/delete, data breach notification
- Recommend: privacy policy in Arabic, data deletion endpoint, in-app consent toggles

## 8. API Design

### Authentication Flow

```
POST /auth/send-otp       { phone: "+201234567890" }
POST /auth/verify-otp     { phone, otp_code } → { access_token, refresh_token, user }
POST /auth/refresh         { refresh_token } → { access_token }
POST /auth/logout          { refresh_token }
```

### Key Endpoints (V0)

```
-- Coach endpoints
POST   /coaches/profile
GET    /coaches/clients
POST   /coaches/clients/invite
GET    /coaches/templates/workouts
POST   /coaches/templates/workouts
GET    /coaches/templates/diets
POST   /coaches/templates/diets
POST   /coaches/assignments

-- Client endpoints
POST   /clients/join                    { invite_code }
GET    /clients/plan/workout            (current assigned workout)
GET    /clients/plan/diet               (current assigned diet)
POST   /clients/workouts/sessions       (start a session)
POST   /clients/workouts/sessions/:id/sets   (log a set)
PATCH  /clients/workouts/sessions/:id   (complete session)
POST   /clients/measurements
GET    /clients/measurements
POST   /clients/photos
GET    /clients/photos

-- Sync endpoint (offline)
POST   /sync/push                       { changes: [...] }
GET    /sync/pull?since=<timestamp>     → { changes: [...] }
```

## 9. Data Warehouse Plan

### Phase 1 (V0-V1): Read Replica + Metabase

- PostgreSQL read replica (same Railway/Render)
- Metabase connects to replica for dashboards
- Internal team queries: coach growth, client engagement, feature adoption
- Cost: ~$0-10/month extra

### Phase 2 (V2+, >1M events/month): Event Stream

- Events table → nightly export to BigQuery (or keep in Postgres with partitioning)
- Advanced analytics: cohort analysis, churn prediction inputs, funnel analysis
- PostHog handles product analytics; warehouse handles business intelligence

### Phase 3 (Year 2, >5M events/month): Full Warehouse

- Dedicated BigQuery or ClickHouse instance
- dbt for transforms
- ML pipeline inputs (churn model, auto-progression model)
- Real-time dashboards for coaches (materialized views or pre-computed)

## 10. Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| API response time (p95) | <200ms | Sentry APM |
| App cold start | <2 seconds | Expo performance monitoring |
| Set logging latency (offline) | <50ms | Local — no network |
| Sync time (reconnect) | <5 seconds for typical session | Client-side timer |
| Photo upload (WiFi) | <10 seconds per photo | Client-side timer |
| Push notification delivery | <30 seconds | FCM dashboard |
| Crash-free sessions | >99.5% | Sentry |
