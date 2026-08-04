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

export default function Founders() {
  return (
    <ScrollRevealSection 
      className={styles.introSection}
      style={{
        backgroundColor: "var(--color-white)",
        padding: "80px 20px"
      }}
    >
      <div className={styles.introContainer}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.2fr 1fr 1fr", 
            gap: "40px", 
            alignItems: "stretch" 
          }}
          className="founders-grid-split"
        >
          {/* Column 1: Founders Info & Bios */}
          <div className={styles.introContent} style={{ justifyContent: "center" }}>
            <div className={styles.introTitle}>
              <h2 style={{ fontSize: "2.15rem", fontWeight: 800, color: "var(--color-secondary)", marginTop: "0" }}>
                Founders
              </h2>
            </div>
            
            <p className={styles.introText2} style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--color-accent)", margin: "0 0 10px" }}>
              Founded by Dr. Anuradha Tibrewal Chowdhary and Dr. Prawash Chowdhary.
            </p>
            
            <p className={styles.introText1} style={{ fontSize: "1rem", fontWeight: "400", lineHeight: "1.6", color: "var(--color-text-dark)", margin: "0" }}>
              <strong>Dr. Anuradha Tibrewal Chowdhary:</strong> With a wealth of experience in
              reproductive medicine, Dr. Anuradha is a renowned fertility specialist known for her
              expertise in IVF and assisted reproductive technologies. She is passionate about
              helping patients overcome infertility challenges and fulfill their aspirations of
              starting a family.
              <br />
              <br />
              <strong>Dr. Prawash Chowdhary:</strong> A distinguished nephrologist, Dr. Prawash is
              committed to providing outstanding kidney care to patients suffering from various
              renal conditions. He combines clinical excellence with a compassionate approach,
              ensuring that each patient receives personalized attention and the best possible
              treatment outcomes.
            </p>

            <Link
              className={styles.introButton}
              href="/our-expert-team"
              style={{
                marginTop: "20px",
                borderColor: "var(--color-accent)",
                color: "var(--color-primary)",
                alignSelf: "flex-start"
              }}
            >
              Meet the Team &raquo;
            </Link>
          </div>

          {/* Column 2: Dr. Anuradha Tibrewal Chowdhary Card */}
          <div className={styles.facilityCard} style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.facilityImageWrapper} style={{ flex: 1, maxHeight: "320px" }}>
              <img
                src={DOCTOR_IMAGES.founderAnuradha}
                alt="best ivf center in Raipur"
                className={`${styles.facilityImage} hover-scale-img`}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={styles.facilityCardContent} style={{ padding: "20px 18px", textAlign: "center", gap: "6px" }}>
              <h3 className={styles.facilityCardTitle} style={{ fontSize: "1.1rem", color: "var(--color-secondary)", margin: "0" }}>
                Dr. Anuradha Tibrewal Chowdhary
              </h3>
              <span 
                style={{ 
                  fontSize: "0.85rem", 
                  fontWeight: 700, 
                  color: "var(--color-text-muted)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}
              >
                MD (OBGYN), FRM, FICOG, FAMS
              </span>
            </div>
          </div>

          {/* Column 3: Dr. Prawash Chowdhary Card */}
          <div className={styles.facilityCard} style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.facilityImageWrapper} style={{ flex: 1, maxHeight: "320px" }}>
              <img
                src={DOCTOR_IMAGES.founderPrawash}
                alt="best ivf center in Raipur"
                className={`${styles.facilityImage} hover-scale-img`}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={styles.facilityCardContent} style={{ padding: "20px 18px", textAlign: "center", gap: "6px" }}>
              <h3 className={styles.facilityCardTitle} style={{ fontSize: "1.1rem", color: "var(--color-secondary)", margin: "0" }}>
                Dr. Prawash Chowdhary
              </h3>
              <span 
                style={{ 
                  fontSize: "0.85rem", 
                  fontWeight: 700, 
                  color: "var(--color-text-muted)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}
              >
                MD, DNB (NEPHROLOGY)
              </span>
            </div>
          </div>

        </div>
      </div>
    </ScrollRevealSection>
  );
}
