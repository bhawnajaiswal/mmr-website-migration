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

export default function RenalCTA() {
  return (
    <section
      className={styles.ctaSection}
      style={{
        backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
      }}
    >
      <div className={styles.ctaOverlay} />

      {/* Top Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}
          style={{ fill: "var(--color-background-light)" }}
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <ScrollRevealSection className={styles.ctaContainer}>
        <div className={styles.ctaTitle}>
          <h2>Get best treatment for all types renal problems.</h2>
        </div>
        <p className={styles.ctaDesc}>
          Thank you for considering MMR Hospital &amp; IVF Center for your kidney care needs. If
          you have any questions or would like to schedule a consultation, please don&apos;t hesitate
          to contact us. We are here to help you achieve and maintain optimal kidney health.
        </p>
        <Link className={styles.ctaButton} href="/consultation-for-renal-problems">
          <i aria-hidden="true" className="far fa-calendar-check" style={{ marginRight: "10px" }} />
          Book Consultation
        </Link>
      </ScrollRevealSection>
    </section>
  );
}
