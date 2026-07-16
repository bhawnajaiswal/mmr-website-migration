"use client";

import Link from "next/link";

export default function Mission() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-e8eed5 envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="e8eed5"
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

      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-170fb1ab"
          data-id="170fb1ab"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-36f41906 elementor-widget elementor-widget-heading"
              data-id="36f41906"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Our Mission</h2>
              </div>
            </div>

            {/* Description Text */}
            <div
              className="elementor-element elementor-element-54a88976 elementor-widget elementor-widget-text-editor"
              data-id="54a88976"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  At MMR Hospital &amp; IVF Center, our mission is to empower individuals and
                  couples to overcome fertility challenges and achieve their dream of parenthood. We
                  are committed to delivering the highest standard of care with integrity, empathy,
                  and respect for every patient we serve. Additionally, we strive to improve the
                  quality of life for patients with renal conditions by offering comprehensive renal
                  care services tailored to their individual needs.
                </p>
              </div>
            </div>

            {/* Link Button */}
            <div
              className="elementor-element elementor-element-16218ea9 elementor-widget elementor-widget-button"
              data-id="16218ea9"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="/facilities"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">See Gallery &raquo;</span>
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
