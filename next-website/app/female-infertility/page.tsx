"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "@/app/TreatmentPage.module.css";

// Helper component for Intersection Observer Scroll Reveal
function ScrollRevealSection({ children, className = "" }: { children: ReactNode; className?: string }) {
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
      className={`${className} ${styles.scrollReveal} ${isVisible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default function FemaleInfertilityPage() {
  const evaluationItems = [
    "Hormonal testing to assess ovarian function and egg quality",
    "Ovulation tracking to determine the timing of ovulation and identify any irregularities",
    "Pelvic ultrasound to evaluate the health of the reproductive organs, including the uterus and ovaries",
    "Hysterosalpingogram (HSG) or saline sonohysterography to assess the condition of the fallopian tubes and detect any abnormalities",
    "Genetic testing to identify any hereditary factors that may impact fertility"
  ];

  const treatments = [
    {
      icon: "fas fa-capsules",
      title: "Ovulation Induction",
      desc: "Stimulating ovulation with medications to increase the likelihood of conception."
    },
    {
      icon: "fas fa-syringe",
      title: "Intrauterine Insemination (IUI)",
      desc: "Placing washed and concentrated sperm directly into the uterus during ovulation to facilitate fertilization."
    },
    {
      icon: "fas fa-procedures",
      title: "In Vitro Fertilization (IVF)",
      desc: "Retrieving eggs from the ovaries, fertilizing them with sperm in the laboratory, and transferring the resulting embryos into the uterus to establish a pregnancy."
    },
    {
      icon: "fas fa-egg",
      title: "Egg Freezing",
      desc: "Preserving fertility by freezing eggs for future use."
    },
    {
      icon: "fas fa-users",
      title: "Donor Egg IVF",
      desc: "Using donated eggs from a healthy young woman to achieve pregnancy in individuals with diminished ovarian reserve or other fertility issues."
    },
    {
      icon: "fas fa-dna",
      title: "Preimplantation Genetic Testing (PGT)",
      desc: "Screening embryos for genetic abnormalities before transfer to improve the chances of a successful pregnancy"
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
                Female Infertility
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
                <h2>Female Fertility Services at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand the profound impact that infertility can have on a woman&apos;s life and her desire to conceive. Our Female Fertility Services are specifically tailored to address the unique reproductive health needs of women, offering comprehensive care, innovative treatments, and compassionate support to help you achieve your dream of motherhood.
              </p>
              <p className={styles.introText2}>
                We recognize that female fertility is influenced by a variety of factors, including hormonal balance, ovarian function, reproductive anatomy, and overall health. Our team of fertility specialists takes a holistic approach to female fertility evaluation and treatment, focusing on identifying and addressing underlying issues while providing personalized care tailored to each patient&apos;s specific needs.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Comprehensive Evaluation (Benefits/Checklist Format) */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Comprehensive Evaluation</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p className={styles.benefitsIntroText}>
                Our Female Fertility Services begin with a thorough evaluation to assess your reproductive health and identify any potential barriers to conception. This evaluation may include:
              </p>
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {evaluationItems.map((item, idx) => (
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

            <ScrollRevealSection>
              <div className={styles.whyFooterText} style={{ marginTop: "30px", padding: "20px" }}>
                <p>
                  Based on the results of these evaluations, our fertility specialists will work with you to develop a personalized treatment plan tailored to your unique needs and goals.
                </p>
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 4: Advanced Treatment Options */}
        <section className={styles.servicesSection}>
          {/* Decoupled Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Advanced Treatment Options</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                At MMR Hospital &amp; IVF Center, we offer a wide range of advanced treatment options to address female infertility, including:
              </p>
            </ScrollRevealSection>

            <div className={styles.servicesGrid}>
              {treatments.map((service, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.serviceCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.serviceIcon}>
                      <i className={service.icon} />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                      <p className={styles.serviceCardDesc}>{service.desc}</p>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Compassionate Support Paragraph */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <p>
                If you&apos;re struggling with female infertility or have questions about our Female Fertility Services, we encourage you to reach out to us to schedule a consultation. Our team of fertility specialists is dedicated to providing personalized care and support to help you achieve your goal of building a family. Let us be your partner on the path to parenthood.
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
