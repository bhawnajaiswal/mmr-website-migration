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

export default function InfrastructurePage() {
  const facilityGrid1 = [
    {
      label: "Reception",
      src: "/wp-content/uploads/2024/01/reception-IMG-20240104-WA0030.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzMzciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Delux Room",
      src: "/wp-content/uploads/2023/11/Layer-616-copy-6.png",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIwNTUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Operation Theatre",
      src: "/wp-content/uploads/2023/11/Layer-616-copy-7.png",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQ0MjUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Cafeteria",
      src: "/wp-content/uploads/2023/11/Layer-616-copy-8.png",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIwNTUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Medical Shop",
      src: "/wp-content/uploads/2024/01/th-pharmacy.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIwNTUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Ambulance",
      src: "/wp-content/uploads/2023/11/Layer-616-copy-10.png",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIwNTUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    }
  ];

  const facilityGrid2 = [
    {
      label: "Lobby and Waiting Area",
      src: "/wp-content/uploads/2024/01/waiting-IMG-20240104-WA0015.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzMzciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "OPD",
      src: "/wp-content/uploads/2024/01/th-OPD.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzNDYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Operation Theatre",
      src: "/wp-content/uploads/2024/01/IMG-20240104-WA0049.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQ0MjUiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Patient Ward",
      src: "/wp-content/uploads/2024/01/IMG-20240104-WA0036.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzNTQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Pharmacy",
      src: "/wp-content/uploads/2024/01/th-pharmacy.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzNjciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Screening & Testing",
      src: "/wp-content/uploads/2024/01/th-screning.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzNzMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Special Room",
      src: "/wp-content/uploads/2024/01/IMG-20240104-WA0032.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzODEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Doctor Cabin",
      src: "/wp-content/uploads/2024/01/th-doctor-cabin.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzODciLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Hospital Building",
      src: "/wp-content/uploads/2024/01/th-building.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQzOTQiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    },
    {
      label: "Laboratory",
      src: "/wp-content/uploads/2024/01/IMG-20240104-WA0054.jpg",
      href: "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjQ0MDEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
    }
  ];

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
              <h1>Infrastructure</h1>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "10px auto 0", lineHeight: "1.6" }}>
              Our key concern is to ensure that your health and comfort receives equal attention and you are given the best possible care once you enter into our hospital premise. We are committed to make your experience comfortable and pleasant in this hospital.
            </p>
          </div>
        </section>

        {/* Section 2: Intro / Visual Accent Column */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }} className="responsive-grid-split">
              <div className={styles.introContent}>
                <div className={styles.introTitle}>
                  <h2>World Class Clinical Infrastructure</h2>
                </div>
                <p className={styles.introText1}>
                  MMR Hospital &amp; IVF Center features state-of-the-art medical technology designed to optimize patient outcomes. From advanced modular operation theatres to high-tech embryology labs and 24/7 emergency care, our facility guarantees precise, clean, and top-tier support.
                </p>
                <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                  <a className={styles.introButton} href="https://mmrhospitals.com/about/">
                    About MMR Hospital
                  </a>
                  <a className={styles.introButton} href="https://mmrhospitals.com/founders/" style={{ borderColor: "var(--color-primary)" }}>
                    Our Founders
                  </a>
                </div>
              </div>
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px", boxShadow: "var(--shadow-lg)" }}>
                <img
                  src="/wp-content/uploads/2024/01/building1.jpg"
                  alt="MMR Hospital building layout"
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s" }}
                  className="hover-scale-img"
                />
              </div>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Essential Facilities Grid */}
        <section className={styles.facilitiesSection}>
          {/* Top Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.facilitiesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Essential Clinical Highlights</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.facilitiesGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {facilityGrid1.map((fac, idx) => (
                <ScrollRevealSection key={idx}>
                  <a href={fac.href} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.facilityCard} style={{ transitionDelay: `${idx * 100}ms` }}>
                      <div className={styles.facilityImageWrapper}>
                        <img
                          src={fac.src}
                          alt={fac.label}
                          className={styles.facilityImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.facilityCardContent}>
                        <h3 className={styles.facilityCardTitle}>{fac.label}</h3>
                      </div>
                    </div>
                  </a>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Extended Facilities Grid */}
        <section className={styles.facilitiesSection} style={{ backgroundColor: "var(--color-white)", paddingTop: "40px" }}>
          <div className={styles.facilitiesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Special Facilities &amp; Equipment</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.facilitiesGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {facilityGrid2.map((fac, idx) => (
                <ScrollRevealSection key={idx}>
                  <a href={fac.href} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.facilityCard} style={{ transitionDelay: `${idx * 100}ms` }}>
                      <div className={styles.facilityImageWrapper}>
                        <img
                          src={fac.src}
                          alt={fac.label}
                          className={styles.facilityImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.facilityCardContent}>
                        <h3 className={styles.facilityCardTitle}>{fac.label}</h3>
                      </div>
                    </div>
                  </a>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Help CTA Banner */}
        <section
          className={styles.ctaSection}
          style={{
            backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
          }}
        >
          <div className={styles.ctaOverlay} />

          <ScrollRevealSection className={styles.ctaContainer}>
            <div className={styles.ctaTitle}>
              <h2>We are here to help</h2>
            </div>
            <p className={styles.ctaDesc}>
              To schedule an appointment online, complete the form and we will contact you as soon as possible.
            </p>
            <a className={styles.ctaButton} href="tel:+919244122040">
              <i className="fas fa-phone-alt" style={{ marginRight: "10px" }} />
              Call +91 92441 22040
            </a>
          </ScrollRevealSection>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .responsive-grid-split {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      ` }} />
    </div>
  );
}
