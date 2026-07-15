# Domain Configuration Verification

This document analyzes the domain discrepancy between `mmrhospitals.com` and `mmrivfandkidneycare.com`, identifying the active canonical domain and the reasoning behind the mismatch.

---

## 1. Domain Investigation Matrix

| Metric | `mmrhospitals.com` | `mmrivfandkidneycare.com` |
|---|---|---|
| **Active Live Status** | **Yes** (Serving active site contents). | **No** (Returns HTTP status 406 / redirects). |
| **WordPress Options (`siteurl` / `home`)** | **Yes** (Explicitly set to `https://mmrhospitals.com`). | **No** (Does not appear in options). |
| **Site-wide Source Code Reference** | **Yes** (100% of internal stylesheet links, JavaScript tags, and image paths use this domain). | **No** (0 references found in legacy source code). |
| **SEO Metadata (AIOSEO/Yoast)** | **Yes** (Canonical link configurations point exclusively to `https://mmrhospitals.com/`). | **No** (0 references found in SEO metadata table). |
| **Structured Schema Data** | **Yes** (Hospital schema defines this domain). | **No** (0 references found). |
| **Robots.txt & XML Sitemaps** | **Yes** (Sitemap declaration uses `https://mmrhospitals.com/sitemap.xml`). | **No** (0 references found). |
| **Clinic Email Addresses** | **Yes** (`info@mmrhospitals.com`, `corporate@mmrhospitals.com`). | **No** (No email aliases found). |

---

## 2. Explanation of Domain Mismatch

### Why does the discrepancy exist?
1. **Corporate Identity vs. Search Engine Optimization (SEO)**:
   * **`mmrhospitals.com`** represents the official corporate identity of the clinic: **Matruchhaya Medicare & Research Pvt. Ltd. (MMR Hospital)**. This is the official medical clinic brand, which is why official emails (`info@mmrhospitals.com`) and hospital database structures are built on it.
   * **`mmrivfandkidneycare.com`** is a descriptive, keyword-optimized domain name registered specifically to capture search engine traffic for their primary healthcare specialties (**IVF Treatment** and **Kidney Care**). 
2. **WordPress Core Configuration**:
   * The actual WordPress installation, database dump, configuration files, and theme folders were installed and set up on `mmrhospitals.com`.
   * The domain `mmrivfandkidneycare.com` was set up as a domain alias at the registrar/DNS level, serving either as a parking page or redirecting traffic to the primary domain (`mmrhospitals.com`), which is why the legacy database contains zero entries for it.

---

## 3. Preserved Canonical Domain Recommendation

### Preserved Domain: `mmrhospitals.com`
We recommend preserving **`mmrhospitals.com`** as the canonical active domain for the following reasons:
1. **Complete Database Integrity**: The legacy SQL database contains hundreds of hardcoded references to `mmrhospitals.com` (image URLs, attachment GUIDs, navigation menu links). Changing this would require extensive string replacement in the database entries.
2. **Official Clinic Branding**: The hospital logo (`logo-copy.png`), brand title ("MMR Hospital & IVF Center"), and business emails are all built around `mmrhospitals.com`.
3. **SEO Authority**: Search engine crawlers (Google) have index history built on `mmrhospitals.com`, as documented by canonical links and GTM scripts.

### DNS & Redirection Strategy
The secondary domain **`mmrivfandkidneycare.com`** should not be discarded. Instead, implement a **301 Permanent Redirect** at the DNS / Vercel level:
* All requests landing on `https://mmrivfandkidneycare.com/*` will be permanently redirected to `https://mmrhospitals.com/*`.
* This preserves domain authority, passes pagerank to the canonical domain, and ensures any keyword-specific traffic is captured.
