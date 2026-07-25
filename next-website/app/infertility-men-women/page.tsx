"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./InfertilityMenWomen.module.css";

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

export default function InfertilityPage() {
  const femaleServices = [
    {
      icon: "fas fa-capsules",
      title: "Ovulation Induction",
      desc: "We offer customized treatment plans to stimulate ovulation in women who have irregular or absent menstrual cycles."
    },
    {
      icon: "fas fa-syringe",
      title: "Intrauterine Insemination (IUI)",
      desc: "IUI involves placing specially prepared sperm directly into the uterus during the woman's fertile window, increasing the chances of fertilization."
    },
    {
      icon: "fas fa-procedures",
      title: "In Vitro Fertilization (IVF)",
      desc: "IVF is a highly effective assisted reproductive technology that involves retrieving eggs from the ovaries, fertilizing them with sperm in a laboratory, and transferring the resulting embryos into the uterus."
    },
    {
      icon: "fas fa-egg",
      title: "Egg Freezing",
      desc: "Our egg freezing program allows women to preserve their fertility by freezing and storing their eggs for future use."
    },
    {
      icon: "fas fa-stethoscope",
      title: "Laparoscopic Surgery",
      desc: "For women with conditions such as endometriosis, ovarian cysts, or blocked fallopian tubes, laparoscopic surgery may be recommended to improve fertility."
    }
  ];

  const maleServices = [
    {
      icon: "fas fa-vial",
      title: "Semen Analysis",
      desc: "We perform comprehensive semen analysis to evaluate sperm count, motility, morphology, and other factors affecting male fertility."
    },
    {
      icon: "fas fa-briefcase-medical",
      title: "Sperm Retrieval Techniques",
      desc: "For men with obstructive azoospermia or other conditions causing low sperm production, we offer sperm retrieval techniques such as testicular sperm aspiration (TESA) or microsurgical epididymal sperm aspiration (MESA)."
    },
    {
      icon: "fas fa-dna",
      title: "Intracytoplasmic Sperm Injection (ICSI)",
      desc: "ICSI is a procedure where a single sperm is directly injected into an egg during the IVF process, bypassing natural barriers to fertilization."
    },
    {
      icon: "fas fa-dna",
      title: "Genetic Testing",
      desc: "We provide genetic testing services to identify genetic abnormalities in sperm that may affect fertility or increase the risk of genetic disorders in offspring."
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
                Infertility men &amp; women
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
                <h2>Infertility Services for Men &amp; Women</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand the emotional and physical toll that infertility can take on individuals and couples. Our dedicated team of fertility specialists is here to offer comprehensive evaluation, diagnosis, and treatment options for both men and women struggling with infertility. Whether you&apos;re facing challenges with conception due to male factor infertility, female reproductive issues, or a combination of factors, we&apos;re committed to providing personalized care to help you achieve your dream of parenthood.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Infertility Services for Women */}
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
                <h2>Infertility Services for Women</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                Our fertility experts specialize in diagnosing and treating a wide range of female reproductive disorders and conditions that can impact fertility. Our services for women include:
              </p>
            </ScrollRevealSection>

            <div className={styles.servicesGrid}>
              {femaleServices.map((service, idx) => (
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

        {/* Section 4: Infertility Services for Men */}
        <section className={styles.servicesSectionWhite}>
          <div className={styles.servicesContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Infertility Services for Men</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px", maxWidth: "800px", margin: "12px auto 0" }}>
                Male factor infertility accounts for a significant percentage of fertility issues experienced by couples. Our specialized services for men include:
              </p>
            </ScrollRevealSection>

            <div className={styles.servicesGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {maleServices.map((service, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={`${styles.serviceCard} ${styles.serviceCardLight}`}
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

        {/* Section 5: Comprehensive Care, Compassionate Support */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.whyFooterText}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#305595" }}>
                Comprehensive Care, Compassionate Support
              </h3>
              <p>
                At MMR Hospital &amp; IVF Center, we understand that infertility treatment can be a challenging journey. That&apos;s why we offer compassionate support and guidance every step of the way. Our experienced fertility team will work closely with you to develop a personalized treatment plan tailored to your unique needs and goals.
              </p>
              <p>
                If you&apos;re struggling with infertility, we&apos;re here to help. Contact us today to schedule a consultation and take the first step towards preserving your fertility for the future.
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
