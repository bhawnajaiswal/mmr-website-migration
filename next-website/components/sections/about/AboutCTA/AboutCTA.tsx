"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3e440e46 envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="3e440e46"
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

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e7f297c"
          data-id="1e7f297c"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-111b7d52 elementor-widget elementor-widget-heading"
              data-id="111b7d52"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Your journey to better health and parenthood starts here at MMR Hospital &amp; IVF Center.
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <div
              className="elementor-element elementor-element-73f102cd elementor-widget elementor-widget-heading"
              data-id="73f102cd"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Thank you for considering MMR Hospital &amp; IVF Center for your healthcare needs. We
                  look forward to serving you and helping you achieve your health and family-building
                  goals. If you have any questions or would like to schedule a consultation, please
                  don&apos;t hesitate to contact us.
                </h3>
              </div>
            </div>

            {/* Button Link */}
            <div
              className="elementor-element elementor-element-20b8f49d elementor-widget elementor-widget-button"
              data-id="20b8f49d"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                    href="/consultation"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="fas fa-envelope-open" />
                      </span>
                      <span className="elementor-button-text">Get consultaion</span>
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
