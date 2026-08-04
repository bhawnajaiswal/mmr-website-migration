# Project Inventory & Classification Map
**Project:** MMR Hospital & IVF Center Migration  
**Auditor:** Next.js Migration Architecture Team  
**Date:** August 4, 2026  

---

## 1. Directory & File Inventory Classification

This section maps and classifies every critical folder and file inside the migration codebase.

### Classification Categories:
1.  **Core Next.js** (App routing, layouts, Next.js build infrastructure)
2.  **React Component** (React views and sections)
3.  **CSS Module** (Scoped component stylesheet variables)
4.  **Global CSS** (Unscoped page-wide styles)
5.  **WordPress Legacy** (Original WordPress database outputs, theme files, styles)
6.  **Migration Layer** (Helper scripts used during the extraction/parsing phase)
7.  **Asset** (Images, SVGs, documents)
8.  **Configuration** (Nav configs, site variables)
9.  **Documentation** (Project guidelines, logs)

---

### Core Files Classification Table

| File / Folder Path | Classification | Purpose | Current Status | Dependencies | Refactor Priority |
| :--- | :--- | :--- | :--- | :--- | :---: |
| [`app/layout.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/layout.tsx) | Core Next.js | Application shell layout, loads global CSS files | Production | `Header.tsx`, `Footer.tsx` | Low |
| [`app/page.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/page.tsx) | Core Next.js | Homepage entry point rendering sections | Production | `Hero.tsx`, `Intro.tsx`, etc. | Low |
| [`app/globals.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/globals.css) | Global CSS | Global custom stylesheet rules & overrides | Production | **None** | Medium |
| [`components/layout/Header/Header.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Header/Header.tsx) | React Component | Main header navigation layout | Production | `Logo.tsx`, `Navigation.tsx` | Low |
| [`components/layout/Footer/Footer.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Footer/Footer.tsx) | React Component | Global site footer layout | Needs Refactor | Legacy styling selectors | Medium |
| [`app/Home.module.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/Home.module.css) | CSS Module | Scoped styling variables for the Homepage | Production | **None** | Low |
| [`app/TreatmentPage.module.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/TreatmentPage.module.css) | CSS Module | Scoped styling variables for Treatment Pages | Production | **None** | Low |
| `public/css/bootstrap.min.css` | Global CSS | Global bootstrap styling framework | Dead | **None** | Low (Delete) |
| `public/css/frontend-lite.min.css` | Global CSS | Elementor framework layout grids | Legacy | Monolithic pages | High |
| `public/wp-content/themes/hello-elementor/header-footer.min.css` | WordPress Legacy | Styles for WordPress theme headers | Dead | **None** | Low (Delete) |
| `public/wp-content/uploads/` | Asset | Storage for images and icons | Legacy | 270+ TSX components | Medium |
| `config/site.ts` | Configuration | Variables (address, links, contact details) | Production | **None** | Low |
| `config/navigation.ts` | Configuration | Defines navigation menus | Production | **None** | Low |
| `copy_assets_final.js` | Migration Layer | Helper script to copy export folders | Legacy (Unused) | **None** | Low (Delete) |
| `parse_page_templates.js` | Migration Layer | Helper script to convert layouts | Legacy (Unused) | **None** | Low (Delete) |

---

## 2. Freeze vs Refactor Selection List

To prevent regression breakages during the migration, the codebase is split into frozen pages and safe-to-refactor zones.

### 🚫 Freeze List (Never Edit Directly)
These files represent stable, fully migrated components. Editing them directly risks breaking production page layouts:
1.  [`components/layout/Header/Header.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Header/Header.tsx) (Refactored to grid structure; stable)
2.  [`components/sections/renal-care/RenalHero/RenalHero.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/sections/renal-care/RenalHero/RenalHero.tsx) (Fully migrated to modular CSS)
3.  [`components/sections/home/Hero/Hero.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/sections/home/Hero/Hero.tsx) (Refactored to grid layouts; stable)

### ✅ Green List (Safe to Refactor First)
These files represent the highest concentrations of redundant code and layout dependencies. They should be refactored first:
1.  [`app/layout.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/layout.tsx) (Move CSS files out of head tag into JS imports)
2.  `public/wp-content/themes/hello-elementor/` (Delete `header-footer.min.css` and verify theme CSS cleanups)
3.  [`components/layout/Footer/Footer.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Footer/Footer.tsx) (Purge unused selectors and apply CSS Module scopes)
4.  Utility files: Delete obsolete `.js` parser scripts in the root directory to clean the workspace.

---

## 3. Core Component Dependency Tree

The relationship tree of the application layout components is outlined below:

```
Root Layout (app/layout.tsx)
  ├── Global Styles (globals.css, bootstrap, frontend-lite, style.min, theme.min)
  │
  ├── Header Shell (components/layout/Header/Header.tsx)
  │     ├── Logo (components/layout/Header/Logo.tsx)
  │     ├── Navigation (components/layout/Header/Navigation.tsx)
  │     └── MobileMenu (components/layout/Header/MobileMenu.tsx)
  │
  ├── Active Routed Pages (within main.site-main-content)
  │     ├── Home Page (app/page.tsx)
  │     │     ├── Hero (components/sections/home/Hero/Hero.tsx)
  │     │     ├── Intro (components/sections/home/Intro/Intro.tsx)
  │     │     ├── Nephrology (components/sections/home/Nephrology/Nephrology.tsx)
  │     │     └── Legacy Sections (WhyChooseUs, Doctors, Statistics, Testimonials, Blogs, Consultation, OurHospital)
  │     │
  │     ├── Renal Care Page (app/renal-care-2/page.tsx)
  │     │     ├── RenalHero (components/sections/renal-care/RenalHero/RenalHero.tsx)
  │     │     ├── RenalIntro (components/sections/renal-care/RenalIntro/RenalIntro.tsx)
  │     │     └── DepartmentGrid (components/sections/renal-care/DepartmentGrid/DepartmentGrid.tsx)
  │     │
  │     └── IVF Care Page (app/treatment-services/page.tsx)
  │           └── IVF Page Sections
  │
  └── Footer Shell (components/layout/Footer/Footer.tsx)
```
