# Page Dependency Map

This document maps the exact theme templates, reusable layout components, specific CSS/JS files, image files, and WordPress plugin dependencies for every page.

---

## Global Asset References (Active Site-wide)
All pages include these baseline resources:
* **CSS Files**: `css/common.css` (resets, layout `.container` rules), `css/style.css` (primary custom formatting, headers, footers), `css/responsive.css` (media query breakpoints), `css/bootstrap.min.css` (Bootstrap utilities), `css/fontawesome/css/all.min.css` (icon set).
* **JS Files**: `js/jquery-3.2.1.min.js`, `js/bootstrap.bundle.min.js`, `js/wow.min.js` (scroll animations).
* **WordPress Core Plugins**: Elementor Core, Elementor Pro, AIOSEO.

---

## Page-by-Page Dependency Mapping

### 1. Home Page (`/` - ID: 5721)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Hero Slider, FAQ Accordion, Treatment Card Grid, BackToTop.
* **Page-Specific CSS**: `uploads/elementor/css/post-5721.css`, `css/swiper-bundle.min.css`.
* **Page-Specific JS**: `js/swiper-bundle.min.js`.
* **Image Assets**: 
  * Logo: `uploads/2023/10/logo-copy.png`
  * Slider Pagination Dot: `uploads/images/dot.png`
  * Active Dot: `uploads/images/active-dot.png`
  * IVF Embryo Hands: `uploads/elementor/thumbs/woman-s-hands-support-human-embryo-icon-blurred-background-tree-scaled-...`
  * IVF Microscopic View: `uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg`
  * Kidney Patient Pain: `uploads/elementor/thumbs/senior-man-suffering-from-kidney-pain-home-scaled-...`
  * Male Anatomy illustration: `uploads/elementor/thumbs/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled-...`
* **WP Plugin Dependency**: Swiper slider is run by Elementor Pro Slides widget.

### 2. Consultation for Gynecology Problems (`/consultation/` - ID: 1801)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Appointment Form, BackToTop.
* **Page-Specific CSS**: `uploads/elementor/css/post-1801.css`
* **Image Assets**: Gynecology banner illustrations.
* **WP Plugin Dependency**: WPForms (ID 6155 "Book Appointment").

### 3. Consultation for Renal Problems (`/consultation-for-renal-problems/` - ID: 3731)
* **WordPress Template**: `elementor_header_footer`
* **Components Used**: Header, Footer, Appointment Form, BackToTop.
* **Page-Specific CSS**: `uploads/elementor/css/post-3731.css`
* **WP Plugin Dependency**: WPForms (ID 6155 "Book Appointment").

### 4. Treatment & Services (`/treatment-services/` - ID: 5948)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Treatment Card Grid, BackToTop.
* **Page-Specific CSS**: `uploads/elementor/css/post-5948.css`

### 5. Infertility Treatment Pages (IVF, IUI, IVM, ICSI, etc.)
* **Applies to Pages**: `/ivf/` (5969), `/iui/` (6201), `/ivm/` (6206), `/fertility-preservation-2/` (6211), `/icsi-treatment/` (6217), `/infertility-men-women/` (6222), `/ectopic-pregnancy-2/` (6227), `/female-infertility/` (6232), `/male-infertility/` (6237), `/infertility-testing/` (6242), `/daignostic/` (6253).
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, BackToTop, specific treatment illustrations.
* **Page-Specific CSS**: Corresponding Elementor styles `uploads/elementor/css/post-[ID].css`.

### 6. Renal Care Pages (CAPD, Proteinuria, UTI)
* **Applies to Pages**: `/capd/` (6358), `/evaluation-of-proteinuria/` (6366), `/uti-urinary-tract-infection/` (6374).
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, BackToTop.
* **Page-Specific CSS**: Elementor dynamic post styles.

### 7. FAQs (`/faqs/` - ID: 6174)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, FAQ Accordion, BackToTop.
* **Page-Specific CSS**: Accordion structural CSS rules.
* **WP Plugin Dependency**: Elementor Toggle/Accordion widget.

### 8. Our Expert Team (`/our-expert-team/` - ID: 6166)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Doctor Card Grid, BackToTop.
* **Page-Specific CSS**: Profile grid classes.
* **Image Assets**: Medical staff profile pictures.

### 9. Facilities (`/facilities/` - ID: 155)
* **WordPress Template**: `elementor_header_footer`
* **Components Used**: Header, Footer, Grid Gallery, BackToTop.
* **Page-Specific CSS**: Elementor Media Grid classes.
* **Image Assets**: Wards, OT, Pharmacy, Lobby pictures.

### 10. Feedback (`/feedback/` - ID: 6718)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Contact Form, BackToTop.
* **WP Plugin Dependency**: WPForms (ID 6714 "Feedback Form").

### 11. Contact Us (`/contact-us/` - ID: 6684)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Contact Form, Maps Embed, BackToTop.
* **WP Plugin Dependency**: WPForms (ID 6155 "Book Appointment").

### 12. News & Blogs (`/news-blogs/` - ID: 159)
* **WordPress Template**: `elementor_canvas`
* **Components Used**: Header, Footer, Blog Card list, Pagination navigation.
* **WP Plugin Dependency**: Standard WordPress WP_Query loop.

### 13. Legal/Utility Pages (Privacy Policy, Terms of Use, Disclaimer)
* **Applies to Pages**: `/privacy-policy/` (3), `/disclaimer/` (4148), `/terms-of-use/` (4160), `/thank-you-book-consultancy/` (1559).
* **WordPress Template**: `elementor_header_footer` or `elementor_canvas`
* **Components Used**: Header, Footer.
* **Page-Specific CSS**: Simple structural CSS (non-Elementor layout on Policy/Terms).
