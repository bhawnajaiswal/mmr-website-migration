import RenalHero from "@/components/sections/renal-care/RenalHero/RenalHero";
import RenalIntro from "@/components/sections/renal-care/RenalIntro/RenalIntro";
import DoctorProfile from "@/components/sections/renal-care/DoctorProfile/DoctorProfile";
import DepartmentGrid from "@/components/sections/renal-care/DepartmentGrid/DepartmentGrid";
import RenalApproach from "@/components/sections/renal-care/RenalApproach/RenalApproach";
import RenalCTA from "@/components/sections/renal-care/RenalCTA/RenalCTA";
import styles from "@/app/TreatmentPage.module.css";

export default function RenalCarePage() {
  return (
    <div className={styles.container}>
      <main className="main-content">
        {/* Section 1: Hero Banner */}
        <RenalHero />

        {/* Section 2: Welcome / Introduction Block */}
        <RenalIntro />

        {/* Section 3: Doctor Expert Profile (Dr. Prawash Chowdhary) */}
        <DoctorProfile />

        {/* Section 4: Nephrology / Urology Departments */}
        <DepartmentGrid />

        {/* Section 5: Clinic Approach */}
        <RenalApproach />

        {/* Section 6: Consultation Call to Action */}
        <RenalCTA />
      </main>

      {/* Scoped CSS overlays for mobile grid stacking & hover animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .responsive-grid-split {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .grid-image-col {
            order: 1 !important;
          }
          .grid-image-col img {
            max-width: 100% !important;
          }
          #dept-grid-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .social-icon-btn {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.85rem !important;
          }
        }
        .hover-scale-img:hover {
          transform: scale(1.03) !important;
        }
        .social-icon-btn:hover {
          background-color: var(--color-primary) !important;
          color: var(--color-white) !important;
          transform: translateY(-2px);
        }
      ` }} />
    </div>
  );
}
