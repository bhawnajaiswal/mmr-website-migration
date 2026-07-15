# Asset Statistics & Duplicate Audit

This document details the quantitative statistics of static files, styles, fonts, and assets detected in the WordPress database and codebase, identifying duplicate files.

---

## 1. Asset Type Quantities

| Asset Class | Ext | Count | Location in Workspace | Description |
|---|---|---|---|---|
| **Images (PNG)** | `.png` | **111** | `uploads/` (in zip backup) | Logo variants, illustrations, section graphics. |
| **Images (JPG)** | `.jpg` | **57** | `uploads/` (in zip backup) | Photos of facilities, medical staff, clinical items. |
| **Images (SVG)** | `.svg` | **36** | `uploads/` (in zip backup) | Vector icons for clinics, contacts, list bullets. |
| **Local CSS** | `.css` | **6** | `legacy/public_html/css/` | Custom stylesheets, swiper layouts, Bootstrap styles. |
| **Local JS** | `.js` | **5** | `legacy/public_html/js/` | Libraries for slider animations and utility functions. |
| **Local Fonts** | `.woff2` / `.ttf` | **8** | `legacy/public_html/.../webfonts/` | Local FontAwesome 5 webfont files. |
| **PDFs** | `.pdf` | **0** | None | No active PDFs exist in the media uploads. |
| **Videos** | `.mp4`/`.webm` | **0** | None | No local video files exist in the media uploads. |
| **Total Media Assets** | - | **218** | - | Mapped media library items + local stylesheets and scripts. |

---

## 2. Identified Duplicate Assets

The following duplicate assets were detected in the media uploads database. They have identical file contents and names but reside in different upload folders (due to redundant uploads by WordPress editors). 

During migration, these should be consolidated to a single file in the Next.js `/public/assets/` directory to save bandwidth and storage.

### 1. File Name: `Layer-616.png`
* **Count**: 2 occurrences
* **Locations in Backup**:
  * `/wp-content/uploads/2023/10/Layer-616.png` (ID: 527)
  * `/wp-content/uploads/2023/11/Layer-616.png` (ID: 1534)
* **Consolidation Target**: `/public/assets/Layer-616.png`

### 2. File Name: `Layer-616-1.png`
* **Count**: 3 occurrences
* **Locations in Backup**:
  * `/wp-content/uploads/2023/10/Layer-616-1.png` (ID: 533)
  * `/wp-content/uploads/2023/11/Layer-616-1.png` (ID: 1804)
  * `/wp-content/uploads/2023/12/Layer-616-1.png` (ID: 4083)
* **Consolidation Target**: `/public/assets/Layer-616-1.png`

### 3. File Name: `icon-email-1.svg`
* **Count**: 2 occurrences
* **Locations in Backup**:
  * `/wp-content/uploads/2023/10/icon-email-1.svg` (ID: 868)
  * `/wp-content/uploads/2023/11/icon-email-1.svg` (ID: 1569)
* **Consolidation Target**: `/public/assets/icons/icon-email.svg`

### 4. File Name: `icon-call-copy.svg`
* **Count**: 2 occurrences
* **Locations in Backup**:
  * `/wp-content/uploads/2023/10/icon-call-copy.svg` (ID: 869)
  * `/wp-content/uploads/2023/11/icon-call-copy.svg` (ID: 1566)
* **Consolidation Target**: `/public/assets/icons/icon-call.svg`
