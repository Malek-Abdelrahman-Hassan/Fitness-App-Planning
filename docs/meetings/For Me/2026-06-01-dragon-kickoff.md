# Dragon Kickoff Meeting - Requirements Discovery

**Date:** June 1, 2026  
**Duration:** 90 minutes (don't exceed — respect his time, leave him wanting more)  
**Attendees:** Team + Dragon  
**Goal:** Understand Dragon's daily workflow deeply enough to build V0 that he can't live without.

---

## Pre-Meeting Prep (Do Before the Call)

- [ ] Download and test Hevy + Strong apps (have them open for reference)
- [ ] Have Notion open to take notes (assign one person as dedicated note-taker)
- [ ] Record the meeting (ask permission at start) — you'll re-watch this 5+ times
- [ ] Prepare a shared screen with this agenda so Dragon can see the structure

---

## Agenda

### Part 1: Dragon's Business (20 min)

**Goal:** Understand his coaching business as it operates TODAY, not how he wishes it worked.

#### Questions:

1. **"Walk us through a typical day as a coach — from morning to night. What do you do for your clients?"**
   - Listen for: when he programs, when he communicates, when he checks in

2. **"How many clients do you have right now? How many are online vs in-person?"**
   - Follow-up: What's the maximum you've managed at once? What broke at that scale?

3. **"How much do you charge per client? Monthly? Package? What's the range?"**
   - Follow-up: How do clients pay you? (Cash, Vodafone Cash, InstaPay, bank transfer?)

4. **"How do new clients find you? What does onboarding a new client look like today?"**
   - Listen for: Instagram DMs? Referrals? What info does he collect from them on day 1?

5. **"What's the #1 thing that takes too much of your time right now?"**
   - This reveals the pain we solve first.

6. **"Have you ever lost a client because of poor communication or they felt neglected? What happened?"**
   - This reveals the retention problem we solve.

---

### Part 2: Current Tools & Workflow (20 min)

**Goal:** Map every tool he uses and understand exactly HOW he uses it (not just what).

#### Questions:

7. **"Show me on your phone right now — how do you send a workout program to a client?"**
   - Ask him to literally do it live. Screenshot his process. Watch where he struggles.

8. **"Show me how you send a diet plan. What format? PDF? Photos? Text message?"**
   - Follow-up: Do clients ever say they can't find their diet? Or confuse old/new plans?

9. **"How do you know if a client actually did their workout this week?"**
   - Listen for: does he ask? Do they send videos? Do they just... not tell him?

10. **"How do you track a client's body changes over time? Weight, measurements, photos?"**
    - Follow-up: Do you have a system, or does it get messy after a few months?

11. **"What apps have you tried before for coaching? Why did you stop using them?"**
    - CRITICAL question. Listen for what failed. This tells us what NOT to build.

12. **"If I looked at your WhatsApp right now, how many groups are coaching-related? How do you organize them?"**
    - This reveals communication chaos we can solve.

---

### Part 3: Training & Diet Deep-Dive (25 min)

**Goal:** Understand the data model — what information Dragon actually works with.

#### Training Questions:

13. **"When you write a program for a client, what information do you include for each exercise?"**
    - Probe for: exercise name, sets, reps, weight, rest time, RPE, tempo, notes, video reference?

14. **"Do all your clients get the same program, or does each one get a custom plan? How do you decide?"**
    - Listen for: templates he reuses, modifications per client, how often he changes programs

15. **"How long does a program last before you change it? What triggers a change?"**
    - Follow-up: Do you deload? Periodize? Or just feel it out?

16. **"When a client is in the gym doing your workout, what do you WISH you could see in real-time?"**
    - This is the golden question for the client app design.

17. **"If a client says 'the weight was too easy' or 'I couldn't finish the reps' — how do you adjust?"**
    - Reveals progression logic we can eventually automate with AI.

18. **"Do you prescribe specific weights, or ranges? How does a client know what weight to use?"**
    - Example: "4 sets x 12 reps at 80kg" vs "4 sets x 8-12 reps, pick a weight that's hard by rep 10"

#### Diet Questions:

19. **"Walk me through how you build a diet for a new client. What info do you need from them?"**
    - Probe for: weight, goal, activity level, food preferences, allergies, budget, cooking ability

20. **"Do you give exact meals, or macros/calories to hit? Or both?"**
    - This determines our diet view design (meal-based vs macro-tracking vs both)

21. **"What Egyptian foods do you prescribe most often? Can you list your top 10-15?"**
    - Start building our food database from this answer.

22. **"Do clients ever need to swap a meal? How do you handle that today?"**
    - Reveals whether we need meal-swap in V0 or if read-only is truly fine to start.

23. **"How do you handle Ramadan? Do programs change? Meal timing? Training intensity?"**
    - Validates our Ramadan-mode feature concept.

---

### Part 4: Client Behavior & Pain (15 min)

**Goal:** Understand Dragon's clients — what motivates them, what makes them quit.

#### Questions:

24. **"What's your client retention like? Average months a client stays? Why do they leave?"**
    - If he doesn't know, that's a pain point we solve (analytics).

25. **"What do your most successful clients do differently from ones who quit?"**
    - This tells us what behaviors to encourage/gamify.

26. **"Do your clients ever compete or motivate each other? Is there a group dynamic?"**
    - Validates community/leaderboard features for V3.

27. **"If your client could only do ONE thing in the app — what should that be?"**
    - Forces prioritization. His answer = our V0 core.

28. **"What would make you, as a coach, check an app EVERY day? What data would you need to see?"**
    - This designs the coach home screen.

---

### Part 5: Partnership & Logistics (10 min)

**Goal:** Align on what we need from Dragon and what he gets in return.

#### Questions / Discuss:

29. **"We want to build this app WITH you, not just FOR you. Here's what we'd need from you weekly:"**
    - 1 hour feedback session (Friday)
    - Approve/reject UI designs within 48 hours
    - Provide 5-10 real clients who will test the alpha
    - Supply exercise content (names in Arabic + English, muscle groups)
    - Supply Egyptian food items with macros

30. **"What would make this partnership worth your time? What do you want from us?"**
    - Listen carefully. Is it equity? Money? A free tool? Recognition? All of the above?

31. **"Can we start with 5 of your most engaged clients for alpha testing in ~4 weeks?"**
    - Get a verbal yes. Ask which clients would be best (motivated, tech-savvy, won't churn mid-test).

32. **"Are you comfortable being our public case study? Before/after client photos, testimonials, content together?"**
    - Essential for marketing. Get consent early.

---

## During the Meeting: What to Observe

| Watch For | Why |
|-----------|-----|
| What's on his phone home screen (fitness apps?) | Shows what he actually uses daily |
| How fast he navigates WhatsApp groups | Reveals his actual workflow speed (we must beat it) |
| His body language when describing pain points | Shows emotional intensity — strongest pain = build first |
| Does he use Arabic or English for exercise names? | Informs our bilingual strategy |
| How technical is he? (comfortable with apps?) | Sets our UX complexity bar |
| Does he mention other coaches he knows? | Future customers — ask for intros later |

---

## After the Meeting: Immediate Actions

| Action | Owner | Deadline |
|--------|-------|----------|
| Transcribe key quotes from Dragon | Note-taker | Same day |
| List top 5 pains in priority order (based on meeting) | PM | Same day |
| List the exercises Dragon mentioned | PM | Same day |
| List the Egyptian foods Dragon mentioned (with macros if he gave them) | PM | Same day |
| Send Dragon a thank-you message + summary of what we agreed | PM | Same day |
| Update V0 feature scope if anything changed | PM | Next day |
| Start wireframes based on Dragon's actual workflow | Designer | Within 3 days |
| Create "Dragon's ideal day" user story in Linear | PM | Next day |

---

## Key Reminders During the Meeting

- **Listen more than you talk.** Ratio should be 70% Dragon, 30% you.
- **Ask "show me" not "tell me."** Get him to demonstrate on his phone whenever possible.
- **Don't pitch features.** Don't say "we're going to build X." Ask "would X help?" — and listen to the answer.
- **Follow The Mom Test rules:** Don't ask "would you use this?" (everyone says yes). Ask "how do you do this today?" and "what happened last time?"
- **It's OK to go off-script.** If Dragon starts talking passionately about something, follow that thread. The best insights come from tangents.
- **End with clarity.** Before hanging up, repeat back: "So the #1 thing you need is ___, and you'll give us ___ clients to test with. We'll have something to show you by [date]. Does that sound right?"

---

## Red Flags to Watch For

If Dragon says any of these, dig deeper — it might change our plan:

| Red Flag | What It Means |
|----------|--------------|
| "I don't think my clients would use an app" | Client adoption risk — need to understand why |
| "I just use Instagram stories for programs" | His workflow might be simpler than we assumed |
| "I already tried [competitor X] and it was fine" | We need to understand why he left AND what was fine |
| "I only have 3-5 clients right now" | Alpha pool might be too small — discuss how to grow |
| "I'm not sure I can commit weekly" | Partnership risk — discuss minimum viable involvement |
| "My clients change coaches often" | Market might be more transactional than we think |

---

## Dream Outcome of This Meeting

After 90 minutes, you should be able to answer:

1. What does Dragon's Monday-to-Friday ACTUALLY look like?
2. What are his top 3 pains (ranked by how much time/money they cost him)?
3. What data does a workout program contain in his world?
4. What data does a diet plan contain in his world?
5. How do his clients communicate with him and report progress?
6. Which 5 clients will be our alpha testers?
7. Is Dragon truly committed to this partnership?
8. What does Dragon want in return (compensation model)?

If you leave the meeting unable to answer any of these — you didn't dig deep enough. Schedule a follow-up within 3 days.
