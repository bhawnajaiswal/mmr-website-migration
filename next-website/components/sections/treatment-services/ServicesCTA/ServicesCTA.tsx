"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-66eabe0a elementor-section-height-min-height envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-items-middle"
      data-id="66eabe0a"
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
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-15cf44d"
          data-id="15cf44d"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-2877a30 elementor-widget elementor-widget-heading"
              data-id="2877a30"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Safe &amp; modern treatments guaranteed.
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <div
              className="elementor-element elementor-element-2977a30 elementor-widget elementor-widget-heading"
              data-id="2977a30"
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
              className="elementor-element elementor-element-be9a68e elementor-widget elementor-widget-button"
              data-id="be9a68e"
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
