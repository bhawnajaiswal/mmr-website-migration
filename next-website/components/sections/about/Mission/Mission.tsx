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

export default function Mission() {
  return (
    <ScrollRevealSection
      className={styles.introSection}
      style={{
        position: "relative",
        backgroundColor: "var(--color-background-light)",
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
              Our Mission
            </h2>
          </div>
          
          <p className={styles.introText1} style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.65", color: "var(--color-text-dark)" }}>
            At MMR Hospital &amp; IVF Center, our mission is to empower individuals and
            couples to overcome fertility challenges and achieve their dream of parenthood. We
            are committed to delivering the highest standard of care with integrity, empathy,
            and respect for every patient we serve. Additionally, we strive to improve the
            quality of life for patients with renal conditions by offering comprehensive renal
            care services tailored to their individual needs.
          </p>

          <Link
            className={styles.introButton}
            href="/facilities"
            style={{
              marginTop: "15px",
              borderColor: "var(--color-accent)",
              color: "var(--color-primary)",
              alignSelf: "center",
              gap: "8px"
            }}
          >
            See Gallery &raquo;
          </Link>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
