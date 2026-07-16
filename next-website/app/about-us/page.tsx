import AboutHero from "@/components/sections/about/AboutHero/AboutHero";
import AboutIntroduction from "@/components/sections/about/AboutIntroduction/AboutIntroduction";
import Mission from "@/components/sections/about/Mission/Mission";
import Founders from "@/components/sections/about/Founders/Founders";
import CoreServices from "@/components/sections/about/CoreServices/CoreServices";
import OurApproach from "@/components/sections/about/OurApproach/OurApproach";
import AboutCTA from "@/components/sections/about/AboutCTA/AboutCTA";

export default function AboutUsPage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-5925.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="5925" className="elementor elementor-5925">
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
        </div>
      </main>
    </>
  );
}
