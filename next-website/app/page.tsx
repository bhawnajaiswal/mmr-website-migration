import styles from "./Home.module.css";
import Hero from "@/components/sections/home/Hero/Hero";
import Intro from "@/components/sections/home/Intro/Intro";
import Nephrology from "@/components/sections/home/Nephrology/Nephrology";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs/WhyChooseUs";
import Doctors from "@/components/sections/home/Doctors/Doctors";
import Statistics from "@/components/sections/home/Statistics/Statistics";
import Testimonials from "@/components/sections/home/Testimonials/Testimonials";
import Blogs from "@/components/sections/home/Blogs/Blogs";
import Consultation from "@/components/sections/home/Consultation/Consultation";
import OurHospital from "@/components/sections/home/OurHospital/OurHospital";

export default function Home() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-5721.css"
      />

      <main className="main-content">
        {/* Phase 1 Redesigned Sections wrapped in page-scoped styles container */}
        <div className={styles.homeContainer}>
          {/* Section 1: Hero Banner Slider */}
          <Hero />

          {/* Section 2: IVF Center Intro Section */}
          <Intro />

          {/* Section 3: Kidney Care/Nephrology Section */}
          <Nephrology />
        </div>

        {/* Legacy Sections left intact for visual validation pass */}
        <div data-elementor-type="wp-page" data-elementor-id="5721" className="elementor elementor-5721">
          {/* Section 4: Why Choose Us Section */}
          <WhyChooseUs />

          {/* Section 5: Doctors / Meet Our Specialists Section */}
          <Doctors />

          {/* Section 6: Statistics / Counters Section */}
          <Statistics />

          {/* Section 7: Google Reviews / Testimonials Section */}
          <Testimonials />

          {/* Section 8: Blogs Carousel Section */}
          <Blogs />

          {/* Section 9: Consultation Form / CTA Section */}
          <Consultation />

          {/* Section 10: Our Hospital / 24/7 Section */}
          <OurHospital />
        </div>
      </main>
    </>
  );
}
