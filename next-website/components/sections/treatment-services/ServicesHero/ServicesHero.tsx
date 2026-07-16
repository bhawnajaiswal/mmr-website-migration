"use client";

export default function ServicesHero() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-768bd59e elementor-section-height-min-height envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-items-middle"
      data-id="768bd59e"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"tilt"}'
    >
      <div className="elementor-background-overlay" />
      
      {/* Bottom Tilt Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2fa062a5"
          data-id="2fa062a5"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-6c8c2e7 elementor-widget elementor-widget-heading"
              data-id="6c8c2e7"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">Our Services</h1>
              </div>
            </div>

            {/* Separator Divider Line */}
            <div
              className="elementor-element elementor-element-2bc8a64f elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-id="2bc8a64f"
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
  );
}
