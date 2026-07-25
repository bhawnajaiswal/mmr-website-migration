import AboutHero from "@/components/sections/about/AboutHero/AboutHero";
import AboutIntroduction from "@/components/sections/about/AboutIntroduction/AboutIntroduction";
import Mission from "@/components/sections/about/Mission/Mission";
import Founders from "@/components/sections/about/Founders/Founders";
import CoreServices from "@/components/sections/about/CoreServices/CoreServices";
import OurApproach from "@/components/sections/about/OurApproach/OurApproach";
import AboutCTA from "@/components/sections/about/AboutCTA/AboutCTA";
import styles from "@/app/TreatmentPage.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <main className="main-content">
        {/* Section 1: Hero Banner */}
        <AboutHero />

        {/* Section 2: Welcome Intro */}
        <AboutIntroduction />

        {/* Section 3: Our Mission */}
        <Mission />

        {/* Section 4: Founders */}
        <Founders />

        {/* Section 5: Core Services */}
        <CoreServices />

        {/* Section 6: Our Approach */}
        <OurApproach />

        {/* Section 7: Call to Action */}
        <AboutCTA />
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
          .founders-grid-split {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }
        .hover-scale-img:hover {
          transform: scale(1.03) !important;
        }
      ` }} />
    </div>
  );
}
