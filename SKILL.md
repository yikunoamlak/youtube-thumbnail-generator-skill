---
name: youtube-thumbnail-generator
description: >
  Generate high-performing YouTube thumbnails from a video title alone.
  Analyzes the title to auto-detect niche, select composition template,
  choose color strategy, and produce a complete AI image generation prompt.
  Use when: generating thumbnails, designing YouTube art, creating video
  cover images, or any request mentioning "thumbnail", "YouTube thumbnail",
  "video thumbnail", "click-worthy image", or "thumbnail design".
---

# YouTube Thumbnail Generator Skill

## Purpose

Transform a video title into a click-worthy, professional YouTube thumbnail by generating an optimized AI image prompt. This skill encodes the design patterns from 100+ proven high-performing thumbnails.

## Reference Document

**MANDATORY**: Before generating any thumbnail, read the full reference guide:
- [youtube-thumbnail-generation-guide.md](./references/youtube-thumbnail-generation-guide.md)

This guide contains the complete system: technical specs, composition templates, color strategies, niche rules, typography systems, and quality checklist.

---

## When to Use This Skill

Activate this skill when:
- User provides a **video title** and wants a thumbnail
- User says "generate a thumbnail for..."
- User says "make me a YouTube thumbnail"
- User wants to design a "click-worthy" or "eye-catching" cover image
- User mentions "thumbnail", "YouTube art", or "video cover"
- User wants to iterate on an existing thumbnail design

---

## Input Requirements

**Minimum required input:** A video title (string)

**Optional inputs:**
- `channel_name` — for brand consistency
- `niche` — override auto-detection (gaming/tech/food/fitness/finance/travel/education/entertainment/animation)
- `style_override` — specific visual style preferences
- `text_on_thumbnail` — custom text (if different from title excerpt)
- `face_description` — description of person to include
- `brand_colors` — hex codes for channel brand colors
- `composition_override` — force a specific template (1-6)
- `no_text` — boolean, generate without text overlay
- `no_face` — boolean, generate without human face

---

## Execution Steps

### Step 1: Parse the Video Title

Extract from the title:
1. **Primary subject** — What is the video about?
2. **Emotional hook** — What feeling does it evoke?
3. **Key numbers** — Any quantities, prices, timeframes?
4. **Action verb** — What's happening?
5. **Comparison elements** — Is there a VS, before/after, or ranking?

### Step 2: Auto-Detect Niche

Scan the title for niche keywords:

| Niche | Trigger Keywords |
|---|---|
| **Gaming** | Minecraft, Fortnite, GTA, game name, modded, hardcore, survival, level, boss, raid |
| **Tech** | iPhone, camera, gadget, review, unboxing, app, AI, ChatGPT, laptop, setup |
| **Food** | recipe, cook, meal, eat, restaurant, taste, bake, chef, protein, diet |
| **Fitness** | workout, bulk, cut, muscle, gym, days, transformation, body, weight |
| **Finance** | $, money, invest, income, millionaire, afford, salary, side hustle, passive |
| **Travel** | trip, travel, explore, country name, city name, solo, backpack, flight |
| **Education** | how to, learn, tutorial, explained, guide, tips, course, beginner, master |
| **Entertainment** | react, challenge, prank, dare, try, survived, haunted, vs (non-product) |
| **Animation** | animated, cartoon, storytime, draw, illustration, anime |

If multiple niches match, prioritize the **first detected** or ask the user.

### Step 3: Select Composition Template

Follow the decision tree from the guide (Section 10):

```
1. Title implies a person/face?          → Template 1 (Face + Object) or 2 (Center Subject)
2. Title contains VS/comparison/before-after? → Template 3 (Side-by-Side)
3. Title is about a product/food/object?     → Template 4 (Object Hero Shot)
4. Title is about a concept/tutorial/idea?   → Template 5 (Text-Dominant)
5. Title implies action/sports/science?      → Template 6 (Action Freeze-Frame)
6. Default                                   → Template 1 or 2
```

### Step 4: Select Color Strategy

Based on detected niche (from guide Section 3):

| Niche | Default Color Strategy |
|---|---|
| Gaming | **C** — High Saturation Clash |
| Tech | **A** — Complementary Pop |
| Food | **A** or **E** — Warm Complementary or Clean White |
| Fitness | **D** — Cinematic/Moody |
| Finance | **A** — Complementary Pop (gold + navy) |
| Travel | **B** — Monochromatic with Accent |
| Education | **E** — Clean Minimal or **A** — Complementary |
| Entertainment | **A** or **C** — Complementary or High Saturation |
| Animation | **B** — Monochromatic Pastel |

### Step 5: Determine Typography

From the title, extract the **shortest, most impactful phrase** (1-5 words max):

- If title has numbers → include the number: "$100K", "100 DAYS", "1000 MPH"
- If title has superlative → use it: "BEST", "WORST", "CRAZIEST"
- If title has emotional word → feature it: "BANNED", "QUIT", "SURVIVED"
- If title is a question → use the question word: "HOW?", "WHY?"
- If no text works → **omit text entirely** (especially travel, food, animation)

### Step 6: Select Expression (If Face)

Match expression to title emotion:

| Title Emotion | Face Expression |
|---|---|
| Exciting/surprising | Shock — wide eyes, open mouth |
| Challenging/difficult | Pain/struggle — grimace, sweat |
| Positive/uplifting | Joy — big smile, eye crinkles |
| Educational/curious | Confusion — furrowed brow, head tilt |
| Disgusting/gross | Disgust — nose wrinkle, pulled back |
| Confident/authoritative | Focus — squinted eyes, determined jaw |

### Step 7: Build the Prompt

Assemble the final prompt using this structure:

```
Generate a YouTube thumbnail image.

SPECS: 1280x720 pixels, 16:9 aspect ratio, sRGB color space.

COMPOSITION: [Template name and description]

SUBJECT: [Primary visual element from title]
- Position: [left/center/right third]
- Scale: fills [40-60]% of frame
- [Face expression if applicable]

SECONDARY ELEMENT: [Supporting visual element]
- Position: [opposite side from subject]

BACKGROUND:
- [Background description based on niche]
- Color: [Primary color] with [secondary color] accents
- [Gradient/environment/blur description]

TEXT (if applicable):
- "[1-5 words]" in [ALL CAPS / Title Case]
- Font: Extra Bold compressed sans-serif
- Color: [white/yellow/red] with [outline/shadow]
- Position: [location]
- Must be readable at 168x94px

LIGHTING:
- [Lighting style from niche rules]

EFFECTS:
- [2-3 specific effects from guide Section 8]

STYLE: Professional YouTube thumbnail. High contrast. Saturated colors.
Clean composition, maximum 3 focal elements. Mobile-optimized readability.

DO NOT include: YouTube player chrome, watermarks, device frames,
or more than 5 words of text.
```

### Step 8: Quality Validation

Before presenting the prompt, mentally verify against the 10-point checklist (Guide Section 11):

1. ✅ Readable at mobile size?
2. ✅ Understandable in <3 seconds?
3. ✅ ONE clear primary element?
4. ✅ Subject pops from background?
5. ✅ Creates curiosity gap?
6. ✅ Maximum 3 main elements?
7. ✅ Text large enough (if used)?
8. ✅ Bottom-right corner clear?
9. ✅ Consistent with channel identity?
10. ✅ Evokes an emotion?

---

## Output Format

Always output the following:

### 1. Analysis Block
```
📊 Title Analysis:
- Niche: [detected niche]
- Primary Subject: [what]
- Emotional Hook: [what feeling]
- Key Numbers: [any numbers]
- Template: [# and name]
- Color Strategy: [letter and name]
- Text on Thumbnail: "[extracted phrase]" or NONE
- Face: [expression] or NO FACE
```

### 2. AI Image Generation Prompt
The full, ready-to-paste prompt (as described in Step 7).

### 3. Alternative Variant (Optional)
A second prompt variant for A/B testing, varying ONE element:
- Different expression
- With/without text
- Different color strategy
- Different composition template

---

## Advanced Features

### Batch Generation
If the user provides multiple titles, generate all analyses and prompts in sequence. Group by niche for consistency.

### Series Thumbnails
If titles are part of a series (Part 1, 2, 3 or Episode numbers):
- Maintain **consistent composition template** across all
- Vary the **subject/object** but keep same **layout and color scheme**
- Use **numbering badges** (Episode #, Part X) in consistent position
- Keep **face/brand element** in the same position

### Thumbnail Revision
If the user wants to iterate on a generated thumbnail:
- Ask which of the 10 quality checklist items scored lowest
- Adjust the specific corresponding prompt element
- Preserve elements that scored well

### Style Transfer
If the user says "make it like [Channel Name]":
- Match the channel's known aesthetic from the guide's catalog (Section 13)
- Adapt composition, color, and typography to match that channel's pattern

---

## Common Mistakes to Prevent

1. **NEVER** generate a prompt with more than 5 words of text overlay
2. **NEVER** suggest thin or light-weight fonts
3. **NEVER** place important elements in the bottom-right corner (timestamp zone)
4. **NEVER** create cluttered compositions with 4+ focal elements
5. **NEVER** use dark text on dark backgrounds without contrast treatment
6. **NEVER** use the exact video title as the thumbnail text — abbreviate it
7. **NEVER** forget to specify 1280×720 and 16:9 in the prompt
8. **NEVER** generate raw screenshot-style gaming thumbnails — always use custom renders
9. **NEVER** omit lighting direction in the prompt — it's critical for depth
10. **NEVER** skip the expression description when a face is included

---

## Example Workflow

**User says:** "Generate a thumbnail for: Why Nobody Can Beat Magnus Carlsen"

**Skill execution:**

```
📊 Title Analysis:
- Niche: Education/Entertainment (chess, personality-focused)
- Primary Subject: Magnus Carlsen (chess grandmaster)
- Emotional Hook: Awe, impossibility, dominance
- Key Numbers: None
- Template: Template 1 (Face + Object) — face + chessboard
- Color Strategy: D (Cinematic/Moody) — dark, authoritative
- Text on Thumbnail: "UNBEATABLE" or "NOBODY"
- Face: Intense Focus — squinted eyes, determined jaw, slight smirk
```

**Generated Prompt:**

> Generate a YouTube thumbnail image. SPECS: 1280x720 pixels, 16:9 aspect ratio. COMPOSITION: Face + Object Split. Left side: Close-up of a man's face (chess grandmaster type) with intensely focused expression — squinted eyes, slight confident smirk, determined jaw. Face fills 35% of frame. Right side: chess board with scattered fallen king pieces, one standing white king glowing. BACKGROUND: Dark charcoal to deep blue gradient, subtle smoke/mist effect. TEXT: "UNBEATABLE" in white Extra Bold compressed sans-serif with 4px black outline, positioned upper-right. LIGHTING: Dramatic side lighting from the left, harsh shadows on face creating depth. Strong rim light on right side of face. EFFECTS: Subtle lens flare near the standing king piece. Dark vignette on edges. Slight bokeh on chess pieces in background. STYLE: Professional YouTube thumbnail. Cinematic color grading. High contrast. Dark and moody. Maximum 3 focal elements. DO NOT include YouTube player UI, watermarks, or device frames.

**A/B Variant:**
> Same as above but: Remove text entirely. Instead, add a red circle around the standing white king piece. Change expression to shock/disbelief. This tests imagery-only vs text-overlay performance.

---

## Integration Notes

- This skill works with **any AI image generator** (Midjourney, DALL-E, Stable Diffusion, Firefly, Imagen, Flux, etc.)
- For Midjourney specifically, append `--ar 16:9 --s 250 --q 2` to the prompt
- For DALL-E / ChatGPT, the prompt works as-is
- For Stable Diffusion, add negative prompt: `"blurry, low quality, watermark, YouTube player UI, phone frame, laptop frame, text errors, misspelled words"`
- For the `generate_image` tool in this environment, use the prompt directly

---

*Skill version: 1.0 | Based on analysis of 102 YouTube thumbnails | Last updated: 2026-06-11*
