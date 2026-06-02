# 05 - Team & Execution

## 1. Team Structure (4 People + Dragon)

### Role Definitions

| Role | Person | Time Commitment | Core Responsibility |
|------|--------|:--------------:|-------------------|
| **Founder / PM** | TBD (you) | Full-time equivalent | Product vision, customer development, Dragon relationship, sprint planning, investor readiness |
| **Mobile Engineer** | TBD | Full-time equivalent | Both Expo apps (coach + client), design system implementation, offline sync, app performance |
| **Backend / Data Engineer** | TBD | Full-time equivalent | NestJS API, PostgreSQL schema, Prisma, payments integration, analytics pipeline, DevOps |
| **Designer-Marketer** | TBD | Full-time equivalent | Figma design system, UI/UX flows, marketing content, social media, ASO, landing page |
| **Dragon (Advisor)** | Dragon | ~5-7 hrs/week | Domain expertise, user testing, content (exercises + food), client recruitment for alpha |

### RACI Matrix (V0 Phase)

| Activity | Founder/PM | Mobile Eng | Backend Eng | Designer-Mkt | Dragon |
|----------|:----------:|:----------:|:-----------:|:------------:|:------:|
| Product requirements | **R/A** | C | C | C | C |
| UI/UX design | A | C | - | **R** | C |
| Mobile app development | A | **R** | C | - | - |
| API development | A | C | **R** | - | - |
| Database schema | C | C | **R/A** | - | - |
| Payment integration | A | - | **R** | - | - |
| Exercise library content | A | - | - | C | **R** |
| Food database content | A | - | - | C | **R** |
| User testing sessions | **R** | C | - | C | **A** |
| Marketing content | A | - | - | **R** | C |
| Sprint planning | **R/A** | I | I | I | I |
| Deployment | I | C | **R** | - | - |
| Customer support (V1+) | **R** | C | C | C | - |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 2. Dragon's Structured Deliverables

Dragon is not an employee — he's a design partner. To make the relationship productive, his contribution is structured:

### Weekly Deliverables

| Deliverable | Time | Output |
|-------------|------|--------|
| Feedback session | 60 min (Friday) | Recorded video call reviewing this week's build, noted bugs/UX issues |
| UI validation | 30 min (async) | Approve or reject Figma flows before dev starts (within 48h of being shared) |
| Exercise content batch | 1-2 hrs (async) | 20 exercises/week with: Arabic name, English name, muscle group, equipment, form cues |
| Food entries | 30 min (async) | 10 Egyptian food items/week with macros per serving |

### Monthly Deliverables

| Deliverable | Output |
|-------------|--------|
| Client recruitment | Ensure 5-10 of his paying clients are active on the alpha app |
| Workflow documentation | Document 1 coach workflow per month (how he programs, how he checks in, etc.) |
| Competitive intel | Share what other coaches in his circle use and complain about |

### Compensation Options (Decide Before V0 Starts)

| Option | Structure | Best If... |
|--------|-----------|-----------|
| A. Equity | 3-5% vesting over 2 years, 6-month cliff | Dragon is long-term committed, wants upside |
| B. Revenue share | 2-3% of gross revenue for 3 years, capped at 500k EGP total | Lower commitment, guaranteed payout |
| C. Monthly retainer | 3,000-5,000 EGP/month during V0 | Dragon needs cash now, lower long-term cost |
| D. Hybrid | 2% equity + 2,000 EGP/month during V0 | Balance of alignment + immediate compensation |

**Recommendation:** Option D (Hybrid). Gives Dragon skin in the game while respecting his time investment.

---

## 3. Tools & Infrastructure

### Development

| Tool | Purpose | Cost |
|------|---------|------|
| GitHub (Team plan) | Code hosting, PRs, code review, Actions CI/CD | $4/user/mo (~800 EGP/mo) or free (public repo) |
| VS Code / Cursor | IDE | Free / $20/mo |
| Expo EAS | Mobile builds (iOS + Android) without local Xcode | Free tier (30 builds/mo) |
| Postman / Insomnia | API testing | Free |
| pgAdmin / TablePlus | Database GUI | Free / $59 one-time |

### Project Management

| Tool | Purpose | Cost |
|------|---------|------|
| **Linear** | Issue tracking, sprint boards, roadmap | Free (<250 issues) then $8/user/mo |
| GitHub Projects | Lightweight alternative to Linear if budget-tight | Free with GitHub |
| Notion | Documentation, meeting notes, decision logs, wiki | Free (small team plan) |

### Design

| Tool | Purpose | Cost |
|------|---------|------|
| **Figma** | UI/UX design, prototyping, design system | Free (3 files) or $12/editor/mo |
| FigJam | Whiteboarding, brainstorming | Free with Figma |
| Lottie | Animations (micro-interactions) | Free (open source) |

### Communication

| Tool | Purpose | Cost |
|------|---------|------|
| **Discord** or Slack | Daily team communication, channels per topic | Free |
| Loom | Async video demos (Friday sprint reviews for Dragon) | Free (25 videos) or $12.50/mo |
| Google Meet / Zoom | Weekly sync calls, Dragon sessions | Free |
| WhatsApp Group | Quick team pings (backup channel) | Free |

### Analytics & Monitoring

| Tool | Purpose | Cost |
|------|---------|------|
| PostHog | Product analytics, funnels, session replay | Free (1M events/mo) |
| Sentry | Error monitoring, crash reports | Free (5k events/mo) |
| Metabase | Business intelligence dashboards | Free (self-hosted) |
| UptimeRobot | API uptime monitoring | Free (50 monitors) |

---

## 4. Sprint Cadence

### 2-Week Sprint Structure

```
Week 1:
  Monday    → Sprint Planning (1.5h) - Pick stories from backlog, assign, estimate
  Tue-Thu   → Build (heads-down)
  Friday    → Midweek sync (15 min standup), Dragon async review of in-progress work

Week 2:
  Mon-Thu   → Build + Polish
  Friday    → Sprint Demo (1h with Dragon) + Retrospective (30 min team only)
              Sprint closes, deploy to staging
  
Weekend:
  Saturday  → Deploy to production (if green)
  Sunday    → Off (protect rest)
```

### Ceremonies

| Ceremony | Frequency | Duration | Attendees | Purpose |
|----------|-----------|----------|-----------|---------|
| Sprint Planning | Bi-weekly (Mon W1) | 90 min | All 4 + Dragon (optional) | Scope the sprint, assign stories |
| Daily Standup | Daily (async on Discord) | 5 min | All 4 | Post: done yesterday, doing today, blockers |
| Sprint Demo | Bi-weekly (Fri W2) | 60 min | All 4 + Dragon | Show working software, get feedback |
| Retrospective | Bi-weekly (Fri W2) | 30 min | All 4 | What went well, what didn't, action items |
| Monthly Review | Monthly | 90 min | All 4 + Dragon | Review metrics, adjust roadmap, check milestones |
| Dragon Feedback | Weekly (Friday) | 60 min | PM + Dragon | Dedicated 1:1 for domain questions, UX feedback |

### Story Points & Velocity

- Use T-shirt sizing for estimation: XS (1), S (2), M (3), L (5), XL (8)
- Initial assumed velocity: ~20-25 points per sprint (team of 4)
- Track velocity from sprint 1; adjust by sprint 3 when you have real data
- No story larger than L (5). If it's XL, break it down.

### Definition of Done

A story is "done" when ALL of these are true:
- [ ] Code is written and passes TypeScript type-check
- [ ] Unit tests pass (for backend: API endpoint tests; for frontend: component tests if complex)
- [ ] Code reviewed and approved by at least 1 other team member
- [ ] Deployed to staging environment
- [ ] Manually tested on staging (both iOS and Android for mobile stories)
- [ ] No new Sentry errors introduced
- [ ] If user-facing: Dragon can test it (accessible on staging build)
- [ ] Linear ticket moved to "Done"

---

## 5. Month-by-Month Milestones

### Month 0: Setup (Week 0)

| Task | Owner | Deliverable |
|------|-------|------------|
| Set up monorepo + CI/CD | Backend Eng | Working empty apps deploy on merge |
| Set up Figma design system | Designer | Color tokens, typography, component library started |
| Set up Linear + GitHub Projects | PM | Backlog with V0 stories estimated |
| Dragon kickoff meeting | PM | Agreement signed, first exercise batch requested |
| Team alignment workshop | PM | Everyone reads this doc, roles clear, tools configured |
| Domain + accounts setup | Backend Eng | GitHub org, Railway, Cloudflare, Sentry, PostHog accounts |

### Month 1: Foundation

**Goal:** Auth works, coach can add a client, design system functional.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 1 | Auth + scaffolding | Phone OTP login works on both apps, navigation skeleton, shared types package |
| Sprint 2 | Coach core + client join | Coach creates profile, adds client (invite code), client joins. Design system components: Button, Input, Card, Modal |

**Month 1 Exit Criteria:**
- [ ] Coach can sign up, create profile, and generate invite code
- [ ] Client can sign up with invite code and see their coach's name
- [ ] Design system has 10+ components in Figma + code
- [ ] CI/CD deploys both apps to Expo staging
- [ ] Dragon has created his account on staging

### Month 2: Core Workout Loop

**Goal:** Coach builds a workout, client logs sets. The core value prop works.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 3 | Workout builder (coach) | Exercise library (200 loaded), template builder UI, day-by-day program creation |
| Sprint 4 | Workout logger (client) | Client sees assigned workout, logs sets (reps/weight/RPE), rest timer, offline sync working |

**Month 2 Exit Criteria:**
- [ ] Coach (Dragon) builds a real program for a real client
- [ ] Client logs a full workout session (all sets for the day)
- [ ] Offline logging works (airplane mode test)
- [ ] Dragon's first client has logged at least 3 sessions
- [ ] Exercise library has 200 entries with Arabic names

### Month 3: Diet + Body + Polish

**Goal:** Full V0 feature set complete. Alpha NPS check.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 5 | Diet builder + viewer | Coach creates diet template (meals + food items + macros), client views daily diet (read-only) |
| Sprint 6 | Body tracking + polish | Body measurements log + history graph, progress photos (upload + gallery), push notifications, bug fixes from Dragon feedback |

**Month 3 Exit Criteria:**
- [ ] 5-10 of Dragon's clients actively using the app (3+ sessions/week)
- [ ] Diet view live and Dragon has assigned diets to all test clients
- [ ] Body measurements logged by at least 50% of test clients
- [ ] NPS survey conducted: target >7 from both Dragon and clients
- [ ] All critical bugs from Dragon's feedback resolved
- [ ] Decision: proceed to V1 or iterate more on V0?

### Month 4: Billing + Multi-Coach

**Goal:** Other coaches can register. Payment works. Ready for public.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 7 | Multi-coach + onboarding | Independent coach registration, guided onboarding flow, tier selection screen |
| Sprint 8 | Billing integration | Paymob integration, web billing page, subscription management, tier enforcement (client limits) |

**Month 4 Exit Criteria:**
- [ ] 3 coaches besides Dragon have registered and built a program
- [ ] At least 1 coach has successfully paid (Starter or higher)
- [ ] Free tier limits enforced (can't add 4th client without upgrading)
- [ ] Billing web page works with card + Fawry + Vodafone Cash

### Month 5: V1 Polish + Pre-Launch

**Goal:** App Store ready. Marketing materials prepared. Launch plan finalized.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 9 | Chat + video library | Simple 1:1 chat (text + photos), exercise video clips for top 100 exercises |
| Sprint 10 | App Store prep + marketing | App Store screenshots, descriptions (Arabic + English), landing page, social media launch content, coach dashboard (basic) |

**Month 5 Exit Criteria:**
- [ ] Chat functional between all test coach-client pairs
- [ ] App Store submission ready (screenshots, descriptions, privacy policy)
- [ ] Landing page live at coachfit.app
- [ ] Dragon has recorded 2-3 testimonial videos
- [ ] 10 coaches on waitlist from pre-launch marketing

### Month 6: V1 Public Launch

**Goal:** Live on App Store + Google Play. 20 paying coaches by end of month.

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 11 | Launch + onboard | Submit to stores, fix rejection issues, onboard first wave of coaches 1:1 |
| Sprint 12 | Stabilize + iterate | Monitor crashes, fix critical bugs, first weekly reports sent, gather early feedback |

**Month 6 Exit Criteria:**
- [ ] App live on both App Store and Google Play
- [ ] 20 paying coaches (any paid tier)
- [ ] Crash-free rate >99%
- [ ] App Store rating >4.0
- [ ] No data loss incidents
- [ ] Weekly auto-report sent to all active clients

### Month 7-9: V2 (Retention Features)

| Month | Focus |
|-------|-------|
| M7 | Rich chat (voice notes, media), notification preferences, improved analytics |
| M8 | Check-in forms, recipe library, diet swap suggestions |
| M9 | Coach web admin (lightweight), multi-language (full Arabic + English), performance optimization |

**M9 Exit Criteria:**
- [ ] Monthly coach retention >90%
- [ ] 60+ paying coaches
- [ ] MRR >10,000 EGP
- [ ] Web admin used by >30% of Pro/Elite coaches

### Month 10-12: V3 (Growth Features)

| Month | Focus |
|-------|-------|
| M10 | Gamification system (streaks, badges, leaderboard) |
| M11 | Community features (broadcast channel, coach profiles), referral program |
| M12 | White-label lite, template sharing, growth experiments |

**M12 Exit Criteria:**
- [ ] 100+ paying coaches
- [ ] MRR >19,000 EGP
- [ ] >20% of new coaches from referrals
- [ ] Gamification: >50% of clients have active streaks
- [ ] Ready to plan Year 2 (AI features)

---

## 6. Hiring Triggers

Don't hire until these conditions are met:

| Role to Hire | Trigger | Why |
|-------------|---------|-----|
| 2nd Mobile Engineer | >50 paying coaches AND feature backlog >3 months deep | Need to ship faster without burning out engineer 1 |
| Customer Success / Support | >80 coaches AND support tickets >20/week | PM can't handle support + product anymore |
| Content Creator | >100 coaches AND marketing is the bottleneck to growth | Need dedicated person for social, videos, coach stories |
| Data Scientist | >200 coaches AND preparing AI features | Build churn model, auto-progression, food recommendations |
| Sales (B2B) | Exploring gym partnerships or enterprise tier | Need someone who can close multi-coach deals |

---

## 7. Risk Management

### Sprint-Level Risk Checks

Every sprint retrospective, ask:
1. Are we on track for this month's milestone? If no, what do we cut?
2. Is Dragon still engaged? (If his feedback drops off, escalate immediately)
3. Any technical debt that will slow us down next sprint?
4. Is anyone burning out? (Check in genuinely, not as a formality)

### Monthly Scope Gate

At the end of each month, the PM runs a scope gate:
1. List all features planned for next month
2. For each: "Does Dragon/a real coach actually need this in the next 30 days?"
3. If the answer is "nice to have" → move to next version
4. If the team can't deliver planned scope in 4 weeks → cut the lowest-priority item

### Burnout Prevention

- No work on Sundays (hard rule)
- Fridays are lighter (demo + retro, no deep coding expected)
- If someone misses 2+ standups without explanation, PM checks in privately
- Quarterly team dinner/activity (budget: 1,000-2,000 EGP)
- Celebrate launches (V0 alpha → team dinner, V1 → outing)

---

## 8. Communication Norms

| Situation | Channel | Response Time |
|-----------|---------|:------------:|
| Blocker (can't proceed) | Discord #blockers → tag person | <2 hours |
| Code review request | GitHub PR → tag reviewer | <24 hours |
| General question | Discord #general | <4 hours |
| Design feedback needed | Figma comment → Discord ping | <24 hours |
| Dragon feedback | Loom video in Discord #dragon | Watch before Friday session |
| Decision needed (product) | Notion decision doc → discuss at planning | Next planning session |
| Emergency (production down) | Discord #emergency → tag Backend Eng + PM | <30 minutes |

### Documentation Expectations

- Every feature has a 1-page Notion spec before development starts
- Every API endpoint documented in Postman/Swagger
- Architecture Decision Records (ADRs) for major choices (written in Notion)
- Sprint notes published by PM within 24h of planning
- Demo recordings uploaded to Loom and linked in Linear sprint
