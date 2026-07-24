"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Iui.module.css";

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

export default function IuiPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-capsules",
      title: "Ovarian Stimulation",
      desc: "In some cases, ovarian stimulation medications may be prescribed to enhance the production of eggs."
    },
    {
      num: "02",
      icon: "fas fa-vials",
      title: "Semen Preparation",
      desc: "The sperm sample provided by the male partner or a donor is processed in the laboratory to separate motile and healthy sperm from seminal fluid and debris."
    },
    {
      num: "03",
      icon: "fas fa-syringe",
      title: "Insemination",
      desc: "The processed sperm sample is carefully inserted into the woman's uterus using a thin, flexible catheter. This procedure is usually painless and performed in our clinic."
    },
    {
      num: "04",
      icon: "fas fa-heartbeat",
      title: "Monitoring and Support",
      desc: "Following the IUI procedure, patients may be advised to rest briefly before resuming normal activities. Our medical team will provide guidance and support throughout the treatment cycle."
    }
  ];

  const benefits = [
    "Unexplained infertility",
    "Mild male factor infertility",
    "Cervical factor infertility",
    "Ovulatory disorders",
    "Endometriosis",
    "Ejaculatory dysfunction",
    "Donor sperm insemination"
  ];

  const whyChooseItems = [
    {
      icon: "fas fa-user-md",
      title: "Experienced Fertility Specialists",
      desc: "Our team of board-certified fertility specialists has extensive experience in performing IUI procedures and helping patients achieve successful outcomes."
    },
    {
      icon: "fas fa-notes-medical",
      title: "Personalized Care",
      desc: "We understand that every patient's journey to parenthood is unique. We provide individualized treatment plans tailored to each patient's specific needs and preferences."
    },
    {
      icon: "fas fa-microscope",
      title: "State-of-the-Art Facilities",
      desc: "Our clinic is equipped with advanced medical technology and state-of-the-art laboratory facilities to ensure the highest standard of care for our patients."
    },
    {
      icon: "fas fa-heart",
      title: "Compassionate Support",
      desc: "We are committed to providing compassionate, patient-centered care throughout every step of the fertility treatment process. Our team is here to offer guidance, support, and encouragement to help you achieve your family-building goals."
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
    <div className={styles.iuiContainer}>
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
                IUI
                <span>( Intrauterine Insemination )</span>
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
                <h2>Intrauterine Insemination (IUI) at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to MMR Hospital &amp; IVF Center&apos;s Intrauterine Insemination (IUI) service page. We are dedicated to offering comprehensive fertility treatments to help individuals and couples realize their dreams of parenthood. Intrauterine insemination, commonly known as IUI, is a fertility treatment that involves placing sperm directly into the uterus to facilitate fertilization and improve the chances of conception.
              </p>
              <p className={styles.introText2}>
                Intrauterine insemination (IUI) is a fertility procedure that involves the introduction of sperm into the uterus during a woman&apos;s fertile window. This procedure is typically performed around the time of ovulation to maximize the chances of successful fertilization.
              </p>
              <Link className={styles.introButton} href="/consultation-for-renal-problems">
                Book appointment »
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: How Does IUI Work? */}
        <section className={styles.processSection}>
          {/* Decoupled Scoped Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.processContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>How Does IUI Work?</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px" }}>The IUI procedure involves several steps:</p>
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

        {/* Section 4: Who Can Benefit from IUI? */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Who Can Benefit from IUI?</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p className={styles.benefitsIntroText}>
                IUI may be recommended for individuals or couples facing certain fertility challenges, including:
              </p>
            </ScrollRevealSection>

            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.benefitCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
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

        {/* Section 5: Why Choose MMR Hospital & IVF Center for IUI? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose MMR Hospital &amp; IVF Center for IUI ?</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.whyGrid}>
              {whyChooseItems.map((item, idx) => (
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
                  If you&apos;re considering intrauterine insemination (IUI) as a fertility treatment option, we invite you to schedule a consultation with one of our experienced fertility specialists. Together, we can explore your options and develop a personalized treatment plan tailored to your needs. Contact us today to take the first step on your journey to parenthood.
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
