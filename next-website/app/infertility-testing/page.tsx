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

export default function InfertilityTestingPage() {
  const femaleTests = [
    {
      title: "Ovarian Reserve Testing",
      desc: "Assessing the quantity and quality of a woman's eggs through tests such as hormone level evaluations and antral follicle counts."
    },
    {
      title: "Ovulation Evaluation",
      desc: "Monitoring hormone levels and menstrual cycles to determine if ovulation is occurring regularly."
    },
    {
      title: "Hysterosalpingography (HSG)",
      desc: "A diagnostic imaging test to evaluate the condition of the uterus and fallopian tubes for any blockages or abnormalities."
    },
    {
      title: "Pelvic Ultrasound",
      desc: "Imaging technique to examine the pelvic organs, including the uterus, ovaries, and fallopian tubes, for any structural issues or abnormalities."
    }
  ];

  const maleTests = [
    {
      title: "Semen Analysis",
      desc: "Examination of the semen sample to assess sperm count, motility, morphology, and other factors affecting male fertility."
    },
    {
      title: "Hormone Testing",
      desc: "Evaluation of hormone levels, such as testosterone and follicle-stimulating hormone (FSH), which play a crucial role in sperm production."
    },
    {
      title: "Genetic Testing",
      desc: "Screening for genetic abnormalities or chromosomal disorders that may impact male fertility."
    }
  ];

  const additionalTests = [
    {
      title: "Endocrine Testing",
      desc: "Assessment of hormone levels related to fertility, such as thyroid function, prolactin, and insulin resistance."
    },
    {
      title: "Immunological Testing",
      desc: "Examination of immune system factors that may affect fertility, including autoimmune conditions and antibodies that target reproductive tissues."
    },
    {
      title: "Hysteroscopy",
      desc: "Minimally invasive procedure to visualize the inside of the uterus and identify any structural abnormalities or uterine pathologies."
    }
  ];

  const advancedTests = [
    {
      title: "Genetic Screening",
      desc: "Preimplantation genetic testing (PGT) to screen embryos for chromosomal abnormalities or genetic disorders before embryo transfer during IVF."
    },
    {
      title: "Recurrent Pregnancy Loss Evaluation",
      desc: "Comprehensive assessment for couples experiencing recurrent miscarriages to identify underlying causes and develop appropriate treatment strategies."
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
                Infertility Testing
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
                <h2>Infertility Testing Services at MMR Hospital &amp; IVF Center.</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand that facing infertility challenges can be emotionally taxing. Our comprehensive infertility testing services are designed to provide you with clarity, insight, and personalized treatment recommendations on your journey to parenthood.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Core Details Section */}
        {/* Step 1: Initial Consultation */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#305595", marginBottom: "8px" }}>
                1. Initial Consultation
              </h3>
              <p>
                During your initial consultation, our experienced fertility specialists, led by Dr. Anuradha Tibrewal Chowdhary, will take the time to listen to your concerns, review your medical history, and perform a thorough assessment. This consultation serves as the foundation for developing a tailored testing plan to identify the underlying causes of infertility.
              </p>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Step 2: Female Infertility Testing */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>2. Female Infertility Testing</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.servicesGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {femaleTests.map((test, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.serviceCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{test.title}</h3>
                      <p className={styles.serviceCardDesc}>{test.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Step 3: Male Infertility Testing */}
        <section className={styles.servicesSectionWhite}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>3. Male Infertility Testing</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.servicesGrid}>
              {maleTests.map((test, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.serviceCard} ${styles.serviceCardLight}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{test.title}</h3>
                      <p className={styles.serviceCardDesc}>{test.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Step 4: Additional Diagnostic Tests */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>4. Additional Diagnostic Tests</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.servicesGrid}>
              {additionalTests.map((test, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.serviceCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{test.title}</h3>
                      <p className={styles.serviceCardDesc}>{test.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Step 5: Advanced Testing Options */}
        <section className={styles.servicesSectionWhite} style={{ borderBottom: "1px solid rgba(92, 53, 154, 0.05)" }}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>5. Advanced Testing Options</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.servicesGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {advancedTests.map((test, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.serviceCard} ${styles.serviceCardLight}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{test.title}</h3>
                      <p className={styles.serviceCardDesc}>{test.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Personalized Treatment Planning */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595" }}>
                Personalized Treatment Planning:
              </h3>
              <p>
                Following a thorough evaluation of your test results, our fertility specialists will work closely with you to develop a personalized treatment plan tailored to your specific needs and goals. Whether it involves fertility medications, lifestyle modifications, assisted reproductive technologies (ART), or other interventions, we are committed to guiding you every step of the way towards achieving a successful pregnancy
              </p>
              <p>
                If you&apos;re experiencing male infertility or have concerns about your reproductive health, we&apos;re here to help. Schedule a consultation with our experienced fertility specialists at MMR Hospital &amp; IVF Center to explore your options for achieving your fertility goals.
              </p>
            </ScrollRevealSection>

            <ScrollRevealSection className={styles.whyFooterText} style={{ marginTop: "24px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595" }}>
                Personalized Treatment Planning:
              </h3>
              <p>
                Throughout your infertility testing journey, our caring and dedicated team at MMR Hospital &amp; IVF Center will provide you with the support, guidance, and encouragement you need. We understand the challenges you may face and are here to offer compassionate care and hope for a positive outcome.
              </p>
              <p>
                If you&apos;re ready to take the next step towards understanding and addressing your infertility concerns, please contact us to schedule a consultation. We look forward to being a part of your fertility journey and helping you realize your dream of starting or expanding your family.
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
