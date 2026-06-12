# 🎨 YouTube Thumbnail Generator

[![skills.sh](https://skills.sh/b/yikunoamlak/youtube-thumbnail-generator-skill)](https://skills.sh/yikunoamlak/youtube-thumbnail-generator-skill)

> An AI agent skill that generates high-performing YouTube thumbnails from a video title alone.

Transform any video title into a click-worthy, professional YouTube thumbnail by generating an optimized AI image prompt. This skill encodes the design patterns from **100+ proven high-performing thumbnails** across 9 content niches.

---

## ✨ Features

- **Auto-detect niche** — Gaming, Tech, Food, Fitness, Finance, Travel, Education, Entertainment, Animation
- **6 composition templates** — Face + Object, Center Subject, Side-by-Side, Object Hero, Text-Dominant, Action Freeze-Frame
- **5 color strategies** — Complementary Pop, Monochromatic, High Saturation, Cinematic, Clean Minimal
- **Smart typography** — Extracts the most impactful 1–5 word phrase from any title
- **Expression matching** — Maps title emotion to the perfect face expression
- **10-point quality checklist** — Validates every thumbnail before output
- **A/B variant generation** — Creates alternative prompts for testing
- **Batch & series support** — Consistent styling across video series
- **Works with any AI image generator** — Midjourney, DALL-E, Stable Diffusion, Firefly, Imagen, Flux, etc.

---

## 🚀 Installation

Install globally for all your AI agents using the universal `skills` CLI:

```bash
npx skills add yikunoamlak/youtube-thumbnail-generator-skill
```

This will automatically detect which agents you have installed (Cursor, Windsurf, VS Code, Cline, Antigravity, Gemini, GitHub Copilot, Codex, and 10+ more) and deploy the skill to all of them.

### Install for a specific agent

```bash
npx skills add yikunoamlak/youtube-thumbnail-generator-skill --agent cursor
npx skills add yikunoamlak/youtube-thumbnail-generator-skill --agent claude-code
```

### Install globally (user-level)

```bash
npx skills add yikunoamlak/youtube-thumbnail-generator-skill -g
```

---

## 💬 Usage

Once installed, simply ask your agent:

> "Generate a YouTube thumbnail for my new video: Why Nobody Can Beat Magnus Carlsen"

The agent will:
1. **Analyze** the title (niche, subject, emotion, numbers)
2. **Select** composition template + color strategy + typography
3. **Generate** a full AI image prompt ready to paste into any generator
4. **Validate** against the 10-point quality checklist
5. **Offer** an A/B variant for testing

### Example Output

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

---

## 📁 Repository Structure

```
youtube-thumbnail-generator-skill/
├── SKILL.md                          # Main skill instructions (YAML frontmatter + markdown)
├── references/
│   └── youtube-thumbnail-generation-guide.md  # Complete 28K-word reference guide
├── skills.sh.json                    # skills.sh display configuration
└── README.md                        # This file
```

---

## 🎯 Supported Agents

This skill is compatible with the universal [skills.sh](https://www.skills.sh/) ecosystem:

| Agent | Status |
|---|---|
| Cursor | ✅ |
| Windsurf | ✅ |
| VS Code (Copilot) | ✅ |
| Cline | ✅ |
| Roo | ✅ |
| Antigravity | ✅ |
| Gemini | ✅ |
| GitHub Copilot | ✅ |
| Codex | ✅ |
| Claude Code | ✅ |
| AMP | ✅ |
| Trae | ✅ |

---

## 🔧 Optional Parameters

| Parameter | Description |
|---|---|
| `channel_name` | For brand consistency |
| `niche` | Override auto-detection (gaming/tech/food/fitness/finance/travel/education/entertainment/animation) |
| `style_override` | Specific visual style preferences |
| `text_on_thumbnail` | Custom text (if different from title excerpt) |
| `face_description` | Description of person to include |
| `brand_colors` | Hex codes for channel brand colors |
| `composition_override` | Force a specific template (1–6) |
| `no_text` | Generate without text overlay |
| `no_face` | Generate without human face |

---

## 📖 Reference Guide

The full 28K-word reference guide is included at [`references/youtube-thumbnail-generation-guide.md`](references/youtube-thumbnail-generation-guide.md). It covers:

- Technical specifications (resolution, color space, file formats)
- All 5 color strategies with hex palettes
- 6 composition templates with positioning rules
- Niche-specific rules for 9 content categories
- Typography system (fonts, sizing, placement)
- Lighting patterns per niche
- Effects catalog (lens flare, bokeh, vignette, etc.)
- 10-point quality checklist
- Decision tree for template selection
- Channel style catalog for style transfer

---

## 📝 License

MIT

---

## 🔗 Links

- [Browse on skills.sh](https://skills.sh/yikunoamlak/youtube-thumbnail-generator-skill)
- [skills.sh Documentation](https://www.skills.sh/docs)
- [skills CLI GitHub](https://github.com/vercel-labs/skills)

---

*Skill version: 1.0 | Based on analysis of 102 YouTube thumbnails | Last updated: 2026-06-12*
