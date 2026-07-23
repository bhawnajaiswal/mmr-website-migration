"use client";

import { useState } from "react";
import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";
import Link from "next/link";

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

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6174.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6174" className="elementor elementor-6174">
          
          {/* Section 1: Hero Banner (ID: 76d61b26) */}
          <SubPageHero
            secId="76d61b26"
            title="FAQs"
            backgroundColor="transparent"
          />

          {/* Section 2: Intro / Subtitle Banner (ID: 7f388f25) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-7f388f25 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="7f388f25"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5f4b516a"
                  data-id="5f4b516a"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-724143a4 elementor-widget elementor-widget-heading"
                      data-id="724143a4"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Frequently Asked Questions (FAQs) - MMR Hospital &amp; IVF Center
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: FAQ Accordion Section (ID: 75485306) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-75485306 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="75485306"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                
                {/* Left Spacing Column */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2c5e7814"
                  data-id="2c5e7814"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap" />
                </div>

                {/* Center Content Column */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-22f5f109"
                  data-id="22f5f109"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* faq heading */}
                    <div
                      className="elementor-element elementor-element-76156833 elementor-widget elementor-widget-heading"
                      data-id="76156833"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">
                          faq
                        </h1>
                      </div>
                    </div>

                    {/* faq intro paragraph */}
                    <div
                      className="elementor-element elementor-element-1e80865 elementor-widget elementor-widget-text-editor"
                      data-id="1e80865"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-text-editor elementor-clearfix">
                          <p>
                            Welcome to MMR Hospital &amp; IVF Center&apos;s FAQ page, where we address some common queries regarding our services and procedures. If you have any additional questions, feel free to contact us.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion List */}
                    <div
                      className="elementor-element elementor-element-3d99dc9c elementor-widget elementor-widget-accordion"
                      data-id="3d99dc9c"
                      data-element_type="widget"
                      data-widget_type="accordion.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-accordion" role="tablist">
                          {FAQ_ITEMS.map((item, idx) => {
                            const isOpen = activeIndex === idx;
                            return (
                              <div className="elementor-accordion-item" key={idx}>
                                <div
                                  className={`elementor-tab-title ${isOpen ? "elementor-active" : ""}`}
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
                                  style={{ cursor: "pointer" }}
                                >
                                  {/* Plus/Minus Accordion Toggle Icon */}
                                  <span className="elementor-accordion-icon elementor-accordion-icon-right" aria-hidden="true">
                                    <span className="elementor-accordion-icon-closed">
                                      <i className="fas fa-plus" />
                                    </span>
                                    <span className="elementor-accordion-icon-opened">
                                      <i className="fas fa-minus" />
                                    </span>
                                  </span>

                                  <a className="elementor-accordion-title" href="#">
                                    {item.question}
                                  </a>
                                </div>

                                <div
                                  className="elementor-tab-content elementor-clearfix"
                                  role="tabpanel"
                                  style={{ display: isOpen ? "block" : "none" }}
                                >
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
                            );
                          })}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Spacing Column */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-13e62bb9"
                  data-id="13e62bb9"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap" />
                </div>

              </div>
            </div>
          </section>

          {/* Section 4: Contact CTA Banner (ID: 3c2f0eda) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3c2f0eda elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="3c2f0eda"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-16d7c10f"
                  data-id="16d7c10f"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    <div
                      className="elementor-element elementor-element-15c37317 elementor-widget elementor-widget-heading"
                      data-id="15c37317"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          If you have any questions please ask with us.
                        </h2>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-188d593f elementor-widget elementor-widget-heading"
                      data-id="188d593f"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Please click the link below to get our contact details
                        </h3>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-6a198f3 elementor-align-center elementor-widget elementor-widget-button"
                      data-id="6a198f3"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link
                            href="/contact-us"
                            className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-icon">
                                <i aria-hidden="true" className="fas fa-envelope-open" />
                              </span>
                              <span className="elementor-button-text">Contact with us</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
