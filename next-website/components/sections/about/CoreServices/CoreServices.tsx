"use client";

import Link from "next/link";

export default function CoreServices() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-1a5bdc32 envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="1a5bdc32"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_top":"tilt","shape_divider_bottom":"tilt"}'
    >
      <div className="elementor-background-overlay" />
      
      {/* Top Tilt Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Bottom Tilt Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7ecd4e0f"
          data-id="7ecd4e0f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Inner Section: Title */}
            <div
              className="elementor-section elementor-inner-section elementor-element elementor-element-3ed15e53 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="3ed15e53"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7a4e4774"
                  data-id="7a4e4774"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-20f5517b elementor-widget elementor-widget-heading"
                      data-id="20f5517b"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Core Services</h2>
                      </div>
                    </div>
                    
                    <div
                      className="elementor-element elementor-element-5a61be4e elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                      data-id="5a61be4e"
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
            </div>

            {/* Inner Section: Row 1 (IVF, IUI, ICSI) */}
            <div
              className="elementor-section elementor-inner-section elementor-element elementor-element-48648aba envato-top-0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="48648aba"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wider">
                
                {/* IVF */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-143da33d"
                  data-id="143da33d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-3049afa8 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="3049afa8"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="icon icon-hospital-1" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span><Link href="/ivf">IVF</Link></span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Offering hope and advanced fertility solutions for those on the journey to parenthood.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IUI */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-20fb1dc1"
                  data-id="20fb1dc1"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-9e1944d elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="9e1944d"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="fas fa-medkit" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span><Link href="/iui">IUI</Link></span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              IUI treatment at MMR Hospital, where we specialize in helping you achieve your pregnancy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ICSI */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-56232342"
                  data-id="56232342"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-3e89d37e elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="3e89d37e"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="icon icon-hospital-1" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span><Link href="/icsi-treatment">ICSI</Link></span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Unlock the potential of parenthood with our cutting-edge ICSI (Intracytoplasmic Sperm Injection) service at MMR Hospital.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Inner Section: Row 2 (Infertility, Nephrology, Urology) */}
            <div
              className="elementor-section elementor-inner-section elementor-element elementor-element-64d2bff3 envato-top-0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="64d2bff3"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wider">
                
                {/* Infertility men & women */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-765712b6"
                  data-id="765712b6"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-7075c7b2 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="7075c7b2"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="fas fa-briefcase-medical" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span><Link href="/infertility-men-women">Infertility men &amp; women</Link></span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Unlocking the path to parenthood with expert care for both men and women facing infertility at MMR Hospital.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nephrology services */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-23dab8f8"
                  data-id="23dab8f8"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-4c431b86 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="4c431b86"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="fas fa-briefcase-medical" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span><Link href="/renal-care-2">Nephrology services</Link></span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Experience excellence in renal care at MMR Hospital, where our Nephrology core service offers comprehensive solutions for kidney health.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urology */}
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-13a0e570"
                  data-id="13a0e570"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-64a3831d elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="64a3831d"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon elementor-animation-">
                              <i aria-hidden="true" className="fas fa-briefcase-medical" />
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>Urology</span>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Discover comprehensive urology care tailored to your needs at MMR Hospital, where our experts prioritize your urinary health and well-being.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
