"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "@/app/TreatmentPage.module.css";

// Helper component for Intersection Observer Scroll Reveal
function ScrollRevealSection({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${styles.scrollReveal} ${isVisible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default function PhilosophyPage() {
  return (
    <div className={styles.container}>
      <main className="main-content">
        
        {/* Section 1: Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroDivider} />
            <div className={styles.heroTitle}>
              <h1>Philosophy</h1>
            </div>
            <a className={styles.heroButton} href="#">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              BOOK AN APPOINTMENT
            </a>
          </div>
        </section>

        {/* Section 2: Intro Section */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introContent}>
              <div className={styles.introTitle}>
                <h2>Welcome to MMR Hospital</h2>
              </div>
              <p className={styles.introText1}>
                where our philosophy is anchored in a commitment to holistic healthcare, seamlessly integrating excellence in both our IVF Center and Kidney Care units. At the heart of our approach is a patient-centric philosophy that values compassion, innovation, and ethical practices.
              </p>
              <p className={styles.introText2}>
                In our cutting-edge IVF Center, we believe in fostering hope and bringing dreams to life. Our dedicated team of fertility specialists combines advanced reproductive technologies with personalized care to support individuals and couples on their journey to parenthood.
              </p>
              <p className={styles.introText2}>
                In Kidney Care, we adhere to the philosophy of proactive health management. Our seasoned nephrologists focus on prevention, early detection, and advanced treatment of renal issues, ensuring optimal kidney health for our patients.
              </p>
              <p className={styles.introText2}>
                At MMR Hospital, we prioritize open communication, transparency, and the highest ethical standards. Our commitment to excellence extends beyond medical expertise to a warm, supportive environment where patients feel heard and cared for.
              </p>
              <p className={styles.introText2}>
                Experience healthcare with a human touch – where our philosophy revolves around your well-being. MMR Hospital is not just a healthcare provider; we are your partners in health, dedicated to empowering lives and fostering a healthier, happier
              </p>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Banner Section */}
        <section
          className={styles.ctaSection}
          style={{
            backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
          }}
        >
          <div className={styles.ctaOverlay} />

          <ScrollRevealSection className={styles.ctaContainer}>
            <div className={styles.ctaTitle}>
              <h2>Best nephrology Treatment is here.</h2>
            </div>
            <p className={styles.ctaDesc}>
              As the best nephrology hospital in Raipur, Chhattisgarh, MMR Hospital &amp; IVF Center offers state-of-the-art facilities, advanced diagnostic techniques, and compassionate care. Our team of experienced nephrologists, urologists, and support staff is committed to providing comprehensive evaluation and treatment for UTI and other kidney-related disorders.
            </p>
            <a className={styles.ctaButton} href="#">
              BOOK Consultation
            </a>
          </ScrollRevealSection>
        </section>

      </main>
    </div>
  );
}
