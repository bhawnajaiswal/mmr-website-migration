"use client";

import Link from "next/link";

interface RenalSubCTAProps {
  description: string;
  buttonLink?: string;
}

export default function RenalSubCTA({
  description,
  buttonLink = "/contact-us",
}: RenalSubCTAProps) {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4592dcef envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="4592dcef"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"tilt","shape_divider_top":"tilt"}'
      style={{
        padding: "110px 0",
        backgroundImage: "url(/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div
        className="elementor-background-overlay"
        style={{
          backgroundColor: "#0c0500",
          opacity: 0.75
        }}
      />
      
      {/* Top Shape Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Bottom Shape Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-wide">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-626417e0"
          data-id="626417e0"
          data-element_type="column"
          style={{ textAlign: "center" }}
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title */}
            <div
              className="elementor-element elementor-element-2192dbd6 elementor-widget elementor-widget-heading"
              data-id="2192dbd6"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2
                  className="elementor-heading-title elementor-size-default"
                  style={{
                    color: "#ffffff",
                    fontFamily: "Nunito",
                    fontSize: "48px",
                    fontWeight: "600",
                    lineHeight: "1.16"
                  }}
                >
                  Best nephrology Treatment is here.
                </h2>
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="elementor-element elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
            </div>

            {/* Subtitle / Description */}
            <div
              className="elementor-element elementor-element-7a2072e4 elementor-widget elementor-widget-heading"
              data-id="7a2072e4"
              data-element_type="widget"
              data-widget_type="heading.default"
              style={{ marginTop: "20px" }}
            >
              <div className="elementor-widget-container">
                <h3
                  className="elementor-heading-title elementor-size-default"
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "300",
                    lineHeight: "1.4",
                    maxWidth: "800px",
                    margin: "0 auto"
                  }}
                >
                  {description}
                </h3>
              </div>
            </div>

            {/* Button */}
            <div
              className="elementor-element elementor-element-3853536b elementor-widget elementor-widget-button"
              data-id="3853536b"
              data-element_type="widget"
              data-widget_type="button.default"
              style={{ marginTop: "30px" }}
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                    href={buttonLink}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Contact Us</span>
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
