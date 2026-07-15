# Migration Risks & Technical Blockers

This document identifies potential risks, blockers, complex modules, and dependencies associated with the technology migration from WordPress/Elementor to Next.js.

---

## 1. Complex & Layout-Heavy Pages

### Home Page (`/`)
* **Risk**: High structural complexity. The page is built using dozens of nested Elementor containers, overlapping CSS positioning (e.g. `.contact-bg` offset by `-290px`), and customized animations.
* **Mitigation**: Implement CSS Grid and Flexbox structures in Vanilla CSS, matching the desktop container width (`1410px`) and using mobile breakpoints (`992px` and `767px`) to shift the positions exactly as styled.

### Consultation Pages (`/consultation/` & `/consultation-for-renal-problems/`)
* **Risk**: These pages combine detailed medical descriptions with custom styled drop-down select controls (`select.form-control`) that have distinct layouts and values.
* **Mitigation**: Develop a standardized, reusable React form field stylesheet to handle the input, textarea, and select dropdown aesthetics across these forms.

---

## 2. JavaScript & Animation Dependencies

### Scroll-Triggered Animations (WOW.js & Animate.css)
* **Risk**: The legacy site makes heavy use of scroll-triggered fade-ins and slide-ups (`animated-slow`, `elementor-invisible` classes).
* **Mitigation**: Avoid importing heavy legacy jQuery or jQuery-dependent libraries. Instead, utilize the native browser **Intersection Observer API** combined with modern CSS transition classes to toggle element visibility smoothly.

### Swiper Banner Carousel
* **Risk**: Replicating custom dot paginations (`dot.png` and `active-dot.png`) and text slide transitions exactly as styled in Swiper JS.
* **Mitigation**: Utilize React Swiper (`swiper/react`) and style pagination elements to use identical image assets.

---

## 3. Third-Party Integrations

### Google Tag Manager (GTM)
* **Risk**: Loss of analytics tracking data if script execution timings or parameters are changed.
* **Mitigation**: Inject standard script containers (`GTM-KVLJB48V`) inside the Next.js `app/layout.tsx` using `next/script` with a loading strategy of `afterInteractive`.

---

## 4. Migration Blockers & Hardcoded Dependencies

### Massive Backup ZIP File (4.2 GB)
* **Risk**: The local codebase in the git workspace does not contain the `/wp-content/uploads/` files in an unzipped state. Extracting a 4.2 GB zip file can cause storage issues and slow down development environments.
* **Mitigation**: Unzip only the necessary folders (like `wp-content/uploads/2023/` and `wp-content/uploads/2024/`) locally and move them to `public/uploads/`. Do not commit the entire unzipped uploads directory to git if it exceeds file size limits; use a CDN or local assets ignore list.

### Hardcoded Absolute Domains
* **Risk**: Database entries and CSS reference absolute links (e.g., `https://mmrhospitals.com/ivf/`). In local development, clicking these will redirect developers to the live site instead of local pages.
* **Mitigation**: Parse content dynamically to replace `https://mmrhospitals.com` with relative paths, or define a base site URL in Next.js environment configurations.

### Separated CRM Development
* **Risk**: The CRM (Supabase/PostgreSQL) is being developed in parallel by a separate team. Form API routes are not yet available.
* **Mitigation**: Create client-side mock submission endpoints that return a simulated success status code and redirect correctly, keeping CRM connection variables modular. Do not code direct CRM endpoints yet.
