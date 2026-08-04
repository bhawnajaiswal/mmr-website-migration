# Refactoring Master Plan & Migration Roadmap
**Project Name:** MMR Hospital & IVF Center Migration  
**Author:** Lead Migration Architect  
**Status:** Approved for Implementation  
**Date:** August 4, 2026  

---

## 1. Executive Summary

This document serves as the Technical Execution Plan and Refactoring Master Plan for the final stages of the WordPress-to-Next.js migration. Based on the previous architectural reviews and runtime validations, the current state of the codebase is mapped as follows:

*   **Migration Maturity**: **Partially Complete**. Core layouts (Header, new Home Hero, new Kidney Care Hero) have been refactored to modern React grid architectures and CSS Modules. However, the footer and subpages (such as `/capd`, `/daignostic`, `/facilities`, etc.) are wrapped WordPress Elementor structures.
*   **Biggest Architectural Risks**: Cascading styling pollution. Because 11 global stylesheets are loaded directly via the root layout HTML `<head>`, changes to spacing in one area frequently cause spacing regressions in others due to overlapping legacy CSS specificity rules.
*   **Major Technical Debt**:
    *   270+ hardcoded asset references to `/wp-content/uploads/` directory inside `public`.
    *   Direct reliance on `frontend-lite.min.css` (Elementor styling) and Hello Elementor theme layouts for column grids on subpages.
    *   Obsolete utility node scripts and zipped archives lingering in production folders.
*   **Current Strengths**: Scalable App Router structure, type-checked config schemas (`navigation.ts`, `site.ts`), and successfully compiling build pipelines.
*   **Current Weaknesses**: Large CSS payloads, lack of image optimization (no `next/image` usage), and fragile layout overrides.

---

## 2. Engineering Principles

Every engineer refactoring this codebase must adhere to the following rules:

1.  **Preserve Visual Parity**: All refactoring must match the existing production design exactly. Refactoring should improve code architecture and structure, not visually redesign pages.
2.  **Atomic Commits**: Never perform multiple workstreams in a single commit. Refactor, test, verify, and commit atomically.
3.  **Build Validation**: Every refactor commit must build successfully (`npm run build`). No commits with compilation, ESLint, or TypeScript warnings.
4.  **Defined Rollbacks**: Every workstream must have a clear rollback point in Git.
5.  **Evidence-Based Deletions**: Never delete a legacy stylesheet or script file without showing that its selectors are unused across all page router nodes.
6.  **Style Isolation**: Prefer scoped CSS Modules (`.module.css`) over global stylesheets. Keep component styles encapsulated.
7.  **No Spacing Hacks**: Do not use negative margins, arbitrary padding offsets, or absolute positioning overrides to compensate for parent grid/flex misalignments.

---

## 3. Refactoring Roadmap (12 Workstreams)

### Workstream 1: Header Architecture
*   **Goal**: Decouple branding from navigation and solidify fluid spacing.
*   **Files Involved**: [`components/layout/Header/Header.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Header/Header.tsx), [`components/layout/Header/Logo.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/components/layout/Header/Logo.tsx), [`app/globals.css`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/globals.css).
*   **Dependencies**: **None**.
*   **Estimated Complexity**: Low.
*   **Risk**: Low.
*   **Rollback Strategy**: Revert to tag `stable-header-grid`.
*   **Acceptance Criteria**: Navigation stays centered inside CSS Grid track; logo heights are constrained correctly; mobile hamburger triggers exactly at `1024px`.
*   **Testing Checklist**: Check on 1920px desktop, 1024px tablet, and 375px mobile for alignment.
*   **Recommended Git Branch**: `refactor/header-architecture`

### Workstream 2: Footer Architecture
*   **Goal**: Convert the legacy footer styling to scoped CSS Modules and remove Hello Elementor overrides.
*   **Files Involved**: `components/layout/Footer/Footer.tsx`, `components/layout/Footer/Footer.module.css` (New), `app/globals.css`.
*   **Dependencies**: Header grid stability.
*   **Estimated Complexity**: Medium.
*   **Risk**: Low.
*   **Rollback Strategy**: Reset footer component changes.
*   **Acceptance Criteria**: Grid layout is preserved; WordPress classes are removed from markup; styles are encapsulated.
*   **Recommended Git Branch**: `refactor/footer-architecture`

### Workstream 3: Global CSS Cleanup
*   **Goal**: Purge dead global stylesheets and move active global sheets into standard JS layout imports.
*   **Files Involved**: `app/layout.tsx`, `public/css/bootstrap.min.css`, `public/css/widget-slides.min.css`, `public/wp-content/themes/hello-elementor/header-footer.min.css`.
*   **Dependencies**: Subpage CSS modularization.
*   **Estimated Complexity**: High.
*   **Risk**: High (potential typography/layout shifts on unreviewed pages).
*   **Rollback Strategy**: Revert `layout.tsx` link tags.
*   **Acceptance Criteria**: Unused stylesheets are deleted; active styles are imported via Next.js JS bundler.
*   **Recommended Git Branch**: `refactor/global-css-cleanup`

### Workstream 4: WordPress Dependency Removal
*   **Goal**: Purge WordPress classes and layout grid dependencies.
*   **Files Involved**: Subpage files (`app/capd/page.tsx`, `app/facilities/page.tsx`, etc.), `public/css/frontend-lite.min.css`.
*   **Dependencies**: Workstream 3.
*   **Estimated Complexity**: High.
*   **Risk**: High.
*   **Rollback Strategy**: Restore `frontend-lite.min.css` link.
*   **Recommended Git Branch**: `refactor/wp-dependency-removal`

### Workstream 5: Asset Migration
*   **Goal**: Move active assets out of `wp-content/uploads/` and de-duplicate files.
*   **Files Involved**: All TSX page files, `public/wp-content/uploads/`, `public/images/`.
*   **Dependencies**: Workstream 4.
*   **Estimated Complexity**: Medium.
*   **Risk**: Low (broken images if paths mismatch).
*   **Rollback Strategy**: Restore uploads directory backup.
*   **Recommended Git Branch**: `refactor/asset-migration`

### Workstream 6: Navigation Cleanup
*   **Goal**: Streamline config data structures and clean drawer toggle animations.
*   **Files Involved**: `config/navigation.ts`, `components/layout/Header/Navigation.tsx`, `components/layout/Header/MobileMenu.tsx`.
*   **Dependencies**: Workstream 1.
*   **Estimated Complexity**: Low.
*   **Recommended Git Branch**: `refactor/navigation-cleanup`

### Workstream 7: Responsive Layout Cleanup
*   **Goal**: Replace rigid pixel widths on subpages with fluid container layouts.
*   **Files Involved**: `app/TreatmentPage.module.css`, subpages.
*   **Dependencies**: Workstream 4.
*   **Estimated Complexity**: Medium.
*   **Recommended Git Branch**: `refactor/responsive-cleanup`

### Workstream 8: Home Page Cleanup
*   **Goal**: Rewrite remaining legacy homepage sections to scoped components and remove page-specific stylesheet dependency.
*   **Files Involved**: `app/page.tsx`, `app/Home.module.css`, `public/wp-content/uploads/elementor/css/post-5721.css`.
*   **Dependencies**: Workstream 3.
*   **Estimated Complexity**: High.
*   **Recommended Git Branch**: `refactor/home-page-cleanup`

### Workstream 9: Renal Page Cleanup
*   **Goal**: Refactor Kidney Care components to fully separate markup from styling.
*   **Files Involved**: `app/renal-care-2/page.tsx`, `app/TreatmentPage.module.css`.
*   **Dependencies**: Workstream 7.
*   **Estimated Complexity**: Medium.
*   **Recommended Git Branch**: `refactor/renal-page-cleanup`

### Workstream 10: IVF Page Cleanup
*   **Goal**: Rebuild IVF service pages to remove Elementor dependencies.
*   **Files Involved**: `app/ivf/page.tsx`, `app/icsi-treatment/page.tsx`, etc.
*   **Dependencies**: Workstream 7.
*   **Estimated Complexity**: High.
*   **Recommended Git Branch**: `refactor/ivf-page-cleanup`

### Workstream 11: Shared Component Cleanup
*   **Goal**: Standardize card layouts, buttons, and call-to-action blocks into shared, reusable UI elements.
*   **Files Involved**: `components/common/`, `components/sections/shared/`.
*   **Dependencies**: Workstream 2.
*   **Estimated Complexity**: Medium.
*   **Recommended Git Branch**: `refactor/shared-components`

### Workstream 12: Performance Optimization
*   **Goal**: Replace raw `<img>` tags with optimized `next/image` components and enable font optimization.
*   **Files Involved**: All pages and layout headers/footers.
*   **Dependencies**: Workstream 5.
*   **Estimated Complexity**: Medium.
*   **Recommended Git Branch**: `perf/optimize-assets`

---

## 4. Work Breakdown Structure (WBS)

| Task ID | Title | Description | Files Involved | Risk | Dependencies | Effort | Status |
| :--- | :--- | :--- | :--- | :---: | :--- | :---: | :---: |
| **REF-001** | Header Grid Centering | Validate header 3-column grid centering and fluid logo width bounds. | `Header.tsx`, `globals.css` | Low | None | 2h | Todo |
| **REF-002** | Header Breakpoint Shift | Shift responsive drawer trigger to `1024px` and set padding limits. | `Header.tsx`, `globals.css` | Low | REF-001 | 1h | Todo |
| **REF-003** | Footer Modularization | Extract footer styles to `Footer.module.css` and purge hello styles. | `Footer.tsx`, `globals.css` | Low | None | 4h | Todo |
| **REF-004** | Dead Script Purging | Delete jQuery, Bootstrap JS, and Wow scripts from `/public/js`. | `public/js/` | Low | None | 1h | Todo |
| **REF-005** | Redundant CSS Deletion | Remove `bootstrap.min.css`, `widget-slides.min.css`, `header-footer.css`.| `layout.tsx`, `public/css` | Low | None | 2h | Todo |
| **REF-006** | Asset Folder Relocation | Move media folder to `/public/images/` and run regex path changes. | Page files, uploads dir | Medium| None | 6h | Todo |
| **REF-007** | Global CSS Head Move | Move active stylesheets from layout HTML head to Javascript imports. | `layout.tsx` | Medium| REF-005 | 2h | Todo |
| **REF-008** | Home Legacy Purge | Rebuild WhyChooseUs and Doctors sections using CSS Modules. | `page.tsx`, `Home.module.css` | High | REF-007 | 12h | Todo |
| **REF-009** | Subpage Column Rewrite | Replace Elementor grids in `/capd` and `/facilities` with flex layouts.| Subpages, `TreatmentPage.module.css` | High | REF-007 | 16h | Todo |
| **REF-010** | Image Optimization | Swap standard HTML image tags with `<Image />` component wrappers. | All page files | Medium| REF-006 | 8h | Todo |

---

## 5. Refactor Order & Execution Sequence

To ensure stable transitions without layout regressions, implementation must follow this exact order:

```
[Phase 1: Dead Code Cleanup] (REF-004, REF-005)
              ↓
[Phase 2: Layout & Global Styles] (REF-001, REF-002, REF-003, REF-007)
              ↓
[Phase 3: Asset Migration] (REF-006)
              ↓
[Phase 4: WordPress Grid Removal] (REF-008, REF-009)
              ↓
[Phase 5: Performance Optimization] (REF-010)
```

### Engineering Reasoning
1.  **Phase 1 (Dead Code Cleanup)**: Safest to execute first because deleting unreferenced scripts and unused stylesheets (`bootstrap.min.css`, slides CSS) has zero risk of altering layout visual behavior.
2.  **Phase 2 (Layout & Global Styles)**: Establishes a clean, modern layout base. Moving stylesheets to JS imports ensures compilation bundling operates correctly before altering page contents.
3.  **Phase 3 (Asset Migration)**: Moving uploads assets to `/public/images/` ensures a consistent media asset layer is configured before we begin refactoring page layouts in Phase 4.
4.  **Phase 4 (WordPress Grid Removal)**: High-risk phase. Modifying legacy grids on the Home and service pages requires constant build validations. Doing this after global style cleanup prevents style conflicts.
5.  **Phase 5 (Performance Optimization)**: Replacing images with next/image elements is done last since it requires stable, absolute image dimensions and paths.

---

## 6. Validation Checklist

Every completed task must pass this checklist before merging into the main branch:

*   [ ] **Compile Check**: `npm run build` runs successfully with zero errors.
*   [ ] **Visual Parity**: No layout changes or spacing shifts occur on 1920px (Desktop), 1024px (Tablet), and 375px (Mobile).
*   [ ] **Console Cleanliness**: Zero JS console errors, warnings, or missing assets logs.
*   [ ] **Route Check**: All links listed in `navigation.ts` resolve to the correct page paths.
*   [ ] **Regression Check**: Hero sections and headers remain stable.
*   [ ] **Git Isolation**: Code is committed independently under the specific task branch.

---

## 7. Rollback Strategy

*   **Version Control Protocol**:
    *   Work must be developed in branch-specific pull requests (e.g. `refactor/footer-architecture`).
    *   Before merging, a Git tag (e.g., `pre-footer-refactor`) must be pushed to the remote repository.
*   **Reversion Execution**:
    *   In case of layout shifts or regressions, discard current changes: `git reset --hard PRE_TAG_NAME`.
*   **Commit Constraints**:
    *   Never mix global CSS edits with local component logic changes in the same commit.
    *   Never combine asset renaming with page layout structural changes.

---

## 8. Definition of Done (DoD)

A task is considered "Done" when:

*   **Architecture**: Elementor style blocks and WordPress specific identifiers are completely removed from the refactored component.
*   **Maintainability**: Styling is handled by CSS Modules, utilizing theme color tokens (`var(--color-primary)`) rather than hardcoded colors.
*   **Performance**: LCP images use Next.js `next/image` with lazy loading enabled for secondary images.
*   **Accessibility**: Interactive components feature appropriate ARIA roles (e.g., `aria-expanded` on navigation submenus).
*   **Code Quality**: Linter rules compile successfully with zero warnings.
*   **Documentation**: Page updates or route shifts are updated in `PROJECT_INVENTORY.md`.
