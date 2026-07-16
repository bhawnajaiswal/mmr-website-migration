interface WhyChooseCardProps {
  columnId: string;
  widgetId: string;
  iconClass: string;
  title: string;
  description: string;
}

export default function WhyChooseCard({
  columnId,
  widgetId,
  iconClass,
  title,
  description
}: WhyChooseCardProps) {
  return (
    <div
      className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${columnId}`}
      data-id={columnId}
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className={`elementor-widget elementor-widget-icon-box elementor-element elementor-element-${widgetId}`}
          data-id={widgetId}
          data-element_type="widget"
          data-widget_type="icon-box.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-icon-box-wrapper">
              <div className="elementor-icon-box-icon">
                <span className="elementor-icon elementor-animation-">
                  <i className={iconClass} aria-hidden="true"></i>
                </span>
              </div>
              <div className="elementor-icon-box-content">
                <h3 className="elementor-icon-box-title">
                  <span>{title}</span>
                </h3>
                <p className="elementor-icon-box-description">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
