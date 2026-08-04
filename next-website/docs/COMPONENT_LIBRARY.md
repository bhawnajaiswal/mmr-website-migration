# MMR Hospital Shared UI Component Library
**Project:** Next.js Migration Component Catalog  
**Author:** Lead UI Engineer  
**Status:** Approved  
**Date:** August 4, 2026  

---

## 1. Directory Structure

The reusable component library is situated under `components/shared/`:
```
components/shared/
  ├── Container/     # Dynamic standard/wide layout grid constraints
  ├── Button/        # Standard buttons and Link routers
  ├── Badge/         # Categorization labels and visual tags
  └── SectionHeader/ # Page headings with subtitle dividers
```

---

## 2. Component Audits & Classifications

The audit of legacy codebase templates identified the following repeated UI implementations:

### Buttons Group
*   *Primary Link Action*: "BOOK AN APPOINTMENT" and "Know about our experts.." used on Capd, IVF, and Ectopic pages.
*   *Enquiry / Booking Trigger*: "SUBMIT DETAILS" used on consultation forms.

### Cards Group (Intentionally NOT Extracted Yet)
*   *Facility Cards*: Renders thumbnails and short text descriptions in Capd, Diagnostic, and Facilities pages.
*   *Reason for Not Extracting in REF-004*: Card layouts display a high variance in structural details (some have background overlays, others stack buttons underneath, others display alternate row grids). These are classified as **Medium-risk components** and will be extracted in *Phase 4 (WordPress Grid Removal)* once subpages are refactored.

### Typography / Badges Group
*   *Badges*: Small uppercase tags indicating services (e.g. "INF", "RENAL").
*   *Section Headers*: Titles paired with subtitle lines and pink dividers (e.g. WhyChooseUs, Nephrology headers).

---

## 3. Shared Component Details

### 1. Container Component
*   **Purpose**: Centers content layout blocks and sets margins.
*   **Props**:
    *   `children: ReactNode`
    *   `variant: "standard" | "wide"` (default: `standard`)
*   **Usage**:
    ```tsx
    import Container from "@/components/shared/Container/Container";
    
    export default function Section() {
      return (
        <Container variant="standard">
          <p>Content goes here.</p>
        </Container>
      );
    }
    ```

### 2. Button Component
*   **Purpose**: Dynamic button component rendering as an anchor link (client Link router) or standard form button.
*   **Props**:
    *   `children: ReactNode`
    *   `href?: string`
    *   `onClick?: (e: React.MouseEvent) => void`
    *   `variant?: "primary" | "secondary" | "cta" | "outline"`
    *   `type?: "button" | "submit"`
*   **Usage**:
    ```tsx
    import Button from "@/components/shared/Button/Button";
    
    export default function App() {
      return (
        <Button href="/consultation/" variant="cta">
          Book Appointment
        </Button>
      );
    }
    ```

### 3. Badge Component
*   **Purpose**: Small text tags.
*   **Props**:
    *   `text: string`
    *   `variant?: "primary" | "secondary" | "accent"`
*   **Usage**:
    ```tsx
    import Badge from "@/components/shared/Badge/Badge";
    
    <Badge text="IVF" variant="accent" />
    ```

### 4. SectionHeader Component
*   **Purpose**: Renders section headings, subtitles, and pink dividers.
*   **Props**:
    *   `title: string`
    *   `subtitle?: string`
    *   `align?: "left" | "center" | "right"`
    *   `showDivider?: boolean`
*   **Usage**:
    ```tsx
    import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
    
    <SectionHeader title="Why Choose Us" subtitle="MMR Advantage" align="center" />
    ```

---

## 4. Accessibility (a11y)
*   **Keyboard Navigation**: The `Button` component inherits the standard browser keyboard trigger focus (`Tab` and `Enter` activation).
*   **ARIA Roles**: All icon graphics use `aria-hidden="true"` to prevent screen reader noise, and custom buttons inherit descriptive `ariaLabel` attributes.
