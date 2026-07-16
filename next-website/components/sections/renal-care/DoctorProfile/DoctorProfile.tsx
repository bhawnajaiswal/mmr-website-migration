"use client";

import Link from "next/link";

export default function DoctorProfile() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4a5fbb72 elementor-section-content-middle envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="4a5fbb72"
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
        
        {/* Column 1: Image */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-373b4fe"
          data-id="373b4fe"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-8c874c5 elementor-widget elementor-widget-image"
              data-id="8c874c5"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  src="/wp-content/uploads/2024/04/Urology-3-768x768.png"
                  className="attachment-medium_large size-medium_large wp-image-6316"
                  alt="best ivf center in Raipur"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Bio details */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-19e2fdd"
          data-id="19e2fdd"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Sub-heading */}
            <div
              className="elementor-element elementor-element-619ee691 elementor-widget elementor-widget-heading"
              data-id="619ee691"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Meet Our Renal Expert:
                </h2>
              </div>
            </div>

            {/* Doctor Name Heading */}
            <div
              className="elementor-element elementor-element-3e4def2f elementor-widget elementor-widget-heading"
              data-id="3e4def2f"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Dr. Prawash Chowdhary
                </h2>
              </div>
            </div>

            {/* Description Text */}
            <div
              className="elementor-element elementor-element-da3c85d elementor-widget elementor-widget-text-editor"
              data-id="da3c85d"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Dr. Prawash Chowdhary is a distinguished nephrologist and urologist renowned for
                  his expertise and dedication to the field of renal science. With years of experience
                  and a commitment to excellence, Dr. Chowdhary leads our team in delivering exceptional
                  care to patients with kidney diseases and urological disorders.
                </p>
              </div>
            </div>

            {/* Read More Button */}
            <div
              className="elementor-element elementor-element-632fe206 elementor-widget elementor-widget-button"
              data-id="632fe206"
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
