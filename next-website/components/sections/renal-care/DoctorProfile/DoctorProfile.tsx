"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import { DOCTOR_IMAGES } from "@/config/assets/doctors";
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

export default function DoctorProfile() {
  return (
    <ScrollRevealSection 
      className={styles.introSection}
      style={{
        position: "relative",
        backgroundColor: "var(--color-background-light)",
        padding: "100px 20px"
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
          {/* Column 1: Image */}
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
              src={DOCTOR_IMAGES.doctorPrawashProfile}
              alt="best ivf center in Raipur"
              style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
              className="hover-scale-img"
            />
          </div>

          {/* Column 2: Bio details */}
          <div className={styles.introContent}>
            <div>
              <span 
                style={{ 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em", 
                  fontSize: "0.85rem", 
                  fontWeight: 700, 
                  color: "var(--color-accent)",
                  display: "block",
                  marginBottom: "8px"
                }}
              >
                Meet Our Renal Expert:
              </span>
              <div className={styles.introTitle}>
                <h2 style={{ fontSize: "2.15rem", fontWeight: 800, color: "var(--color-secondary)", marginTop: "0" }}>
                  Dr. Prawash Chowdhary
                </h2>
              </div>
            </div>

            <p className={styles.introText1} style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.6", color: "var(--color-text-dark)" }}>
              Dr. Prawash Chowdhary is a distinguished nephrologist and urologist renowned for
              his expertise and dedication to the field of renal science. With years of experience
              and a commitment to excellence, Dr. Chowdhary leads our team in delivering exceptional
              care to patients with kidney diseases and urological disorders.
            </p>

            <Link
              className={styles.introButton}
              href="/our-expert-team"
              style={{
                marginTop: "10px",
                borderColor: "var(--color-accent)",
                color: "var(--color-primary)",
                alignSelf: "flex-start",
                gap: "8px"
              }}
            >
              <i aria-hidden="true" className="fas fa-play-circle" />
              Read more
            </Link>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
