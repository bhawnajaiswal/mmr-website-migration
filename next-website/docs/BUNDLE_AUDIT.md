# Bundle Audit Report
**Project:** Next.js Migration Architecture  
**Author:** Staff Next.js Performance Engineer  
**Status:** Complete  
**Date:** August 5, 2026  

---

## 1. Client Component Bundle Inventory

An audit of the client-side dependencies and bundle footprint shows the following candidates for lazy-loading or dynamic imports:

| Component | Why Included | Can be lazy loaded? | Can become Server Component? | Recommendation | Estimated Savings |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `Testimonials` | Patient feedback slideshow | **Yes** | No (requires timer states) | Dynamically load using `next/dynamic` with `ssr: false` since it is below the fold. | *Bundle analysis required to quantify savings* |
| `Blogs` | News and insights carousel | **Yes** | No (requires window resize events) | Dynamically load using `next/dynamic` below the fold. | *Bundle analysis required to quantify savings* |
| `Doctors` | Specialist team grid | **Yes** | No (needs scroll-reveal animation hooks) | Dynamically load using `next/dynamic` below the fold. | *Bundle analysis required to quantify savings* |
| `Consultation` | Form handling and API endpoints | **Yes** | No (dynamic inputs & states) | Dynamically load using `next/dynamic` below the fold. | *Bundle analysis required to quantify savings* |
| `WhyChooseUs` | Features lists | **Yes** | No (scroll anim states) | Dynamically load using `next/dynamic` below the fold. | *Bundle analysis required to quantify savings* |
| `Statistics` | Animated counter cards | **Yes** | No (visibility triggers) | Dynamically load using `next/dynamic` below the fold. | *Bundle analysis required to quantify savings* |

*Note: A dedicated bundle analysis utility (such as `@next/bundle-analyzer`) is required to measure and quantify exact byte savings in the production javascript bundles.*

---

## 2. Heavy Library Dependencies

### A. Swiper Library
*   **Active Status**: Swiper styles are imported in `app/layout.tsx` (`/css/swiper-bundle.min.css`), but the actual library javascript bundle is not imported in the active React codebase (the sliders on Home use native React CSS transitions and layout offsets).
*   **Optimization**: Swiper styles should be dynamically imported or lazy-loaded, or completely removed if Swiper is not used by any active page.

### B. FontAwesome Stylesheet
*   **Active Status**: The entire FontAwesome library is loaded in the layout head (`/css/fontawesome/css/all.min.css`). This is blocking initial page render.
*   **Optimization**: Isolate used icons into static SVG paths or load the stylesheet asynchronously.
