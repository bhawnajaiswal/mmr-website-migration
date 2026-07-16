import WhyHero from "@/components/sections/why-mmr/WhyHero/WhyHero";
import ThreeT from "@/components/sections/why-mmr/ThreeT/ThreeT";
import PersonalizedProgram from "@/components/sections/why-mmr/PersonalizedProgram/PersonalizedProgram";
import HelpCTA from "@/components/sections/why-mmr/HelpCTA/HelpCTA";

export default function WhyMMRPage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6652.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6652" className="elementor elementor-6652">
          {/* Section 1: Hero Banner */}
          <WhyHero />

          {/* Section 2: 3T Section */}
          <ThreeT />

          {/* Section 3: Personalized Program & Accordion */}
          <PersonalizedProgram />

          {/* Section 4: Help Call to Action */}
          <HelpCTA />
        </div>
      </main>
    </>
  );
}
