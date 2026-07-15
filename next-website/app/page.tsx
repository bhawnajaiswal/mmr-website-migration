import Hero from "@/components/sections/home/Hero/Hero";
import Intro from "@/components/sections/home/Intro/Intro";
import Nephrology from "@/components/sections/home/Nephrology/Nephrology";

export default function Home() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-5721.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="5721" className="elementor elementor-5721">
          {/* Section 1: Hero Banner Slider */}
          <Hero />

          {/* Section 2: IVF Center Intro Section */}
          <Intro />

          {/* Section 3: Renal Care/Nephrology Section */}
          <Nephrology />
        </div>
      </main>
    </>
  );
}
