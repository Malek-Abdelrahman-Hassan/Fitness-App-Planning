# 04 - Pricing & Costs

## 1. Monetization Philosophy

We sell to **coaches**. The client app is always free. Coaches pay because we help them:
1. Save time (no more Excel + WhatsApp juggling)
2. Retain clients (better experience = less churn from their roster)
3. Look professional (branded experience vs screenshot PDFs)
4. Scale (manage 30+ clients without drowning)

The key insight: if a coach charges 1,000-3,000 EGP/month per client and we help them retain even 1 extra client, our 400-3,000 EGP/month subscription pays for itself instantly.

---

## 2. Model A (Recommended): Tiered SaaS Subscription

### Tier Structure

| Tier | Monthly Price | Client Limit | Features |
|------|:------------:|:------------:|----------|
| **Free** | 0 EGP | Unlimited | Workout + diet builder, plan assignment, client app access, chat, FitMax branding on client app |
| **Starter** | 400 EGP/mo | 15 clients | Everything in Free + remove FitMax branding, basic analytics (who logged this week), exercise video library, weekly auto-reports |
| **Pro** | 1,000 EGP/mo | 50 clients | Everything in Starter + full analytics dashboard, check-in forms, recipe library, priority support, coach web admin |
| **Business** | 1,700 EGP/mo | 150 clients | Everything in Pro + team members (up to 3), advanced reporting, API access |
| **Elite** | 3,000 EGP/mo | Unlimited | Everything in Business + white-label (coach logo + colors), AI features (Year 2), unlimited team members, dedicated onboarding call, template marketplace access |

### Why This Structure

- **Free tier** (unlimited clients): Zero barrier to entry. Any coach can sign up and use the full core product forever. We bet on value — once they rely on us, they'll upgrade for analytics, branding, and premium features. This dramatically undercuts FitXpert's 3-client free tier.
- **Starter** (400 EGP, 15 clients): The first upgrade trigger is branding removal and analytics. 400 EGP is well under FitXpert's $15/mo (750 EGP) for the same 15-client tier.
- **Pro** (1,000 EGP, 50 clients): For growing coaches. At ~$20/mo, this competes with FitXpert's $30/mo for 50 clients while offering better localization.
- **Business** (1,700 EGP, 150 clients): For coaching businesses and nutrition centers with multiple team members.
- **Elite** (3,000 EGP, unlimited): For big coaches and fitness brands. White-label makes them look like they built their own app. At ~$60/mo, this is a fraction of FitXpert's $350/mo unlimited tier.

### Pricing Context (Egypt)

| Reference Point | Price |
|----------------|-------|
| Netflix Egypt (Standard) | ~200 EGP/mo |
| Spotify Egypt (Premium) | ~50 EGP/mo |
| Gym membership (mid-range Cairo) | 500-1,500 EGP/mo |
| Coach charges per client | 1,000-5,000 EGP/mo |
| FitXpert (15 clients) | $15/mo (~750 EGP) |
| FitXpert (50 clients) | $30/mo (~1,500 EGP) |
| Trainerize Pro 50 (real cost) | ~$200/mo (~10,000 EGP) |
| Our Starter tier | 400 EGP/mo |
| Our Pro tier (50 clients) | 1,000 EGP/mo |

Our pricing undercuts both FitXpert and Trainerize while offering superior localization. A coach earning 20,000 EGP/month from 10 clients won't flinch at 400 EGP for analytics and branding — and the free tier lets them try everything first.

### Overage Option

If a coach on Starter (15 clients) wants to add a 16th without upgrading to Pro:
- Charge 30 EGP per extra client per month
- Auto-suggest upgrade when overage exceeds the price difference

---

## 3. Model B: Per-Client Seat Pricing

### How It Works

| Metric | Value |
|--------|-------|
| Price per client per month | 25-35 EGP |
| Minimum monthly charge | 0 (truly pay-as-you-go) |
| All features included | Yes (no tier gates) |

### Example

- Coach with 10 clients: 10 × 30 = **300 EGP/mo**
- Coach with 30 clients: 30 × 30 = **900 EGP/mo**
- Coach with 50 clients: 50 × 30 = **1,500 EGP/mo**

### Pros

- Simple mental model: "pay for what you use"
- Aligns our revenue with coach success (more clients = more revenue for both)
- No awkward tier boundaries
- Easy to explain

### Cons

- Coach might resist adding clients if each one costs them more
- Revenue less predictable (coach drops 5 clients = instant revenue drop)
- No "aspirational" tier to anchor on (no Elite branding)
- Harder to discount (no "get 1 month free" promos)

### When to Use This

Consider switching to per-seat if coaches tell us they hate tier limits during V1 interviews. Could also offer as an alternative to tiered (coach picks their billing model).

---

## 4. Model C: Revenue Share

### How It Works

We process payments between coach and their clients. We take a percentage.

| Component | Value |
|-----------|-------|
| Our cut | 7-10% of client payments processed through the platform |
| Payment processing fee (Paymob) | ~2.75% (on top of our cut, or absorbed) |
| Coach collects | 87-90% of what clients pay |

### Example

- Coach charges client 2,000 EGP/mo × 20 clients = 40,000 EGP collected
- Our 8% share = **3,200 EGP/mo** from this single coach
- Paymob fees (2.75%) = 1,100 EGP (passed to coach or split)

### Pros

- Aligns revenue perfectly with coach success
- High-revenue coaches = high revenue for us
- Coach pays nothing upfront (zero friction)
- Could be very lucrative at scale

### Cons

- Requires building full payment processing (coach → us → Paymob → client)
- Coaches in Egypt often collect cash, Vodafone Cash, or bank transfers outside any platform
- Enforcement is nearly impossible without owning the payment flow
- Regulatory complexity (we become a payment intermediary)
- Takes months to build properly

### When to Use This

Only viable once we have:
1. Integrated payment collection (clients pay through our app)
2. Enough coaches that we can mandate platform payments
3. Legal structure to act as payment intermediary in Egypt

Realistically: Year 2-3 feature. Can layer it ON TOP of SaaS subscription (coaches pay SaaS + we also process their client payments for a cut).

---

## 5. Model D: Freemium + Paid Add-Ons

### How It Works

Core product is free for unlimited clients. Revenue comes from optional premium modules.

| Add-On | Monthly Price | What It Unlocks |
|--------|:------------:|-----------------|
| Chat module | Included free | 1:1 chat with clients (text + photos + voice) |
| Analytics module | 79 EGP/mo | Client adherence dashboard, risk alerts, weekly reports |
| Branding module | 149 EGP/mo | Remove our branding, add coach logo + colors |
| AI module | 99 EGP/mo | Auto-progression, smart scheduling, diet suggestions |
| Video library | 49 EGP/mo | Access to premium exercise video library |

### Example Coach Spend

- Budget coach (0 add-ons): **0 EGP/mo** — uses basic features forever
- Mid coach (chat + analytics): 49 + 79 = **128 EGP/mo**
- Premium coach (all add-ons): 49 + 79 + 149 + 99 + 49 = **425 EGP/mo**

### Pros

- Lowest barrier to entry (completely free core)
- Coach only pays for what they actually want
- Fastest user growth (free = viral potential)
- Can A/B test which modules are most valuable

### Cons

- Slowest path to revenue (most coaches won't buy add-ons initially)
- Confusing: "which modules do I need?"
- Harder to communicate value vs simple tiers
- Free users cost us money (hosting, support) with no guaranteed payback

### When to Use This

Best as a secondary strategy layered on top of tiers. Example: Elite tier includes all add-ons, but individual modules purchasable by lower tiers. Or use freemium for initial growth, convert to tiers once coaches are hooked.

---

## 6. Recommended Strategy for V1

**Primary model: Tiered SaaS (Model A)** with these specifics:

1. Launch with Free + Starter + Pro (3 tiers). Business and Elite come later (need team features, AI, and white-label built).
2. Free tier is unlimited clients with full core features — our growth engine. Coaches upgrade for analytics, branding, and advanced tools.
3. Annual discount: pay 10 months, get 12 (2 months free). Example: Starter annual = 4,000 EGP instead of 4,800 EGP.
4. Dragon gets **lifetime Elite** for free (design partner benefit, documented).

Revisit at 50 paying coaches. If coaches consistently hit tier ceilings and complain, test per-seat pricing as alternative.

---

## 7. Payment Rails for Egypt

### Available Methods via Paymob

| Method | How It Works | Fees | Notes |
|--------|-------------|------|-------|
| **Credit/Debit Card** | Visa, Mastercard, Meeza | 2.75% + 1 EGP per txn | Standard, works for recurring |
| **Fawry** | Client pays at any Fawry kiosk (200k+ locations) | 2.5% or flat fee | Great for cash-preferred users. Generates a reference code. |
| **Vodafone Cash** | Mobile wallet payment | 1-2% | Popular among young Egyptians. Requires wallet app. |
| **Orange Cash** | Mobile wallet | 1-2% | Secondary mobile wallet |
| **InstaPay** | Bank-to-bank instant transfer | Free to low fee | Growing fast, requires banking app |
| **ValU** | Buy Now Pay Later | Higher (5%+) | For larger annual plans |

### Recommended Approach

1. **V1 billing page (web)**: Coach goes to `pay.fitmax.app/subscribe`, picks tier, pays via Paymob (card, Fawry, or wallet). This avoids Apple IAP entirely.
2. **Recurring billing**: Paymob supports recurring card charges. For Fawry/wallet: send monthly invoice with payment link.
3. **Fallback**: if coach can't do digital payments, accept bank transfer to our CIB/QNB account + manual tier activation (doesn't scale, but works for first 50 coaches).

### Apple App Store Compliance

Apple's rules: if the app provides digital content/services consumed within the app, Apple wants 30% via IAP.

**Our argument (standard in B2B SaaS):**
- The coach is a business user, not a consumer
- The service is coach management (a business tool), not content consumed in-app
- Trainerize, TrueCoach, Slack, Notion — all bill outside Apple IAP
- The client app is free, no billing at all
- Coach billing happens on web, not inside the iOS app

**Risk mitigation:**
- Never show pricing or a subscribe button inside the iOS coach app
- Bill via web only (`pay.fitmax.app`)
- In-app, show "Manage your subscription at fitmax.app" (Apple allows linking to web for account management)
- If Apple pushes back: offer Apple IAP as an option with 30% markup (coach pays 259 EGP instead of 199 EGP on iOS). Most coaches will choose web.

---

## 8. Year-1 Cost Breakdown

### One-Time Costs

| Item | Cost | Notes |
|------|------|-------|
| Apple Developer Account | $99 (~5,000 EGP) | Annual fee, required for App Store |
| Google Play Developer Account | $25 (~1,250 EGP) | One-time fee |
| Company registration (Egypt) | 5,000-15,000 EGP | LLC or sole proprietorship, depends on structure |
| Logo + basic brand identity | 0-5,000 EGP | DIY with Figma or hire local designer |
| Domain name (.app or .io) | 500-2,000 EGP/yr | fitmax.app or similar |
| **Total one-time** | **~12,000-28,000 EGP** | |

### Monthly Operating Costs (Post-Launch)

| Item | Month 1-3 (Alpha) | Month 4-6 (V1) | Month 7-12 (Growth) |
|------|:-----------------:|:--------------:|:-------------------:|
| Hosting (Railway/Render - API) | $5 (~250 EGP) | $20 (~1,000 EGP) | $40-80 (~2-4k EGP) |
| PostgreSQL (managed) | $0 (free tier) | $10 (~500 EGP) | $20-50 (~1-2.5k EGP) |
| Redis (Upstash) | $0 (free tier) | $10 (~500 EGP) | $10-20 (~500-1k EGP) |
| Cloudflare R2 (photos/videos) | $0 (free 10GB) | $5 (~250 EGP) | $10-30 (~500-1.5k EGP) |
| PostHog (analytics) | $0 (free 1M events) | $0 | $0-29/mo (~0-1.5k EGP) |
| Sentry (errors) | $0 (free tier) | $0 | $0 |
| Resend (email) | $0 (free 100/day) | $20 (~1,000 EGP) | $20 (~1,000 EGP) |
| SMS OTP (Twilio/MessageBird) | ~500 EGP | ~1,000 EGP | ~2,000-5,000 EGP |
| Expo EAS Build | $0 (free 30/mo) | $0 | $0 (or $99 if need more) |
| Metabase (self-hosted) | $0 | $0 | $0 |
| **Monthly infra total** | **~750 EGP** | **~4,250 EGP** | **~7,000-16,000 EGP** |

### Marketing Budget (Post-V1 Launch)

| Channel | Monthly Budget | Expected |
|---------|:--------------:|----------|
| Instagram/Facebook ads (coach targeting) | 3,000-8,000 EGP | Lead gen for coach signups |
| Influencer partnerships (fitness creators) | 2,000-5,000 EGP | Dragon + 2-3 other coaches post about us |
| Content creation (reels, stories, posts) | 0-2,000 EGP | Mostly in-house (Designer-Marketer role) |
| Google Ads (search: "fitness coaching app Egypt") | 1,000-3,000 EGP | Lower priority, test after month 8 |
| **Monthly marketing total** | **5,000-15,000 EGP** | Starting month 5-6 |

### Year-1 Total Estimate

| Scenario | Total Cost | Assumptions |
|----------|:----------:|-------------|
| **Lean (no salaries)** | ~80,000-150,000 EGP | Founders work for equity, minimal marketing |
| **Moderate (small stipends)** | ~300,000-500,000 EGP | 2 team members get 10-15k EGP/mo stipend |
| **Comfortable (proper salaries)** | ~800,000-1,200,000 EGP | 4 people at 15-25k EGP/mo + marketing |

### Funding Options

| Source | Amount | Trade-off |
|--------|--------|-----------|
| Self-funded (team savings) | 50-200k EGP | Full ownership, high pressure |
| Angel investor (Egypt) | 200-500k EGP | Give up 10-20% equity, get mentorship |
| Flat6Labs / Falak / AUC Venture Lab | 500k-2M EGP | Accelerator program, 5-15% equity, network |
| Pre-seed from Dragon (if he invests) | 50-100k EGP | Skin in the game, aligned incentives |
| Revenue-funded | From month 4+ | Slowest but keeps 100% ownership |

---

## 9. Break-Even Analysis

### Assumptions

| Variable | Value |
|----------|-------|
| Average Revenue Per User (ARPU) | 700 EGP/mo (blended — most paying coaches on Starter/Pro) |
| Monthly fixed costs (infra + marketing) | 15,000 EGP |
| Monthly variable cost per coach | ~10 EGP (marginal hosting/SMS) |
| Payment processing fee | 2.75% (Paymob) |

ARPU rationale: Expect ~50% of paying coaches on Starter (400), ~35% on Pro (1,000), ~10% on Business (1,700), ~5% on Elite (3,000). Blended = ~700 EGP. Free-tier coaches don't count in ARPU.

### Break-Even Calculation

```
Monthly revenue needed = Fixed costs / (ARPU - Variable cost per coach - Payment fees)
                       = 15,000 / (700 - 10 - 19.25)
                       = 15,000 / 670.75
                       = ~23 paying coaches

With 1 modest salary (15,000 EGP/mo):
= 30,000 / 670.75
= ~45 paying coaches

With 2 salaries:
= 45,000 / 670.75
= ~68 paying coaches
```

### Revenue Projection (Conservative)

| Month | Paying Coaches | Free Coaches | MRR | Cumulative Revenue |
|-------|:--------------:|:------------:|:---:|:-----------------:|
| M4 (billing starts) | 5 | 30 | 3,500 EGP | 3,500 EGP |
| M5 | 10 | 50 | 7,000 EGP | 10,500 EGP |
| M6 (V1 launch) | 18 | 80 | 12,600 EGP | 23,100 EGP |
| M7 | 25 | 110 | 17,500 EGP | 40,600 EGP |
| M8 | 35 | 140 | 24,500 EGP | 65,100 EGP |
| M9 | 45 | 170 | 31,500 EGP | 96,600 EGP |
| M10 | 55 | 200 | 38,500 EGP | 135,100 EGP |
| M11 | 70 | 230 | 49,000 EGP | 184,100 EGP |
| M12 | 85 | 260 | 59,500 EGP | 243,600 EGP |

**Year 1 total revenue (months 4-12): ~244,000 EGP** (conservative)

The unlimited free tier acts as a growth engine — we expect many free coaches, with ~15-20% converting to paid tiers over time.

### Path to Profitability

- At ~23 paying coaches: covers infra + marketing (no salaries)
- At ~45 paying coaches: covers infra + marketing + 1 full-time salary
- Target: reach 23 coaches by M5, 45 by M8

---

## 10. Pricing Experiments to Run

| Experiment | When | Hypothesis |
|-----------|------|-----------|
| Annual vs monthly split test | M6 | Annual converts higher ARPU but lower initial uptake |
| 14-day free trial of Pro | M7 | Showing Pro features converts Starter → Pro at >20% rate |
| "First month 50% off" promo | M8 | Discount gets fence-sitters to convert, >60% retain after |
| Per-client pricing option | M10 | Some coaches prefer usage-based; offer as alternative |
| Referral discount (both sides) | M10 | Referred coaches have higher 3-month retention |
| Egyptian holidays promo (Ramadan special) | Seasonal | Sign up during Ramadan = special Ramadan mode features free |

---

## 11. Key Metrics to Track

| Metric | Definition | Target |
|--------|-----------|--------|
| MRR | Monthly Recurring Revenue | Growth month-over-month |
| ARPU | Average Revenue Per User (paying coaches) | >700 EGP |
| CAC | Cost to Acquire a Coach | <500 EGP |
| LTV | Lifetime Value (ARPU × avg months retained) | >8,400 EGP |
| LTV/CAC ratio | Must be >3x for healthy unit economics | >4x |
| Churn rate (monthly) | % of paying coaches who cancel | <10% |
| Free → Paid conversion | % of free coaches who upgrade within 60 days | >15% |
| Expansion revenue | Coaches upgrading tiers | >10% of MRR |
