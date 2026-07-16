"use client";

import Link from "next/link";

interface SubPageIntroProps {
  title: string;
  paragraph1: string;
  paragraph2?: string;
  buttonLink?: string;
  buttonText?: string;
}

export default function SubPageIntro({
  title,
  paragraph1,
  paragraph2,
  buttonLink = "/consultation-for-renal-problems",
  buttonText = "Book appointment \u00BB",
}: SubPageIntroProps) {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5d9a38b0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="5d9a38b0"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5b68c57a"
          data-id="5b68c57a"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Title Heading */}
            <div
              className="elementor-element elementor-element-717eb0be elementor-widget elementor-widget-heading"
              data-id="717eb0be"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  {title}
                </h2>
              </div>
            </div>

            {/* Paragraph 1 */}
            <div
              className="elementor-element elementor-element-5ae93b44 elementor-widget elementor-widget-text-editor"
              data-id="5ae93b44"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p dangerouslySetInnerHTML={{ __html: paragraph1 }} />
              </div>
            </div>

            {/* Paragraph 2 */}
            {paragraph2 && (
              <div
                className="elementor-element elementor-element-61a9feeb elementor-widget elementor-widget-text-editor"
                data-id="61a9feeb"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p dangerouslySetInnerHTML={{ __html: paragraph2 }} />
                </div>
              </div>
            )}

            {/* Book Appointment Button */}
            <div
              className="elementor-element elementor-element-6514aee elementor-widget elementor-widget-button"
              data-id="6514aee"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href={buttonLink}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">{buttonText}</span>
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
