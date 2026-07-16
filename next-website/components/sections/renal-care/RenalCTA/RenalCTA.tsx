"use client";

import Link from "next/link";

export default function RenalCTA() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6a2dd8bb envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="6a2dd8bb"
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

      <div className="elementor-container elementor-column-gap-wide">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2ddd1c0"
          data-id="2ddd1c0"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-21942cd7 elementor-widget elementor-widget-heading"
              data-id="21942cd7"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Get best treatment for all types renal problems.
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <div
              className="elementor-element elementor-element-7493fd33 elementor-widget elementor-widget-heading"
              data-id="7493fd33"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Thank you for considering MMR Hospital &amp; IVF Center for your renal care needs. If
                  you have any questions or would like to schedule a consultation, please don&apos;t hesitate
                  to contact us. We are here to help you achieve and maintain optimal kidney health.
                </h3>
              </div>
            </div>

            {/* Button */}
            <div
              className="elementor-element elementor-element-5488061a elementor-widget elementor-widget-button"
              data-id="5488061a"
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
                        <i aria-hidden="true" className="far fa-calendar-check" />
                      </span>
                      <span className="elementor-button-text">Book Consutation</span>
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
