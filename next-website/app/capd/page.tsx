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

export default function CapdPage() {
  const benefits = [
    {
      title: "Flexibility",
      desc: "CAPD allows individuals to perform dialysis at home, eliminating the need for frequent visits to a dialysis center."
    },
    {
      title: "Independence",
      desc: "With proper training and support, patients can manage their CAPD treatments independently, giving them greater control over their healthcare."
    },
    {
      title: "Continuous Therapy",
      desc: "CAPD provides continuous clearance of waste products and excess fluids, helping to maintain more stable blood chemistry levels compared to traditional hemodialysis."
    }
  ];

  const services = [
    {
      title: "Patient Education & Training",
      desc: "Comprehensive education and hands-on training on correct CAPD techniques and sterile catheter care."
    },
    {
      title: "Catheter Management",
      desc: "Surgical placement, monitoring, and long-term care management of CAPD catheters to prevent infections."
    },
    {
      title: "Outcome Monitoring",
      desc: "Regular clinical checks and ongoing support to ensure optimal dialysis adequacy and patient well-being."
    },
    {
      title: "Multidisciplinary Collaboration",
      desc: "Coordination with nephrologists, dietitians, and other specialists to address individual patient needs holistically."
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
                CAPD
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
                <h2>Continuous Ambulatory Peritoneal Dialysis (CAPD) at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to MMR Hospital &amp; IVF Center&apos;s dedicated page on Continuous Ambulatory Peritoneal Dialysis (CAPD). CAPD is a type of dialysis that allows individuals with kidney failure to perform dialysis at home, offering flexibility and independence in managing their condition.
              </p>
              <p className={styles.introText2}>
                Under the expert guidance of Dr. Prawash Chowdhary, MMR Hospital &amp; IVF Center offers advanced Continuous Ambulatory Peritoneal Dialysis (CAPD) services for patients suffering from kidney-related conditions. As the leading nephrology hospital in Raipur, Chhattisgarh, we are committed to providing the best possible care to our patients.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: What is CAPD & How Does it Work? */}
        <section className={styles.processSection}>
          {/* Decoupled Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.processContainer}>
            <div className={styles.processGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              <ScrollRevealSection>
                <div className={styles.processCard}>
                  <div className={styles.processHeader}>
                    <span className={styles.processNumber}>01</span>
                    <div className={styles.processIcon}>
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <h3 className={styles.processCardTitle}>What is CAPD?</h3>
                  <p className={styles.processCardDesc}>
                    Continuous Ambulatory Peritoneal Dialysis (CAPD) is a form of kidney dialysis that utilizes the peritoneum, a membrane lining the abdominal cavity, as a filter to remove waste products and excess fluids from the body. CAPD does not require a machine and can be performed manually, making it suitable for home-based treatment.
                  </p>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection>
                <div className={styles.processCard}>
                  <div className={styles.processHeader}>
                    <span className={styles.processNumber}>02</span>
                    <div className={styles.processIcon}>
                      <i className="fas fa-sync" />
                    </div>
                  </div>
                  <h3 className={styles.processCardTitle}>How Does CAPD Work?</h3>
                  <p className={styles.processCardDesc}>
                    During CAPD, a sterile dialysis solution is infused into the peritoneal cavity through a catheter. The solution remains in the abdomen for a prescribed period, allowing waste products and excess fluids to pass from the bloodstream into the dialysis solution. After a dwell time, the used dialysis solution is drained from the abdomen, and fresh solution is infused to continue the process.
                  </p>
                </div>
              </ScrollRevealSection>
            </div>
          </div>
        </section>

        {/* Section 4: Benefits of CAPD */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Benefits of CAPD:</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {benefits.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                      <p className={styles.serviceCardDesc}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Our CAPD Services */}
        <section className={styles.servicesSection} style={{ borderBottom: "1px solid rgba(92, 53, 154, 0.05)" }}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Our CAPD Services:</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                At MMR Hospital &amp; IVF Center, we offer comprehensive CAPD services, including:
              </p>
            </ScrollRevealSection>

            <div className={styles.servicesGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {services.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.serviceCard} ${styles.serviceCardLight}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className="fas fa-hand-holding-medical" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                      <p className={styles.serviceCardDesc}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Closing Callout */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <p>
                If you or a loved one are considering CAPD as a treatment option for kidney failure, we&apos;re here to help. Contact MMR Hospital &amp; IVF Center to learn more about our CAPD services or to schedule a consultation with one of our experienced healthcare professionals. Your journey to better kidney health starts here.
              </p>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 7: Special Facilities Grid */}
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

        {/* Section 8: Final CTA Section */}
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
              If you&apos;re seeking the best nephrology hospital in Raipur, Chhattisgarh, for CAPD treatment, look no further than MMR Hospital &amp; IVF Center. Contact us today to schedule a consultation with Dr. Prawash Chowdhary and learn more about our CAPD services.
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
