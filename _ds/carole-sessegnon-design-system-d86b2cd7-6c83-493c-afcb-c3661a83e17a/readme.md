# Carole Sessegnon — Design System

Design system for **CAROLE SESSEGNON**, an Ivorian leather-goods Maison launching in December 2026. Discreet luxury in the register of Yves Saint Laurent or Gucci: sober, exacting on detail, never visually overstated. Each piece is unique, numbered, and authenticated by a digital passport — the site must feel as rare and cared-for as the object itself.

**Sources**
- Figma file "CAROLE SESSEGNON.fig" (mounted, read-only) — pages `/Boutique-et-portail` (23 frames: Landing page, La Maison, Les Pièces, Contact, product detail, cart, checkout ×4, filter, search, login, create account, navbar, menu, card produit ×2) and `/Logo-et-UI-KIts/logo` (monogram + wordmark).
- Uploaded brand kit: `CS-LOGOMARK.svg`, `CS-LOGOTYPE.svg`, `CS-LOGO-COMBI.svg`, `CAROLE SESSEGNON - Couleurs de la marque - V2.pdf`, Celias and Bodoni Moda font families.
- No codebase was attached; this system is built from the Figma kit and uploaded brand files only.

## Index
- `styles.css` — global entry point (imports everything below).
- `tokens/` — `fig-tokens.css` (raw Figma Variables), `colors.css` (semantic aliases), `typography.css` (@font-face + type scale), `spacing.css`.
- `components/` — Figma-sourced primitives: `Logo`, `Navbar`, `Menu`, `Footer`, `Categoris`, `CardProduit`, `RecapCommande`, `ContinueWithGoogleLeftAligned`, `ContinueWithAppleLeftAligned`.
- `components/forms/` — intentional additions requested in the brief: `Button`, `Input`, `Checkbox` (+ `Radio`), `AccordionItem`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand motifs).
- `assets/` — `logo/` (brand mark SVGs), `imagery/` (photography from the Figma kit), `fonts/` (Celias, Bodoni Moda).
- `ui_kits/boutique/` — clickable recreation of the storefront: Accueil, La Maison, Les Pièces, Fiche produit, Passeport digital, Contact, Panier & paiement, Connexion.
- `thumbnail.html` — homepage tile for this design system.

## Components
Figma-sourced (exact inventory of the file's component families + standalone symbols):
- **Logo** — 6 crops/colors of the CS monogram + wordmark lockup.
- **Navbar** — default (dark ink) / clair (white ink), with signed-in icon states.
- **Menu** — mobile hamburger affordance (default/hover/focus).
- **Footer** — sitemap, newsletter, wordmark, copyright.
- **Categoris** — homepage category tile.
- **CardProduit** — product card (default / hover / coming-soon).
- **RecapCommande** — checkout order-summary panel.
- **ContinueWithGoogleLeftAligned**, **ContinueWithAppleLeftAligned** — social sign-in buttons.

Intentional additions (`components/forms/`, requested explicitly in the brief — "boutons primaire/secondaire, champs de formulaire" — not present as named Figma components but built from patterns repeated across the kit's screens):
- **Button** (primary / secondary / ghost / light)
- **Input** (labelled text field)
- **Checkbox**, **Radio**
- **AccordionItem** (FAQ row)

## Content fundamentals
- **Language & register**: French, vouvoiement throughout ("vous", never "tu"). Formal, warm, unhurried — sentences read like a Maison speaking about its craft, not a retailer selling stock. E.g. *"Née à Abidjan, la Maison Carole Sessegnon travaille le cuir ivoirien pièce par pièce, à la main."*
- **Product copy is spare**: name, one material line, price — no bullet-pointed feature lists, no urgency language ("dernières pièces!", "-50%"). Coming-soon pieces read simply "BIENTOT DISPONIBLE", letter-spaced, muted grey — no badge, no color alarm.
- **No emoji, no exclamation points, no all-caps sales copy.** The few all-caps instances in the kit (section labels like "RESTER INFORME", "SUIVEZ NOUS") are quiet eyebrow labels, not shouting — small size, wide letter-spacing, never bold color.
- **The digital passport and "Sentinelles" are narrated, not explained like a feature.** Copy treats authentication as ceremony: *"Elles veillent sur chaque pièce, du registre à la vérification de son authenticité… gardiennes silencieuses des archives et de l'histoire de chaque pièce."*
- English localization: structure, spacing and component sizing must hold unchanged; only text swaps. Keep sentence lengths comparable — the register (formal, understated) matters more than literal translation.

## Visual foundations
- **Color**: deep bordeaux/brown (`--brand-bordeaux`, rgb(71,29,27)) as the dark anchor; a muted bronze/gold (`--brand-bronze`) as the only accent; ivory/cream neutrals (`--surface-cream`, `--surface-ivory`) for light grounds; near-black ink for text. No gradients except a soft 20–35% black scrim over hero photography for text legibility, and one diagonal bordeaux-tint gradient on the "La Maison" hero band. A warning red exists only for form-validation states — never decorative.
- **Type**: Bodoni Moda (serif, heritage/engraved feel) for display headings — set large (32–60px), tight tracking (-0.02em) at the largest sizes, sometimes italic for a quieter sub-line. Celias (sans) for everything else — body copy at 18–20px, UI labels at 12–16px with a touch of letter-spacing on all-caps eyebrows. Inter appears in the kit as a secondary UI/label face (form captions, accordion headers) — no font file was supplied for it; it currently falls back to system sans until provided.
- **Spacing**: generous, page-margin-driven. Desktop content sits inside a 140px side margin, max content width ~1640px. Section rhythm runs in large jumps (50 / 75 / 100px) rather than a tight 8px grid — this is a spacious, editorial layout, not a dense app.
- **Backgrounds**: full-bleed photography for hero moments (atelier, product on a model, macro leather details) with a flat dark scrim, never a pattern or texture. Flat color fields (bordeaux, cream, white) elsewhere — no photographic backgrounds behind text-heavy sections.
- **Corners & shape**: square corners everywhere — cards, buttons, inputs, images. The circle is the one deliberate exception, reserved for icon buttons, avatar/profile glyphs, and the monogram seal itself. This contrast (hard edges vs. the one circular signature) is a core brand device — do not round general UI.
- **Borders & fills**: buttons and inputs are either solid-filled (bordeaux) or outlined with a 1–2px inset border (`box-shadow: inset 0 0 0 …px`), never both, never a soft drop shadow on interactive elements. The one shadow use is a soft, low-opacity drop shadow (`0 12px 24px -8px rgba(0,0,0,.08)`) under editorial photography — never on cards or buttons.
- **Cards**: no border, no rounding, no shadow at rest — a `CardProduit` is simply image + two-to-three lines of type stacked with generous gap. On hover the product image swaps and small circular arrow buttons (dark fill) appear over it; that's the only elevation change — no lift, no shadow growth.
- **Hover/press states**: hover deepens fill color slightly (`--color-secondary-600` icon backgrounds vs. lighter default) or swaps an image; text links pick up the bordeaux brand color. No scale/bounce transforms. Disabled state drops opacity, doesn't change color.
- **Motion**: nothing energetic in the source — this is a quiet, still brand. The one explicit motion idea from the brief is the opening "panels part to reveal the monogram" sequence; treat it (and any future animation) as slow, deliberate, fade/reveal based — never bouncy or springy.
- **Imagery tone**: warm-neutral, documentary — hands working leather, close crops of stitching and hardware, a single portrait. Not styled fashion-editorial lighting; more atelier-honest. No filters/grain visible in the supplied images.
- **Transparency/blur**: used exactly once in the kit — a `backdrop-filter: blur(40px)` on a semi-transparent white filter bar in "Les Pièces", for a sticky control strip over scrolling content. Not used decoratively elsewhere.

## Iconography
The Figma kit draws its own line icons directly as inline vector paths (arrows, search, cart/chat, plus/minus, location pin, checkmark) rather than pulling from a named icon font or library — they're bespoke, thin-stroke (0.75–1px), monochrome, and always `currentColor`. No icon font, no emoji, no PNG icon set anywhere in the source. Continue that pattern for new icons: simple single-path line glyphs at 16–24px, not a third-party icon set, so they keep the kit's specific weight and proportions. The two exceptions are the Google and Apple marks in the social sign-in buttons, copied verbatim from the source (their brand marks, not restyled).

## The "Sentinelles de la Maison" & opening sequence
Two narrative brand devices named in the brief, not present as finished illustrations in the supplied Figma/uploads:
- **Opening panel sequence** (panels part to reveal the monogram): evoked statically in `guidelines/brand-panels-motif.card.html` as a vertical-panel + centered monogram motif. Build the real animated version later against this reveal logic.
- **"Sentinelles de la Maison"** (illustrated guide characters for the passport-verification steps): no illustrations were supplied. `ui_kits/boutique/Screens/Passeport.jsx` stands the four-step flow up with a plain circular "CS" monogram badge standing in for each Sentinelle, and calls out in-page that real character illustrations are needed from the Maison. Do not invent illustrated characters — swap in the real artwork here once received.

## Caveats
- **Passeport digital screens are original**, built from this system's foundations per the brief — no Figma frame in the selected scope covers this journey.
- **Inter** (used for UI captions/labels in the kit) has no font file in the upload; it currently falls back to the system sans stack. Flagging for the user — see the ask below.
- Mobile-first responsiveness is handled with fluid CSS (`clamp()`, wrapping flex/grid) rather than separate pixel-fixed mobile frames, since the Figma scope supplied only desktop (1920px) frames.
