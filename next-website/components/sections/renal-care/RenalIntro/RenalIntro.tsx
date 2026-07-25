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

export default function RenalIntro() {
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
          {/* Left Column: Text & CTA */}
          <div className={styles.introContent}>
            <div className={styles.introTitle}>
              <h2 style={{ fontSize: "2.15rem", fontWeight: 800, color: "var(--color-secondary)" }}>
                Renal Care at MMR Hospital &amp; IVF Center
              </h2>
            </div>
            
            <p className={styles.introText1} style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.6", color: "var(--color-text-dark)" }}>
              Welcome to the Renal Science department at MMR Hospital &amp; IVF Center, where we are
              dedicated to providing comprehensive and advanced care for patients with kidney-related
              conditions. Under the leadership of Dr. Prawash Chowdhary, our esteemed nephrologist,
              and urologist, we offer expert diagnosis, treatment, and management of a wide range of
              renal disorders.
            </p>
            
            <p className={styles.introText2} style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>
              We provide best renal care treatment in Raipur.
            </p>
            
            <Link
              className={styles.introButton}
              href="/consultation-for-renal-problems"
              style={{
                marginTop: "10px",
                borderColor: "var(--color-accent)",
                color: "var(--color-primary)",
                alignSelf: "flex-start"
              }}
            >
              Book appointment &raquo;
            </Link>
          </div>

          {/* Right Column: Grid Stack of Images */}
          <div className="grid-image-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Dr. Prawash / Kidney Graphic Card */}
            <div 
              style={{ 
                overflow: "hidden", 
                borderRadius: "16px", 
                boxShadow: "var(--shadow-md)",
                border: "1px solid rgba(0, 0, 0, 0.03)"
              }}
            >
              <img
                src="/wp-content/uploads/elementor/thumbs/Untitled-design-38-qmqsurznie8bmm8ozx58mnbz97btu836g4mv51y6uc.png"
                alt="best ivf center in Raipur"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                className="hover-scale-img"
              />
            </div>

            {/* Stack of other two images */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div 
                style={{ 
                  overflow: "hidden", 
                  borderRadius: "16px", 
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid rgba(0, 0, 0, 0.03)"
                }}
              >
                <img
                  src="/wp-content/uploads/elementor/thumbs/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled-qmqt0pd0lsalrqhj02dj4gc6h8n6pzqa9s1ru207g8.jpg"
                  alt="best ivf center in Raipur"
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
                  className="hover-scale-img"
                />
              </div>

              <div 
                style={{ 
                  overflow: "hidden", 
                  borderRadius: "16px", 
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid rgba(0, 0, 0, 0.03)"
                }}
              >
                <img
                  src="/wp-content/uploads/elementor/thumbs/senior-man-suffering-from-kidney-pain-home-scaled-qmqt0gwgw9z0v8ttdgpw00h14rsvspsp8m6eikcr08.jpg"
                  alt="best ivf center in Raipur"
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
                  className="hover-scale-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
