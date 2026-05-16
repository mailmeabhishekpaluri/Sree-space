# About Bio Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace third-person bio paragraphs in `src/pages/about.astro` with first-person Draft B prose — no structural/layout changes.

**Architecture:** Two targeted text-only edits inside existing `<div class="bio-text">` blocks. Pull-quote, HTML structure, CSS, and all other sections are untouched.

**Tech Stack:** Astro 4, static HTML — no framework logic involved.

---

### Task 1: Replace first bio-text block (paras 1–2)

**Files:**
- Modify: `src/pages/about.astro` — first `<div class="bio-text">` inside the 12-col grid

- [ ] **Step 1: Locate the target block**

In `src/pages/about.astro`, find the first `<div class="bio-text">` (inside `md:col-span-7`, before the pull-quote row). It currently reads:

```html
<div class="bio-text">
  <p>
    Likhitha came to yoga in 2015 the way most people do — not because she had
    it figured out, but because she didn't. There was a restlessness she couldn't
    quite name, a sense of being slightly out of sync with her own life. The
    practice didn't fix that overnight. But it kept showing her something worth
    paying attention to.
  </p>
  <p class="mt-6">
    Over the years that followed, the practice broadened. Breathwork, kriyas,
    meditation — not as goals, but as ways of noticing. When she encountered
    Access Consciousness, and specifically Access Bars and Body Process, something
    else unlocked: the understanding that awareness itself could be the practice,
    not just the outcome. That the body holds information the mind hasn't
    caught up with yet.
  </p>
</div>
```

- [ ] **Step 2: Replace with Draft B paras 1–2**

```html
<div class="bio-text">
  <p>
    The body was always ahead of me. Whatever I thought I was working on in a
    session, my body had already been working on something else.
  </p>
  <p class="mt-6">
    I came to yoga in 2015 with the usual reasons: flexibility, stress, something
    to do. What I found, slowly, was that it was teaching me to listen rather than
    push. That distinction took years to understand. Breathwork and kriyas made it
    sharper. Access Bars, which I came across a few years in, made it stranger and
    more interesting — thirty-two points on the head, gently held, and somehow the
    noise quietens. I came back. I trained. Body Process followed: more specific,
    more surprising.
  </p>
</div>
```

- [ ] **Step 3: Verify build still passes**

```bash
npm run build 2>&1 | tail -5
```
Expected: `[build] Complete!`

---

### Task 2: Replace second bio-text block (paras 3–4)

**Files:**
- Modify: `src/pages/about.astro` — `<div class="bio-text">` inside the separate grid row below the pull-quote

- [ ] **Step 1: Locate the target block**

Find the second `<div class="bio-text">` (inside the separate `grid grid-cols-1 md:grid-cols-12 gap-x-14 mt-10` row). It currently reads:

```html
<div class="bio-text">
  <p>
    She started teaching in 2022 — not because she'd arrived somewhere, but because
    she'd found something genuinely useful and wanted to share it without the
    performance. Sessions don't follow a script. They follow whoever's in the room.
  </p>
  <p class="mt-6">
    She'll tell you she's still figuring it out. That the practice keeps surprising
    her. That she learns alongside everyone she works with. That's not a disclaimer —
    it's the whole point.
  </p>
</div>
```

- [ ] **Step 2: Replace with Draft B paras 3–5**

```html
<div class="bio-text">
  <p>
    By 2022, people started coming to me with their own questions. I began teaching
    not because I'd become an expert, but because I'd been genuinely curious about
    this long enough that sharing it honestly felt right.
  </p>
  <p class="mt-6">
    What I offer now crosses categories: yoga in several styles, kundalini practices,
    breathwork, hands-on sessions, conversations that do the work of energy work.
    I don't separate them cleanly. The body doesn't, so I don't either.
  </p>
  <p class="mt-6">
    I'm still in practice. Still encountering sessions that show me something I
    didn't expect. I think that's the right state to be in — curious, not certain.
  </p>
</div>
```

- [ ] **Step 3: Verify build and grep**

```bash
npm run build 2>&1 | tail -5
```
Expected: `[build] Complete!`

```bash
grep "The body was always ahead" dist/about/index.html | wc -l
```
Expected: `1`

```bash
grep "Likhitha came to yoga" dist/about/index.html | wc -l
```
Expected: `0`

```bash
grep "She started teaching" dist/about/index.html | wc -l
```
Expected: `0`

- [ ] **Step 4: Commit and push**

```bash
git add src/pages/about.astro
git commit -m "Rewrite About bio to first-person Draft B voice"
git push origin main
```
