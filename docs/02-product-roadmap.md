# 02 - Product Roadmap

## Roadmap Philosophy

Every version has a single thesis we're validating. Features only ship if they serve that thesis. Anything else goes to the next version — no exceptions.

| Version | Thesis | Timeline |
|---------|--------|----------|
| V0 (Alpha) | "Can Dragon and his clients actually use this daily instead of WhatsApp?" | Month 1-3 |
| V1 (Public MVP) | "Will other coaches pay for this?" | Month 4-6 |
| V2 (Retention) | "Can we keep coaches and clients engaged long-term?" | Month 7-9 |
| V3 (Growth) | "Can we build network effects and virality?" | Month 10-12 |
| Year 2 | "Can AI make us 10x better than manual tools?" | Month 13-24 |

---

## V0 — Alpha with Dragon (Month 1-3)

### Thesis
Validate that the core loop works: Coach assigns plan → Client logs workouts → Coach sees data → Both prefer this over WhatsApp.

### Coach App Features

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Phone signup + profile | OTP-based auth, coach name, photo, specialization | Coach can sign up in <60 seconds |
| Add client (manual) | Enter client name + phone, generates invite code | Client receives SMS/WhatsApp invite link |
| Exercise library | Pre-loaded library (~200 exercises) with muscle groups, equipment tags | Coach can search and filter exercises |
| Workout template builder | Drag exercises into days, set reps x sets x weight x rest per exercise. Add video reference link per exercise. | Coach builds a full week program in <10 min |
| Diet template builder | Add meals with food items, specify macros (protein/carbs/fat/calories) per meal | Coach builds a full day diet in <5 min |
| Assign template to client | Pick a client, assign workout and/or diet template | Client sees assigned plan immediately (push notification) |
| Client list view | See all clients with last-active indicator | Coach knows who's engaged and who's gone quiet |
| Simple chat (text + photos) | 1:1 messaging between coach and client. Text messages + photo sharing. | Coach can communicate without leaving the app |

### Client App Features

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Phone signup with invite code | Enter code from coach, OTP auth, basic profile (name, photo, age, height) | Client onboarded in <90 seconds |
| View assigned diet (read-only) | See meals for the day with macros, food items, quantities | Clear, beautiful daily view. No editing allowed in V0. |
| Interactive workout | See today's assigned exercises. For each: choose which sets to do, log weight + reps per set | Client completes a workout log in real-time during session |
| Rest timer | Auto-starts between sets based on coach's prescribed rest | Timer visible, vibrates when done |
| Body measurements log | Log weight, waist, chest, arm, thigh, body-fat % (manual entry) | Can log and see history graph |
| Progress photos | Take/upload front + side + back photos, tagged by date | Photos stored securely, visible to client + their coach only |
| Workout history | See past logged sessions with sets/reps/weight | Client can review last week's performance |

### Shared / Infrastructure

| Feature | Description |
|---------|-------------|
| Push notifications | "New plan assigned", "Reminder: leg day today", "New message from coach", "New message from client" |
| Full event logging | Every action tracked: screen views, set logged, photo uploaded, plan viewed, etc. |
| Offline workout logging | Client can log sets with no internet. Syncs automatically when back online. |
| Error tracking | Sentry integration for crash reporting |

### Explicitly OUT of Scope for V0

- Billing / payments
- Multi-coach support
- Exercise videos (coach can link external video references)
- Diet editing by client
- Web admin
- Analytics dashboard for coach
- Any AI features

### V0 Success Criteria

- [ ] Dragon uses the coach app daily to manage at least 5 clients
- [ ] 80%+ of Dragon's test clients log workouts at least 3x/week
- [ ] Zero data loss incidents (offline sync works)
- [ ] Chat adoption: Dragon uses in-app chat instead of WhatsApp for >50% of client communication
- [ ] NPS survey at M3 end: score > 7 from both Dragon and clients
- [ ] Dragon says "I don't want to go back to WhatsApp for this"

---

## V1 — Public MVP (Month 4-6)

### Thesis
Validate willingness to pay. Can we onboard 20 coaches who aren't Dragon and get them to pay?

### New Features (on top of everything in V0)

| Feature | Description | Priority |
|---------|-------------|----------|
| Multi-coach support | Multiple coaches can register independently, each with their own client roster | Must-have |
| Coach billing | Tiered subscription via web checkout (Paymob). Free tier auto-applied. | Must-have |
| Coach onboarding flow | Guided first-time experience: create first program, add first client, see sample data | Must-have |
| Exercise video library | Short looping clips for ~100 most common exercises. Coach can link videos to exercises. | Should-have |
| Weekly summary report | Auto-generated summary for client: workouts completed, PRs hit, adherence % | Should-have |
| Coach dashboard (basic) | Client adherence %, which clients logged this week, which are inactive | Should-have |
| Program duplication | Coach can clone a template and modify for another client | Should-have |
| Invite link sharing | Coach shares a branded link (WhatsApp, Instagram story) clients tap to join | Must-have |

### V1 Success Criteria

- [ ] 20 paying coaches onboarded (any paid tier)
- [ ] >50% of free-tier coaches have at least 3 active clients
- [ ] Chat engagement: >1 message/day average between coach-client pairs
- [ ] Coach onboarding completion rate: >80% finish the guided flow
- [ ] App Store rating: >4.0 stars
- [ ] No critical bugs reported for >7 consecutive days

---

## V2 — Retention & Engagement (Month 7-9)

### Thesis
Keep coaches and clients using the platform long-term. Reduce churn through richer communication and more value.

### New Features

| Feature | Description |
|---------|-------------|
| Rich chat | Voice notes, video messages, file sharing, read receipts |
| Weekly check-in forms | Coach creates a form (how do you feel? rate energy 1-10, upload photo), client fills weekly |
| Recipe library | Coach-created recipes with ingredients, steps, macros. Shared across all their clients. |
| Diet swap suggestions | Client can request a swap within same macro budget. Coach approves or auto-approved if within ±5% macros. |
| Coach web admin (lightweight) | Responsive web app for coaches who prefer desktop for program building. Read + create, not full feature parity. |
| Improved analytics | Coach sees: client weight trend, workout volume trend, adherence by day-of-week, most-skipped exercises |
| Notification preferences | Clients can customize reminder timing, coaches can set quiet hours |
| Multi-language | Full Arabic + English support. Client picks language. Exercise names shown in both. |

### V2 Success Criteria

- [ ] Monthly coach retention: >90%
- [ ] Client weekly active rate: >70% (logged at least 1 workout)
- [ ] Check-in form completion rate: >60%
- [ ] Rich chat adoption: >40% of messages use voice/photo
- [ ] NPS: Coach NPS >50, Client NPS >40

---

## V3 — Growth & Network Effects (Month 10-12)

### Thesis
Build virality and community. Make coaches recruit other coaches. Make clients show off progress.

### Gamification System

| Element | How It Works | Purpose |
|---------|-------------|---------|
| Streaks | Days in a row client logged a workout. Visible to coach and client. | Daily engagement |
| Badges | "First Workout", "10 Sessions", "PR Breaker", "30-Day Streak", "Body Transformation" | Milestone motivation |
| Weekly leaderboard | Within a coach's roster: who logged the most sessions, who hit the most PRs | Friendly competition, social proof |
| XP points | Earn XP for logging, consistency, hitting targets. Cosmetic levels only (no pay-to-win). | Long-term progression |
| Coach achievements | "Onboarded 10 clients", "100% client retention this month", "50 programs created" | Coach feels accomplished |

### Community & Channels

| Feature | Description |
|---------|-------------|
| Coach broadcast channel | Coach sends updates/motivation to all their clients at once (like Telegram channel) |
| Client community (per coach) | Clients of the same coach can interact, share wins, encourage each other |
| Coach-to-coach community | Private space for coaches using the platform to share tips, templates, discuss the industry |
| Template sharing | Coaches can publish templates to a marketplace (free or paid — paid comes in Year 2) |

### Growth Features

| Feature | Description |
|---------|-------------|
| Referral program (in-app) | Coach refers another coach → both get 1 month free. Tracked via unique referral codes. |
| Client social sharing | "Share your streak" / "Share your transformation" to Instagram stories with app branding |
| Coach profile page | Public landing page for the coach (mini website) with specializations, testimonials, join link |
| White-label lite | Coach uploads logo + brand color. Client app header shows coach brand in their tab. |

### V3 Success Criteria

- [ ] 100+ paying coaches
- [ ] Referral source: >20% of new coaches came via referral
- [ ] Gamification engagement: >50% of clients check their streak daily
- [ ] Community: >30% of coaches use broadcast channel weekly
- [ ] MRR: >50,000 EGP

---

## Year 2 — AI & Platform (Month 13-24)

### AI Features

| Feature | Description | Complexity |
|---------|-------------|-----------|
| AI auto-progression | Suggest weight/rep increases based on client's logged history and rate of progress | Medium |
| AI diet generator | Generate meal plans from: client preferences, budget, Egyptian grocery availability, macro targets | High |
| Computer vision form check | Client records a set, AI analyzes form and flags issues (requires ML model training) | Very High |
| Churn-risk model | Alert coach when a client shows disengagement patterns (missed sessions, declining volume, no check-ins) | Medium |
| Smart scheduling | Suggest optimal workout times based on client's historical logging patterns | Low |
| Natural language plan building | Coach types "push-pull-legs split for intermediate, 4 days/week" and gets a generated template | Medium |

### Platform Features

| Feature | Description |
|---------|-------------|
| Template marketplace | Coaches sell workout/diet templates. We take 10-15% commission. |
| Coach certification tracking | Coaches upload certs, we verify, display badges on their profile |
| Payment processing | Clients pay coaches through the app. We process payments, take revenue share. |
| API for integrations | Connect with wearables (Apple Watch, Garmin, Fitbit), MyFitnessPal, etc. |
| White-label full | Fully branded coach app (separate App Store listing for premium coaches) |
| Multi-location / gym partnerships | Gyms can use FitMax for all their trainers. B2B enterprise tier. |

### Year 2 Success Criteria

- [ ] 500+ paying coaches
- [ ] MRR: >200,000 EGP
- [ ] AI feature adoption: >30% of coaches use at least 1 AI feature
- [ ] Template marketplace: >100 templates listed, >500 purchases
- [ ] Expansion to at least 1 additional country (Saudi Arabia or UAE)

---

## Feature Priority Framework

When deciding what to build, score each feature on:

| Criterion | Weight | Question |
|-----------|--------|----------|
| Coach Impact | 30% | Does this save the coach time or help them retain clients? |
| Client Engagement | 25% | Does this make clients open the app more often? |
| Revenue Potential | 20% | Does this unlock a paid tier or reduce churn? |
| Technical Effort | 15% | How many dev-weeks? (inverse — lower effort = higher score) |
| Differentiation | 10% | Does this create distance from competitors? |

---

## Ideas Parking Lot (Not Scheduled Yet)

These are ideas we might build someday. They live here so we don't forget them, but they have no committed timeline.

- **Live workout mode** — coach watches client's session in real-time, gives live feedback
- **Wearable integration** — auto-log heart rate, steps, sleep from smartwatch
- **Supplement tracking** — log supplements, coach recommends stack
- **Injury tracking** — flag exercises to avoid, auto-filter from templates
- **Period tracking for female clients** — adjust training intensity recommendations by cycle phase
- **Integration with Egyptian labs** — auto-import blood work results (vitamin D, testosterone, thyroid)
- **Coach CRM** — track leads, follow-ups, conversion from inquiry to paying client
- **Video calls** — built-in video for form checks and consultations
- **Meal prep delivery partnership** — connect with Egyptian meal prep companies
- **Coach education platform** — courses and certifications within the app
- **Client family plans** — couples or family members on one subscription
- **Corporate wellness** — companies buy coach access for employees
