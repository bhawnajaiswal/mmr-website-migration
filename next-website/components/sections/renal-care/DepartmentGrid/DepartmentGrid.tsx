"use client";

export default function DepartmentGrid() {
  const socialIcons = [
    { name: "Facebook", iconClass: "fa fa-facebook" },
    { name: "Twitter", iconClass: "fa fa-twitter" },
    { name: "Google-plus", iconClass: "fa fa-google-plus" },
    { name: "Linkedin", iconClass: "fa fa-linkedin" },
    { name: "Instagram", iconClass: "fa fa-instagram" },
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3bdcb6ee envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="3bdcb6ee"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_top":"tilt","shape_divider_bottom":"tilt"}'
    >
      <div className="elementor-background-overlay" />
      
      {/* Top Shape Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Bottom Shape Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-wide">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4fcfeefb"
          data-id="4fcfeefb"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Header Block Section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-40e280b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="40e280b7"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1765621"
                  data-id="1765621"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Header Title */}
                    <div
                      className="elementor-element elementor-element-57efda7d elementor-widget elementor-widget-heading"
                      data-id="57efda7d"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Our Departments</h2>
                      </div>
                    </div>

                    {/* Divider Line */}
                    <div
                      className="elementor-element elementor-element-494ad4c5 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                      data-id="494ad4c5"
                      data-element_type="widget"
                      data-widget_type="divider.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Department Grid Cards Section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-490e91d1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="490e91d1"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                
                {/* Card 1: Nephrology */}
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e8943d9"
                  data-id="e8943d9"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Card Image */}
                    <div
                      className="elementor-element elementor-element-22562668 elementor-widget elementor-widget-image"
                      data-id="22562668"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          decoding="async"
                          src="/wp-content/uploads/elementor/thumbs/Untitled-design-64-qmqtallwzpekrd38plf0kialb3ucswgt4uzazrrgyo.png"
                          title="Untitled design (64)"
                          alt="best ivf center in Raipur"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>

                    {/* Card Title */}
                    <div
                      className="elementor-element elementor-element-bed58b3 elementor-widget elementor-widget-heading"
                      data-id="bed58b3"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Nephrology:</h2>
                      </div>
                    </div>

                    {/* Card Content Text */}
                    <div
                      className="elementor-element elementor-element-344356f2 elementor-widget elementor-widget-text-editor"
                      data-id="344356f2"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          Our nephrology department specializes in the diagnosis and treatment of
                          kidney diseases, including chronic kidney disease (CKD), acute kidney injury,
                          glomerulonephritis, diabetic nephropathy, and polycystic kidney disease. We
                          provide comprehensive care for patients at all stages of kidney disease, from
                          early intervention and management to renal replacement therapy such as dialysis
                          and kidney transplant evaluation.
                        </p>
                      </div>
                    </div>

                    {/* Social Share Handles */}
                    <div
                      className="elementor-element elementor-element-2c955aa3 elementor-shape-circle e-grid-align-left e-grid-align-mobile-center elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-id="2c955aa3"
                      data-element_type="widget"
                      data-widget_type="social-icons.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-social-icons-wrapper elementor-grid">
                          {socialIcons.map((soc) => (
                            <span key={soc.name} className="elementor-grid-item">
                              <a
                                className={`elementor-icon elementor-social-icon elementor-social-icon-${soc.name.toLowerCase()}`}
                                href="#"
                              >
                                <span className="elementor-screen-only">{soc.name}</span>
                                <i className={soc.iconClass} />
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 2: Urology */}
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3dd20f57"
                  data-id="3dd20f57"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Card Image */}
                    <div
                      className="elementor-element elementor-element-53529879 elementor-widget elementor-widget-image"
                      data-id="53529879"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          decoding="async"
                          src="/wp-content/uploads/elementor/thumbs/Urology-1-qmqtayrnndwl9wk4kr3sjez1mi1hsnx1uo43pn7yjk.png"
                          title="Urology (1)"
                          alt="best ivf center in Raipur"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>

                    {/* Card Title */}
                    <div
                      className="elementor-element elementor-element-4eabb786 elementor-widget elementor-widget-heading"
                      data-id="4eabb786"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Urology:</h2>
                      </div>
                    </div>

                    {/* Card Content Text */}
                    <div
                      className="elementor-element elementor-element-72d50dbc elementor-widget elementor-widget-text-editor"
                      data-id="72d50dbc"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          Our urology department focuses on the diagnosis and treatment of urological
                          conditions affecting the urinary tract and male reproductive system. Our services
                          include the management of urinary tract infections, kidney stones, urinary
                          incontinence, benign prostatic hyperplasia (BPH), erectile dysfunction, and
                          urological cancers. We offer both medical and surgical interventions to address
                          a wide range of urological issues and improve patients&#8217; quality of life.
                        </p>
                      </div>
                    </div>

                    {/* Social Share Handles */}
                    <div
                      className="elementor-element elementor-element-120a9408 elementor-shape-circle e-grid-align-left e-grid-align-mobile-center elementor-grid-0 elementor-widget elementor-widget-social-icons"
                      data-id="120a9408"
                      data-element_type="widget"
                      data-widget_type="social-icons.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-social-icons-wrapper elementor-grid">
                          {socialIcons.map((soc) => (
                            <span key={soc.name} className="elementor-grid-item">
                              <a
                                className={`elementor-icon elementor-social-icon elementor-social-icon-${soc.name.toLowerCase()}`}
                                href="#"
                              >
                                <span className="elementor-screen-only">{soc.name}</span>
                                <i className={soc.iconClass} />
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
