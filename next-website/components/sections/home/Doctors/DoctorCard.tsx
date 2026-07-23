interface DoctorCardProps {
  columnId: string;
  imageWidgetId: string;
  nameWidgetId: string;
  degreeWidgetId: string;
  descWidgetId: string;
  socialWidgetId: string;
  imageUrl: string;
  name: string;
  degree: string;
  description: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    googlePlus?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export default function DoctorCard({
  columnId,
  imageWidgetId,
  nameWidgetId,
  degreeWidgetId,
  descWidgetId,
  socialWidgetId,
  imageUrl,
  name,
  degree,
  description,
  socialLinks = {}
}: DoctorCardProps) {
  return (
    <div
      className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${columnId}`}
      data-id={columnId}
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated doctor-card-wrap">
        
        {/* Profile Image */}
        <div
          className={`elementor-widget elementor-widget-image elementor-element elementor-element-${imageWidgetId}`}
          data-id={imageWidgetId}
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <img
              src={imageUrl}
              alt="best ivf center in Raipur"
              width={600}
              height={400}
              className="attachment-large size-large"
              loading="lazy"
            />
          </div>
        </div>

        {/* Doctor Name */}
        <div
          className={`elementor-widget elementor-widget-heading elementor-element elementor-element-${nameWidgetId}`}
          data-id={nameWidgetId}
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              {name}
            </h2>
          </div>
        </div>

        {/* Degrees / Qualifications */}
        <div
          className={`elementor-widget elementor-widget-heading elementor-element elementor-element-${degreeWidgetId}`}
          data-id={degreeWidgetId}
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              {degree}
            </h2>
          </div>
        </div>

        {/* Specialty Description */}
        <div
          className={`elementor-widget elementor-widget-text-editor elementor-element elementor-element-${descWidgetId}`}
          data-id={descWidgetId}
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            <p>{description}</p>
          </div>
        </div>

        {/* Social Sharing Icons */}
        <div
          className={`elementor-widget elementor-widget-social-icons elementor-element elementor-element-${socialWidgetId}`}
          data-id={socialWidgetId}
          data-element_type="widget"
          data-widget_type="social-icons.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-social-icons-wrapper elementor-grid">
              
              <span className="elementor-grid-item">
                <a
                  href={socialLinks.facebook || "https://facebook.com"}
                  className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </span>

              <span className="elementor-grid-item">
                <a
                  href={socialLinks.twitter || "https://twitter.com"}
                  className="elementor-icon elementor-social-icon elementor-social-icon-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </a>
              </span>

              <span className="elementor-grid-item">
                <a
                  href={socialLinks.googlePlus || "https://google.com"}
                  className="elementor-icon elementor-social-icon elementor-social-icon-google-plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Plus"
                >
                  <i className="fab fa-google-plus-g" />
                </a>
              </span>

              <span className="elementor-grid-item">
                <a
                  href={socialLinks.linkedin || "https://linkedin.com"}
                  className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </span>

              <span className="elementor-grid-item">
                <a
                  href={socialLinks.instagram || "https://instagram.com"}
                  className="elementor-icon elementor-social-icon elementor-social-icon-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </span>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
