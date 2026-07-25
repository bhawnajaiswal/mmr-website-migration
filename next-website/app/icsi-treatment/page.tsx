"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Icsi.module.css";

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

export default function IcsiPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-capsules",
      title: "Ovarian Stimulation",
      desc: "The female partner undergoes ovarian stimulation to encourage the development of multiple eggs within the ovaries."
    },
    {
      num: "02",
      icon: "fas fa-procedures",
      title: "Egg Retrieval",
      desc: "Once the eggs have matured, they are retrieved from the ovaries through a minimally invasive procedure called follicular aspiration."
    },
    {
      num: "03",
      icon: "fas fa-vial",
      title: "Sperm Collection",
      desc: "Meanwhile, sperm samples are collected from the male partner through ejaculation or surgical sperm retrieval techniques, such as testicular sperm extraction (TESE) or epididymal sperm aspiration (TESA)."
    },
    {
      num: "04",
      icon: "fas fa-syringe",
      title: "Injection of Sperm",
      desc: "Using a specialized micromanipulation technique, a single sperm is carefully selected and injected directly into the cytoplasm of each mature egg."
    },
    {
      num: "05",
      icon: "fas fa-chart-line",
      title: "Fertilization and Embryo Development",
      desc: "After the injection, the fertilized eggs are monitored in the laboratory for signs of successful fertilization and embryo development."
    },
    {
      num: "06",
      icon: "fas fa-baby",
      title: "Embryo Transfer",
      desc: "Once viable embryos have developed, one or more embryos are selected for transfer into the uterus, with the goal of establishing a pregnancy."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      title: "Expertise",
      desc: "Our fertility specialists are highly experienced in performing ICSI procedures and have helped numerous couples overcome male factor infertility to achieve successful pregnancies."
    },
    {
      icon: "fas fa-microscope",
      title: "State-of-the-Art Facility",
      desc: "We utilize advanced technology and equipment in our state-of-the-art laboratory to ensure the highest level of precision and accuracy during the ICSI process."
    },
    {
      icon: "fas fa-notes-medical",
      title: "Personalized Care",
      desc: "We understand that every patient's journey is unique, and we tailor our treatment approach to meet individual needs, providing compassionate support every step of the way."
    },
    {
      icon: "fas fa-heart",
      title: "Success Rates",
      desc: "Our commitment to excellence and continuous quality improvement has resulted in consistently high success rates for ICSI, giving hope to couples seeking to expand their families."
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

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
    { name: "Twitter", icon: "fab fa-twitter", url: "#" },
    { name: "Google-plus", icon: "fab fa-google-plus-g", url: "#" },
    { name: "Linkedin", icon: "fab fa-linkedin-in", url: "#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#" }
  ];

  return (
    <div className={styles.icsiContainer}>
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
                ICSI
                <span>( Intracytoplasmic Sperm Injection )</span>
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
                <h2>Intracytoplasmic Sperm Injection (ICSI) at MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                At MMR Hospital &amp; IVF Center, we understand that the journey to parenthood can present unique challenges for individuals and couples struggling with infertility. That&apos;s why we offer advanced fertility treatments like Intracytoplasmic Sperm Injection (ICSI) to help overcome barriers to conception and achieve successful pregnancies.
              </p>
              <p className={styles.introText2}>
                Intracytoplasmic Sperm Injection (ICSI) is a highly specialized form of in vitro fertilization (IVF) that involves the direct injection of a single sperm into an egg. This technique is particularly beneficial for couples dealing with male factor infertility, where the sperm may have difficulty penetrating the egg on its own.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: How Does ICSI Work? */}
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
                <h2>How Does ICSI Work?</h2>
              </div>
              <div className={styles.sectionDivider} />
              <p style={{ fontSize: "1.05rem", color: "#64748b", marginTop: "12px" }}>The ICSI procedure is performed as part of the IVF process and typically involves the following steps:</p>
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

        {/* Section 4: Why Choose MMR Hospital & IVF Center for ICSI? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose MMR Hospital &amp; IVF Center for ICSI?</h2>
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
                  If you&apos;re considering ICSI as part of your fertility treatment plan, we invite you to schedule a consultation with our experienced fertility team at MMR Hospital &amp; IVF Center. Together, we can explore your options and develop a personalized treatment approach to help you achieve your dream of parenthood.
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

                    {/* Social Icons inside card since showSocialIcons is true */}
                    <div className={styles.cardSocials}>
                      {socialLinks.map((social, sIdx) => (
                        <a
                          key={sIdx}
                          href={social.url}
                          className={styles.socialLink}
                          title={social.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={social.icon} />
                        </a>
                      ))}
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
