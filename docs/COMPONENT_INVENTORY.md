# Component Inventory

This document inventories the reusable UI components identified across the legacy MMR Hospital clinic website. These components will be implemented in Next.js using React and Vanilla CSS.

---

## Global Components

### 1. Header (Navbar)
* **Purpose**: Global website header providing brand identity and site-wide navigation.
* **Layout Structure**:
  * Flex container aligned horizontally (flex-direction: row) wrapping:
    * Left-aligned brand area: Logo image and clinic title ("MMR Hospital & IVF Center") linking back to `/`.
    * Right-aligned desktop nav links with drop-down menus on hover (CSS transitions).
    * Hamburger menu toggle button visible only on screen widths <= `992px` (toggles side-drawer or drop-down menu).
* **Key CSS Class Indicators**: `.header`, `.header .logo`, `.header .right`, `.header-appo`.

### 2. Footer
* **Purpose**: Global footer displaying contact details, social links, and copyrights.
* **Layout Structure**:
  * Background colored block (`--primary`: `#a17bb6`) containing:
    * Clinic logo and summary description.
    * Centered CTA button: "Book Appointment" (styled as `.footer-book-appo` with an embedded calendar icon).
    * Left-aligned contact list (phone numbers +91 9244122040/41/48, email info@mmrhospitals.com, address).
    * Sub-footer copyrights bar containing creator links.
* **Key CSS Class Indicators**: `.footer`, `.footer-contact`, `.footer-book-appo`, `.copyrights`.

### 3. Back To Top
* **Purpose**: Floating button to easily scroll back to the header.
* **Layout Structure**:
  * Rounded orange button (`background-color: #F47920`, `border-radius: 50%`) fixed at the bottom right.
  * Contains a FontAwesome chevron up icon (`\f106`).
* **Key CSS Class Indicators**: `#backtotop`, `#backtotop.visible`.

---

## Page-Specific & Content Components

### 4. Hero Slider (Home Page Banner)
* **Purpose**: Dynamic banner on the homepage showcasing key services.
* **Layout Structure**:
  * Swiper carousel with 2 text-and-button slide layers:
    * **Slide 1**: IVF Center focus ("Best IVF Center In Raipur. We provide the best treatment...").
    * **Slide 2**: Renal Care focus ("Best Kidney Care Center in Raipur. With the help of world-class medical treatment...").
  * Pagination dots at the bottom, navigation arrows on the sides.
* **Key CSS Class Indicators**: `.swiper-slide-banner`, `.banner_text`, `.swiper-pagination-bullet`.

### 5. Treatment Card
* **Purpose**: Grid items showcasing various treatment services.
* **Layout Structure**:
  * Bordered cards (`border: 1px solid #baa1ca`) with a light purple background (`#a17bb6`) containing:
    * Treatment/Service title (H4).
    * Bullet list of key diagnostic checks or sub-services.
    * Link/button to the individual details page.
* **Key CSS Class Indicators**: `.services`, `.services h4`, `.services ul li`.

### 6. Doctor Card
* **Purpose**: Displays doctor profile on the "Our Expert Team" page.
* **Layout Structure**:
  * Column card including:
    * Doctor profile image (circular or rounded border).
    * Doctor name (H3/H4) and credentials (e.g., MBBS, MD, DGO, DNB).
    * Clinical designation (e.g., Gynecologist, Nephrologist).
    * Clinical experience and short biography details.

### 7. Facilities / Infrastructure Gallery
* **Purpose**: Visual presentation of hospital wards, OPD, and labs.
* **Layout Structure**:
  * Responsive 3-column photo grid displaying images for "Lobby and Waiting Area", "OPD", "Patient Ward", "Pharmacy", "Doctor Cabin", "Hospital Building", etc.
  * Uses simple lightboxes when images are clicked (legacy Elementor lightbox dependency).

### 8. FAQ Accordion
* **Purpose**: Displays collapsible FAQs on the FAQs page.
* **Layout Structure**:
  * Vertical list of items:
    * Question bar with click listener toggling active state.
    * Right-aligned toggle indicator icon (plus/minus).
    * Expandable text description showing/hiding with transition.
* **Key CSS Class Indicators**: `.envato-kit-140-faq`, `.elementor-accordion-item`.

---

## Interactive Form Components

### 9. Appointment Booking Form (WPForms ID: 6155 / 6714)
* **Purpose**: Primary form to schedule appointments or consultation inquiries.
* **Layout Structure**:
  * Input fields:
    * Full Name (text, required)
    * Email Address (email, optional)
    * Mobile Number (tel, required)
    * Select Department (Gynecology Problems vs. Renal Problems)
    * Brief Description / Message (textarea, optional)
  * Submit Button: Styled to match clinical buttons (`.btn-primary`).
* **Key CSS Class Indicators**: `input.form-control`, `select.form-control`, `textarea.form-control`, `.btn-primary`.
