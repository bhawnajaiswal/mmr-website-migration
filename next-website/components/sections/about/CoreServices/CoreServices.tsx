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

export default function CoreServices() {
  const services = [
    {
      title: "IVF",
      url: "/ivf",
      desc: "Offering hope and advanced fertility solutions for those on the journey to parenthood.",
      iconClass: "fas fa-baby"
    },
    {
      title: "IUI",
      url: "/iui",
      desc: "IUI treatment at MMR Hospital, where we specialize in helping you achieve your pregnancy.",
      iconClass: "fas fa-medkit"
    },
    {
      title: "ICSI",
      url: "/icsi-treatment",
      desc: "Unlock the potential of parenthood with our cutting-edge ICSI (Intracytoplasmic Sperm Injection) service at MMR Hospital.",
      iconClass: "fas fa-stethoscope"
    },
    {
      title: "Infertility men & women",
      url: "/infertility-men-women",
      desc: "Unlocking the path to parenthood with expert care for both men and women facing infertility at MMR Hospital.",
      iconClass: "fas fa-briefcase-medical"
    },
    {
      title: "Nephrology services",
      url: "/renal-care-2",
      desc: "Experience excellence in renal care at MMR Hospital, where our Nephrology core service offers comprehensive solutions for kidney health.",
      iconClass: "fas fa-heartbeat"
    },
    {
      title: "Urology",
      url: "", // Urology has no link in the original
      desc: "Discover comprehensive urology care tailored to your needs at MMR Hospital, where our experts prioritize your urinary health and well-being.",
      iconClass: "fas fa-user-md"
    }
  ];

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
        {/* Header Block Section */}
        <div className={styles.sectionHeader} style={{ marginBottom: "50px" }}>
          <div className={styles.sectionTitle}>
            <h2>Core Services</h2>
          </div>
          <div className={styles.sectionDivider} />
        </div>

        {/* Services Grid Section */}
        <div className={styles.servicesGrid}>
          {services.map((srv) => (
            <div key={srv.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className={srv.iconClass} />
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>
                  {srv.url ? (
                    <Link href={srv.url} style={{ color: "inherit", textDecoration: "none" }}>
                      {srv.title}
                    </Link>
                  ) : (
                    srv.title
                  )}
                </h3>
                <p className={srv.url ? "elementor-icon-box-description" : styles.serviceCardDesc}>
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealSection>
  );
}
