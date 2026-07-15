# WordPress Dependencies & Dynamic Features Replacement Strategy

This document maps all WordPress-specific plugins, theme structures, and dynamic features found in the legacy site, outlining their architectural replacement plan in Next.js.

---

## 1. Dynamic Features Mapped

### Forms & Appointment Flow
* **How it currently works**: 
  * Powered by **WPForms Lite** (ID 6155 "Book Appointment" and ID 6714 "Feedback Form").
  * Submit action triggers synchronous client-side validation via jQuery, records the submission in the MySQL database, and performs a browser-side redirection to `/thank-you-book-consultancy/`.
* **Next.js Replacement Strategy**:
  * Build custom React form components with controlled state.
  * Implement client-side validation using local React state or lightweight validation libraries (like Zod or HTML5 native constraints).
  * On submit, post data asynchronously using `fetch()` to a Next.js API route (`/api/appointment`), which will eventually integrate with the PostgreSQL/Supabase CRM.
  * Use the Next.js Router (`router.push('/thank-you-book-consultancy')`) to perform a smooth redirect upon successful API response.

### Main Homepage Slider
* **How it currently works**:
  * Built using Elementor's Pro Slides widget, backed by the **Swiper JS** library.
  * Toggles background slides, overlay animations, headings, descriptions, and CTA links.
* **Next.js Replacement Strategy**:
  * Install and import the React wrapper for Swiper (`swiper/react`).
  * Replicate the slide styles using Vanilla CSS (`.swiper-slide-bg` background-size, overlay settings).
  * Ensure the same transition settings (autoplay speed: 5000ms, infinite slide, fadeInUp animation on text).

### FAQ Accordion
* **How it currently works**:
  * Built using Elementor's Toggle / Accordion widget. Clicking the heading expands/collapses the content.
* **Next.js Replacement Strategy**:
  * Implement a simple React accordion state using a single index hook (`const [activeIndex, setActiveIndex] = useState<number | null>(null)`).
  * Control heights using CSS transitions (`max-height` or CSS grid transition) to ensure smooth slide animations matching the original Elementor transition.

### Facilities Grid Gallery
* **How it currently works**:
  * A 3-column media grid with lightbox popups when images are clicked.
* **Next.js Replacement Strategy**:
  * Render a CSS Grid layout with standard hover zoom effects.
  * Implement a lightweight custom React lightbox component that renders a modal on state change (`isOpen: boolean`).

### Blog Index & Pagination
* **How it currently works**:
  * Standard WordPress query loop showing posts (like "Rising Infertility Rates in India") with page numbers.
* **Next.js Replacement Strategy**:
  * Store post contents in local markdown (`.md` or `.mdx`) files or local JSON, or pull them via static build queries from Supabase.
  * Implement Next.js Dynamic Routes (`/news-blogs/[slug]`) to render individual articles.
  * Pagination can be achieved through path queries (`?page=2`) or dynamic generation of offset lists.

---

## 2. WordPress System Dependencies

| Legacy WP Element | Dependency / Details | Next.js Replacement Strategy |
|---|---|---|
| **Active Theme** | Hello Elementor theme (`hello-elementor`) | Replaced by global Next.js Layout (`app/layout.tsx` or `pages/_app.tsx`), standard HTML body tags, and a unified global CSS stylesheet (`index.css`). |
| **Page Builder** | Elementor & Elementor Pro plugins | Replaced completely by writing raw JSX components structured to match the legacy DOM tree. Tailwind or raw Vanilla CSS will be used to replicate the layout, margin, padding, colors, and styling rules. |
| **Menu System** | WordPress custom menus (nav_menu_item CPT) | Rendered as hardcoded JSON objects in a configuration file (`config/menu.json`), which are then mapped to React Header/Footer layout components. |
| **SEO Settings** | All in One SEO (AIOSEO) database options | Migrated directly into Next.js Page metadata configs or Page `<Head>` tags. All canonical URLs, titles, descriptions, and OpenGraph tags will be statically defined page-by-page. |
| **Redirects & Cache** | WP-Optimize & Litespeed Cache plugins | Next.js does not require caching plugins. Static generation (`next export` or ISR/SSR) on Vercel serves pages from the Edge CDN. Optimization is built-in. |
| **GTM / Script Inject** | Custom tags inserted in head/footer | Next.js standard Script tag component (`next/script`) will be used to inject the Google Tag Manager container (`GTM-KVLJB48V`) with proper hydration strategies (`afterInteractive`). |
| **Media Library** | Uploads saved under `/wp-content/uploads/` | Extract all image folders and place them directly in the Next.js `/public/uploads/` folder. Use Next.js `<Image />` component for automatic format WebP conversion and responsive resizing. |
| **Shortcodes** | Elementor templates shortcodes (e.g. `[elementor-template id="..."]`) | Replace shortcode placeholders with actual modular React components (e.g., `<ConsultationForm />` or `<Slider />`). |
