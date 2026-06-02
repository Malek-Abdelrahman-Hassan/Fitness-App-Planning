# 06 - Coach Success Playbook

## 1. Why Coaches Will Switch

### The Pain They Feel Today

| Pain Point | Severity | Our Solution |
|-----------|:--------:|-------------|
| "I send diet PDFs on WhatsApp and clients lose them" | High | Persistent diet view in client app, always accessible |
| "I don't know if my clients are actually training" | Critical | Real-time workout logs visible to coach, adherence dashboard |
| "I spend hours copying Excel programs for each client" | High | Template system: build once, assign to many, customize per client |
| "Clients ghost me after 2-3 months" | Critical | Engagement data alerts: "Client X hasn't logged in 5 days" |
| "I look unprofessional compared to big gyms" | Medium | Branded client experience (logo, colors) makes solo coaches look premium |
| "I can't track client body changes over time" | High | Measurements + progress photos with timeline view |
| "I manage everything from my phone, no desk" | High | Mobile-first design — coach does everything from phone |

### The Switch Moment

A coach switches when the **cost of not switching** exceeds the **effort of switching**. Our job is to:
1. Lower the effort (guided onboarding, import existing clients)
2. Raise the perceived cost of staying manual (show data they're missing, show clients they're losing)

### What We're Replacing

| We Replace | With |
|-----------|------|
| WhatsApp groups for client communication | In-app chat (organized, searchable, no personal phone mixed in) |
| Excel workout programs | Visual template builder on phone |
| PDF diet plans | Live diet view that client opens daily |
| Google Drive progress photos | In-app photo timeline (front/side/back, date-tagged) |
| "How was your session?" WhatsApp message | Automatic workout data the coach can see |
| Manual weight tracking in Notes app | Body measurements log with progress graphs |
| Guessing which clients are engaged | Adherence dashboard with risk indicators |

---

## 2. Onboarding Flow (New Coach Sign-Up to First Client Active)

### Target: Sign-up to first client active in <24 hours

#### Step 1: Registration (2 minutes)

```
Coach opens app → Phone OTP → Basic profile:
  - Display name
  - Profile photo
  - Specializations (checkboxes: weight loss, muscle building, nutrition, online coaching, in-person)
  - How many clients do you currently manage? (helps us tier-suggest)
```

#### Step 2: Guided Tour (3 minutes)

Interactive walkthrough (not a video — they tap through actual screens):
1. "This is where your clients appear" (empty state with sample data preview)
2. "Build a workout in 5 minutes" (tap to see template builder)
3. "Your client sees this" (preview of client app with sample workout)
4. "Add your first client now" (CTA)

#### Step 3: Add First Client (1 minute)

```
Coach taps "Add Client" →
  - Enter client name + phone number
  - App generates invite link (shareable via WhatsApp, SMS, or copy)
  - Coach sends link to client
  - Coach sees "Waiting for [name] to join..."
```

#### Step 4: Build First Program (5-10 minutes)

Prompted immediately after adding client:
```
"Build [Client Name]'s first workout program"
→ Choose from:
  A) Start from scratch
  B) Use Dragon's template library (pre-loaded "Beginner PPL", "Fat Loss 4-Day", etc.)
  C) Import from notes (future: paste text, AI structures it)
```

#### Step 5: Assign & Notify (30 seconds)

```
Coach taps "Assign to [Client Name]" →
Client gets push notification: "[Coach] assigned you a new program!"
Coach sees confirmation: "Done! [Client] will see their plan when they open the app."
```

#### Step 6: First Session Logged (within 24-48h)

```
Client opens app → Sees today's workout → Logs first set
Coach gets notification: "[Client] just logged their first workout!"
→ Coach app shows celebration screen: "Your client is active. You're all set."
```

### Onboarding Success Metric

- **Activation:** Coach has 1+ client who has logged 1+ workout within 7 days of coach signup
- **Target:** >80% of coaches who complete registration reach activation

---

## 3. High-Touch Onboarding (V1 Launch - First 50 Coaches)

For the first 50 coaches, we do manual onboarding to learn:

### The 30-Minute Zoom Call

**Booking:** After coach signs up + adds first client, we send WhatsApp message within 2h:
> "Hey [Coach]! I'm [Name] from CoachFit. Congrats on signing up. Want a quick 30-min call to get you fully set up? I'll help you import your existing clients and build your first program. Pick a time: [Calendly link]"

**Call agenda:**
1. (5 min) Learn about their coaching business: how many clients, online/in-person, what tools they use today
2. (10 min) Help them add their existing clients (batch add if needed)
3. (10 min) Build a real program together on the call (screenshare)
4. (5 min) Answer questions, show them the dashboard, explain tiers

**After the call:**
- Send follow-up WhatsApp with quick-reference guide (PDF or Notion link)
- Add them to our "coaches" WhatsApp group for peer support
- Check in after 3 days: "How's it going? Any clients you need help getting set up?"

### Import Assistance

Many coaches have client lists in Excel/Google Sheets. We help them:
1. Coach exports their client list (name + phone)
2. We provide a CSV template they fill in
3. Bulk import tool (V1 feature) adds all clients and sends invite links
4. If no tool yet (V0): PM manually imports for first 5-10 coaches

---

## 4. White-Label Lite (V3 Feature — Pro/Elite Tiers)

### What It Is

Coaches can customize how the client app looks to their clients:

| Customization | Free/Lite/Starter | Pro | Elite |
|--------------|:-----------------:|:---:|:-----:|
| CoachFit branding shown | Yes | No | No |
| Custom logo in header | No | No | Yes |
| Custom accent color | No | Yes | Yes |
| Custom welcome message | No | Yes | Yes |
| Coach name in app header | Yes | Yes | Yes |
| Custom app icon | No | No | Future (Year 2) |

### How It Works (Technically)

- Coach uploads logo (PNG/SVG, <500KB) in settings
- Coach picks accent color (color picker or hex code)
- Client app reads `coach.logo_url` and `coach.brand_color` from API
- Dynamic theming: accent color applied to buttons, headers, progress bars
- Logo shown in the client app's home screen header (replaces CoachFit logo for Elite)

### Why It Matters

- Coaches feel ownership over the client experience
- Clients perceive a more premium, personalized service
- Creates switching cost: "I built my brand identity in this app"
- Differentiator vs competitors who require expensive full white-label

---

## 5. Referral Program

### Coach-Refers-Coach (V3)

| Element | Details |
|---------|---------|
| **Trigger** | Coach shares unique referral link/code |
| **Reward (referrer)** | 1 month free on current tier + 50 EGP credit |
| **Reward (referred)** | First month 50% off any paid tier |
| **Tracking** | Unique code per coach, tracked in `referrals` table |
| **Cap** | Max 6 free months per year from referrals (prevents gaming) |
| **Display** | "Refer a Coach" button in coach app settings, shareable card |

### Client-Refers-Client (V3)

| Element | Details |
|---------|---------|
| **Trigger** | Client shares their coach's profile link |
| **Reward (client)** | Badge: "Ambassador" + featured on leaderboard |
| **Reward (coach)** | Gets notified: "[Client] referred someone to you!" |
| **How it works** | Client shares coach profile → New person signs up → Connects with same coach |
| **Purpose** | Helps coaches grow their client base via existing clients |

### Dragon as Referral Engine

Dragon's special role in the referral program:
- Dragon gets a permanent "founding coach" badge
- Dragon's testimonial featured on our landing page + App Store
- Every coach Dragon refers → Dragon gets 1 month Elite free (no cap during Year 1)
- Dragon creates content with us (before/after client transformations using the app)

---

## 6. Coach Retention Strategy

### Why Coaches Churn

| Reason | Indicator | Prevention |
|--------|-----------|-----------|
| "My clients aren't using it" | Low client activation rate | Onboarding assistance, remind coach to nudge clients |
| "It's too expensive for what I get" | Downgrade requests | Show ROI data, offer usage-based pricing alternative |
| "I don't have time to learn new tools" | Low login frequency | Simplify UX, provide templates, offer 1:1 help |
| "Missing feature I need" | Feature requests in support | Acknowledge, roadmap visibility, priority for Pro+ |
| "I found something better" | Competitor mention | Win-back offer, understand their need, improve |

### Automated Retention Signals

The system automatically monitors and alerts our team:

| Signal | Trigger | Action |
|--------|---------|--------|
| Coach inactive 7 days | No login for 7 days | Auto WhatsApp: "Hey [Coach], your clients missed you! [Client] logged 3 sessions this week." |
| Client activation low | Coach has clients, <30% logged a session this month | Email: "Tips to get your clients active" + offer 1:1 call |
| Approaching tier limit | Coach at 80% of client limit | In-app banner: "You're growing! Upgrade to [next tier] for more clients" |
| Subscription past due | Payment failed | 3-day grace period, WhatsApp reminder, auto-downgrade to free after 7 days |
| Coach NPS <6 | From periodic NPS survey | PM personally reaches out within 24h |

### Weekly Coach Digest (Auto-Generated)

Every Monday morning, each coach receives a push notification + in-app summary:

```
📊 Your Week in Review (Jun 25 - Jul 1)

Active Clients: 12/15 (80%)
Workouts Logged: 47 sessions
New PRs Hit: 8 🎉
Measurements Updated: 5 clients

⚠️ Needs Attention:
- Ahmed hasn't logged in 5 days
- Sara's weight trend is stalling (no change in 3 weeks)

💡 Quick Action:
- Send Ahmed a check-in message
- Review Sara's program (suggest progression?)
```

This digest gives coaches a reason to open the app every Monday, even if they don't need to build a new program.

---

## 7. Content Marketing Plan

### Strategy: Make Dragon (and future coaches) the Hero

We don't market CoachFit directly to coaches. We market **coach success stories** and let the tool be the enabler.

### Content Calendar (Post-V1 Launch)

| Day | Content Type | Platform | Example |
|-----|-------------|----------|---------|
| Sunday | Client transformation (before/after) | Instagram + Facebook | "Ahmed lost 12kg in 3 months with Coach Dragon's program" |
| Tuesday | Coach tip / educational | Instagram Reels + TikTok | "How to structure a push-pull-legs split for beginners" by Dragon |
| Thursday | Product showcase (subtle) | Instagram Stories | "A day in Dragon's coaching life" showing the app in use |
| Saturday | Community / social proof | All platforms | Repost coach or client stories, celebrate milestones |

### Content Pillars

1. **Client Transformations** — Before/after photos, story of the journey. CoachFit mentioned as the tool that made it possible. (Dragon provides these from his real clients.)

2. **Coach Education** — Training tips, nutrition science, business advice for coaches. Positions CoachFit as the brand that helps coaches grow. (Dragon + guest coaches create this.)

3. **Behind the Scenes** — How we build the product, what's coming next, coach feedback sessions. Builds authenticity and community. (Team creates this.)

4. **Social Proof** — Testimonials, case studies, "X coaches now use CoachFit", milestone celebrations. (Automated from data + coach submissions.)

### Dragon as Content Partner

| Content Piece | Frequency | Ownership |
|--------------|-----------|-----------|
| Instagram Reel (training tip) | 2x/month | Dragon creates, we edit + brand |
| Client transformation post | 1x/month | Dragon provides content, we design |
| "How I use CoachFit" story | 1x/month | Dragon records on his phone |
| Live Q&A with Dragon | 1x/quarter | Joint Instagram Live |
| App Store testimonial quote | Once | Dragon provides written quote |

---

## 8. Support SLA

### Channels

| Channel | Availability | Response Time Target |
|---------|:------------:|:-------------------:|
| WhatsApp Business | Sat-Thu, 10am-8pm (Egypt time) | <2 hours |
| In-app help chat (V2+) | Same hours | <4 hours |
| Email (support@coachfit.app) | 24/7 (async) | <24 hours |
| Emergency (app down) | 24/7 | <30 minutes |

### Tier-Based Support

| Issue Type | Free Tier | Lite/Starter | Pro/Elite |
|-----------|:---------:|:------------:|:---------:|
| Billing questions | Self-serve FAQ | WhatsApp | WhatsApp + call |
| Bug report | In-app form | WhatsApp | WhatsApp + priority fix |
| Feature request | In-app form | WhatsApp | WhatsApp + PM review |
| Onboarding help | Self-serve guides | WhatsApp | 1:1 Zoom call |
| Account issues | Email | WhatsApp | WhatsApp + immediate |
| Custom program help | N/A | N/A | 1:1 guidance from team |

### Support Automation (V2+)

- Auto-responses for common questions (FAQ bot in WhatsApp Business)
- In-app tooltips and contextual help
- Video tutorials library (Loom recordings)
- "Community answers" — coaches help each other in the coach group

### Escalation Path

```
Level 1: WhatsApp auto-response (FAQ match)
    ↓ (not resolved in 15 min)
Level 2: Designer-Marketer handles (general queries, how-to)
    ↓ (technical issue)
Level 3: Backend Eng (bug investigation)
    ↓ (product decision needed)
Level 4: PM (feature request, pricing, account)
```

---

## 9. Coach Lifecycle Stages

| Stage | Definition | Our Goal | Key Actions |
|-------|-----------|----------|-------------|
| **Aware** | Coach hears about us (social, referral, ad) | Get them to try | Landing page, social proof, Dragon content |
| **Exploring** | Coach signs up free, looks around | Get to activation (1 client active) | Guided onboarding, templates, 1:1 call |
| **Activated** | Coach has 1+ client logging workouts | Get to paid (upgrade) | Show value of Pro features, tier limit nudge |
| **Paying** | Coach on paid tier, actively using | Retain and grow | Weekly digest, analytics, new features |
| **Champion** | Coach loves us, tells others | Amplify their voice | Referral rewards, content partnership, advisory role |
| **At Risk** | Engagement dropping, skipped payment | Win back | Personal outreach, discount offer, feedback session |
| **Churned** | Cancelled or inactive 30+ days | Win back (if possible) | Exit survey, 60-day "we miss you" offer, learn from feedback |

---

## 10. Template Library Strategy

### Dragon's "Gold Standard" Templates

Dragon creates a set of premium workout + diet templates that are:
- Available to ALL coaches as starting points (free and paid tiers)
- Labeled "By Coach Dragon" (builds his brand + our credibility)
- Cover the most common coach scenarios:

| Template | Type | Target Client |
|----------|------|---------------|
| Beginner Full Body (3 days) | Workout | New gym-goers |
| Push-Pull-Legs (6 days) | Workout | Intermediate |
| Upper-Lower Split (4 days) | Workout | Intermediate |
| Fat Loss Program (5 days) | Workout | Weight loss clients |
| Home Workout (No Equipment) | Workout | Budget/remote clients |
| Egyptian Bulk Diet (3500 cal) | Diet | Muscle gain, Egyptian foods |
| Egyptian Cut Diet (1800 cal) | Diet | Fat loss, Egyptian foods |
| Ramadan Training + Nutrition | Both | Fasting-adjusted program |
| Post-Pregnancy Return | Workout | Female clients returning to exercise |

### Template Marketplace (Year 2)

- Coaches upload templates, set price (50-200 EGP)
- Other coaches buy and customize for their clients
- We take 15% commission
- Top creators earn passive income, stay on platform (retention moat)

---

## 11. Measuring Coach Success

### North Star Metric: Coach Client Retention Rate

"What % of a coach's clients are still active (logged a session) 3 months after joining?"

If this number is high, the coach is successful, their clients are happy, and they'll stay on our platform.

### Dashboard Metrics (Visible to Coach)

| Metric | What It Shows |
|--------|-------------|
| Active clients (this week) | How many clients logged at least 1 session |
| Adherence rate | % of assigned workouts actually completed |
| Average session duration | Are clients doing full sessions or rushing? |
| PR count (this month) | Clients getting stronger = coach doing good work |
| Client weight trends | Visual graph per client |
| Client retention (90-day) | How many clients are still active after 3 months |
| Response time | How fast the coach replies to client messages |
| Template usage | Which programs are most assigned/completed |

### Internal Metrics (Our Team)

| Metric | What It Tells Us |
|--------|----------------|
| Coach activation rate | % of signups who reach 1 active client |
| Time to activation | How many days from signup to first client session |
| Coach MRR cohort retention | % of M1 paying coaches still paying in M3, M6, M12 |
| Feature adoption by tier | Which features drive upgrades |
| Support ticket volume | Are we scaling support needs? |
| NPS by tier | Which tiers are happiest? |
