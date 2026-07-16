import RenalHero from "@/components/sections/renal-care/RenalHero/RenalHero";
import RenalIntro from "@/components/sections/renal-care/RenalIntro/RenalIntro";
import DoctorProfile from "@/components/sections/renal-care/DoctorProfile/DoctorProfile";
import DepartmentGrid from "@/components/sections/renal-care/DepartmentGrid/DepartmentGrid";
import RenalApproach from "@/components/sections/renal-care/RenalApproach/RenalApproach";
import RenalCTA from "@/components/sections/renal-care/RenalCTA/RenalCTA";

export default function RenalCarePage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6144.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6144" className="elementor elementor-6144">
          
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

        </div>
      </main>
    </>
  );
}
