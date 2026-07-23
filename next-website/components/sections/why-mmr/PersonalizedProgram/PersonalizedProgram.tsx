"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  tabNum: number;
  title: string;
  content: React.ReactNode;
}

export default function PersonalizedProgram() {
  const [activeTab, setActiveTab] = useState<number | null>(1); // Item 1 open by default

  const toggleTab = (tabNum: number) => {
    setActiveTab((prev) => (prev === tabNum ? null : tabNum));
  };

  const accordionItems: AccordionItem[] = [
    {
      id: "1371",
      tabNum: 1,
      title: "Personalized Program",
      content: (
        <>
          <p>
            &ldquo;Personalized healthcare&rdquo; leverages an individual&rsquo;s medical history,
            diagnostic testing, circumstances, and the continually increasing knowledge of genetics
            to tailor medical treatment and preventative care efforts. With more medical data
            available across different populations, clinicians can better determine targeted plans
            for specific patients. Personalized healthcare may also be referred to as
            &ldquo;personalized medicine&rdquo; or &ldquo;precision medicine.&rdquo;
          </p>
          <p>&nbsp;</p>
          <p>
            Traditional treatment approaches have relied on trial-and-error methods influenced by
            statistical averages
          </p>
        </>
      ),
    },
    {
      id: "1372",
      tabNum: 2,
      title: "Why Personalized Program",
      content: (
        <ul>
          <li>
            Today, data-driven by DNA sequencing and other genetic research contributes to the
            largest store of information clinicians have ever had.
          </li>
          <li>
            Until more recent technological developments, any patient-unique knowledge that
            clinicians might have referenced likely relied upon self-reported family histories and
            monitoring for&nbsp; suspected predispositions.
          </li>
        </ul>
      ),
    },
    {
      id: "1373",
      tabNum: 3,
      title: "Accessibility of our Patient & Attendant",
      content: (
        <p>
          At MMR Hospital, we prioritize the accessibility of healthcare for all patients and
          attendants. Our facility is equipped with ramps, elevators, and dedicated spaces for
          individuals with mobility challenges. Our commitment to accessibility extends beyond
          physical spaces, fostering a welcoming and supportive environment for all. At MMR
          Hospital, every patient and attendant can expect a healthcare experience that is inclusive,
          accommodating, and focused on their individual needs
        </p>
      ),
    },
    {
      id: "1374",
      tabNum: 4,
      title: "Precise Diagnosis & Treatment",
      content: (
        <p>
          At MMR Hospital, we excel in Precise Diagnosis &amp; Treatment, offering specialized care
          in IVF and Kidney Health. Our state-of-the-art IVF center is committed to helping
          families grow with cutting-edge fertility solutions and personalized care. Simultaneously,
          our dedicated Kidney Care unit ensures comprehensive diagnostics and advanced treatments for
          renal health. Leveraging modern medical technology and a team of skilled professionals, we
          prioritize accurate diagnoses and tailored treatment plans. At MMR Hospital, we stand at
          the forefront of healthcare excellence, providing precise solutions in IVF and Kidney Care
          to enhance the well-being of our patients, fostering hope, and achieving positive
          outcomes.
        </p>
      ),
    },
    {
      id: "1375",
      tabNum: 5,
      title: "Confidentiality & Patient Rights",
      content: (
        <p>
          At MMR Hospital, we uphold the highest standards of Confidentiality &amp; Patient Rights,
          ensuring a secure and respectful environment across our IVF Center and Kidney Care units.
          We prioritize the privacy of our patients, implementing robust confidentiality protocols
          and respecting individual rights. Whether undergoing fertility treatments at our advanced
          IVF center or receiving specialized care for kidney health, every patient&rsquo;s
          confidentiality is safeguarded. MMR Hospital is committed to upholding the principles of
          ethical healthcare, empowering patients with information, and ensuring their rights are
          respected throughout their journey to well-being. Trust us to prioritize your
          confidentiality and advocate for your patient rights.
        </p>
      ),
    },
    {
      id: "1376",
      tabNum: 6,
      title: "Ethical Treatment & Transparent Pricing",
      content: (
        <p>
          &ldquo;At MMR Hospital, we are dedicated to Ethical Treatment and Transparent Pricing,
          ensuring integrity in our IVF Center and Kidney Care services. Our commitment extends to
          providing compassionate and ethical healthcare, maintaining the highest standards of
          medical ethics in both IVF and Kidney care. We prioritize open communication and
          transparency in pricing, empowering patients with clear information about the cost of
          services. MMR Hospital stands as a beacon of trust, offering ethical treatment practices
          and straightforward pricing structures in our pursuit of providing accessible, reliable,
          and patient-centric healthcare in both our IVF center and Kidney Care unit.&rdquo;
        </p>
      ),
    },
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-1f4a9d6 elementor-section-full_width elementor-section-items-stretch elementor-section-height-min-height elementor-section-height-default"
      data-id="1f4a9d6"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-no">
        
        {/* Left Column: Background Image (stretches to fill height) */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-158c73ed why-left-image-col"
          data-id="158c73ed"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated" style={{ height: "100%", position: "relative" }}>
            <div className="elementor-background-overlay" />
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-115606df envato-kit-140-scrollable"
          data-id="115606df"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            <div
              className="elementor-element elementor-element-51b9c79f envato-kit-140-faq elementor-widget elementor-widget-accordion"
              data-id="51b9c79f"
              data-element_type="widget"
              data-widget_type="accordion.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-accordion">
                  {accordionItems.map((item) => {
                    const isOpen = activeTab === item.tabNum;
                    return (
                      <div key={item.id} className="elementor-accordion-item">
                        {/* Accordion Tab Title Header */}
                        <h4
                          id={`elementor-tab-title-${item.id}`}
                          className={`elementor-tab-title ${isOpen ? "elementor-active" : ""}`}
                          data-tab={item.tabNum}
                          role="button"
                          aria-controls={`elementor-tab-content-${item.id}`}
                          aria-expanded={isOpen ? "true" : "false"}
                          onClick={() => toggleTab(item.tabNum)}
                        >
                          <span
                            className="elementor-accordion-icon elementor-accordion-icon-right"
                            aria-hidden="true"
                          >
                            <span
                              className="elementor-accordion-icon-closed"
                              style={{ display: isOpen ? "none" : "block" }}
                            >
                              <i className="fas fa-plus" />
                            </span>
                            <span
                              className="elementor-accordion-icon-opened"
                              style={{ display: isOpen ? "block" : "none" }}
                            >
                              <i className="fas fa-minus" />
                            </span>
                          </span>
                          <a className="elementor-accordion-title" tabIndex={0}>
                            {item.title}
                          </a>
                        </h4>

                        {/* Accordion Tab Content */}
                        <div
                          id={`elementor-tab-content-${item.id}`}
                          className="elementor-tab-content elementor-clearfix"
                          data-tab={item.tabNum}
                          role="region"
                          aria-labelledby={`elementor-tab-title-${item.id}`}
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          {item.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
