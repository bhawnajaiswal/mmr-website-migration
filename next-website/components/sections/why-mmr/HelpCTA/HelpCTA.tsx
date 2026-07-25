"use client";

export default function HelpCTA() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3ec07206 envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="3ec07206"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"tilt","shape_divider_top":"tilt"}'
      style={{
        backgroundImage: "url('/wp-content/uploads/2024/04/medic-hospital-laboratory-medical-40559.jpg')",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
      }}
    >
      <div className="elementor-background-overlay" style={{ position: "absolute", inset: 0 }} />
      
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

      <div className="elementor-container elementor-column-gap-wide" style={{ width: "100%" }}>
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7610d488"
          data-id="7610d488"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Heading */}
            <div
              className="elementor-element elementor-element-3f7a2c00 elementor-widget elementor-widget-heading"
              data-id="3f7a2c00"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  We are here to help.
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
