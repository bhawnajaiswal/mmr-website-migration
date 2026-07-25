"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
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
      { threshold: 0.15 }
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

export default function OurApproach() {
  return (
    <ScrollRevealSection
      className={styles.introSection}
      style={{
        position: "relative",
        backgroundColor: "var(--color-white)",
        padding: "100px 20px",
        textAlign: "center"
      }}
    >
      {/* Top Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className={`${styles.shapeDividerSvg}`}
          style={{ fill: "var(--color-white)" }}
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Bottom Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className={`${styles.shapeDividerSvg}`}
          style={{ fill: "var(--color-white)" }}
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.introContainer} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className={styles.introContent} style={{ alignItems: "center" }}>
          <div className={styles.introTitle}>
            <h2 style={{ fontSize: "2.15rem", fontWeight: 800, color: "var(--color-secondary)", marginTop: "0" }}>
              Our Approach
            </h2>
          </div>
          
          <p className={styles.introText1} style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.65", color: "var(--color-text-dark)", margin: "0" }}>
            At MMR Hospital &amp; IVF Center, we believe in a multidisciplinary approach to
            healthcare, where collaboration and communication between different specialties lead
            to optimal patient care. Our team of skilled doctors, nurses, embryologists, and
            support staff work together to deliver comprehensive, integrated services tailored
            to each patient&apos;s unique needs.
          </p>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
