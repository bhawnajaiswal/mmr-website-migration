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

export default function DiagnosticPage() {
  const fertilityAssessment = [
    "Hormonal assays to evaluate ovarian function",
    "Semen analysis for male fertility assessment",
    "Ovulation monitoring through ultrasound and blood tests",
    "Hysterosalpingography (HSG) to assess fallopian tube patency",
    "Sonohysterography to evaluate uterine abnormalities",
    "Genetic screening for hereditary fertility issues"
  ];

  const renalFunction = [
    "Blood tests to assess kidney function (e.g., creatinine, blood urea nitrogen)",
    "Urine tests to detect abnormalities (e.g., proteinuria, hematuria)",
    "Glomerular filtration rate (GFR) measurement",
    "Imaging studies (e.g., ultrasound, CT scan) for kidney evaluation",
    "Renal biopsy for diagnosing kidney diseases"
  ];

  const imagingStudies = [
    "Ultrasound imaging for reproductive organs and kidneys",
    "Transvaginal ultrasound for detailed assessment of the female reproductive system",
    "Doppler ultrasound for assessing blood flow in the kidneys",
    "CT scans and MRI scans for detailed anatomical evaluation"
  ];

  const endocrineTesting = [
    "Hormonal assays to evaluate thyroid function, adrenal function, and reproductive hormones",
    "Dynamic endocrine tests to assess hormonal responses to stimulation",
    "Thyroid ultrasound for thyroid gland evaluation"
  ];

  const geneticTesting = [
    "Preimplantation genetic testing (PGT) for screening chromosomal abnormalities in embryos during IVF",
    "Genetic counseling and testing for hereditary conditions impacting fertility or kidney health."
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
                Diagnostic
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
                <h2>Diagnostic Services at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand that accurate diagnosis is the cornerstone of effective medical treatment. Our comprehensive range of diagnostic services is designed to provide precise insights into your health condition, guiding our team of experts in formulating personalized treatment plans tailored to your specific needs.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Diagnostic Categories */}
        {/* 1. Fertility Assessment */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>1. Fertility Assessment</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {fertilityAssessment.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{item}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Renal Function Testing */}
        <section className={styles.benefitsSection} style={{ backgroundColor: "var(--color-background-light)", borderTop: "none" }}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>2. Renal Function Testing</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {renalFunction.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.benefitCard} ${styles.serviceCard}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{item}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Imaging Studies */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>3. Imaging Studies</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {imagingStudies.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{item}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Endocrine Testing */}
        <section className={styles.benefitsSection} style={{ backgroundColor: "var(--color-background-light)", borderTop: "none" }}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>4. Endocrine Testing</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {endocrineTesting.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.benefitCard} ${styles.serviceCard}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{item}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Genetic Testing */}
        <section className={styles.benefitsSection} style={{ borderBottom: "1px solid rgba(92, 53, 154, 0.05)" }}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>5. Genetic Testing</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.benefitsGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {geneticTesting.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{item}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Care Information Section */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595" }}>
                Compassionate Care, Accurate Results
              </h3>
              <p>
                At MMR Hospital &amp; IVF Center, we prioritize patient comfort and satisfaction throughout the diagnostic process. Our experienced team of healthcare professionals ensures that you receive personalized attention and support at every step. From scheduling appointments to explaining test results, we strive to make your diagnostic experience as seamless and stress-free as possible.
              </p>
              <p>
                If you&apos;re experiencing male infertility or have concerns about your reproductive health, we&apos;re here to help. Schedule a consultation with our experienced fertility specialists at MMR Hospital &amp; IVF Center to explore your options for achieving your fertility goals.
              </p>
            </ScrollRevealSection>

            <ScrollRevealSection className={styles.whyFooterText} style={{ marginTop: "24px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595" }}>
                Schedule Your Diagnostic Evaluation Today
              </h3>
              <p>
                Throughout your infertility testing journey, our caring and dedicated team at MMR Hospital &amp; IVF Center will provide you with the support, guidance, and encouragement you need. We understand the challenges you may face and are here to offer compassionate care and hope for a positive outcome. We are the best diagnostic center in Raipur.
              </p>
              <p>
                If you&apos;re seeking accurate diagnosis and expert medical care, MMR Hospital &amp; IVF Center is here to help. Contact us today to schedule your diagnostic evaluation and take the first step towards better health and well-being. Your journey to optimal health starts here.
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
              If you&apos;re struggling with infertility, we&apos;re here to help. Contact us today to schedule a consultation and take the first step towards building the family you&apos;ve always wanted.
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
