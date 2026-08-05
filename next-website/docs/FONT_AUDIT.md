# Google Fonts Audit Report
**Project:** Next.js Migration Architecture  
**Author:** Staff Next.js Performance Engineer  
**Status:** Complete  
**Date:** August 5, 2026  

---

## 1. Active Fonts Inventory

| Font Family | Where Used | Weights Used | Can Remove? | Recommendation |
| :--- | :--- | :---: | :---: | :--- |
| **Jost** | Heading tags (`h1`, `h2`, `h3`) across all modules | 300, 400, 500, 600, 700 | **No** | Retain. Migrate to `next/font/google` and bind to `--font-jost`. |
| **Montserrat** | Subtitles, labels, navigation, and body text | 300, 400, 500, 600, 700 | **No** | Retain. Migrate to `next/font/google` and bind to `--font-montserrat`. |
| **Nunito** | Paragraph layouts and content cards | 300, 400, 600, 700 | **No** | Retain. Migrate to `next/font/google` and bind to `--font-nunito`. |
| **Roboto** | Legacy class overrides inside `globals.css` | 300, 400, 500, 700 | **No** | Retain. Migrate to `next/font/google` and bind to `--font-roboto`. |
| **Roboto Slab** | Nowhere (No matches found in codebase) | 300, 400, 500, 700 | **Yes** | **Remove completely** to reduce initial bundle weights. |

---

## 2. Refactoring Recommendations
1.  **Eliminate Roboto Slab**: Drop the stylesheet queries entirely to prevent downloading unused font assets.
2.  **Bind next/font/google Variables**: Initialize optimized local font variables inside `app/layout.tsx` using `display: "swap"`.
3.  **Define Custom Fallbacks**: Map variables inside `app/styles/tokens.css` so both modern and legacy stylesheets consume the optimized fonts transparently.
