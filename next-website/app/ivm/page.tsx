"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Ivm.module.css";

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

export default function IvmPage() {
  const benefits = [
    "Women with polycystic ovary syndrome (PCOS) who are at risk of ovarian hyperstimulation syndrome (OHSS) with conventional IVF treatment.",
    "Women with a high risk of hormone-sensitive cancers who cannot undergo ovarian stimulation.",
    "Patients who prefer a more natural and less invasive approach to fertility treatment."
  ];

  const processItems = [
    "Unexplained infertility",
    "Mild male factor infertility",
    "Cervical factor infertility",
    "Ovulatory disorders",
    "Endometriosis",
    "Ejaculatory dysfunction",
    "Donor sperm insemination"
  ];

  const whyChooseSteps = [
    {
      num: "01",
      icon: "fas fa-stethoscope",
      title: "Ovarian Assessment",
      desc: "Before starting the IVM process, our fertility specialists will conduct a thorough evaluation of your ovarian reserve and reproductive health to determine if IVM is the right option for you."
    },
    {
      num: "02",
      icon: "fas fa-chart-line",
      title: "Ovarian Stimulation Monitoring",
      desc: "Unlike traditional IVF, IVM does not require ovarian stimulation medications. Instead, your natural menstrual cycle will be monitored closely to identify the optimal time for egg retrieval."
    },
    {
      num: "03",
      icon: "fas fa-procedures",
      title: "Egg Retrieval",
      desc: "Once your follicles contain immature eggs, a minimally invasive procedure known as transvaginal ultrasound-guided egg retrieval will be performed to collect the eggs from the ovaries."
    },
    {
      num: "04",
      icon: "fas fa-flask",
      title: "In Vitro Maturation",
      desc: "The immature eggs retrieved during the egg retrieval procedure will be placed in a specialized culture medium in the laboratory, where they will be allowed to mature over the course of several days."
    },
    {
      num: "05",
      icon: "fas fa-vial",
      title: "Fertilization and Embryo Transfer",
      desc: "Once the eggs have reached maturity, they will be fertilized with sperm through intracytoplasmic sperm injection (ICSI) or conventional insemination. The resulting embryos will be cultured in the laboratory until they reach the optimal stage for transfer into the uterus."
    },
    {
      num: "06",
      icon: "fas fa-baby",
      title: "Embryo Transfer and Pregnancy Testing",
      desc: "One or more embryos will be transferred into the uterus, and any remaining embryos may be cryopreserved for future use. A pregnancy test will be performed approximately two weeks after embryo transfer to determine if the procedure was successful."
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
    <div className={styles.ivmContainer}>
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
                IVM
                <span>( In Vitro Maturation )</span>
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
                <h2>In Vitro Maturation (IVM) Services at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to the In Vitro Maturation (IVM) services page at MMR Hospital &amp; IVF Center. We are pleased to offer this innovative fertility treatment option to individuals and couples seeking assistance with conception. In Vitro Maturation (IVM) is a technique that involves collecting immature eggs from the ovaries, maturing them in a laboratory setting, and then fertilizing them to create embryos for transfer into the uterus.
              </p>
              <p className={styles.introText2}>
                In Vitro Maturation (IVM) is an assisted reproductive technology (ART) procedure that offers an alternative to traditional In Vitro Fertilization (IVF) for certain patients. Unlike IVF, which requires the administration of high doses of hormones to stimulate the ovaries and mature the eggs, IVM involves the retrieval of immature eggs from the ovaries before they have fully developed. These immature eggs are then matured in the laboratory under controlled conditions, without the need for ovarian stimulation drugs.
              </p>
              <Link className={styles.introButton} href="/consultation-for-renal-problems">
                Book appointment »
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Who Can Benefit from IVM? */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Who Can Benefit from IVM?</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p className={styles.benefitsIntroText}>
                IVM may be suitable for individuals or couples facing specific fertility challenges, including:
              </p>
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={styles.benefitIcon}>
                      <i className="fas fa-check-circle" />
                    </div>
                    <span className={styles.benefitText}>{benefit}</span>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: The IVM Process at MMR Hospital & IVF Center */}
        <section className={styles.benefitsSection} style={{ borderTop: "none" }}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>The IVM Process at MMR Hospital &amp; IVF Center</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p className={styles.benefitsIntroText}>
                IUI may be recommended for individuals or couples facing certain fertility challenges, including
              </p>
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {processItems.map((item, idx) => (
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

        {/* Section 5: Why Choose MMR Hospital & IVF Center for IUI ? */}
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
                <h2>Why Choose MMR Hospital &amp; IVF Center for IUI ?</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.processGrid}>
              {whyChooseSteps.map((step, idx) => (
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

            <ScrollRevealSection>
              <div className={styles.whyFooterText}>
                <p>
                  If you are interested in learning more about In Vitro Maturation (IVM) or would like to schedule a consultation with one of our fertility specialists, please contact MMR Hospital &amp; IVF Center today. We are here to help you realize your dream of starting or expanding your family.
                </p>
              </div>
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
              Cras viverra lobortis odio aliquet volutpat. Ut imperdiet iaculis nisl at placerat. Nulla facilisi. Pellentesque nec suscipit est. Duis dapibus faucibus auctor.
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
