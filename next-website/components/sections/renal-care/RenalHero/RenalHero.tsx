"use client";

import Link from "next/link";

export default function RenalHero() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-1b646cf1 elementor-section-height-min-height elementor-section-content-middle envato-background-fix elementor-section-full_width elementor-section-items-bottom elementor-section-height-default"
      data-id="1b646cf1"
      data-element_type="section"
      data-settings='{"shape_divider_bottom":"tilt"}'
    >
      <div className="elementor-background-overlay" />
      
      {/* Tilt Bottom Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-narrow">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3a7b597"
          data-id="3a7b597"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Divider Line */}
            <div
              className="elementor-element elementor-element-4a061f6a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-id="4a061f6a"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
            </div>

            {/* Heading Title */}
            <div
              className="elementor-element elementor-element-51178a83 elementor-widget elementor-widget-heading"
              data-id="51178a83"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">RENAL CARE</h2>
              </div>
            </div>

            {/* Button Link */}
            <div
              className="elementor-element elementor-element-4c73944 elementor-align-center elementor-widget elementor-widget-button"
              data-id="4c73944"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                    href="/consultation-for-renal-problems"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="fas fa-envelope-open" />
                      </span>
                      <span className="elementor-button-text">Book an Appointment</span>
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
