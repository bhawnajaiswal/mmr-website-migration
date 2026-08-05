# Post-Migration Codebase Cleanup Report
**Project:** Next.js Migration Architecture  
**Author:** Staff Next.js Performance Engineer  
**Status:** Completed  
**Date:** August 5, 2026  

---

## 1. Cleaned Files & Metadata Purged

Legacy WordPress Elementor metadata attributes (`columnId`, `widgetId`, `socialWidgetId`, `degreeWidgetId`, etc.) that were leftover from raw page copies were audited and removed.

| Component Path | Cleaned Elements | Implementation Changes |
| :--- | :--- | :--- |
| `components/sections/home/Doctors/Doctors.tsx` | `columnId`, `socialWidgetId`, `imageWidgetId`, `nameWidgetId`, `degreeWidgetId`, `descWidgetId` | Removed unused Elementor attributes from the static `DOCTORS` array; updated mapping key to use `doc.name`. |
| `components/sections/home/WhyChooseUs/WhyChooseUs.tsx` | `columnId`, `widgetId` | Removed unused ID attributes from `ROW_1_CARDS` and `ROW_2_CARDS`; updated mapping key to `card.title`. |

*Note: In legacy template-block modules (such as `SpecialFacilities.tsx`), inline Elementor `data-id` properties have been preserved intentionally because global WordPress stylesheets consume these selectors for styling.*

---

## 2. Unused / Dead Imports & Constants

*   **Imports**: verified clean across modified Client & Server components.
*   **Roboto Slab**: Purged from global stylesheet parameters and loaders since it is not consumed in active CSS layouts.
*   **Swiper CSS**: Purged from `app/layout.tsx` because carousels are handled by native custom React components.

---

## 3. Asset Registry & Orphaned Assets Audit

An audit of the `public/` directory identified the following candidates for removal or review:

### Safe to Delete (Unused Boilerplate)
*   `public/file.svg`
*   `public/globe.svg`
*   `public/next.svg`
*   `public/vercel.svg`
*   `public/window.svg`

### Verify Before Deleting (Unused Uploads)
*   Various older images inside `public/wp-content/uploads/` (such as unused blog thumbnails or legacy gallery images) that are not linked in `config/assets/` registries.

---

## 4. Remaining Technical Debt
1.  **Legacy Class Names Cleanup**: Remove global `.elementor-*` selectors in `globals.css` once all subpages are fully migrated to scoped CSS Modules.
2.  **Asset Consolidation**: Shift remaining dynamic `/wp-content/` upload references into standardized local directories (`/images/`).
