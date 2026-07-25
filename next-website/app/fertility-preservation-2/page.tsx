"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./FertilityPreservation.module.css";

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

export default function FertilityPreservationPage() {
  const services = [
    {
      icon: "fas fa-egg",
      title: "Egg Freezing (Oocyte Cryopreservation)",
      desc: "Egg freezing allows individuals to preserve their fertility by retrieving and freezing their eggs for future use. This option is particularly beneficial for women who wish to delay childbearing due to personal or medical reasons, such as career advancement, medical treatment, or family planning."
    },
    {
      icon: "fas fa-users",
      title: "Embryo Freezing",
      desc: "For individuals or couples undergoing IVF treatment, embryo freezing offers a means of preserving embryos for future use. Embryos created during the IVF process can be cryopreserved and stored until the individual or couple is ready to pursue pregnancy."
    },
    {
      icon: "fas fa-dna",
      title: "Sperm Freezing (Sperm Cryopreservation)",
      desc: "Sperm freezing is a valuable option for men who are facing medical treatments that may affect their fertility, such as chemotherapy, radiation therapy, or surgery. By freezing and storing sperm samples, men can preserve their reproductive potential before undergoing treatment."
    },
    {
      icon: "fas fa-leaf",
      title: "Ovarian Tissue Freezing",
      desc: "Ovarian tissue freezing is an innovative technique that involves surgically removing and freezing a portion of ovarian tissue for future use. This option may be suitable for individuals who cannot undergo traditional egg freezing due to medical reasons or who wish to preserve their fertility before undergoing treatments that may harm ovarian function."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      title: "Expertise",
      desc: "Our fertility specialists are highly experienced in fertility preservation techniques and procedures. We work closely with each individual to develop a personalized plan that meets their unique needs and goals."
    },
    {
      icon: "fas fa-heart",
      title: "Compassionate Care",
      desc: "We understand the emotional and psychological challenges associated with fertility preservation. Our team provides compassionate support and guidance throughout the process, ensuring that patients feel informed, empowered, and cared for every step of the way."
    },
    {
      icon: "fas fa-microscope",
      title: "State-of-the-Art Facilities",
      desc: "MMR Hospital & IVF Center is equipped with state-of-the-art technology and facilities to ensure the highest standard of care for our patients. Our laboratory is accredited and adheres to strict quality standards for the handling and storage of reproductive tissues."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Collaborative Approach",
      desc: "We believe in a collaborative approach to fertility preservation, involving patients, fertility specialists, oncologists, and other healthcare professionals to ensure comprehensive care and optimal outcomes."
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
                Fertility Preservation
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
                <h2>Fertility Preservation at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand that fertility preservation is a crucial concern for individuals facing medical treatments or life circumstances that may affect their future fertility. Whether you&apos;re undergoing cancer treatment, planning to delay childbearing, or exploring gender transition, our fertility preservation services offer you the opportunity to safeguard your reproductive potential for the future.
              </p>
              <p className={styles.introText2}>
                In Vitro Maturation (IVM) is an assisted reproductive technology (ART) procedure that offers an alternative to traditional In Vitro Fertilization (IVF) for certain patients. Unlike IVF, which requires the administration of high doses of hormones to stimulate the ovaries and mature the eggs, IVM involves the retrieval of immature eggs from the ovaries before they have fully developed. These immature eggs are then matured in the laboratory under controlled conditions, without the need for ovarian stimulation drugs.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Our Services */}
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
                <h2>Our Services</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.servicesGrid}>
              {services.map((service, idx) => (
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

        {/* Section 4: Why Choose Us for Fertility Preservation? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose Us for Fertility Preservation?</h2>
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
                  At MMR Hospital &amp; IVF Center, we believe that everyone deserves the opportunity to build the family of their dreams, regardless of their circumstances. If you&apos;re considering fertility preservation or have questions about your options, we&apos;re here to help. Contact us today to schedule a consultation and take the first step towards preserving your fertility for the future.
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
