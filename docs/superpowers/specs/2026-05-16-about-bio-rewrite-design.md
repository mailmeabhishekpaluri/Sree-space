# About Bio Rewrite — Design Spec
**Date:** 2026-05-16  
**Status:** Approved  
**File:** `src/pages/about.astro`

---

## Goal

Replace the current third-person bio paragraphs with a first-person narrative in Sree's voice. Warm, grounded, no marketing language ("transformation", "unlock", "empowerment", "journey" used loosely). The layout, photo, and pull-quote are all untouched.

---

## Voice Rules

- First person throughout ("I", never "she")
- No quick-fix language, no guru framing
- Anchor every claim to a concrete fact or observation
- Banned words: transformation, unlock, empower, ancient wisdom, holistic journey, unique blend

---

## Source Facts

| Fact | Detail |
|------|--------|
| Practice start | 2015 |
| Practice deepened | 2015–2022: breathwork, kriyas, meditation, Access Bars, Body Process |
| Teaching start | 2022 |
| Current modalities | Yoga (multi-style, therapy, kundalini), breathwork, kriyas, hands-on sessions, energy work in conversation |

---

## Chosen Direction: Draft B — "The body was always ahead"

**Emotional arc:** Somatic intelligence discovered → deepened through Access Bars + Body Process → teaching as natural overflow → curiosity as permanent state.

**Opening line:** *"The body was always ahead of me."*

**Closing note:** Settles into curiosity, not certainty. No promises of arrival.

---

## What Changes

### HTML structure
**None.** The existing two-column grid, portrait photo, and pull-quote blockquote are untouched. Only the prose text inside the `<div class="bio-text">` blocks is replaced.

### Pass 1 — First `<div class="bio-text">` block (paras 1–2)

**Remove:**
> Likhitha came to yoga in 2015 the way most people do — not because she had it figured out, but because she didn't. [...] Over the years that followed, the practice broadened. [...]

**Replace with:**

> The body was always ahead of me. Whatever I thought I was working on in a session, my body had already been working on something else.
>
> I came to yoga in 2015 with the usual reasons: flexibility, stress, something to do. What I found, slowly, was that it was teaching me to listen rather than push. That distinction took years to understand. Breathwork and kriyas made it sharper. Access Bars, which I came across a few years in, made it stranger and more interesting — thirty-two points on the head, gently held, and somehow the noise quietens. I came back. I trained. Body Process followed: more specific, more surprising.

### Pull-quote blockquote
**Untouched.** *"I didn't set out to teach. People started asking — and I realised the honest answer was yes."* — already first-person, already fits the arc.

### Pass 2 — Second `<div class="bio-text">` block (paras 3–4, in the separate grid row)

**Remove:**
> She started teaching in 2022 — not because she'd arrived somewhere [...] She'll tell you she's still figuring it out. [...]

**Replace with:**

> By 2022, people started coming to me with their own questions. I began teaching not because I'd become an expert, but because I'd been genuinely curious about this long enough that sharing it honestly felt right.
>
> What I offer now crosses categories: yoga in several styles, kundalini practices, breathwork, hands-on sessions, conversations that do the work of energy work. I don't separate them cleanly. The body doesn't, so I don't either.
>
> I'm still in practice. Still encountering sessions that show me something I didn't expect. I think that's the right state to be in — curious, not certain.

---

## What Does NOT Change

- `about.astro` HTML structure (grid, photo, pull-quote blockquote)
- All CSS/styles
- All other sections (hero, journey strip, modalities, Yash story, credentials, CTA)
- Meta description (already updated in a prior session to reflect 2022 teaching start)

---

## Word Count Target

200–220 words across both bio-text blocks combined.

---

## Verification

After edit:
1. `npm run build` — must exit 0
2. `grep "The body was always ahead" dist/about/index.html` — must match
3. `grep "Likhitha came to yoga" dist/about/index.html` — must return nothing (old text gone)
4. `grep "She started teaching" dist/about/index.html` — must return nothing (old text gone)
