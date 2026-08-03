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

export default function AboutIntroduction() {
  return (
    <ScrollRevealSection className={styles.introSection}>
      <div className={styles.introContainer}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "50px", 
            alignItems: "center" 
          }}
          className="responsive-grid-split"
        >
          {/* Left Column: Text Content */}
          <div className={styles.introContent}>
            <div className={styles.introTitle}>
              <h2 style={{ fontSize: "2.15rem", fontWeight: 800, color: "var(--color-secondary)", marginTop: "0" }}>
                MMR Hospital &amp; IVF Center
              </h2>
            </div>
            
            <p className={styles.introText1} style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.6", color: "var(--color-text-dark)" }}>
              Welcome to MMR Hospital &amp; IVF Center, where we are dedicated to providing
              exceptional healthcare services with a focus on In Vitro Fertilization (IVF) and
              Kidney Care. Our state-of-the-art facility combines advanced medical technology with
              compassionate, patient-centered care to meet the unique needs of individuals and
              families seeking fertility treatment and renal services.
            </p>
          </div>

          {/* Right Column: Hospital Logo/Image */}
          <div 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              borderRadius: "16px", 
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(0, 0, 0, 0.04)"
            }}
            className="grid-image-col"
          >
            <img
              src="/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png"
              alt="best ivf center in Raipur"
              style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
              className="hover-scale-img"
            />
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
