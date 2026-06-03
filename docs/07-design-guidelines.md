# 08 - Design Guidelines

## 1. Design Philosophy

### Principles (In Order of Priority)

1. **Speed over beauty** — A coach checking client progress between sessions needs information in 2 taps, not 5. A client logging a set mid-workout needs <2 seconds per set entry. Fast always wins.

2. **Arabic-native, not Arabic-translated** — We don't build in English and translate. We design for Arabic reading patterns, Arabic text density, and Arabic cultural norms from the start.

3. **Coach trust** — The client app is an extension of the coach's brand. It should feel like "my coach built this for me", not "I'm using some random app my coach found."

4. **Offline-confident** — The app should never show spinners, loading states, or errors when the user is simply in a gym with bad signal. It should feel like everything is local.

5. **Data-dense but not cluttered** — Coaches manage 15-50 clients. They need glanceable data. Clients track progress over months. Both need information density without visual noise.

---

## 2. Arabic & RTL Strategy

### Layout Direction

The app supports RTL (Right-to-Left) for Arabic and LTR for English. The user's locale setting determines direction.

#### RTL Rules

| Element | RTL Behavior |
|---------|-------------|
| Text alignment | Right-aligned by default |
| Navigation (back button) | Appears on top-right, points right-to-left (→) |
| Lists and cards | Flow from right to left |
| Swipe gestures | Reversed (swipe left = forward, swipe right = back) |
| Progress bars | Fill from right to left |
| Numbers | Always LTR (Arabic numerals read left-to-right, even in RTL context) |
| Icons with direction (arrows, chevrons) | Mirrored |
| Icons without direction (heart, star, camera) | NOT mirrored |
| Tab bars | Right-to-left order |
| Modals / Bottom sheets | Same (direction doesn't apply to vertical stacking) |

#### Implementation with NativeWind / Tailwind

```
// Use Tailwind's RTL utilities
<View className="flex-row rtl:flex-row-reverse">
<Text className="text-left rtl:text-right">
<View className="ml-4 rtl:ml-0 rtl:mr-4">

// Or use logical properties (preferred)
<View className="ps-4">   // padding-start (left in LTR, right in RTL)
<View className="me-2">   // margin-end
```

#### Arabic Typography

| Property | Value | Notes |
|----------|-------|-------|
| Primary font (Arabic) | Cairo or Tajawal | Google Fonts, designed for Arabic digital screens |
| Primary font (English) | Inter or SF Pro | Clean, highly legible at small sizes |
| Body text size | 16px minimum | Arabic glyphs are denser; smaller sizes hurt readability |
| Line height | 1.6-1.8x | Arabic needs more vertical breathing room than English |
| Letter spacing | 0 (never add) | Arabic ligatures break with letter-spacing |
| Font weight (body) | 400-500 | Arabic 400 can look thin on some phones; test with 500 |
| Font weight (headings) | 700 | Bold titles in Arabic work well with Cairo font |

#### Bilingual Content (Exercise Names, Food Names)

Some content shows in both languages simultaneously:

```
┌─────────────────────────────────┐
│  بنش بريس                       │  ← Arabic name (primary, larger)
│  Bench Press                    │  ← English name (secondary, smaller, gray)
│  Chest · Barbell                │  ← Tags always in user's locale
└─────────────────────────────────┘
```

Why both: Coaches and clients know exercises by English names (from YouTube, social media), but reading flow and UI should be in Arabic. Showing both avoids confusion.

---

## 3. Design Tokens

### Color System

| Token | Light Mode | Dark Mode | Usage |
|-------|:----------:|:---------:|-------|
| `--color-primary` | #2563EB (blue-600) | #3B82F6 (blue-500) | Primary actions, active states, links |
| `--color-primary-light` | #DBEAFE (blue-100) | #1E3A5F | Primary backgrounds, hover states |
| `--color-secondary` | #10B981 (emerald-500) | #34D399 (emerald-400) | Success, completions, PRs |
| `--color-warning` | #F59E0B (amber-500) | #FBBF24 (amber-400) | Attention needed, approaching limits |
| `--color-danger` | #EF4444 (red-500) | #F87171 (red-400) | Errors, deletions, missed sessions |
| `--color-bg-primary` | #FFFFFF | #0F172A (slate-900) | Main background |
| `--color-bg-secondary` | #F8FAFC (slate-50) | #1E293B (slate-800) | Card backgrounds, sections |
| `--color-text-primary` | #0F172A (slate-900) | #F8FAFC (slate-50) | Main text |
| `--color-text-secondary` | #64748B (slate-500) | #94A3B8 (slate-400) | Secondary text, labels |
| `--color-border` | #E2E8F0 (slate-200) | #334155 (slate-700) | Borders, dividers |

#### Coach Branding Override (White-Label)

When a coach has a custom `brand_color`, it replaces `--color-primary` in the CLIENT app only:

```
--color-primary: coach.brand_color || #2563EB
--color-primary-light: lighten(coach.brand_color, 90%) || #DBEAFE
```

The coach app always uses our brand colors (not customizable).

### Typography Scale

| Token | Size | Weight | Usage |
|-------|:----:|:------:|-------|
| `--text-xs` | 12px | 400 | Timestamps, captions |
| `--text-sm` | 14px | 400 | Secondary labels, helper text |
| `--text-base` | 16px | 400 | Body text, list items |
| `--text-lg` | 18px | 500 | Section headers, card titles |
| `--text-xl` | 20px | 600 | Page sub-headings |
| `--text-2xl` | 24px | 700 | Page titles |
| `--text-3xl` | 30px | 700 | Hero numbers (weight, reps, stats) |
| `--text-4xl` | 36px | 800 | Dashboard big numbers |

### Spacing Scale

Using a 4px base unit:

| Token | Value | Usage |
|-------|:-----:|-------|
| `--space-1` | 4px | Tight gaps (between icon and label) |
| `--space-2` | 8px | Inside small elements (tag padding) |
| `--space-3` | 12px | Inside cards, between related items |
| `--space-4` | 16px | Standard padding, between sections |
| `--space-5` | 20px | Between cards in a list |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Between major sections |
| `--space-10` | 40px | Page top padding |
| `--space-12` | 48px | Large spacing (bottom of scrollable lists) |

### Border Radius

| Token | Value | Usage |
|-------|:-----:|-------|
| `--radius-sm` | 6px | Small elements (tags, badges) |
| `--radius-md` | 10px | Cards, inputs |
| `--radius-lg` | 16px | Modal corners, bottom sheets |
| `--radius-full` | 9999px | Avatars, pills, circular buttons |

### Shadows (Light Mode Only)

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift (cards) |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Floating elements (FAB) |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.10)` | Modals, bottom sheets |

In dark mode, shadows are removed. Use border instead for separation.

---

## 4. Component Library

### Core Components (packages/ui)

| Component | Variants | Notes |
|-----------|----------|-------|
| `Button` | primary, secondary, ghost, danger / sm, md, lg / loading state | RTL icon placement |
| `Input` | text, number, phone, password / with label / with error | Arabic placeholder text considerations |
| `Card` | elevated, flat, outlined | Standard container for lists |
| `Avatar` | sm (32px), md (48px), lg (64px) / with status indicator | Coach logo or user photo |
| `Badge` | success, warning, danger, neutral / with count | Notification count, status |
| `BottomSheet` | standard, scrollable, with handle | Primary modal pattern on mobile |
| `TabBar` | 2-5 tabs / with badges | RTL order |
| `ListItem` | with avatar, with chevron, with toggle, with badge | Most common pattern in app |
| `NumberInput` | for weight, reps, time / with increment buttons | Large tap targets for gym use |
| `ProgressBar` | linear, circular / with label | RTL fill direction |
| `EmptyState` | with icon, title, description, CTA | For empty lists, no-data states |
| `Toast` | success, error, info | Auto-dismiss, RTL text |
| `Skeleton` | text, avatar, card, list | Loading placeholders |

### Workout-Specific Components

| Component | Purpose | Key Features |
|-----------|---------|-------------|
| `SetRow` | Single set in workout logger | Quick number entry, RPE picker, swipe-to-complete |
| `ExerciseCard` | Exercise within a session | Expandable sets, video thumbnail, muscle tags |
| `RestTimer` | Count-down between sets | Large timer display, vibration, auto-start option |
| `WorkoutSummary` | Post-session recap | Sets completed, PRs, duration, mood rating |
| `MealCard` | Single meal in diet view | Food items list, macro summary, time hint |
| `ProgressChart` | Line/bar charts | Weight over time, volume over time, body measurements |
| `PhotoGrid` | Progress photos | Front/side/back columns, date-grouped |

---

## 5. Offline UX Patterns

### Design Principle: The App Never Feels Broken

Users should not know they're offline unless they specifically look for it. The app continues to function.

### Sync Status Indicator

Small, unobtrusive indicator in the navigation bar:

| State | Visual | Behavior |
|-------|--------|----------|
| Synced (online) | Green dot (barely visible) | All data is up to date |
| Syncing | Blue animated pulse | Data is being uploaded |
| Offline (queued) | Gray cloud icon with offline indicator | Data saved locally, will sync later |
| Sync error | Orange warning dot | Tap to see what failed, retry |

**Important:** NEVER show a full-screen "You're offline" message. The app works offline. A small indicator is enough.

### Optimistic UI

| Action | What User Sees | What Happens Behind |
|--------|---------------|-------------------|
| Log a set | Set appears immediately as "logged" | Queued in WatermelonDB, syncs when online |
| Upload photo | Photo appears in gallery immediately (local) | Upload queued, starts when on WiFi (or user forces) |
| Send message | Message appears in chat with clock icon | Queued, sent when online, clock → checkmark |
| Log measurement | Data point appears on graph immediately | Queued, syncs when online |

### Conflict Indicators (Rare)

If server data conflicts with local data after sync:

```
┌────────────────────────────────────────┐
│  ⚠️  Your coach updated your program   │
│  while you were offline.               │
│                                        │
│  [View Changes]    [Dismiss]           │
└────────────────────────────────────────┘
```

Coach's data always wins for plan assignments. Client's logged data always wins for their workout logs.

### Photo Upload Strategy

Progress photos are large files. UX for upload:

1. Photo taken → immediately visible in local gallery (no upload yet)
2. Badge shows: "3 photos waiting to upload"
3. When on WiFi (or user chooses): uploads begin with progress indicator
4. User can force upload over cellular data in settings
5. Coach sees photos only after upload completes (they get a notification)

---

## 6. Dark Mode

### Support Level

- **V0:** Light mode only (reduce design/dev complexity in alpha)
- **V1:** Dark mode support (many gym-goers prefer dark mode under harsh gym lighting)

### Dark Mode Principles

1. **Not just inverted** — dark backgrounds use slate-900 (#0F172A), not pure black
2. **Reduced contrast for large surfaces** — text at 87% opacity, not 100%
3. **Elevated elements are lighter** — cards are slate-800, modals are slate-700
4. **Colors shift slightly** — primary blue shifts lighter (600 → 500) for readability on dark
5. **No shadows in dark mode** — use subtle borders instead (slate-700)
6. **Photos and charts are always full color** — no dark mode filter on user content

### Dark Mode Detection

- Respect system setting by default
- Allow manual override in app settings (Light / Dark / System)
- Remember preference per user (stored locally + in user profile)

---

## 7. Accessibility

### Minimum Standards

| Criterion | Target | Implementation |
|-----------|--------|---------------|
| Color contrast (text) | WCAG AA (4.5:1 minimum) | Verified with Figma plugin |
| Touch targets | 44x44px minimum | All tappable elements |
| Screen reader support | VoiceOver (iOS) + TalkBack (Android) | Semantic labels on all interactive elements |
| Text scaling | Support up to 200% system text size | Use relative units, test at large sizes |
| Motion sensitivity | Reduce motion option | Respect system "reduce motion" setting |
| Color-blind safe | Don't rely on color alone | Use icons + text alongside color indicators |

### Gym-Specific Accessibility

| Consideration | Solution |
|--------------|----------|
| Sweaty fingers | Large tap targets, no precision gestures required |
| Gloves on | Number input with large +/- buttons (not just keyboard) |
| Glare (gym mirrors, sunlight) | High contrast mode option, dark mode |
| One-handed use (other hand on barbell) | Critical actions reachable with thumb (bottom navigation, bottom sheets) |
| Loud music (can't hear notifications) | Vibration patterns for rest timer, visual indicators |
| Quick glance (between sets) | Large numbers, minimal text for set logging |

### Set Logging Ergonomics (Critical UX)

The most frequent interaction in the app. Must be optimized for speed:

```
┌─────────────────────────────────────┐
│  Set 3 / 4                          │
│                                      │
│  ┌─────────┐  ┌─────────┐          │
│  │  12     │  │  80     │   kg     │
│  │  reps   │  │  weight │          │
│  │  [-][+] │  │  [-][+] │          │
│  └─────────┘  └─────────┘          │
│                                      │
│  RPE: ○○○○○●○○○○  (6/10)           │
│                                      │
│  [ ✓ Complete Set ]                  │
│                                      │
└─────────────────────────────────────┘
```

Key decisions:
- Pre-filled with last session's values (user just taps +/- if different)
- Large +/- buttons (no need to open keyboard)
- Single tap to complete set → auto-starts rest timer
- Swipe-right on set row as alternative "complete" gesture

---

## 8. Navigation Architecture

### Coach App

```
Tab 1: Clients (Home)
  → Client list (with activity indicators)
  → Client detail → Assigned plans, messages, measurements

Tab 2: Programs
  → Workout templates list
  → Diet templates list
  → Create/Edit template

Tab 3: Dashboard (V1+)
  → Adherence overview
  → Active/Inactive clients
  → Weekly stats

Tab 4: Settings
  → Profile
  → Subscription & Billing
  → Branding (Pro+)
  → Notifications
  → Support
```

### Client App

```
Tab 1: Today (Home)
  → Today's workout (interactive logger)
  → Today's meals (diet view)

Tab 2: Progress
  → Body measurements (log + chart)
  → Progress photos (timeline)
  → Workout history (past sessions)

Tab 3: Chat (V1+)
  → Messages with coach

Tab 4: Profile
  → Personal info
  → Goals
  → Achievements/Streaks (V3)
  → Settings
```

### Navigation Patterns

| Pattern | Usage |
|---------|-------|
| Bottom tab bar | Primary navigation (4 tabs) |
| Stack navigation | Drill-down within each tab |
| Bottom sheet | Quick actions, confirmations, pickers |
| Modal (full screen) | Workout logging session (immersive) |
| Swipe back | Return to previous screen (RTL: swipe right-to-left) |

---

## 9. Animation & Motion

### Principles

1. **Purposeful** — animations communicate state changes, not decoration
2. **Fast** — 200-300ms max for transitions, 150ms for micro-interactions
3. **Respect system settings** — disable animations if "reduce motion" is on
4. **Performance** — use native driver (Reanimated) not JS-driven animations

### Key Animations

| Interaction | Animation | Duration | Library |
|-------------|-----------|:--------:|---------|
| Set completed | Row slides right + checkmark appears | 200ms | Reanimated |
| Rest timer expires | Pulse + vibration | 500ms | Reanimated + Haptics |
| PR achieved | Confetti burst + golden glow on set | 600ms | Lottie |
| Streak milestone | Badge drop-in + celebration | 800ms | Lottie |
| Page transitions | Shared element (slide in from right/left based on RTL) | 250ms | React Navigation |
| Pull to refresh | Custom animation (weights lifting) | Variable | Reanimated |
| Skeleton loading | Shimmer effect | Loop | Reanimated |
| Bottom sheet open | Spring physics (snap points) | 300ms | Gorhom Bottom Sheet |

---

## 10. Design System Maintenance

### Design-Dev Handoff Process

1. Designer creates component in Figma with all variants and states
2. Designer adds to Figma component library with documentation
3. Designer publishes + notifies Mobile Engineer
4. Mobile Engineer implements in `packages/ui` with same prop interface
5. Engineer links Figma component to code component in Storybook (or documented mapping)
6. Both sign off: design matches implementation on real device

### Component Checklist (Before Shipping)

- [ ] Light mode appearance verified
- [ ] Dark mode appearance verified (V1+)
- [ ] RTL layout correct
- [ ] LTR layout correct (English mode)
- [ ] Touch target ≥ 44x44px
- [ ] Works at 200% text size
- [ ] Accessible labels added
- [ ] Loading/skeleton state defined
- [ ] Error state defined
- [ ] Empty state defined
- [ ] Tested on Android (lower-end device)
- [ ] Tested on iOS

### Design Review Cadence

- **Weekly:** Designer reviews all merged PRs with visual changes (screenshot in PR description required)
- **Sprint:** Full design review of new features before demo to Dragon
- **Monthly:** Design system audit — are components consistent? Any debt to pay down?
