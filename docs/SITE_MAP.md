# Website Inventory & Navigation Sitemap

This document lists all published pages and posts from the legacy WordPress database and live website (`https://mmrhospitals.com`), along with their functional details and navigation layout.

## 1. Website Inventory

The website contains **34 published pages** and **5 published blog posts/diagnostics**. All core pages are built using Elementor, unless specified otherwise.

| Page ID | Page Title | Slug / Path | Type | Uses Form? | Uses JS? | WP Dep? | Purpose |
|---|---|---|---|---|---|---|---|
| **5721** | Home | `/` | Dynamic | Yes (Appointment) | Yes | Yes | Homepage: overview of services, banner slider, stats, reasons to choose |
| **6652** | WHY MMR Hospital & IVF Center | `/why-mmr-hospital-ivf-center/` | Static | No | Yes | Yes | Detailed history and value proposition |
| **1801** | Consultation for Gynecology Problems | `/consultation/` | Dynamic | Yes (Consultation) | Yes | Yes | Specialized inquiry page for gynecology problems |
| **3731** | Consultation for Renal Problems | `/consultation-for-renal-problems/` | Dynamic | Yes (Consultation) | Yes | Yes | Specialized inquiry page for renal / kidney problems |
| **5948** | Treatment & services | `/treatment-services/` | Static | No | Yes | Yes | Services overview with links to individual treatments |
| **5969** | IVF | `/ivf/` | Static | No | Yes | Yes | In-vitro fertilization page (treatment details) |
| **6201** | IUI | `/iui/` | Static | No | Yes | Yes | Intrauterine insemination details |
| **6206** | IVM | `/ivm/` | Static | No | Yes | Yes | In Vitro Maturation details |
| **6211** | Fertility Preservation.. | `/fertility-preservation-2/` | Static | No | Yes | Yes | Egg/sperm freezing details |
| **6217** | ICSI.... | `/icsi-treatment/` | Static | No | Yes | Yes | Intracytoplasmic Sperm Injection details |
| **6222** | Infertility men & women | `/infertility-men-women/` | Static | No | Yes | Yes | Combined infertility overview |
| **6227** | Ectopic Pregnancy.. | `/ectopic-pregnancy-2/` | Static | No | Yes | Yes | Ectopic pregnancy risks & treatments |
| **6232** | Female Infertility | `/female-infertility/` | Static | No | Yes | Yes | Causes and treatments of female infertility |
| **6237** | Male Infertility | `/male-infertility/` | Static | No | Yes | Yes | Causes and treatments of male infertility |
| **6242** | Infertility Testing | `/infertility-testing/` | Static | No | Yes | Yes | Diagnostic and laboratory procedures for fertility |
| **6253** | Diagnostic | `/daignostic/` | Static | No | Yes | Yes | Laboratory testing and diagnostic imaging |
| **6144** | Renal care | `/renal-care-2/` | Static | No | Yes | Yes | Kidney care overview |
| **6358** | CAPD | `/capd/` | Static | No | Yes | Yes | Continuous Ambulatory Peritoneal Dialysis details |
| **6366** | Evaluation of proteinuria | `/evaluation-of-proteinuria/` | Static | No | Yes | Yes | Testing and managing protein in urine |
| **6374** | UTI ( urinary tract infection ) | `/uti-urinary-tract-infection/` | Static | No | Yes | Yes | Details on urinary tract infections |
| **6174** | FAQs | `/faqs/` | Dynamic | No | Yes | Yes | Interactive collapsible accordion for general questions |
| **5925** | About Us | `/about-us/` | Static | No | Yes | Yes | Corporate details, founders, and clinic philosophy |
| **6166** | Our Expert Team | `/our-expert-team/` | Static | No | Yes | Yes | Profiles of clinic doctors and medical specialists |
| **155** | Facilities | `/facilities/` | Static | No | Yes | Yes | Equipment, labs, operation theatres, and ward details |
| **6385** | Our Philosophy | `/uti-urinary-tract-infection-2/` | Static | No | Yes | Yes | Clinical philosophy and patient care values (slug uses duplicate) |
| **1588** | Infrastructure | `/infrastructure/` | Static | No | Yes | Yes | Building, infrastructure, and ambient facilities |
| **6718** | Feedback | `/feedback/` | Dynamic | Yes (Feedback) | Yes | Yes | Clinic review and feedback submittal page |
| **6684** | Contact Us | `/contact-us/` | Dynamic | Yes (Appointment) | Yes | Yes | Address details, maps, and appointment booking form |
| **159** | News & Blogs | `/news-blogs/` | Dynamic | No | Yes | Yes | Blog index page listing recent news posts |
| **7048** | Rising Infertility Rates in India: A Growing Concern | `/rising-infertility-rates-in-india-a-growing-concern/` | Dynamic | No | Yes | Yes | Blog post article |
| **7084** | The Reality of IVF Success Rates: What You Need to Know | `/the-reality-of-ivf-success-rates-what-you-need-to-know/` | Dynamic | No | Yes | Yes | Blog post article |
| **3291** | Renal Diagnosis | `/diagnosis/` | Dynamic | No | Yes | Yes | Clinical post under Renal Care |
| **3295** | Renal Replacement Therapy | `/renal-replacement-therapy/` | Dynamic | No | Yes | Yes | Clinical post under Renal Care |
| **3297** | Intervention Nephrology | `/intervention-nephrology/` | Dynamic | No | Yes | Yes | Clinical post under Renal Care |
| **161** | Career | `/career/` | Static | No | Yes | Yes | Job descriptions and email inquiry |
| **3** | Privacy Policy | `/privacy-policy/` | Static | No | No | Yes | Standard HTML legal privacy page (non-Elementor) |
| **4148** | Disclaimer | `/disclaimer/` | Static | No | Yes | Yes | Medical liability disclaimer |
| **4160** | Terms of Use | `/terms-of-use/` | Static | No | No | Yes | Standard HTML legal terms page (non-Elementor) |
| **1559** | Thank You Book Consultancy | `/thank-you-book-consultancy/` | Static | No | No | Yes | Appointment booking redirect landing page |

---

## 2. Navigation Structure

### Header Navigation
The header is built inside the template system and contains the following items:
* **Logo**: `Untitled-design-43.png` loaded from WP uploads. Placed on the left.
* **Clinic Title**: "MMR Hospital & IVF Center" (fonts: Roboto/Jost).
* **Desktop Menu Menu Items**:
  * **Home**
    * Dropdown items:
      * WHY MMR Hospital & IVF Center
      * Consultation for Gynecology Problems
      * Consultation for Renal Problems
  * **Treatment & services** (Parent page: `/treatment-services/`)
    * Dropdown items:
      * IVF (`/ivf/`)
      * IUI (`/iui/`)
      * IVM (`/ivm/`)
      * Fertility Preservation.. (`/fertility-preservation-2/`)
      * ICSI…. (`/icsi-treatment/`)
      * Infertility men & women (`/infertility-men-women/`)
      * Ectopic Pregnancy.. (`/ectopic-pregnancy-2/`)
      * Female Infertility (`/female-infertility/`)
      * Infertility Testing (`/infertility-testing/`)
      * Male Infertility (`/male-infertility/`)
      * Diagnostic (`/daignostic/`)
  * **Renal care** (Parent page: `/renal-care-2/`)
    * Dropdown items:
      * CAPD (`/capd/`)
      * Evaluation of proteinuria (`/evaluation-of-proteinuria/`)
      * UTI ( urinary tract infection ) (`/uti-urinary-tract-infection/`)
  * **FAQs** (`/faqs/`)
  * **About Us** (`/about-us/`)
    * Dropdown items:
      * Our Expert Team (`/our-expert-team/`)
      * Facilities (`/facilities/`)
      * Our Philosophy (`/uti-urinary-tract-infection-2/`)
      * Infrastructure (`/infrastructure/`)
  * **Feedback** (`/feedback/`)
  * **Contact Us** (`/contact-us/`)
  * **News & Blogs** (`/news-blogs/`)

* **Mobile Navigation**:
  * Triggers a hamburger toggle menu via Elementor responsive nav-menu widget.
  * Mobile breakpoint occurs at `992px` (tablet) and `767px` (mobile).
  * Menus collapse into a vertical list and toggles drop-downs vertically using standard accordion actions.

### Footer Layout
The footer is globally active (ID 90) and contains three columns:
1. **Clinic Logo & Description**: Left column displaying the logo, title, and social links.
2. **Call-To-Action (CTA)**: Centered CTA button "Book Appointment" (pointing to `/contact-us/`).
3. **Contact Details**: Addresses, phone numbers (+91 9244122040 / 41 / 48), and email address (info@mmrhospitals.com).
4. **Copyright & Credits**: Placed in a sub-footer bar with copyrights, linking to creator site.

### Breadcrumbs
No breadcrumbs are used across the legacy site. Page templates are rendered as full-width Canvas layouts without breadcrumbs.
