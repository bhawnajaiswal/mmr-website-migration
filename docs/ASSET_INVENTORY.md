# Asset Inventory

This document maps all static assets (images, fonts, icons, CSS, and JS) found within the legacy WordPress workspace and referenced on the live website.

---

## 1. Asset Folder Locations in Legacy Codebase

Static assets are distributed between custom-coded directories and standard WordPress upload directories.

| Asset Type | Location in Legacy Workspace | Notes / Source |
|---|---|---|
| **Custom CSS** | `legacy/public_html/css/` | Custom styles, Bootstrap, animate, and swiper styles |
| **Custom JS** | `legacy/public_html/js/` | Swiper, jQuery, WOW, and bootstrap JS |
| **Fonts (Icon)** | `legacy/public_html/css/fontawesome/webfonts/` | FontAwesome 5 icon fonts (`.eot`, `.ttf`, `.woff`, `.woff2`) |
| **Images (Local)** | `legacy/public_html/images/` (referenced in CSS) | Theme assets like pagination dots (`dot.png`, `active-dot.png`) |
| **Images (Uploads)**| Packed inside `legacy/backups/public_html.zip` | Served under `/wp-content/uploads/` on the live site |
| **PDFs** | None found | No clinical brochures or PDFs exist in the database |
| **Videos** | None found | No local or hosted clinical video assets are referenced |

---

## 2. Core Stylesheets (`legacy/public_html/css/`)

* **`bootstrap.min.css`**: Bootstrap 4/5 CSS core layout classes.
* **`animate.css`**: Animation styling triggered by `wow.min.js`.
* **`swiper-bundle.min.css`**: Stylesheet for Swiper slider component.
* **`common.css`**: Global resets and utility classes (such as `.container` styling a custom width of `1410px`).
* **`style.css`**: Primary custom style rules for header (`.header`), footer (`.footer`), primary colors, inputs (`input.form-control`), and page modules.
* **`responsive.css`**: Media queries specifying screen-width overrides for `@media (max-width: 1400px/1200px/992px/767px)`.

---

## 3. Core JavaScript (`legacy/public_html/js/`)

* **`jquery-3.2.1.min.js`**: Main JS library dependency for animation triggers.
* **`bootstrap.bundle.min.js`**: Core Bootstrap scripts.
* **`swiper-bundle.min.js`**: Carousel slider logic for the homepage.
* **`wow.min.js`**: Scroll-triggered animations.

---

## 4. Typography & Iconography

* **Web Fonts (Google Fonts)**:
  * Embedded dynamically via URL:
    * `Roboto` (Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900)
    * `Roboto Slab` (Weights: 100 to 900)
    * `Jost` (Weights: 100 to 900)
    * `Montserrat` (Weights: 100 to 900)
    * `Nunito` and `Nunito Sans`
* **Icons**:
  * FontAwesome 5 Pro served locally from `css/fontawesome/`.
  * Elementor Icons (`eicons`) served under `wp-content/plugins/elementor/assets/lib/eicons/`.

---

## 5. Live Media Uploads Mapped from Database

During Next.js migration, these media uploads must be extracted from the backup ZIP files (`public_html.zip`) and mapped to the Next.js `public/` directory (e.g., `public/assets/uploads/`):

* **Logo**: `/wp-content/uploads/2023/10/logo-copy.png`
* **Favicon**: `/wp-content/uploads/2023/11/cropped-android-chrome-192x192-1-32x32.png`
* **Home Slide Images**:
  * Banner Dot: `/wp-content/uploads/images/dot.png`
  * Active Dot: `/wp-content/uploads/images/active-dot.png`
* **Clinical Illustrations**:
  * Embryo support hands: `/wp-content/uploads/elementor/thumbs/woman-s-hands-support-human-embryo-icon-blurred-background-tree-scaled-qmqsv712jqr3q0hm66n90cdx4xsqluux6iebko69x4.jpg`
  * In-vitro fertilization microscopic cell: `/wp-content/uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg`
  * Senior man suffering kidney pain: `/wp-content/uploads/elementor/thumbs/senior-man-suffering-from-kidney-pain-home-scaled-qmqt0gwgw9z0v8ttdgpw00h14rsvspsp8m6eikcr08.jpg`
  * Urethra-kidney holding crotch anatomical layout: `/wp-content/uploads/elementor/thumbs/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled-qmqt0pd0lsalrqhj02dj4gc6h8n6pzqa9s1ru207g8.jpg`
  * Bell shape design: `/wp-content/uploads/2023/10/bell-shape-1.png`
