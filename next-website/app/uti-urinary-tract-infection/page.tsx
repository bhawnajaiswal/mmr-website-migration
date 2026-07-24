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

export default function UtiPage() {
  const processSteps = [
    {
      num: "01",
      icon: "fas fa-stethoscope",
      title: "Expert Diagnosis",
      desc: "Our experienced nephrologists employ state-of-the-art diagnostic techniques to accurately identify UTIs. From comprehensive medical history assessments to advanced laboratory tests, we leave no stone unturned in pinpointing the underlying cause of your symptoms."
    },
    {
      num: "02",
      icon: "fas fa-notes-medical",
      title: "Personalized Treatment Plans",
      desc: "No two UTI cases are alike, which is why we prioritize personalized treatment plans tailored to meet the unique needs of each patient. Whether your UTI requires antibiotic therapy, lifestyle modifications, or other interventions, our specialists will craft a customized approach aimed at restoring your urinary health."
    },
    {
      num: "03",
      icon: "fas fa-procedures",
      title: "Advanced Interventions",
      desc: "In cases of recurrent or complicated UTIs, our hospital offers a range of advanced interventions to address underlying issues and prevent future recurrences. From minimally invasive procedures to innovative therapies, we leverage cutting-edge techniques to optimize patient outcomes."
    },
    {
      num: "04",
      icon: "fas fa-chart-line",
      title: "Comprehensive Follow-Up Care",
      desc: "Our commitment to your well-being extends beyond the initial treatment phase. We provide comprehensive follow-up care to monitor your progress, address any concerns, and ensure that your urinary health remains optimal in the long term."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-user-md",
      title: "Expertise",
      desc: "As the best nephrology hospital in Raipur, Chhattisgarh, our team brings unparalleled expertise and experience to the management of UTIs."
    },
    {
      icon: "fas fa-heart",
      title: "Patient-Centered Approach",
      desc: "We prioritize the comfort and well-being of our patients, offering compassionate care in a welcoming environment."
    },
    {
      icon: "fas fa-microscope",
      title: "Cutting-Edge Facilities",
      desc: "Our hospital is equipped with advanced medical technologies and amenities to deliver the highest standard of care."
    },
    {
      icon: "fas fa-users",
      title: "Collaborative Care",
      desc: "We believe in a multidisciplinary approach to UTI management, collaborating closely with other specialties as needed to ensure comprehensive treatment."
    },
    {
      icon: "fas fa-smile",
      title: "Positive Outcomes",
      desc: "With a track record of successful outcomes and satisfied patients, you can trust MMR Hospital & IVF Center to effectively address your UTI concerns."
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
                UTI
                <span>( urinary tract infection )</span>
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
                <h2>UTI ( urinary tract infection )</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to MMR Hospital &amp; IVF Center, the premier destination for comprehensive urinary tract infection (UTI) care in Raipur, Chhattisgarh. As the best nephrology hospital in the region, we pride ourselves on delivering exceptional medical services with compassion and expertise.
              </p>
              <p className={styles.introText2}>
                Urinary tract infections can be uncomfortable and debilitating, affecting millions of individuals each year. At MMR Hospital &amp; IVF Center, our dedicated team of nephrology specialists is committed to providing top-notch care for patients suffering from UTIs. We understand the importance of timely diagnosis and effective treatment to alleviate symptoms and prevent complications.
              </p>
              <Link className={styles.introButton} href="/our-expert-team">
                Know about our experts..
              </Link>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Our Approach to UTI Care */}
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
                <h2>Our Approach to UTI Care</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.processGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
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

        {/* Section 4: Why Choose MMR Hospital & IVF Center for UTI Care? */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <ScrollRevealSection className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <h2>Why Choose MMR Hospital &amp; IVF Center for UTI Care?</h2>
              </div>
              <div className={styles.sectionDivider} />
            </ScrollRevealSection>

            <div className={styles.whyGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {whyChooseUs.slice(0, 3).map((item, idx) => (
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

            <div className={styles.whyGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: "24px" }}>
              {whyChooseUs.slice(3).map((item, idx) => (
                <ScrollRevealSection key={idx}>
                  <div
                    className={styles.whyCard}
                    style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
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
                  If you&apos;re experiencing symptoms of a urinary tract infection or seeking expert care for recurrent UTIs, don&apos;t hesitate to contact us. Schedule a consultation with our nephrology team today and take the first step towards optimal urinary health.
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
              As the best nephrology hospital in Raipur, Chhattisgarh, MMR Hospital &amp; IVF Center offers state-of-the-art facilities, advanced diagnostic techniques, and compassionate care. Our team of experienced nephrologists, urologists, and support staff is committed to providing comprehensive evaluation and treatment for UTI and other kidney-related disorders.
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
