"use client";

import Link from "next/link";

interface TreatmentSectionProps {
  secId: string;
  innerSecId: string;
  innerSecClass?: string;
  imgColId: string;
  textColId: string;
  imgWidgetId: string;
  textWidgetId: string;
  btnWidgetId?: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt?: string;
  iconSrc?: string;
  buttonUrl: string;
  reverseLayout: boolean;
}

export default function TreatmentSection({
  secId,
  innerSecId,
  innerSecClass = "elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default",
  imgColId,
  textColId,
  imgWidgetId,
  textWidgetId,
  btnWidgetId,
  title,
  desc,
  imgSrc,
  imgAlt = "best ivf center in Raipur",
  iconSrc = "/wp-content/uploads/2024/03/1.png",
  buttonUrl,
  reverseLayout,
}: TreatmentSectionProps) {
  
  // Column 1: Image Widget Wrap
  const ImageColumn = (
    <div
      className="elementor-column elementor-col-50 elementor-inner-column elementor-element"
      data-id={imgColId}
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className={`elementor-element ${imgWidgetId ? `elementor-element-${imgWidgetId}` : ""} elementor-widget elementor-widget-image`}
          data-id={imgWidgetId || undefined}
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <img
              decoding="async"
              src={imgSrc}
              alt={imgAlt}
              className="elementor-animation-shrink attachment-large size-large"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Column 2: Text Widget Wrap
  const TextColumn = (
    <div
      className="elementor-column elementor-col-50 elementor-inner-column elementor-element"
      data-id={textColId}
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        
        {/* Title and Description Image Box */}
        <div
          className={`elementor-element ${textWidgetId ? `elementor-element-${textWidgetId}` : ""} elementor-widget elementor-widget-image-box`}
          data-id={textWidgetId || undefined}
          data-element_type="widget"
          data-widget_type="image-box.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-image-box-wrapper">
              <figure className="elementor-image-box-img">
                <img decoding="async" src={iconSrc} alt="" />
              </figure>
              <div className="elementor-image-box-content">
                <h3 className="elementor-image-box-title">{title}</h3>
                <p
                  className="elementor-image-box-description"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div
          className={`elementor-element ${btnWidgetId ? `elementor-element-${btnWidgetId}` : "elementor-element-widget-button-default"} elementor-widget elementor-widget-button`}
          data-id={btnWidgetId || undefined}
          data-element_type="widget"
          data-widget_type="button.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <Link
                className="elementor-button elementor-button-link elementor-size-sm"
                href={buttonUrl}
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Learn More &raquo;</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  // Determine actual render order of columns based on reverseLayout flag
  const firstCol = reverseLayout ? TextColumn : ImageColumn;
  const secondCol = reverseLayout ? ImageColumn : TextColumn;

  // We add dynamic layout class triggers (e.g. elementor-reverse-tablet / mobile) if reverseLayout is active
  const computedInnerSecClass = `${innerSecClass} ${innerSecId ? `elementor-element-${innerSecId}` : ""} ${
    reverseLayout ? "elementor-reverse-tablet elementor-reverse-mobile" : ""
  }`.trim();

  return (
    <section
      className={`elementor-section elementor-top-section elementor-element ${
        secId ? `elementor-element-${secId}` : ""
      } elementor-section-full_width elementor-section-height-default elementor-section-height-default`}
      data-id={secId}
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Inner Section wrapping the columns */}
            <section
              className={computedInnerSecClass}
              data-id={innerSecId}
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wider">
                {firstCol}
                {secondCol}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
