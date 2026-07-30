import WhyHero from "@/components/sections/why-mmr/WhyHero/WhyHero";
import ThreeT from "@/components/sections/why-mmr/ThreeT/ThreeT";
import PersonalizedProgram from "@/components/sections/why-mmr/PersonalizedProgram/PersonalizedProgram";
import HelpCTA from "@/components/sections/why-mmr/HelpCTA/HelpCTA";

export default function WhyMMRPage() {
  return (
    <main className="main-content">
      {/* Section 1: Hero Banner */}
      <WhyHero />

      {/* Section 2: 3T Section */}
      <ThreeT />

      {/* Section 3: Personalized Program & Accordion */}
      <PersonalizedProgram />

      {/* Section 4: Help Call to Action */}
      <HelpCTA />
    </main>
  );
}
