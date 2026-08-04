# MMR Hospital Shared Design System Documentation
**Project:** Next.js Website Migration  
**Author:** Lead UX Architect  
**Status:** Approved Foundation  
**Date:** August 4, 2026  

---

## 1. Directory Structure

The design system is split into modular files located under `app/styles/`:
*   [`tokens.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/styles/tokens.css): All CSS variables (colors, spacing, shadows, radii).
*   [`typography.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/styles/typography.css): Header hierarchies, text sizes, and font configurations.
*   [`utilities.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/styles/utilities.css): Reusable container grids, sections, and alignments.
*   [`animations.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/styles/animations.css): Entry transitions, micro-animation lifting.

---

## 2. Token Registry

### Color Palette (Custom Properties)
*   `--color-primary`: `#443474` (lilac theme coloring).
*   `--color-secondary`: `#305595` (navy blue).
*   `--color-accent`: `#d88eec` (pink accents).
*   `--color-text-dark`: `#192431` (primary body color).
*   `--color-bg-light`: `#f8fafc` (card section panels).

### Spacing Scale (8px Grid)
We use a base 8px increment system to keep margins consistent:
*   `--space-1`: `4px` (`0.25rem`)
*   `--space-2`: `8px` (`0.5rem`)
*   `--space-3`: `12px` (`0.75rem`)
*   `--space-4`: `16px` (`1.0rem`)
*   `--space-6`: `24px` (`1.5rem`)
*   `--space-8`: `32px` (`2.0rem`)
*   `--space-10`: `40px` (`2.5rem`)
*   `--space-12`: `48px` (`3.0rem`)

### Radius & Elevation Shadows
*   `--radius-sm`: `4px` (small buttons/badges)
*   `--radius-md`: `8px` (cards)
*   `--radius-lg`: `16px` (large sections/dialogs)
*   `--shadow-sm`: soft elevations for cards.
*   `--shadow-md`: card popovers.
*   `--shadow-lg`: hover elevations.

---

## 3. Typographic System

We declare standard helper classes inside `typography.css`:
*   `.heading-1`: Primary title rendering Jost Extrabold.
*   `.heading-2`: Section title rendering Jost Bold.
*   `.heading-3`: Cards subtitle rendering Jost Semibold.
*   `.body-large`: Text descriptions using Montserrat (18px).
*   `.body-normal`: standard paragraphs (16px).
*   `.body-small`: muted footnotes (14px).

---

## 4. Breakpoint Strategy

We enforce standardized media queries to align responsive changes across components:
*   **Mobile Small**: `< 576px`
*   **Mobile Large**: `< 768px` (typography scaling changes)
*   **Tablet Portrait**: `< 992px`
*   **Tablet Landscape / Laptop**: `< 1024px` (navigation switches to mobile menu)
*   **Full Desktop**: `>= 1025px` (multi-column grids)

---

## 5. Usage Guidelines (How to Consume)

Future refactoring workstreams must consume design system tokens instead of hardcoding styles:

### Correct Consumption in CSS Modules
```css
/* Scoped Component stylesheet */
.card {
  background-color: var(--color-bg-white);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Correct Consumption in HTML Components
```tsx
import styles from "./FeatureCard.module.css";
import "@/app/styles/typography.css"; // if loading text helpers

export default function FeatureCard() {
  return (
    <div className={styles.card}>
      <h3 className="heading-3">Card Title</h3>
      <p className="body-normal">Card description text.</p>
    </div>
  );
}
```
*Avoid hardcoding pixel heights, widths, margins, or color hex values in stylesheets. Always point to custom variables.*
