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

export default function ProteinuriaPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-notes-medical",
      title: "Medical History Assessment",
      desc: "Our healthcare professionals will conduct a detailed review of your medical history, including any pre-existing conditions, medications, and symptoms related to kidney function."
    },
    {
      num: "02",
      icon: "fas fa-user-md",
      title: "Physical Examination",
      desc: "A thorough physical examination will be performed to assess overall health and identify any signs or symptoms associated with kidney disorders."
    },
    {
      num: "03",
      icon: "fas fa-vial",
      title: "Laboratory Tests",
      desc: "We utilize advanced laboratory testing techniques to analyze urine samples for the presence of protein and other markers of kidney function. These tests include urine dipstick analysis, urine protein-to-creatinine ratio (UPCR), and 24-hour urine protein quantification."
    },
    {
      num: "04",
      icon: "fas fa-microscope",
      title: "Imaging Studies",
      desc: "In some cases, imaging studies such as ultrasound or CT scans may be recommended to evaluate the structure and function of the kidneys."
    },
    {
      num: "05",
      icon: "fas fa-procedures",
      title: "Specialized Tests",
      desc: "Depending on the underlying cause of proteinuria, additional specialized tests may be conducted to further investigate kidney function and identify any contributing factors."
    }
  ];

  const facilities = [
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital.png",
      title: "Advanced Modular Operation Theatre",
      desc: "We have the best modular operation theatre's with all facilities."
    },
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-1.png",
      title: "Embryology Lab",
      desc: "We provide best IVF, ICSI & IUI treatments."
    },
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-2.png",
      title: "Pathology",
      desc: "We have pathology lab with our best lab technician."
    }
  ];

  return (
    <div className={styles.container}>
      <main className="main-content">
        
        {/* Section 1: Hero Banner */}
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
              <h1>
                Evaluation of proteinuria
              </h1>
            </div>
            <Link className={styles.heroButton} href="/consultation/">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </section>

        {/* Section 2: Intro Section */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introContent}>
              <div className={styles.introTitle}>
                <h2>Understanding Proteinuria Evaluation at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to MMR Hospital &amp; IVF Center, the best nephrology hospital in Raipur, Chhattisgarh. We are dedicated to providing comprehensive care for various kidney-related conditions, including the evaluation and treatment of proteinuria.
              </p>
              <p className={styles.introText2}>
                Proteinuria, the presence of abnormal amounts of protein in the urine, can indicate an underlying kidney problem or other health issues. At MMR Hospital &amp; IVF Center, our expert nephrologists specialize in diagnosing and managing proteinuria to ensure the best possible outcomes for our patients.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Importance of Proteinuria Evaluation */}
        <section className={styles.whySection} style={{ borderTop: "1px solid rgba(92, 53, 154, 0.05)" }}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595", marginBottom: "8px" }}>
                Importance of Proteinuria Evaluation
              </h3>
              <p>
                The evaluation of proteinuria is crucial as it can be an indicator of underlying health issues, particularly related to kidney function. Detecting and diagnosing proteinuria early can help in the management and treatment of various renal conditions, including chronic kidney disease, diabetes, hypertension, and preeclampsia in pregnant women.
              </p>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 4: Evaluation Process */}
        <section className={styles.processSection}>
          {/* Decoupled Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.processContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Evaluation Process at MMR Hospital &amp; IVF Center</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                At MMR Hospital &amp; IVF Center, our experienced medical team employs a systematic approach to evaluate proteinuria, ensuring accurate diagnosis and personalized treatment plans for our patients. Our evaluation process typically includes:
              </p>
            </ScrollRevealSection>

            <div className={styles.processGrid}>
              {processSteps.map((step, idx) => (
                <ScrollRevealSection key={step.num}>
                  <div
                    className={styles.processCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.processHeader}>
                      <span className={styles.processNumber}>{step.num}</span>
                      <div className={styles.processIcon}>
                        <i className={step.icon} />
                      </div>
                    </div>
                    <h3 className={styles.processCardTitle}>{step.title}</h3>
                    <p className={styles.processCardDesc}>{step.desc}</p>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Personalized Treatment Plans */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595", marginBottom: "8px" }}>
                Personalized Treatment Plans
              </h3>
              <p>
                Once proteinuria has been diagnosed and the underlying cause identified, our multidisciplinary team of healthcare professionals will work closely with you to develop a personalized treatment plan. Treatment may involve lifestyle modifications, medication management, and close monitoring of kidney function to prevent further progression of the condition.
              </p>
            </ScrollRevealSection>

            <ScrollRevealSection className={styles.whyFooterText} style={{ marginTop: "24px" }}>
              <p>
                If you have concerns about proteinuria or would like to schedule an evaluation with one of our specialists, please contact MMR Hospital &amp; IVF Center today. Your health and well-being are our top priorities, and we are here to provide you with the highest quality care every step of the way.
              </p>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 6: Special Facilities Grid */}
        <section className={styles.facilitiesSection}>
          {/* Decoupled Scoped Top Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          {/* Decoupled Scoped Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.facilitiesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Special Facilities in our Hospital</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.facilitiesGrid}>
              {facilities.map((fac, idx) => (
                <ScrollRevealSection key={idx}>
                  <div className={styles.facilityCard} style={{ transitionDelay: `${idx * 150}ms` }}>
                    <div className={styles.facilityImageWrapper}>
                      <img
                        src={fac.imgSrc}
                        alt={fac.title}
                        className={styles.facilityImage}
                      />
                    </div>
                    <div className={styles.facilityCardContent}>
                      <h3 className={styles.facilityCardTitle}>{fac.title}</h3>
                      <p className={styles.facilityCardDesc}>{fac.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA Section */}
        <section
          className={styles.ctaSection}
          style={{
            backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
          }}
        >
          <div className={styles.ctaOverlay} />

          <ScrollRevealSection className={styles.ctaContainer}>
            <div className={styles.ctaTitle}>
              <h2>Make your Parenthood dream come true.</h2>
            </div>
            <p className={styles.ctaDesc}>
              As the best nephrology hospital in Raipur, Chhattisgarh, MMR Hospital &amp; IVF Center offers state-of-the-art facilities, advanced diagnostic techniques, and compassionate care. Our team of experienced nephrologists, urologists, and support staff is committed to providing comprehensive evaluation and treatment for proteinuria and other kidney-related disorders.
            </p>
            <Link className={styles.ctaButton} href="/consultation/">
              BOOK Consultation
            </Link>
          </ScrollRevealSection>
        </section>

      </main>
    </div>
  );
}
