# WordPress Plugin Audit & Next.js Replacements

This document audits the 14 active WordPress plugins found in the database, evaluating their functionality, necessity, Next.js replacements, and migration priority.

---

## Plugin Mapping Table

| Plugin Directory / Name | Purpose in WordPress | Still Needed? | Next.js Replacement | Migration Priority |
|---|---|---|---|---|
| **`elementor/`** <br> Elementor Core | Visual layout builder. | **No** | Statically built JSX page sections. | **Critical** (UI Foundation) |
| **`elementor-pro-old/`** <br> Elementor Pro | Custom templates, slides, dynamic queries. | **No** | React components styled with Vanilla CSS. | **Critical** (Layout Logic) |
| **`pro-elements/`** <br> Pro Elements | Core GPL features of Elementor Pro. | **No** | Standard React components. | **Critical** (UI Elements) |
| **`elementskit-lite/`** <br> ElementsKit Lite | Layout headers, footers, icon packs. | **No** | Hardcoded JSX templates, local icon fonts. | **Critical** (Header/Footer) |
| **`bellows-accordion-menu/`** <br> Bellows Menu | Vertical collapsible navigation menus. | **Yes** (Visually) | Custom React Accordion Menu component. | **High** (Nav Parity) |
| **`google-analytics-for-wordpress/`** <br> MonsterInsights | Google Analytics script injection. | **Yes** (Data) | Next.js `<Script>` widget injecting GTM container. | **High** (Analytics) |
| **`broken-link-checker-seo/`** <br> Broken Link Checker | Scans pages for broken URLs. | **No** | Next.js static build checker or external audits. | **None** (Dev Tool) |
| **`optinmonster/`** <br> OptinMonster | Popups, marketing widgets. | **No** | Custom React modal (if requested later). | **Low** (Inactive feature) |
| **`wp-optimize/`** <br> WP-Optimize | Caching, image compression. | **No** (Native) | Native Next.js `<Image>` and Vercel CDN cache. | **Low** (Natively handled) |
| **`akismet/`** <br> Akismet Anti-Spam | Spam filters for forms. | **No** (Native) | Honeypots, Captcha, or API rate limiting. | **Low** (Security check) |
| **`duplicate-page/`** <br> Duplicate Page | Duplicate pages in admin. | **No** | Filesystem copy (developer action). | **None** (Admin helper) |
| **`all-in-one-wp-migration/`** <br> Migration/Backup | Exporting site backups. | **No** | Git repository and Vercel version history. | **None** (Deployment tool) |
| **`envato-elements/`** <br> Envato Elements | Downloading kits/templates. | **No** | Content is already finalized and migrated. | **None** (Design helper) |
| **`hostinger-ai-assistant/`** <br> Hostinger AI Assistant | Generating text copy via AI. | **No** | Static hardcoded textual copy. | **None** (Authoring tool) |

---

## Detailed replacement breakdown for Critical/High Priorities

### 1. Elementor Core / Pro / Pro Elements
* **Replacement Strategy**: Recreate the exact visual appearance of pages by inspecting the live DOM layout. Elementor uses `e-con` (flex containers) and `elementor-widget` (columns and modules). We will rebuild these layouts in Next.js using standard HTML semantic tags (`<section>`, `<article>`, `<div>`) and Vanilla CSS flexbox rules. This will remove thousands of redundant wrappers and boost page speeds.

### 2. ElementsKit Lite (Header & Footer)
* **Replacement Strategy**: Replicate the header and footer modules directly as separate React components (`app/components/Header.tsx` and `app/components/Footer.tsx`). Instead of reading them dynamically from WP custom post libraries, they will be hardcoded in JSX, fetching paths from a configuration file (`config/menu.json`).

### 3. Bellows Accordion Menu
* **Replacement Strategy**: Mobile menus and side panels in Elementor utilize Bellows accordion logic for nested links. This will be replaced by a pure React mobile drawer that uses simple hooks to handle sub-menu states.

### 4. MonsterInsights GTM Integration
* **Replacement Strategy**: Replace this helper by adding the raw GTM script tag directly into `app/layout.tsx` using `next/script`:
  ```tsx
  import Script from 'next/script';
  
  // Inside layout:
  <Script id="gtm" strategy="afterInteractive">
    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KVLJB48V');`}
  </Script>
  ```
