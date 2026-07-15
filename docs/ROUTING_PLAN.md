# Next.js App Router Routing Plan

This document maps all legacy WordPress page and post URLs to their Next.js App Router equivalents, ensuring that no active URL is omitted and SEO equity is fully preserved.

---

## 1. Page URL to Next.js Route Mapping

All pages are mapped below. For URLs with legacy spelling errors (like `daignostic`), we preserve the exact route to prevent 404 search indexing errors, but suggest standard aliases.

| Legacy WordPress URL | Next.js App Router Path | Target Page Component File | Routing Strategy |
|---|---|---|---|
| `/` | `/` | `app/page.tsx` | Main index page |
| `/why-mmr-hospital-ivf-center/` | `/why-mmr-hospital-ivf-center` | `app/why-mmr-hospital-ivf-center/page.tsx` | Static Page |
| `/consultation/` | `/consultation` | `app/consultation/page.tsx` | Dynamic Page (Form) |
| `/consultation-for-renal-problems/` | `/consultation-for-renal-problems` | `app/consultation-for-renal-problems/page.tsx` | Dynamic Page (Form) |
| `/treatment-services/` | `/treatment-services` | `app/treatment-services/page.tsx` | Static Page |
| `/ivf/` | `/ivf` | `app/ivf/page.tsx` | Static Page |
| `/iui/` | `/iui` | `app/iui/page.tsx` | Static Page |
| `/ivm/` | `/ivm` | `app/ivm/page.tsx` | Static Page |
| `/fertility-preservation-2/` | `/fertility-preservation-2` | `app/fertility-preservation-2/page.tsx` | Static Page (Legacy suffix `_2` preserved) |
| `/icsi-treatment/` | `/icsi-treatment` | `app/icsi-treatment/page.tsx` | Static Page |
| `/infertility-men-women/` | `/infertility-men-women` | `app/infertility-men-women/page.tsx` | Static Page |
| `/ectopic-pregnancy-2/` | `/ectopic-pregnancy-2` | `app/ectopic-pregnancy-2/page.tsx` | Static Page (Legacy suffix `_2` preserved) |
| `/female-infertility/` | `/female-infertility` | `app/female-infertility/page.tsx` | Static Page |
| `/male-infertility/` | `/male-infertility` | `app/male-infertility/page.tsx` | Static Page |
| `/infertility-testing/` | `/infertility-testing` | `app/infertility-testing/page.tsx` | Static Page |
| `/daignostic/` | `/daignostic` <br> `/diagnostic` | `app/daignostic/page.tsx` <br> `app/diagnostic/page.tsx` | **SEO Preservation**: Serve `/daignostic` to match the legacy misspelled database slug, but configure a canonical link pointing to `/diagnostic` and a permanent redirect from the misspelled URL. |
| `/renal-care-2/` | `/renal-care-2` | `app/renal-care-2/page.tsx` | Static Page (Legacy suffix `_2` preserved) |
| `/capd/` | `/capd` | `app/capd/page.tsx` | Static Page |
| `/evaluation-of-proteinuria/` | `/evaluation-of-proteinuria` | `app/evaluation-of-proteinuria/page.tsx` | Static Page |
| `/uti-urinary-tract-infection/` | `/uti-urinary-tract-infection` | `app/uti-urinary-tract-infection/page.tsx` | Static Page |
| `/faqs/` | `/faqs` | `app/faqs/page.tsx` | Dynamic Page (Accordion) |
| `/about-us/` | `/about-us` | `app/about-us/page.tsx` | Static Page |
| `/our-expert-team/` | `/our-expert-team` | `app/our-expert-team/page.tsx` | Static Page |
| `/facilities/` | `/facilities` | `app/facilities/page.tsx` | Static Page |
| `/uti-urinary-tract-infection-2/` | `/uti-urinary-tract-infection-2` <br> `/our-philosophy` | `app/uti-urinary-tract-infection-2/page.tsx` | **SEO Preservation**: Serve exact URL to prevent 404, but configure dynamic canonical mapping. |
| `/infrastructure/` | `/infrastructure` | `app/infrastructure/page.tsx` | Static Page |
| `/feedback/` | `/feedback` | `app/feedback/page.tsx` | Dynamic Page (Form) |
| `/contact-us/` | `/contact-us` | `app/contact-us/page.tsx` | Dynamic Page (Form) |
| `/news-blogs/` | `/news-blogs` | `app/news-blogs/page.tsx` | Dynamic Page (Blog List) |
| `/career/` | `/career` | `app/career/page.tsx` | Static Page |
| `/privacy-policy/` | `/privacy-policy` | `app/privacy-policy/page.tsx` | Static Page |
| `/disclaimer/` | `/disclaimer` | `app/disclaimer/page.tsx` | Static Page |
| `/terms-of-use/` | `/terms-of-use` | `app/terms-of-use/page.tsx` | Static Page |
| `/thank-you-book-consultancy/` | `/thank-you-book-consultancy` | `app/thank-you-book-consultancy/page.tsx` | Static Page |

---

## 2. Blog Post Routing Plan

WordPress serves posts at the root level (e.g., `/rising-infertility-rates-in-india-a-growing-concern/`). In Next.js, we have two routing architectures to choose from:

### Option A: Root-Level Dynamic Catch-All (Recommended for SEO parity)
* **Structure**: Create a catch-all route at the root level: `app/[slug]/page.tsx`.
* **Behavior**: Matches `/rising-infertility-rates-in-india-a-growing-concern` and dynamically resolves it to the correct blog post component.
* **Benefits**: 100% URL parity. Zero redirects needed.

### Option B: Structured Subfolder with next.config.js Redirects
* **Structure**: Create posts under `app/news-blogs/[slug]/page.tsx`.
* **Behavior**: Serve posts at `/news-blogs/slug`. Set up a 301 Permanent Redirect in `next.config.js` to automatically redirect root-level requests.
* **next.config.js Redirect Rules**:
  ```javascript
  module.exports = {
    async redirects() {
      return [
        {
          source: '/rising-infertility-rates-in-india-a-growing-concern/',
          destination: '/news-blogs/rising-infertility-rates-in-india-a-growing-concern',
          permanent: true,
        },
        {
          source: '/the-reality-of-ivf-success-rates-what-you-need-to-know/',
          destination: '/news-blogs/the-reality-of-ivf-success-rates-what-you-need-to-know',
          permanent: true,
        },
        {
          source: '/diagnosis/',
          destination: '/news-blogs/diagnosis',
          permanent: true,
        },
        {
          source: '/renal-replacement-therapy/',
          destination: '/news-blogs/renal-replacement-therapy',
          permanent: true,
        },
        {
          source: '/intervention-nephrology/',
          destination: '/news-blogs/intervention-nephrology',
          permanent: true,
        }
      ]
    }
  }
  ```
* **Benefits**: Organizes blog files in a separate folder structure, while maintaining search rankings via a permanent redirect.
