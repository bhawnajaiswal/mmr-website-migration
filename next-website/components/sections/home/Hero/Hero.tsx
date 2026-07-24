"use client";

import { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";
import styles from "@/app/Home.module.css";

const SLIDES = [
  {
    id: "fc4f1bf",
    heading: "Best  IVF  Center In Raipur.",
    description: "We provide the best treatment for you & We ensure that your dream of parenthood comes true",
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
    <section className={styles.heroSection}>
      {/* Background Overlay */}
      <div className={styles.heroOverlay} />

      <div className={styles.slidesWrapper}>
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

        {/* Navigation Arrows */}
        <div
          onClick={handlePrev}
          className={`${styles.navButton} ${styles.navPrev}`}
          role="button"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <div
          onClick={handleNext}
          className={`${styles.navButton} ${styles.navNext}`}
          role="button"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
