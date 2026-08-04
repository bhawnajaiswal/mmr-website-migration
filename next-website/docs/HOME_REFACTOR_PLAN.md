# Home Page Refactoring Plan
**Project Name:** MMR Hospital Home Page Modernization  
**Author:** Lead React Architect  
**Status:** Approved Phase 1  
**Date:** August 4, 2026  

---

## 1. Current Architecture vs Target Architecture

### Current Architecture
*   **Orchestration**: [`app/page.tsx`](file:///c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/app/page.tsx) is a clean shell imports and calls 10 modular sections located under `components/sections/home/`.
*   **Styling**: Sections mix custom CSS Modules (`Home.module.css`) with global overrides (`globals.css`) and legacy WordPress layouts (`post-5721.css`).
*   **Encapsulation**: Layout divisions use raw html containers and static anchors.

### Target Architecture
*   **Orchestration**: Main page remains a shell calling localized blocks.
*   **Styling**: Full modularization. Unused CSS declarations in `Home.module.css` are purged. Page-specific WordPress stylesheets are deleted.
*   **Encapsulation**: Layout elements are wrapped in standard `Container`, `Button`, and `SectionHeader` components, consuming shared design tokens.

---

## 2. Section Hierarchy & Dependency Tree

The homepage execution tree is structured as follows:

```
Home Page (app/page.tsx)
  ├── Hero Section (Hero.tsx)                      - High Risk (Swiper-based)
  ├── Intro Section (Intro.tsx)                    - Low Risk (Consumes Container, Button) [REF-006]
  ├── Nephrology Section (Nephrology.tsx)          - Medium Risk (Illustration blocks)
  ├── WhyChooseUs Section (WhyChooseUs.tsx)        - Medium Risk (WordPress layouts)
  ├── Doctors Section (Doctors.tsx)                - High Risk (Doctor slider)
  ├── Statistics Section (Statistics.tsx)          - Low Risk (Consumes Container, CounterCard) [REF-006]
  ├── Testimonials Section (Testimonials.tsx)      - High Risk (Review blocks)
  ├── Blogs Section (Blogs.tsx)                    - High Risk (Blogs slider)
  ├── Consultation Section (Consultation.tsx)      - Low Risk (Consumes Container, Button) [REF-006]
  └── OurHospital Section (OurHospital.tsx)        - Medium Risk (Static grid)
```

---

## 3. Refactoring Roadmap (Phased Migration)

To avoid layout regressions, the modernization of the home sections operates in four incremental phases:

*   **Phase 1: Foundation Cleanups (REF-006 - Complete)**:
    *   Integrate `Container` and `Button` inside low-risk sections: `Intro`, `Statistics`, and `Consultation` (Form).
    *   Validate visual parity is preserved.
*   **Phase 2: Layout Alignments**:
    *   Refactor standard sections (`Nephrology`, `OurHospital`, `WhyChooseUs`) to replace layout divisions with standard CSS grids.
*   **Phase 3: High-Risk Carousel Refactoring**:
    *   Convert slider components (`Hero`, `Doctors`, `Blogs`, `Testimonials`) to clean React components and purge `post-5721.css`.
*   **Phase 4: Purge & Performance**:
    *   Swap all images with Next.js `Image` components.

---

## 4. Risk Assessment & Mitigations

*   **Slide Animation Breaks**:
    *   *Risk*: Swiping carousels on tablet views shift styling alignment.
    *   *Mitigation*: Postpone Hero and slider edits to Phase 3. Maintain legacy styles during Phase 1.
*   **Form Submission Failures**:
    *   *Risk*: Rewriting Consultation buttons breaks AJAX form submissions.
    *   *Mitigation*: Button component preserves `type="submit"` properties without injecting routing Link anchors.
