"use client";

import Link from "next/link";

export default function RenalApproach() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-314b3a7 elementor-section-content-middle envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="314b3a7"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"tilt","shape_divider_top":"tilt"}'
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

      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7751e7f"
          data-id="7751e7f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Heading */}
            <div
              className="elementor-element elementor-element-676bca6 elementor-widget elementor-widget-heading"
              data-id="676bca6"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Approach</h2>
              </div>
            </div>

            {/* Description Text */}
            <div
              className="elementor-element elementor-element-c91aa71 elementor-widget elementor-widget-text-editor"
              data-id="c91aa71"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  At MMR Hospital &amp; IVF Center, we take a patient-centered approach to renal care,
                  emphasizing personalized treatment plans tailored to each individual&#8217;s unique
                  needs. Our team of nephrologists, urologists, nurses, and support staff work collaboratively
                  to ensure comprehensive and integrated care for our patients. We prioritize open
                  communication, compassionate support, and patient education to empower individuals to take
                  an active role in managing their kidney health.
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <div
              className="elementor-element elementor-element-590f7be elementor-widget elementor-widget-button"
              data-id="590f7be"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="/our-expert-team"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="fas fa-play-circle" />
                      </span>
                      <span className="elementor-button-text">Read more</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
