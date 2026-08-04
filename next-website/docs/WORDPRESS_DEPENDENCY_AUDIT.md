# WordPress Dependency Audit & Migration Plan
**Project Name:** MMR Hospital Migration Audit  
**Author:** Lead Migration Architect  
**Status:** Completed Analysis  
**Date:** August 4, 2026  

---

## 1. WordPress CSS Inventory

The following table lists every legacy global stylesheet injected into the page `<head>` inside [`app/layout.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/layout.tsx):

| Stylesheet File Path | Purpose | Loaded By | Active Pages | Deletion Risk | Status & Evidence |
| :--- | :--- | :--- | :--- | :---: | :--- |
| `public/css/bootstrap.min.css` | Framework grids and defaults | layout.tsx | None | None | **Verified Safe Removed** (No components reference bootstrap classes) |
| `public/css/widget-slides.min.css` | Slider layout rules | layout.tsx | None | None | **Verified Safe Removed** (Slider was redesigned into standard CSS Grid) |
| `public/wp-content/themes/hello-elementor/header-footer.min.css` | Legacy site header/footer | layout.tsx | None | None | **Verified Safe Removed** (Header and footer use scoped modules) |
| `public/css/frontend-lite.min.css` | Core Elementor grid and columns | layout.tsx | 13+ subpages | **High** | Refactor pages before deleting |
| `public/wp-content/themes/hello-elementor/style.min.css` | Theme layout reset defaults | layout.tsx | All pages | **Medium** | Replaced by global CSS variables |
| `public/wp-content/themes/hello-elementor/theme.min.css` | Theme base variables | layout.tsx | All pages | **Medium** | Replaced by global CSS variables |
| `/wp-content/uploads/elementor/css/post-5721.css` | Page-specific home overrides | page.tsx | Home page | **High** | Purge layout dependencies |
| `/wp-content/uploads/elementor/css/post-7048.css` | Page-specific blogs slug | blogs/page | News/Blogs | **High** | Purge layout dependencies |
| `/wp-content/uploads/elementor/css/post-7084.css` | Page-specific blogs slug | blogs/page | News/Blogs | **High** | Purge layout dependencies |

---

## 2. Image Asset Dependency Registry

All remaining hardcoded pathways pointing to `/wp-content/` are mapped below to their target business-oriented asset variables:

| Component Sourcing | Active Page Router | Image Path | Target Asset Variable |
| :--- | :--- | :--- | :--- |
| `Intro.tsx` | Home page (`/`) | `/wp-content/uploads/2024/03/Untitled-design-37.png` | `SHARED_IMAGES.ivfHeartGraphic` |
| `Intro.tsx` | Home page (`/`) | `/wp-content/uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg` | `SHARED_IMAGES.ivfCellMicroscopeIllustration` |
| `Nephrology.tsx`| Home page (`/`) | `/wp-content/uploads/2024/03/Untitled-design-38.png` | `SHARED_IMAGES.kidneyCareGraphic` |
| `OurHospital.tsx`| Home page (`/`) | `/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png` | `FACILITY_IMAGES.hospitalGeneral` |
| `Founders.tsx` | About us page | `/wp-content/uploads/2024/04/Untitled-design-66.png` | `DOCTOR_IMAGES.founderAnuradha` |
| `Founders.tsx` | About us page | `/wp-content/uploads/2024/04/Untitled-design-67.png` | `DOCTOR_IMAGES.founderPrawash` |
| `DoctorProfile.tsx`| Renal Care page | `/wp-content/uploads/2024/04/Urology-3-768x768.png` | `DOCTOR_IMAGES.doctorPrawashProfile` |
| `page.tsx` | Facilities page | `/wp-content/uploads/2023/12/Layer-616-1.png` | `FACILITY_IMAGES.facilityPlaceholder` |

---

## 3. Legacy Markup & HTML wrappers

Active components containing original WordPress structure wraps are categorized below:

### Safe to Remove:
*   **Elementor Section Wrappers** (`<div class="elementor-section-wrap">`): Only serve as generic layout wraps and contain no styling rules. Can be deleted.
*   **Duplicate Nesting** (`<div class="elementor-widget-container">`): Deep nested layout tags can be flattened safely without affecting page look.

### Needs Refactor:
*   **Grid Columns** (`<div class="elementor-column elementor-col-50">`): Control the responsive widths of side-by-side components. Must be converted to standard flex/grid layouts.

### High Risk:
*   **Slider Elements** (`<div class="swiper-wrapper">`): Bound to JavaScript libraries. Must be refactored with extreme care.

---

## 4. Global CSS Selector Leaks

The following selectors inside [`app/globals.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/globals.css) should be migrated to local CSS Modules:
1.  **Footer Layouts**: `.site-footer`, `.footer-top-container`, `.footer-socials` (Task completed; safe to keep comment header).
2.  **Slider Layouts**: `.elementor-widget-slides`, `.elementor-swiper-button`.
3.  **Review Overlays**: `.testimonial-card`, `.testimonial-quote-icon`.

---

## 5. Inline Styles Register

The remaining inline style properties in layout pages are mapped below:

| Component | Property | Risk | Target Architectural Fix |
| :--- | :--- | :---: | :--- |
| `components/sections/renal-care/DoctorProfile/DoctorProfile.tsx` | `style={{ marginRight: "10px" }}` | Low | Move to scoped CSS Module class. |
| `components/sections/renal-care/DoctorProfile/DoctorProfile.tsx` | `style={{ borderBottom: "none" }}` | Low | Move to scoped CSS Module class. |
| `components/sections/home/Intro/Intro.tsx` | `style={{ color: "var(--color-primary)" }}` | Low | Move to scoped CSS Module class. |

---

## 6. Risk Assessment Matrix

```
LOW RISK (Can Migrate Immediately)
  ├── REF-004 (Purge bootstrap.min.css, widget-slides.min.css, header-footer.css)
  ├── REF-006 (Branding and logo configurations in config/site.ts)
  └── REF-009 (Static pages like contact-us, terms, privacy policy)

MEDIUM RISK (Requires Component Modularization)
  ├── REF-008 (Static grids on WhyChooseUs, OurHospital)
  ├── REF-010 (Nephrology section layout)
  └── REF-012 (Facilities grid page layout)

HIGH RISK (Third-party Slide/Carousel libraries)
  ├── REF-011 (Home Hero Slider - Swiper logic dependency)
  ├── REF-013 (Doctors meet-our-team slider carousel)
  └── REF-014 (Google reviews and Blogs carousels)
```

---

## 7. Prioritized Migration Roadmap & Safe-to-Delete Lists

To perform the migration without regression issues, engineers must follow this order:
1.  **Phase 1**: Remove dead CSS links (`bootstrap`, `slides`, `header-footer` CSS files).
2.  **Phase 2**: Move assets out of `wp-content/uploads/` to `/public/images/`.
3.  **Phase 3**: Rebuild static pages and grids.
4.  **Phase 4**: Rebuild slider carousels, purging `frontend-lite.min.css` and elementor post stylesheets.

### Files Safe to Delete After Migration
*   All assets inside `/public/wp-content/` and elementor stylesheets.

---

## 8. Rebuilt Static Component Audit (OurHospital)
*   **Component**: `OurHospital.tsx`
*   **Status**: ✅ Elementor Layout Removed
*   **Wrappers Removed**: 8 nested `div` layout wrappers (Elementor grid columns, inner sections, widget containers).
*   **Legacy Classes Removed**: 16 Elementor layout classes (e.g., `elementor-section`, `elementor-column`, `elementor-col-50`, `elementor-widget-container`).
*   **Data Attributes Removed**: 12 attributes (e.g., `data-id`, `data-element_type`, `data-settings`).
*   **Remaining Dependencies**: None. All layout markup is native semantic React, and styling is localized in `OurHospital.module.css`.

---

## 9. Rebuilt Static Component Audit (WhyChooseUs)
*   **Component**: `WhyChooseUs.tsx`
*   **Status**: ✅ Elementor Layout Removed
*   **Wrappers Removed**: 0 nested wrappers (already abstracted, but now standardizing container boundaries).
*   **Legacy Classes Removed**: Removed dependencies on global custom grid styles in `Home.module.css`.
*   **Data Attributes Removed**: None.
*   **Remaining Dependencies**: None. Styled via local `WhyChooseUs.module.css`.

---

## 10. Rebuilt Static Component Audit (Nephrology)
*   **Component**: `Nephrology.tsx`
*   **Status**: ✅ Elementor Layout Removed
*   **Wrappers Removed**: Replaced all custom column wrappers with standard `<Container>` and flex grid blocks.
*   **Legacy Classes Removed**: Removed dependencies on global collage styles in `Home.module.css`.
*   **Data Attributes Removed**: None.
*   **Remaining Dependencies**: None. Styled via local `Nephrology.module.css`.
