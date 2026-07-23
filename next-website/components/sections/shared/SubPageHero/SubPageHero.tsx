"use client";

import Link from "next/link";

interface SubPageHeroProps {
  secId?: string;
  title: string;
  subtitle?: string;
  buttonLink?: string;
  backgroundColor?: string;
}

export default function SubPageHero({
  secId = "3ef10762",
  title,
  subtitle = "",
  buttonLink = "/consultation-for-renal-problems",
  backgroundColor = "#754CAD",
}: SubPageHeroProps) {
  return (
    <section
      className={`elementor-section elementor-top-section elementor-element elementor-element-${secId} elementor-section-height-min-height elementor-section-content-middle envato-background-fix elementor-section-full_width elementor-section-items-bottom elementor-section-height-default`}
      data-id={secId}
      data-element_type="section"
      data-settings='{"shape_divider_bottom":"tilt"}'
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="elementor-background-overlay" />
      
      {/* Tilt Bottom Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
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

            {/* Optional Subtitle */}
            {subtitle && (
              <div
                className="elementor-element elementor-widget elementor-widget-heading"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">
                    {subtitle}
                  </h3>
                </div>
              </div>
            )}

            {/* Main Title */}
            <div
              className="elementor-element elementor-widget elementor-widget-heading"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default" style={{ color: "#FFFFFF" }}>
                  {title}
                </h1>
              </div>
            </div>

            {/* Book Appointment Button */}
            <div
              className="elementor-element elementor-align-center elementor-widget elementor-widget-button"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                    href={buttonLink}
                    style={{
                      backgroundColor: "#D88EEC",
                      borderColor: "#D88EEC",
                      borderRadius: "30px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      color: "#ffffff"
                    }}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="fas fa-envelope-open" />
                      </span>
                      <span className="elementor-button-text">BOOK AN APPOINTMENT</span>
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
