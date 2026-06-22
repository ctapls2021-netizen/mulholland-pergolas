---
name: mulholland-design-system-en
description: >
  Official design system for Mulholland Brand (luxury aluminum gates and fences company
  based in Los Angeles, CA). Use this skill whenever the user asks to create, modify, or design
  new landing pages, sections, or components for this brand. Contains colors, typography, spacing,
  components, and design patterns from the main Gates & Fences production landing page.
---

# Mulholland Brand — Design System (English)

This skill contains the design rules you MUST follow for any new landing page or section
created for Mulholland Brand. All values are real and extracted directly from production code.

---

## Tech Stack

- **Framework:** Astro (static site)
- **CSS:** Vanilla CSS using `<style is:global>` per component
- **Fonts:** Google Fonts (loaded via @import in the Hero component or layout)
- **Deploy:** Cloudflare Pages (connected to GitHub for automatic deployment)
- **Repo:** GitHub → ctapls2021-netizen/mulholland-Gates-Fences

---

## Color Palette

### Primary Colors
| Token | Value | Usage |
|---|---|---|
| brand-blue | #2C65B0 | Main brand color. Button backgrounds, bars, card overlays, active borders. |
| brand-blue-dark | #22518C | Hover/active state of the main blue. |
| brand-gold | #EAC848 | Gold accent. High-conversion CTA buttons, statistical figures. |
| brand-gold-dark | #D4B03A | Hover state of gold. |

### Text Colors
| Token | Value | Usage |
|---|---|---|
| text-primary | #14110E | Main dark text (headings on white backgrounds). |
| text-secondary | #635C57 | Body copy, descriptions, supporting text. |
| text-white | #FFFFFF | Text on dark or blue backgrounds. |
| text-muted | #182C49 | Form field placeholders and input values. |

### Background Colors
| Token | Value | Usage |
|---|---|---|
| bg-white | #FFFFFF | Main section background. |
| bg-light | #F5F9FF | Alternative light blue-gray background. |
| bg-header | rgba(255,255,255,0.94) | Sticky header with backdrop-filter: blur(5px). |

### Hero Form Colors
| Token | Value | Usage |
|---|---|---|
| form-gradient-top | #5E97D5 | Top of the Hero form card gradient. |
| form-gradient-bottom | #4467AB | Bottom of the Hero form card gradient. |
| form-border | #C3C3C3 | Input field borders. |
| divider | #D9D9D9 | Section separators and dividers. |

---

## Typography

### Loaded Fonts
```
Raleway: 400, 700, 800
Inter: 400, 600, 700, 800
Poppins: 600, 700
Playfair Display: 500
```
URL: https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800&family=Inter:wght@400;600;700;800&family=Poppins:wght@600;700&family=Playfair+Display:wght@500&display=swap

### Font Roles
| Font | Usage |
|---|---|
| Raleway | H1/H2/H3, section subtitles, CTA buttons, brand text. PRIMARY font. |
| Inter | Body copy, descriptions, navigation, phone numbers, data. |
| Poppins | ONLY for Hero form inputs (placeholders and values). |
| Playfair Display | ONLY for large statistical figures (e.g., "30+"). |

### Type Scale

**H1 — Hero Main Title:**
font-family: Raleway; font-weight: 700;
font-size: clamp(40px, 4vw, 60px);
line-height: 1.05; letter-spacing: -1.5px; color: #FFFFFF;

**H2 — Section Titles (Desktop):**
font-family: Raleway; font-weight: 800;
font-size: 45px; line-height: 45px; letter-spacing: -0.9px; color: #14110E;
Mobile: font-size: 24px; line-height: 27px;

**H3 — Feature / Sub-card Titles:**
font-family: Raleway; font-weight: 800;
font-size: 26px; line-height: 24px; color: #14110E;
Mobile: font-size: 17px; line-height: 15.7px;

**Eyebrow / Overline (above H2):**
font-family: Raleway; font-weight: 600;
font-size: 12px; letter-spacing: 2.64px; text-transform: uppercase; color: #2C65B0;

**Body / Description Text:**
font-family: Inter (or Raleway depending on context); font-weight: 400;
font-size: 16px; line-height: 26px; color: #635C57;
Mobile: font-size: 14px; line-height: 20px;

**Card / Image Overlay Text:**
City label: Raleway 400, 12px, letter-spacing 1.2px, uppercase, #FFF
Project name: Raleway 400, 20px, line-height 28px, #FFF

---

## Layout & Spacing

### Containers
```
Hero / Header: max-width 1920px, padding-left 110px, padding-right 40px
Content sections: max-width ~1430px, padding 0 20px

Hero-inner padding breakpoints:
  1600px → padding-left: 60px
  1400px → padding-left: 40px
  1200px → flex-direction: column, padding: 120px 24px 60px
  768px  → padding: 0
```

### Header
```
Desktop: height 80px, padding-left 110px, padding-right 40px
Mobile:  height 52px, padding 14px 9px
```

### Master Alignment Reference
The header's padding-right: 40px is the MASTER ALIGNMENT REFERENCE.
All right-edge elements on desktop must align to those 40px.
Example: hero-inner has padding-right: 40px so the form aligns with the header button.

### Section Padding
Standard sections: padding [vertical]px 20px
Mobile: same, minimum 20px horizontal.
Generous sections: padding-top ~80px, padding-bottom variable.

### Grid Gaps
```
Gate Styles (3 cols): gap 53px desktop / 20px tablet / 10px col + 25px row mobile 2-cols
Feature Grid: gap 40px desktop / 20px mobile
SoCal Living Grid: gap 15px
```

---

## Standard Components

### Primary Button (solid blue)
background: #2C65B0; color: #FFFFFF;
font-family: Raleway; font-weight: 700; font-size: 17px; letter-spacing: 0.13em;
height: 48px; padding: 0 25px;
border: 1px solid #2C65B0; border-radius: 3px;
transition: background-color 0.2s ease;
Hover: background #22518C; border-color #22518C;

### Gold CTA Button (high-conversion — maximum impact)
background: #EAC848; color: #182C49;
font-family: Poppins; font-weight: 700; font-size: 18px;
height: 50px; width: 100%; border: none;
Hover: background #D4B03A;
Mobile: font-size 14px; height 55px;

### Outline Button (blue border)
background: transparent; border: 1px solid #2C65B0; color: #14110E;
font-family: Inter; font-size: 17px; letter-spacing: 0.08em;
height: 48px; padding: 0 20px; border-radius: 3px 0 0 3px;
(Used paired with the primary button to its right, without border-right)

### Pill Button in Blue Bar
background: rgba(255,255,255,0.11); border-radius: 45px;
height: 56px; max-width: 715px;
Hover: rgba(255,255,255,0.2)

### Blue CTA Bar (mid-section banner)
width: 100%; height: 105px (desktop) / 52px (mobile);
background: #2C65B0;
display: flex; align-items: center; justify-content: center;

### Image Card with Gradient Overlay
Container: position relative; overflow hidden;
Image hover: transform scale(1.03); transition 0.4s ease;
Overlay: position absolute; bottom 0; left 0; width 100%;
  padding: 40px 30px 25px 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);

### Floating Overlay Card (Gate Styles style)
Overlay protrudes 25px below the image: bottom -25px;
box-shadow: 0 4px 15px rgba(0,0,0,0.15);
White part (icon): background #FFFFFF;
Blue part (name): background #2C65B0; color #FFF; Raleway 500 17px;
Mobile: height 72px; bottom -15px; font-size 9.8px;

### Hero Form Card
background: linear-gradient(to bottom, #5E97D5 0%, #4467AB 100%);
padding: clamp(24px, 3vw, 44px) clamp(24px, 3vw, 48px);
min-height: 589px;
box-shadow: -8px 0 40px rgba(0,0,0,0.25);

Inputs: height 48px; border 1px solid #C3C3C3; background #FFF;
  font-family Poppins; font-weight 600; font-size 15px; color #182C49; padding 0 16px;

Title: Raleway 800, 36px/37px, #FFF, text-align center, margin-bottom 28px;

### Pill / Eyebrow Badge (Hero)
background: rgba(0,0,0,0.36); border: 1px solid #E5E2DE; border-radius: 30px;
height: 30px; padding: 0 14px;
Text: Inter 500, 12px, letter-spacing 2.1px, uppercase, color #CCC6C0;
Dot: 6px x 6px, background #EAC848, border-radius 50%;

### Eyebrow in Blue Box (SoCal Living style)
Container: width 215px; height 50px; background #2C65B0;
  display flex; align-items center; justify-content center; gap 5px;
Gold text: Raleway 800 italic, 14px, letter-spacing 1px, #EAC848, uppercase;
White text: same but color #FFFFFF;
Mobile: 135px x 35px; font-size 12.7px; letter-spacing 1.86px;

---

## Shadows & Effects

```
Floating overlay card: box-shadow 0 4px 15px rgba(0,0,0,0.15)
Hero form card:        box-shadow -8px 0 40px rgba(0,0,0,0.25)
Header:                backdrop-filter blur(5px)
Blue divider:          height 1px; background #2C65B0
Gray divider:          height 1px; background #D9D9D9
```

---

## Responsive Breakpoints

| Breakpoint | Description |
|---|---|
| max-width 1600px | Hero padding adjustment (60px left) |
| max-width 1400px | Padding 40px, font-size reduction |
| max-width 1200px | Layout switches to column. Wide tablet. |
| max-width 1024px | Tablet. Grids switch to 2 cols or carousel. |
| max-width 768px | Mobile. Complete layout redesign. |
| min-width 769px and max-width 1200px | Specific tablet range. |

---

## Section Patterns

### Standard HTML Structure
```astro
<section class="xx-section">
  <div class="xx-container">
    <!-- Eyebrow -->
    <div class="xx-subtitle">EYEBROW TEXT</div>
    <!-- H2 Title -->
    <h2 class="xx-title">Title <span class="xx-title-blue">blue part</span></h2>
    <!-- Description -->
    <p class="xx-text">...</p>
    <!-- Content: grid, cards, carousel -->
  </div>
</section>
```

### CSS Naming Convention
Prefix all CSS classes with 2-3 letters from the section name to avoid collisions.
Examples: .gs- (GateStyles), .adv- (Advantage), .sc- (SoCalLiving), .cta- (CTA).

### Section on white background (#FFFFFF)
padding-top ~80px; max-width ~1430px centered with margin auto.

### Section on light background (#F5F9FF)
Same structure. padding-bottom may be larger if elements protrude below.

### Section with background image (Hero)
background-image + cover; height 100vh;
Do NOT use a color overlay on the <section> — darkness must come from the image itself.

---

## Design Rules — Non-Negotiable

1. Corners: ALWAYS border-radius 3px on buttons. NEVER 8px+. Pill shape only in CTA bars.
2. Gold #EAC848: EXCLUSIVE for maximum-conversion CTAs and statistical figures. Never for informational text.
3. Blue #2C65B0: Trust/brand color. Section bars, card overlays, active borders, key backgrounds.
4. Hovers: transition 0.2s ease. Never abrupt or jarring effects. Prefer opacity and background-color changes.
5. Card image hover: scale(1.03) with transition 0.4s ease.
6. Vertical spacing: desktop sections use 80px+ of vertical padding.
7. Eyebrow labels: always text-transform uppercase with letter-spacing 2-3px.
8. Alignment: left-aligned on desktop, centered on mobile.
9. Layout master reference: header padding-right 40px = right-edge alignment guide for everything.
10. Font roles: Raleway for brand/headings, Inter for info/data, Poppins ONLY in forms.

---

## How to Create a New Section

1. Create src/components/SectionName.astro
2. Use <style is:global> for all styles
3. Prefix all CSS classes with 2-3 letters from the section name
4. Follow the color palette and type scale from this skill
5. Always include @media (max-width: 768px) with a complete mobile redesign
6. Import and add the component in src/pages/index.astro

## How to Create a New Landing Page

1. Create a new folder/file in src/pages/
2. Reuse the existing Header.astro and Footer.astro
3. Create a Hero[ServiceName].astro adapting the form if needed
4. All new sections must follow this design guide
5. Images go in /public/assets/images/[section-name]/
