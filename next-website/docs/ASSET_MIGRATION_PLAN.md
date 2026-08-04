# Asset Migration Plan & Target Architecture
**Project Name:** MMR Hospital & IVF Center Migration  
**Author:** Lead Migration Architect  
**Status:** Approved  
**Date:** August 4, 2026  

---

## 1. Current Architecture vs Target Architecture

### Current Architecture (WordPress Legacy)
*   **Pathing**: Assets are hardcoded using legacy WordPress uploads directory strings (e.g. `/wp-content/uploads/2024/03/Gynecology-Clinic-Instagram-Post.jpg`).
*   **Filenames**: Files inherit default, auto-generated database names (e.g., `Untitled-design-43.png`, `Layer-616-1.png`, `Home-10.png`).
*   **Management**: Hardcoded strings are spread across 270+ places in React page layouts, causing high maintenance overhead.

### Target Architecture (Business-Oriented Next.js)
*   **Pathing**: Scoped inside a structured folder hierarchy `/public/images/`.
*   **Filenames**: Human-readable, domain-aligned names (e.g., `logo.png`, `hospital-exterior.jpg`, `home-hero-ivf.png`).
*   **Management**: Grouped asset configuration registries (`config/assets/branding.ts`, `heroes.ts`, `doctors.ts`, etc.) export clean image variables. React components consume imports without knowing file paths.

---

## 2. Target Folder structure

Assets will be organized logically under `/public/images/`:

```
public/images/
  ├── branding/      # Site logo, favicon, enquiry buttons
  ├── doctors/       # Doctor profiles, team images
  ├── heroes/        # Top banner slide and hero backdrops
  ├── backgrounds/   # CTA section background layouts
  ├── facilities/    # Hospital building and OT pictures
  ├── icons/         # SVG indicators (phones, carets)
  └── shared/        # Illustrative drawings and generic images
```

---

## 3. Naming Conventions

All target asset variables and physical files must use domain-aligned names:

| Legacy Filename | Target Path | Target Variable Name |
| :--- | :--- | :--- |
| `Untitled-design-43.png` | `images/branding/logo.png` | `logo` |
| `Home-10.png` | `images/heroes/home-hero-ivf.png` | `homeHeroIVF` |
| `Home-12.png` | `images/heroes/home-hero-kidney.png` | `homeHeroKidney` |
| `Untitled-1600-x-1990-px.png` | `images/doctors/doctor-anuradha.png` | `doctorAnuradha` |
| `Layer-616-1.png` | `images/facilities/facility-placeholder.png` | `facilityPlaceholder` |
| `MMR-Hospital.png` | `images/facilities/hospital-exterior.png` | `hospitalExterior` |
| `happy-young-sri-lankan-parents-with-baby-scaled.jpg`| `images/backgrounds/parents-with-baby.jpg` | `parentsWithBaby` |

---

## 4. Migration Phases (Zero-Downtime Transition)

The physical migration operates in three risk-controlled steps:

### Phase 1: Registry Foundation (Complete)
*   Define the business-oriented asset registries inside `config/assets/` containing clean variable exports.
*   The variable exports temporarily point to the legacy `/wp-content/uploads/` paths (the *WordPress Migration Layer*).
*   Components are updated to reference variables instead of strings. No physical files are moved yet.

### Phase 2: Physical File Relocation (Parallel Load)
*   Copy files from `/public/wp-content/uploads/` to their target folders under `/public/images/`.
*   Keep files in BOTH paths in production to prevent broken paths.
*   Perform test validations on sandbox staging links.

### Phase 3: Registry Path Swap & Purge
*   Update target variables in `config/assets/*.ts` to point to `/public/images/...` instead of `/wp-content/uploads/...`.
*   Validate the site builds correctly.
*   Once verified, delete the `/public/wp-content/` directory.

---

## 5. Rollback Strategy

*   **Version Rollback**: If paths fail, restore the git state of `config/assets/*.ts` to point to `/wp-content/uploads/...`.
*   **Zero File Loss**: Do not delete physical files from the uploads directory until the entire Next.js build is verified as clean.
