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

export default function EctopicPregnancyPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-stethoscope",
      title: "Diagnosis",
      desc: "Our skilled medical team utilizes state-of-the-art diagnostic techniques, including ultrasound imaging and blood tests, to accurately diagnose ectopic pregnancies and assess the health of our patients."
    },
    {
      num: "02",
      icon: "fas fa-capsules",
      title: "Medical Management",
      desc: "Depending on the individual's condition and medical history, we may recommend medical management options such as methotrexate therapy to safely dissolve the ectopic pregnancy tissue and prevent further complications."
    },
    {
      num: "03",
      icon: "fas fa-procedures",
      title: "Surgical Intervention",
      desc: "In cases where medical management is not feasible or effective, surgical intervention may be necessary to remove the ectopic pregnancy and preserve the patient's fertility. Our experienced surgeons perform minimally invasive laparoscopic procedures to minimize discomfort and recovery time."
    },
    {
      num: "04",
      icon: "fas fa-heart",
      title: "Emotional Support",
      desc: "Dealing with an ectopic pregnancy can be emotionally challenging for individuals and their partners. Our caring and supportive staff provide counseling and emotional support to help our patients cope with their feelings and navigate the emotional aspects of their diagnosis and treatment."
    },
    {
      num: "05",
      icon: "fas fa-chart-line",
      title: "Follow-Up Care",
      desc: "After ectopic pregnancy management, we offer ongoing monitoring and follow-up care to ensure our patients' health and well-being. We provide comprehensive post-treatment assessments and support to address any concerns and optimize their recovery."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      title: "Experienced Specialists",
      desc: "Our team of gynecologists, obstetricians, and fertility specialists have extensive experience in diagnosing and managing ectopic pregnancies with precision and care."
    },
    {
      icon: "fas fa-notes-medical",
      title: "Personalized Treatment Plans",
      desc: "We understand that every patient is unique, and we tailor our treatment plans to meet their individual needs, preferences, and goals."
    },
    {
      icon: "fas fa-microscope",
      title: "Advanced Technology",
      desc: "We utilize the latest medical technology and equipment to provide accurate diagnosis, minimally invasive surgical techniques, and optimal outcomes for our patients."
    },
    {
      icon: "fas fa-heart",
      title: "Compassionate Care",
      desc: "At MMR Hospital & IVF Center, we are committed to providing compassionate and supportive care to our patients, ensuring they feel heard, understood, and cared for throughout their treatment journey."
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
                Ectopic Pregnancy..
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
                <h2>Ectopic Pregnancy Management at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we provide best gynecologist in raipur and we understand the complexity and sensitivity of ectopic pregnancies, and we are here to offer compassionate care and expert management to individuals facing this challenging situation. Our experienced team of gynecologists, obstetricians, and fertility specialists is dedicated to providing comprehensive and personalized treatment for ectopic pregnancies, ensuring the best possible outcomes for our patients.
              </p>
              <p className={styles.introText2}>
                An ectopic pregnancy occurs when a fertilized egg implants and grows outside the uterus, most commonly in the fallopian tube. This type of pregnancy is not viable and can pose serious health risks if left untreated. Ectopic pregnancies require prompt medical attention and specialized care to prevent complications and preserve reproductive health.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Our Approach to Ectopic Pregnancy Management */}
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
                <h2>Our Approach to Ectopic Pregnancy Management</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                At MMR Hospital &amp; IVF Center, Our gynecologist take a multidisciplinary approach to ectopic pregnancy management, combining medical expertise, advanced technology, and compassionate support to guide our patients through every step of their treatment journey. Our comprehensive ectopic pregnancy management services include:
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

        {/* Section 4: Why Choose MMR Hospital & IVF Center for Ectopic Pregnancy Management? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose MMR Hospital &amp; IVF Center for Ectopic Pregnancy Management?</h2>
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
                  If you or someone you know is experiencing symptoms of an ectopic pregnancy or has been diagnosed with this condition, we are here to help. Please don&apos;t hesitate to contact us to schedule a consultation with one of our experienced specialists. Your health and well-being are our top priorities, and we are dedicated to providing you with the highest quality care and support.
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
