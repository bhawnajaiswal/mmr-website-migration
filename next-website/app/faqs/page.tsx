"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Faqs.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is IVF, and how does it work?",
    answer: "In Vitro Fertilization (IVF) is a fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory setting. The resulting embryos are then transferred into the uterus to establish a pregnancy. IVF can be a highly effective option for individuals or couples struggling with infertility."
  },
  {
    question: "Who can benefit from IVF treatment?",
    answer: "IVF may be recommended for individuals or couples facing various fertility challenges, including but not limited to:\n\n*   Blocked or damaged fallopian tubes\n*   Ovulation disorders\n*   Endometriosis\n*   Male factor infertility\n*   Unexplained infertility"
  },
  {
    question: "What steps are involved in the IVF process?",
    answer: "The IVF process typically involves the following steps:\n\n*   Ovarian stimulation and monitoring\n*   Egg retrieval\n*   Fertilization of eggs with sperm in the laboratory\n*   Embryo culture and development\n*   Embryo transfer\n*   Pregnancy test and follow-up care"
  },
  {
    question: "How successful is IVF?",
    answer: "Success rates of IVF can vary depending on various factors, including the age and health of the individual or couple, the quality of eggs and sperm, and the expertise of the fertility clinic. We encourage you to discuss your specific prognosis and expectations with our fertility specialists."
  },
  {
    question: "Are there any risks associated with IVF?",
    answer: "While IVF is generally safe, it does carry some risks, including:\n\n*   Ovarian hyperstimulation syndrome (OHSS)\n*   Multiple pregnancies\n*   Ectopic pregnancy\n*   Ovarian torsion\n*   Ovarian cysts\n\nOur medical team takes measures to minimize these risks and ensure the safety and well-being of our patients throughout the IVF process."
  },
  {
    question: "How many cycles of IVF may be needed to achieve pregnancy?",
    answer: "The number of IVF cycles required to achieve pregnancy can vary from person to person. Factors such as age, underlying fertility issues, and previous treatment outcomes play a role in determining the number of cycles needed. Our fertility specialists will work closely with you to develop a personalized treatment plan that maximizes your chances of success."
  },
  {
    question: "Does MMR Hospital & IVF Center offer other fertility treatments besides IVF?",
    answer: "Yes, in addition to IVF, we offer a comprehensive range of fertility treatments, including intrauterine insemination (IUI), ovulation induction, egg freezing, sperm retrieval techniques, and preimplantation genetic testing (PGT)."
  },
  {
    question: "How can I schedule a consultation at MMR Hospital & IVF Center?",
    answer: "To schedule a consultation with one of our experienced fertility specialists, please contact our clinic directly. During your consultation, we will review your medical history, perform any necessary tests, and discuss your treatment options in detail."
  },
  {
    question: "Does insurance cover fertility treatments?",
    answer: "Coverage for fertility treatments varies depending on your insurance provider and policy. We recommend contacting your insurance company directly to inquire about your coverage for fertility services, including IVF."
  }
];

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

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

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
                FAQs
              </h1>
            </div>
            <Link className={styles.heroButton} href="/consultation/">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </section>

        {/* Section 2: Intro / Subtitle Banner */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introContent}>
              <div className={styles.introTitle}>
                <h2>Frequently Asked Questions (FAQs) - MMR Hospital &amp; IVF Center</h2>
              </div>
              <p className={styles.introText1}>
                Welcome to MMR Hospital &amp; IVF Center&apos;s FAQ page, where we address some common queries regarding our services and procedures. If you have any additional questions, feel free to contact us.
              </p>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: FAQ Accordion Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <ScrollRevealSection key={idx}>
                  <div className={styles.accordionItem}>
                    <div
                      className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderActive : ""}`}
                      role="tab"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(idx)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleAccordion(idx);
                        }
                      }}
                    >
                      <h3 className={styles.accordionTitle}>
                        {item.question}
                      </h3>
                      
                      <div className={styles.accordionIcon}>
                        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
                      </div>
                    </div>

                    <div className={`${styles.accordionContentWrapper} ${isOpen ? styles.accordionContentOpen : ""}`}>
                      <div className={styles.accordionContentInner}>
                        {item.answer.split("\n\n").map((para, pIdx) => {
                          if (para.startsWith("*")) {
                            return (
                              <ul key={pIdx}>
                                {para.split("\n").map((li, lIdx) => (
                                  <li key={lIdx}>{li.replace(/^\*\s*/, "")}</li>
                                ))}
                              </ul>
                            );
                          }
                          return <p key={pIdx}>{para}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </ScrollRevealSection>
              );
            })}
          </div>
        </section>

        {/* Section 4: Contact CTA Banner */}
        <section
          className={styles.ctaSection}
          style={{
            backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
          }}
        >
          <div className={styles.ctaOverlay} />

          <ScrollRevealSection className={styles.ctaContainer}>
            <div className={styles.ctaTitle}>
              <h2>If you have any questions please ask with us.</h2>
            </div>
            <p className={styles.ctaDesc}>
              Please click the link below to get our contact details
            </p>
            <Link className={styles.ctaButton} href="/contact-us">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              Contact with us
            </Link>
          </ScrollRevealSection>
        </section>

      </main>
    </div>
  );
}
