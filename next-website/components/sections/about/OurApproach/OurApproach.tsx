"use client";

export default function OurApproach() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-919b759 envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="919b759"
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
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2977a30"
          data-id="2977a30"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-17d5275 elementor-widget elementor-widget-heading"
              data-id="17d5275"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Approach</h2>
              </div>
            </div>

            {/* Description */}
            <div
              className="elementor-element elementor-element-5db0b4c elementor-widget elementor-widget-text-editor"
              data-id="5db0b4c"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  At MMR Hospital &amp; IVF Center, we believe in a multidisciplinary approach to
                  healthcare, where collaboration and communication between different specialties lead
                  to optimal patient care. Our team of skilled doctors, nurses, embryologists, and
                  support staff work together to deliver comprehensive, integrated services tailored
                  to each patient&#8217;s unique needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
