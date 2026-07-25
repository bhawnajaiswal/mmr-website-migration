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

export default function DepartmentGrid() {
  const socialIcons = [
    { name: "Facebook", iconClass: "fab fa-facebook-f", color: "#3b5998" },
    { name: "Twitter", iconClass: "fab fa-twitter", color: "#1da1f2" },
    { name: "Google-plus", iconClass: "fab fa-google-plus-g", color: "#dd4b39" },
    { name: "Linkedin", iconClass: "fab fa-linkedin-in", color: "#0077b5" },
    { name: "Instagram", iconClass: "fab fa-instagram", color: "#e1306c" },
  ];

  return (
    <ScrollRevealSection 
      className={styles.facilitiesSection}
      style={{
        backgroundColor: "var(--color-white)",
        padding: "80px 20px"
      }}
    >
      <div className={styles.facilitiesContainer}>
        {/* Header Block Section */}
        <div className={styles.sectionHeader} style={{ marginBottom: "50px" }}>
          <div className={styles.sectionTitle}>
            <h2>Our Departments</h2>
          </div>
          <div className={styles.sectionDivider} />
        </div>

        {/* Department Grid Cards Section */}
        <div 
          className={styles.facilitiesGrid}
          style={{
            gridTemplateColumns: "1fr 1fr",
            maxWidth: "900px",
            margin: "0 auto",
            gap: "30px"
          }}
          id="dept-grid-container"
        >
          {/* Card 1: Nephrology */}
          <div className={styles.facilityCard}>
            {/* Card Image */}
            <div className={styles.facilityImageWrapper}>
              <img
                src="/wp-content/uploads/elementor/thumbs/Untitled-design-64-qmqtallwzpekrd38plf0kialb3ucswgt4uzazrrgyo.png"
                alt="best ivf center in Raipur"
                className={`${styles.facilityImage} hover-scale-img`}
              />
            </div>

            {/* Card Content */}
            <div className={styles.facilityCardContent} style={{ padding: "30px 25px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 className={styles.facilityCardTitle} style={{ fontSize: "1.35rem", color: "var(--color-secondary)", marginBottom: "8px" }}>
                Nephrology
              </h3>
              
              <p className={styles.facilityCardDesc} style={{ flex: 1, marginBottom: "20px" }}>
                Our nephrology department specializes in the diagnosis and treatment of
                kidney diseases, including chronic kidney disease (CKD), acute kidney injury,
                glomerulonephritis, diabetic nephropathy, and polycystic kidney disease. We
                provide comprehensive care for patients at all stages of kidney disease, from
                early intervention and management to renal replacement therapy such as dialysis
                and kidney transplant evaluation.
              </p>

              {/* Social Share Handles */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {socialIcons.map((soc) => (
                  <a
                    key={soc.name}
                    href="#"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(92, 53, 154, 0.06)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "var(--transition-smooth)",
                      fontSize: "0.9rem"
                    }}
                    className="social-icon-btn"
                    data-color={soc.color}
                  >
                    <i className={soc.iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Urology */}
          <div className={styles.facilityCard}>
            {/* Card Image */}
            <div className={styles.facilityImageWrapper}>
              <img
                src="/wp-content/uploads/elementor/thumbs/Urology-1-qmqtayrnndwl9wk4kr3sjez1mi1hsnx1uo43pn7yjk.png"
                alt="best ivf center in Raipur"
                className={`${styles.facilityImage} hover-scale-img`}
              />
            </div>

            {/* Card Content */}
            <div className={styles.facilityCardContent} style={{ padding: "30px 25px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 className={styles.facilityCardTitle} style={{ fontSize: "1.35rem", color: "var(--color-secondary)", marginBottom: "8px" }}>
                Urology
              </h3>
              
              <p className={styles.facilityCardDesc} style={{ flex: 1, marginBottom: "20px" }}>
                Our urology department focuses on the diagnosis and treatment of urological
                conditions affecting the urinary tract and male reproductive system. Our services
                include the management of urinary tract infections, kidney stones, urinary
                incontinence, benign prostatic hyperplasia (BPH), erectile dysfunction, and
                urological cancers. We offer both medical and surgical interventions to address
                a wide range of urological issues and improve patients&apos; quality of life.
              </p>

              {/* Social Share Handles */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {socialIcons.map((soc) => (
                  <a
                    key={soc.name}
                    href="#"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(92, 53, 154, 0.06)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "var(--transition-smooth)",
                      fontSize: "0.9rem"
                    }}
                    className="social-icon-btn"
                    data-color={soc.color}
                  >
                    <i className={soc.iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
