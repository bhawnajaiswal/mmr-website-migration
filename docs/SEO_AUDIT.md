# SEO Audit & Inventory

This document inventories the SEO configurations, meta tags, and structured data mapped from the legacy WordPress site to be preserved during the Next.js migration.

---

## 1. Mapped Page SEO Metadata

The legacy site uses the **All in One SEO (AIOSEO)** plugin. Below is the exact title and description metadata extracted from the database:

| Page ID | Page Title | Mapped SEO Meta Title | Mapped SEO Meta Description |
|---|---|---|---|
| **5721** | Home | `MMR Hospital & IVF Center - Best IVF Centre in Raipur.` | `MMR Hospital & IVF Center is the best IVF center in Raipur. We provide best infertility & IVF treatment in Raipur. With which we bring happiness.` |
| **1801** | Consultation (Gynecology) | `MMR Hospital- Looking for gynecologist near me / Gyn near me` | `If you are searching for gynecologist near me so get consultaion with best Gynecologist for your gynecology problem. MMR Hospital get best treatment for you.` |
| **3731** | Consultation (Renal) | `Best Nephrology Hospital in Raipur - MMR Hospital` | `If any one looking for best nephrology services in raipur so mmr hospital is the great choise for nephrology hospital in raipur. We get the best treatment.` |
| **5925** | About Us | `Best fertility center and Know about Gynecology problem` | `We provide the best fertility treatment in Raipur because we have a team of experienced doctors and staff who also make us the best fertility center.` |
| **5948** | Treatment & services | `IVF - (In - Vitro Fertilization) treatment.` | `MMR Hospital & IVF Center provides the best fertility service of IVF. For the treatment of In - Vitro Fertilization in raipur we are the best ivf center.` |
| **5969** | IVF | `IVF - Best IVF treatment in Raipur. IVF/IUI treatment.` | `IVF treatment at MMR Hospital & IVF Center in Raipur. Expert in In-vitro fertilization to help you start your family. Trusted IVF center in Raipur.` |
| **6217** | ICSI | `ICSI Treatment in Raipur -` | `We are the best choice for ICSI treatment. In the Raipur (chhattisgarh) we oprovide the best treatment for ICSI IVF. We have expert team for ICSI treatment` |
| **6227** | Ectopic Pregnancy | `Best Gynegynecologist In Raipur - Ectopic Pregnancy` | `Get the best gynecologist for your treatment in Raipur at MMR Hospital & IVF Center. We provide all gynecological problems treatment under one roof.` |
| **6253** | Diagnostic | `Best Diagnostic center in Raipur | MMR Hospital` | `As the best diagnostic center in Raipur, we provide diagnostic services for fertility assessment, renal function testing, endocrine testing, genetic testing etc` |
| **6358** | CAPD | `Best Kidney Hospital in Raipur | Kidney specialist` | `If any one looking for best kidney hospital in raipur then MMR Hospital and IVF Center is the right choise for your kidney treatment. Get best kidney care.` |
| **6366** | Evaluation of proteinuria | `IVF Treatment or Best IVF clinic in Raipur` | `MMR hospital is the best IVF clinic and we provide best IVF treatment in Raipur. We Offers all type of Infertility treatment in under one roof.` |
| **6652** | WHY MMR Hospital & IVF Center | `WHY MMR HOSPITAL IS THE BEST HOSPITAL - fertility treatment` | `Our patients are always satisfied with our treatment, so that's the reason, that we are the best IVF center & also the best kidney hospital in Raipur.` |
| **6684** | Contact Us | `Contact for Best Gynecologist in Raipur. | MMR Hospital` | `MMR Hospital provide best gynecologist services with high success rate in gynecological problems. We have best gynecologist in Raipur.` |
| **161** | Career | `Career with MMR Hospital & IVF Center- Connect with us.` | `In MMR Hospital and IVF Center we believe that a satisfied employee is high in commitment, motivation and can provide best services. Join us.` |
| **4148** | Disclaimer | `MMR Hospital & IVF Center - Best treatment in Raipur.` | `We provide best health treatment services like Gynecology traetment, Kidney treatment, General medicine and male infertility treatment in Raipur.` |

*Note: Published pages not listed above use standard WordPress default values (e.g. `[Page Title] - MMR Hospital & IVF Center`). These defaults must be set dynamically in the Next.js layout.*

---

## 2. OpenGraph Configuration (Preserved)

For the Homepage, the OpenGraph settings are customized:
* **og:title**: `Best IVF Centre in Raipur, Chhattisgarh.`
* **og:description**: `MMR Hospital & IVF Center is the best IVF center in Raipur, Chhattisgarh. We provide best infertility treatment in Raipur Chhattisgarh.`
* **og:type**: `website`
* **og:url**: `https://mmrhospitals.com/`
* **og:image**: `/wp-content/uploads/2023/10/logo-copy.png`

For other inner pages, OpenGraph parameters fall back to AIOSEO meta titles and descriptions automatically.

---

## 3. Crawl Configurations (robots.txt & Sitemaps)

### robots.txt
The legacy robots.txt has the following settings:
```text
User-agent: *
Allow: /
Sitemap: https://mmrhospitals.com/sitemap.xml
Sitemap: https://mmrhospitals.com/map.xml
```
*Next.js Action*: Maintain identical settings. Create a static `robots.txt` file in Next.js inside the public or app directory (`app/robots.ts` or `public/robots.txt`).

### Sitemap
The legacy XML sitemaps currently return 404 errors on the live server. 
*Next.js Action*: Next.js will generate a fully compliant, automated static sitemap (`public/sitemap.xml`) during build time, compiling all 34 pages and 5 active post URLs to resolve the legacy indexation issues.

---

## 4. Structured Data (Schema)

No custom structured data (JSON-LD or Microdata) was detected on the legacy pages.
*Next.js Recommendation*: Introduce standard MedicalWebPage and LocalBusiness (Hospital) JSON-LD schema on the homepage to boost local search rankings post-migration, though keeping page visuals identical.
