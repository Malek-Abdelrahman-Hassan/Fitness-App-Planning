# 01 - Business Plan

## 1. Vision Statement

Build the operating system for Egyptian fitness coaches — a platform so essential to their daily workflow that going back to WhatsApp and Excel feels like going back to pen and paper.

We start with Egypt because we know it, we have Dragon as a design partner, and no one has built a localized, Arabic-first coach platform with local payments. We expand to MENA once we own Egypt.

## 2. Customer Definition

### Primary Customer (who pays us): The Coach

- Independent fitness coaches (online and in-person)
- Gym-based personal trainers who want to scale beyond 1:1 sessions
- Nutrition specialists who pair diet plans with training
- Typical profile: 25-40 years old, male-dominated (but growing female segment), managing 10-80 clients, currently using WhatsApp + Excel + Google Drive

### End User (who uses the product daily): The Client/Trainee

- People who subscribe with a coach for training and/or nutrition
- Ages 18-45, motivated enough to pay a coach (higher intent than average gym-goer)
- They don't pay us — they pay their coach. But they must love the app or the coach churns.

### The Relationship

```
Us (FitMax) → sells to → Coach → sells to → Client
                                                  ↓
                              Client loves app → Coach retains client → Coach stays with us
```

## 3. Egypt Fitness Market

### Market Size Estimation

| Segment | Estimate | Source/Logic |
|---------|----------|-------------|
| Gyms in Egypt | ~4,000-6,000 | Industry estimates, concentrated in Cairo/Giza/Alex |
| Personal trainers (gym-based) | ~15,000-25,000 | ~4-5 per gym average |
| Online coaches (active, charging clients) | ~5,000-10,000 | Instagram/Facebook fitness accounts with paid programs |
| Coaches who could pay for software | ~2,000-5,000 | Those with 10+ paying clients |
| Our serviceable market (Year 1) | ~500-1,000 | Cairo/Giza online coaches who speak to us |

### Why Now?

1. **Post-COVID acceleration** — online coaching exploded in Egypt 2020-2022, coaches learned to work remotely but still use manual tools.
2. **Smartphone penetration** — 95%+ among gym-going demographics, Android dominant (~85%).
3. **Digital payments growing** — Paymob, Fawry, InstaPay, Vodafone Cash all reaching critical mass.
4. **No local competitor** — ElCoach is client-facing (B2C), not coach-management. No one owns the B2B2C coach workflow in Egypt.
5. **Young population** — median age ~24, fitness-conscious generation growing.

### How Coaches Work Today (Pain Points)

| Current Tool | What They Use It For | Pain |
|-------------|---------------------|------|
| WhatsApp | Client communication, sending diet PDFs, check-in photos | No structure, messages get lost, can't track adherence |
| Excel/Google Sheets | Workout programs, diet macros | No client-facing view, manual copying, version chaos |
| Google Drive | Progress photos, PDFs | No timeline view, clients forget to upload |
| Instagram DMs | Onboarding new clients | Gets mixed with general messages |
| Paper notebooks | Some clients log workouts by hand | Data is lost, coach can't see it |
| Nothing | Body measurement tracking | Clients just "feel" different, no data |

## 4. Competitor Analysis

### Global Coach Platforms (B2B2C — same model as us)

| Competitor | Pricing (USD/mo) | Strengths | Gaps We Exploit |
|-----------|------------------|-----------|-----------------|
| **Trainerize** | $5-$300/mo | Market leader, integrations, video library | No Arabic, no Egyptian payments, expensive for Egypt, clunky workout logging UX |
| **TrueCoach** | $19-$99/mo | Clean UX, coach-loved | No Arabic, no localization, no food DB for Egyptian cuisine |
| **MyPTHub** | $49-$139/mo | Comprehensive features | Overly complex for Egyptian market, pricing too high |
| **Everfit** | $0-$79/mo | Modern UI, generous free tier | No Arabic, no MENA focus, basic analytics |
| **FitSW** | $10-$60/mo | Affordable, simple | Dated UI, limited client-side experience |

### Workout Logging UX (Client-side inspiration)

| App | What to Steal | What to Avoid |
|-----|--------------|---------------|
| **Hevy** | Beautiful set logging, rest timer, progress charts, social feed | Feature bloat for our use case |
| **Strong** | Minimal UI, fast logging, template system | Too minimal for coach-assigned programs |
| **FitNotes** | Offline-first, lightweight | Ugly UI, no coach connection |

### Food / AI / Client-Side

| App | Relevance | Gap |
|-----|-----------|-----|
| **MyFitnessPal** | Food database concept | No Egyptian food, coach can't assign/control |
| **Fitbod** | AI workout generation | No coach in the loop |
| **Centr** | Celebrity coach model, beautiful content | Too expensive to produce, not personalized |
| **Future** | 1:1 coach via app ($150/mo) | Luxury market only, US-focused |

### Egypt / MENA

| App | What They Do | Relationship to Us |
|-----|-------------|-------------------------------|
| **FitXpert** | B2B2C SaaS for coaches, nutrition centers, and clinics. Arabic support, workout + diet + progress + check-ins + chat. Funded $1.3M (Jan 2026). | **DIRECT COMPETITOR #1.** Same model, same market. See `docs/competitors/fitxpert-deep-dive.md` for full analysis. |
| **ElCoach** | B2C fitness app (workouts + nutrition for end users) | Sells TO clients, not to coaches. Different model. Not a direct competitor but same ecosystem. |
| **Welnes** | Wellness booking platform (MENA) | Appointment booking, not coaching management |
| **Slim** | Egyptian calorie counting app | Client-facing only, no coach workflow |
| **FitnessYard** | Egyptian gym booking | Booking, not training management |

### Key Insight

FitXpert is the closest competitor and has proven the market exists — funded $1.3M to do exactly what we're building. However, they have only 5K installs after 3 years, indicating weak growth despite a solid product. They position as "enterprise infrastructure" (web-first, serving clinics/centers), while we position as the **coach's personal tool** (mobile-first, individual coaches, community-driven growth).

Our edge is not "they don't exist" — it's that we execute differently: offline-first, mobile-first, content-driven (Dragon), gamified, with transparent pricing and a free tier that lets any coach try us in 60 seconds.

## 5. Our Edge Points (Competitive Moat)

### Day 1 Edges (V0-V1)

1. **Arabic-First UI** — RTL layout, Arabic exercise names alongside English, Arabic food database. Not a translation layer on top of English — designed for Arabic from the ground up.

2. **Egyptian Food Database** — Koshari, ful medames, molokhia, ta'meya, feteer, koshk, mahshi — all with accurate macros. No more coaches manually calculating Egyptian street food for their clients.

3. **Local Payments** — Paymob, Fawry kiosks, InstaPay, Vodafone Cash, Orange Cash. Coaches can collect from clients AND pay us without needing international cards.

4. **Offline Workout Logging** — WatermelonDB ensures clients never lose a logged set even in gym basements with zero signal. Syncs when back online.

5. **Coach-Centric Design** — Every feature asks "does this save the coach time or help them retain clients?" If not, it doesn't ship.

### Future Edges (V2+)

6. **Coach Analytics Dashboard** — "Which clients are at risk of churning?" (missed 3+ sessions), "Which programs have the best adherence?", "What's my average client lifetime?" No competitor shows this.

7. **Ramadan Mode** — Automatically adjusts meal timing for suhoor/iftar, suggests Ramadan-appropriate training programs (lighter volume, evening sessions), pauses streak penalties.

8. **Creator Economy for Coaches** — Coach channels, template marketplace, coach-to-coach community. Coaches become content creators on our platform, creating network effects.

9. **Egyptian Grocery Integration** — Future: suggest meals based on what's available at Kazyon, Carrefour Egypt, local baladi shops with approximate pricing.

## 6. Brand & Naming Options

### Option A: FitMax (Working Name)
- **Pros:** Clear, international-sounding, domain likely available in .app/.io variants
- **Cons:** Generic, hard to trademark, doesn't signal Arabic/local

### Option B: Mudarrib (مدرّب)
- **Pros:** Arabic for "trainer/coach", authentic, memorable for Egyptian audience, strong brand identity
- **Cons:** Harder for international expansion, might limit to Arabic markets

### Option C: FitBase
- **Pros:** Signals data-driven approach, clean, short, modern
- **Cons:** Generic, might conflict with existing brands

### Option D: Tamreeni (تمريني)
- **Pros:** Arabic for "my training/my workout", personal feel, memorable, available as domain (.app/.io likely free), sounds modern in Arabic, easy to say
- **Cons:** Might sound client-facing rather than coach-facing

### Option E: Coachak (كوتشك)
- **Pros:** Slang Arabic for "your coach", very Egyptian feel, catchy, short, memorable, relatable to gym culture
- **Cons:** Might be too informal for clinics/nutrition centers, harder to internationalize

### Option F: Trainigy
- **Pros:** "Training" + "gy(m)" mashup, modern tech-startup feel, unique/trademarkable, works internationally, easy domain
- **Cons:** No Arabic signal, might feel generic

### Option G: SetRep
- **Pros:** Directly references workout culture (sets and reps), short, punchy, memorable, great for workout-logging brand
- **Cons:** Might sound too client-focused, doesn't signal the coach management side

### Option H: Motadarreb (متدرّب)
- **Pros:** Arabic for "trainee/athlete", signals the fitness domain, formal Arabic, professional
- **Cons:** Long, harder to type, might feel too formal

### Option I: Quwwa (قوّة)
- **Pros:** Arabic for "strength/power", strong brand signal, short, works as both Arabic and transliterated, emotional
- **Cons:** Very common word, might conflict with other brands

### Option J: PlanFit
- **Pros:** Signals "planning" (diet plans + workout plans), clean, international, easy domain, professional
- **Cons:** Similar to other "Fit" brands, forgettable

### Recommendation
Start with a working name for V0-V1 (easy to communicate, no attachment). Run a proper naming exercise with Dragon and early coaches before public V1 launch. Consider Arabic sub-brand for client-facing app.

**Top 3 picks for final shortlist:**
1. **Coachak** (كوتشك) — Most Egyptian, most memorable, coach-first signal
2. **Tamreeni** (تمريني) — Personal, warm, Arabic-native, easy to remember
3. **Trainigy** — Most international, unique, trademarkable, works if we expand beyond MENA

## 7. Business Model Summary

We are a **B2B2C SaaS** company:
- **B2B:** We sell subscriptions to coaches (our revenue)
- **B2C:** Coaches' clients use our client app (our growth engine)

Revenue comes from coaches. Growth comes from clients loving the app so much that coaches can't leave and new coaches hear about us through their peers.

### Flywheel

```
Better app for clients → Coaches retain more clients → Coach earns more
→ Coach tells other coaches → More coaches sign up → More clients use app
→ More data → Better features → Better app for clients (loop)
```

## 8. Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Coaches won't pay (used to free tools) | High | Critical | Generous free tier, prove ROI with data, Dragon social proof |
| Market too small (Egypt only) | Medium | High | Egypt is validation; expand to MENA (same language, similar culture) |
| Global competitor localizes for Egypt | Low | High | Move fast, own coach relationships, build switching costs |
| Team too small for scope | High | High | Strict version scoping, defer non-core, hire after V1 revenue |
| Regulatory risk (data privacy, payments) | Low | Medium | Comply from day 1, consult Egyptian data protection law |
| Apple App Store rejects or forces IAP | Medium | High | Web billing for coaches (standard B2B SaaS pattern) |
| Dragon's clients don't engage with alpha | Medium | High | Incentivize beta testers (free months with their coach), make onboarding frictionless |

## 9. Success Metrics by Phase

| Phase | Primary Metric | Target |
|-------|---------------|--------|
| V0 (M1-3) | Dragon's client activation rate | 80%+ of Dragon's clients actively log 3x/week |
| V1 (M4-6) | Coaches onboarded | 20 paying coaches |
| V1+ (M6-9) | Monthly Recurring Revenue | 10,000 EGP MRR |
| V2 (M9-12) | Coach retention (monthly) | >90% month-over-month |
| Year 1 end | Paying coaches | 100+ |
| Year 2 | MRR | 100,000+ EGP |

## 10. Long-Term Vision (3-5 Years)

1. **Year 1:** Own Egyptian online coaching market. 100+ paying coaches, product-market fit proven.
2. **Year 2:** Expand to Saudi Arabia, UAE, Kuwait (same Arabic, higher ARPU). Launch AI features. 500+ coaches.
3. **Year 3:** Template marketplace (coaches sell programs to other coaches). Payment processing for coach-client transactions (revenue share model unlocked). 2,000+ coaches.
4. **Year 4-5:** Become the "Shopify for fitness coaches" in MENA. Platform with plugins, integrations, coach certification tracking. Potential Series A or profitable and independent.
