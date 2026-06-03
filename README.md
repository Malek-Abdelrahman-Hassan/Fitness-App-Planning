# FitMax - Fitness Coach & Client Platform

> Two mobile apps that let fitness coaches in Egypt manage clients, assign diet plans, and build interactive training schedules — while clients log workouts, track body changes, and stay accountable.

## The Vision

Egyptian fitness coaches run their businesses from WhatsApp groups, Excel sheets, and Google Drive folders. Their clients screenshot diet PDFs, forget to log workouts, and churn silently. We fix both sides:

- **Coach App** — register clients, build workout templates, create diet plans, track adherence, see who's at risk of dropping off.
- **Client App** — view diet (read-only in V1), interact with training schedules (pick sets, log reps/weight), record body measurements and progress photos.

Our paying customer is the **coach**. Our job is to make them look professional, save them time, and help them retain more clients. When coaches succeed, we grow.

## Design Partner

**Dragon** — an active Egyptian coach who will co-build V0 with his real clients. Every feature ships only after Dragon validates it in his daily workflow.

## Quick Numbers

| Metric | Target |
|--------|--------|
| V0 Alpha | Month 1-3 (Dragon + 5-10 clients) |
| V1 Public Launch | Month 6 |
| 100 Paying Coaches | Month 12 |
| Break-even MRR | ~30,000 EGP (~150 coaches at 199 EGP avg) |

## Documentation Index

| # | Document | What It Covers |
|---|----------|---------------|
| 1 | [Business Plan](docs/01-business-plan.md) | Vision, Egypt market sizing, competitor matrix, edge points, brand options, risks |
| 2 | [Product Roadmap](docs/02-product-roadmap.md) | V0 → V1 → V2 → V3 → Year 2 feature lists, acceptance criteria, future ideas |
| 3 | [Tech & Data](docs/03-tech-and-data.md) | Stack, monorepo layout, DB schema, analytics events, offline-first strategy |
| 4 | [Pricing & Costs](docs/04-pricing-and-costs.md) | 4 monetization models, EGP tiers, payment rails, Year-1 budget, break-even |
| 5 | [Team & Execution](docs/05-team-and-execution.md) | Roles for 4, RACI, tools, sprint cadence, milestones, Dragon's deliverables |
| 6 | [Coach Success Playbook](docs/06-coach-success-playbook.md) | Onboarding, white-label, referral program, support, content marketing |
| 7 | [Design Guidelines](docs/07-design-guidelines.md) | Arabic RTL, accessibility, design tokens, offline UX, coach branding theming |
| 8 | [Resources](docs/08-resources.md) | Books, courses, competitor teardowns, Egypt-specific guides |

## Tech Stack at a Glance

```
Frontend:  React Native (Expo) + TypeScript + NativeWind/Tamagui
Backend:   NestJS + Prisma + PostgreSQL + Redis
Offline:   WatermelonDB (client app workout logging)
Payments:  Paymob / Fawry / InstaPay / Vodafone Cash
Analytics: PostHog + Sentry + Metabase
Infra:     Railway/Render + Cloudflare R2 + Firebase Cloud Messaging
```

## Team

| Role | Person | Responsibility |
|------|--------|---------------|
| Founder / PM | Malek | Product, customer development, Dragon liaison, hiring |
| Mobile Engineer | Omar Fahmy | Both Expo apps + design system implementation |
| Backend / Data Engineer | Ahmed Khaled | API, DB, payments, analytics pipeline |
| Designer-Marketer | Amr Khaled | Figma, content, social, ASO, landing page |
| Dragon (Advisor) | Dragon | Weekly feedback, real clients for testing, exercise/food content |

## How to Use This Repo

This is a **planning-only** repository. No code lives here. To get started:

1. Read this README for the big picture.
2. Read `docs/01-business-plan.md` to understand the market and positioning.
3. Read `docs/02-product-roadmap.md` to see what we're building and when.
4. Assign yourself competitor teardowns from `docs/08-resources.md` in week 1.
5. Check `docs/05-team-and-execution.md` for sprint cadence and your role's RACI.

When we're ready to code, a separate repo will be created following the monorepo structure defined in `docs/03-tech-and-data.md`.

## Open Decisions

- ~~Final brand name~~ **Decided: FitMax**
- ~~Monetization model for V1~~ **Decided: Tiered SaaS (Model A)**
- Dragon's compensation structure (equity vs revenue share vs salary)
- iOS + Android day 1, or Android-only first (85% market share in Egypt)
- App Store billing strategy (web checkout vs Apple IAP 30% cut)
- Language: Arabic-only V0 or bilingual from day 1
