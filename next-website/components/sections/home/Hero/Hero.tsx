"use client";

import { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";

const SLIDES = [
  {
    id: "fc4f1bf",
    heading: "Best  IVF  Center In Raipur.",
    description: "We provide the best treatment for you\n&\nWe ensure that your dream of parenthood comes true",
    buttonText: "Book Appointment",
    buttonUrl: "/consultation",
    slideIdClass: "elementor-repeater-item-fc4f1bf"
  },
  {
    id: "1126558",
    heading: "Best Kidney Care Center in Raipur",
    description: "With the help of world-class medical treatment and advanced technology, we diagnose all kidney related problems.",
    buttonText: "Book Appointment",
    buttonUrl: "/consultation-for-renal-problems",
    slideIdClass: "elementor-repeater-item-1126558"
  }
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5c366d9 elementor-section-full_width elementor-section-height-default"
      data-id="5c366d9"
      data-element_type="section"
    >
      {/* Background Overlay */}
      <div className="elementor-background-overlay"></div>

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ef85f1"
          data-id="6ef85f1"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-widget elementor-widget-slides elementor-element elementor-element-0efb687 elementor--v-position-bottom elementor--h-position-center"
              data-id="0efb687"
              data-element_type="widget"
              data-widget_type="slides.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-slides-wrapper">
                  <div className="elementor-slides">
                    
                    {/* Slides */}
                    {SLIDES.map((slide, index) => (
                      <HeroSlide
                        key={slide.id}
                        heading={slide.heading}
                        description={slide.description}
                        buttonText={slide.buttonText}
                        buttonUrl={slide.buttonUrl}
                        slideIdClass={slide.slideIdClass}
                        isActive={index === activeIdx}
                      />
                    ))}

                    {/* Navigation Arrows using standard Elementor Swiper buttons classes */}
                    <div
                      onClick={handlePrev}
                      className="elementor-swiper-button elementor-swiper-button-prev"
                      role="button"
                      aria-label="Previous Slide"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </div>
                    <div
                      onClick={handleNext}
                      className="elementor-swiper-button elementor-swiper-button-next"
                      role="button"
                      aria-label="Next Slide"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
