import DoctorCard from "./DoctorCard";

const DOCTORS = [
  {
    columnId: "2225524c",
    imageWidgetId: "7b7e66f1",
    nameWidgetId: "43c9f62f",
    degreeWidgetId: "6ced47a4",
    descWidgetId: "7bda7ecd",
    socialWidgetId: "1716b06",
    imageUrl: "/wp-content/uploads/2024/03/Untitled-1600-x-1990-px.png",
    name: "Dr. Anuradha Tibrewal Chowdhary",
    degree: "MD (OBGYN) ,FRM,FICOG,FAMS",
    description: "Infertility / IVF - ICSI specialist , Laparoscopic surgeon, Consultant in reproductive medicine.",
    socialLinks: {
      facebook: "https://www.facebook.com/dranuradhatibrewalchowdhary/",
      twitter: "",
      googlePlus: "",
      linkedin: "",
      instagram: ""
    }
  },
  {
    columnId: "51679ea0",
    imageWidgetId: "428bbfd8",
    nameWidgetId: "30ad1f1c",
    degreeWidgetId: "15efb330",
    descWidgetId: "a59d85",
    socialWidgetId: "4583da0f",
    imageUrl: "/wp-content/uploads/2024/03/Untitled-1600-x-1090-px.png",
    name: "Dr. Prawash Chowdhary",
    degree: "MD, DNB (Nephrology)",
    description: "MNAMS, FASN (USA), FISN - ANIO, FRCP (London), Interventional Nephrologist.",
    socialLinks: {
      facebook: "https://www.facebook.com/prawash.chowdhary",
      twitter: "",
      googlePlus: "",
      linkedin: "",
      instagram: ""
    }
  }
];

export default function Doctors() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-75a9a8cd elementor-section-full_width elementor-section-height-default envato-background-fix"
      data-id="75a9a8cd"
      data-element_type="section"
    >
      {/* Background Overlay styled by post-5721.css */}
      <div className="elementor-background-overlay" />

      {/* Top Pyramids Shape Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-wide">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1ae7564d"
            data-id="1ae7564d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              
              {/* Title Block Section */}
              <div
                className="elementor-element elementor-element-6d5de677 elementor-section-boxed elementor-section-height-default elementor-section elementor-inner-section"
                data-id="6d5de677"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-wide">
                  <div className="elementor-row">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-518f5ca3"
                      data-id="518f5ca3"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        
                        {/* Subtitle */}
                        <div
                          className="elementor-widget elementor-widget-heading elementor-element elementor-element-37340dd3"
                          data-id="37340dd3"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">
                              Dedicated Professionals
                            </h3>
                          </div>
                        </div>

                        {/* Title */}
                        <div
                          className="elementor-widget elementor-widget-heading elementor-element elementor-element-17c4004"
                          data-id="17c4004"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">
                              Meet the team
                            </h3>
                          </div>
                        </div>

                        {/* Divider */}
                        <div
                          className="elementor-widget elementor-widget-divider elementor-element elementor-element-7d38f80c"
                          data-id="7d38f80c"
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
                </div>
              </div>

              {/* Doctors Cards Row */}
              <div
                className="elementor-element elementor-element-3ddb216f elementor-section-boxed elementor-section-height-default envato-top-0 elementor-section elementor-inner-section"
                data-id="3ddb216f"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-wide">
                  <div className="elementor-row">
                    {DOCTORS.map((doc) => (
                      <DoctorCard
                        key={doc.socialWidgetId}
                        columnId={doc.columnId}
                        imageWidgetId={doc.imageWidgetId}
                        nameWidgetId={doc.nameWidgetId}
                        degreeWidgetId={doc.degreeWidgetId}
                        descWidgetId={doc.descWidgetId}
                        socialWidgetId={doc.socialWidgetId}
                        imageUrl={doc.imageUrl}
                        name={doc.name}
                        degree={doc.degree}
                        description={doc.description}
                        socialLinks={doc.socialLinks}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pyramids Negative Shape Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
        </svg>
      </div>
    </section>
  );
}
