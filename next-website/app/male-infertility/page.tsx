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

export default function MaleInfertilityPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-stethoscope",
      title: "Male Fertility Evaluation",
      desc: "We offer thorough evaluations to assess male reproductive health, including comprehensive medical history reviews, physical examinations, and specialized diagnostic tests such as semen analysis, hormone testing, and genetic screening."
    },
    {
      num: "02",
      icon: "fas fa-capsules",
      title: "Treatment for Male Infertility",
      desc: "Based on the results of the evaluation, our specialists develop personalized plans. Treatment may include medications to improve quality, surgical interventions to correct blockages, or assisted technologies (ART) such as IUI or IVF with ICSI."
    },
    {
      num: "03",
      icon: "fas fa-vial",
      title: "Semen Analysis",
      desc: "Our laboratory performs comprehensive semen analyses to evaluate sperm count, motility, morphology, and other parameters crucial for fertility. Accurate assessment of semen quality is essential for guiding treatment decisions."
    },
    {
      num: "04",
      icon: "fas fa-briefcase-medical",
      title: "Male Hormone Testing",
      desc: "Hormonal imbalances can contribute to male infertility. We offer specialized hormone testing to assess testosterone levels and other hormonal markers that may impact reproductive function."
    },
    {
      num: "05",
      icon: "fas fa-dna",
      title: "Genetic Testing",
      desc: "Genetic factors can play a significant role in male infertility. We provide genetic testing services to identify genetic abnormalities or chromosomal anomalies that may affect sperm production or quality."
    },
    {
      num: "06",
      icon: "fas fa-heart",
      title: "Lifestyle and Wellness Counseling",
      desc: "Our team offers guidance and support on lifestyle modifications and wellness strategies that can positively impact male fertility. This may include diet, exercise, stress management, and avoidance of environmental hazards."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      title: "Experienced Specialists",
      desc: "Our fertility experts have extensive experience in diagnosing and treating male infertility, employing the latest advancements in reproductive medicine."
    },
    {
      icon: "fas fa-notes-medical",
      title: "Comprehensive Care",
      desc: "We offer a full spectrum of male fertility services, from initial evaluation and diagnosis to customized treatment plans and ongoing support."
    },
    {
      icon: "fas fa-microscope",
      title: "State-of-the-Art Facilities",
      desc: "Our hospital is equipped with advanced laboratory facilities and cutting-edge technology to deliver accurate diagnoses and effective treatments."
    },
    {
      icon: "fas fa-heart",
      title: "Compassionate Support",
      desc: "We understand the emotional impact of infertility and provide compassionate, patient-centered care to support individuals and couples throughout their fertility journey."
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
                Male Infertility
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
                <h2>Male Fertility Services at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand that male infertility can be a significant concern for couples trying to conceive. Our dedicated Male Fertility Services are designed to provide comprehensive evaluation, diagnosis, and treatment options to address male reproductive health issues. Led by experienced fertility specialists, our team is committed to helping men overcome infertility challenges and achieve their dream of fatherhood.
              </p>
              <p className={styles.introText2}>
                We believe in a personalized approach to male fertility care, tailored to each individual&apos;s unique needs and circumstances. Our team of experts utilizes advanced diagnostic techniques and state-of-the-art treatment options to optimize male reproductive health and enhance fertility outcomes.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Services Offered Grid */}
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
                <h2>Services Offered</h2>
              </div>
              <div className={styles.sectionDivider} />
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

        {/* Section 4: Why Choose MMR Hospital & IVF Center for Male Fertility Care? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose MMR Hospital &amp; IVF Center for Male Fertility Care?</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.whyGrid}>
              {whyChooseUs.map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.whyCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.whyCardIcon}>
                      <i className={item.icon} />
                    </div>
                    <h3 className={styles.whyCardTitle}>{item.title}</h3>
                    <p className={styles.whyCardDesc}>{item.desc}</p>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>

            <ScrollRevealSection>
              <div className={styles.whyFooterText}>
                <p>
                  If you&apos;re experiencing male infertility or have concerns about your reproductive health, we&apos;re here to help. Schedule a consultation with our experienced fertility specialists at MMR Hospital &amp; IVF Center to explore your options for achieving your fertility goals.
                </p>
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 5: Special Facilities Grid */}
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

        {/* Section 6: Final CTA Section */}
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
