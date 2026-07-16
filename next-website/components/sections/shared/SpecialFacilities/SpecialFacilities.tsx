"use client";

export default function SpecialFacilities() {
  const cards = [
    {
      colId: "125d6ca",
      imgWidgetId: "1ea226f",
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital.png",
      titleWidgetId: "6f14a5db",
      title: "Advanced Modular Operation \nTheatre",
      descWidgetId: "527f34a0",
      desc: "We have the best modular operation theatre's with all facilities."
    },
    {
      colId: "7912a3ce",
      imgWidgetId: "3c126c12",
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-1.png",
      titleWidgetId: "2f547625",
      title: "Embryology Lab",
      descWidgetId: "749fd9a2",
      desc: "We provide best IVF, ICSI & IUI treatments."
    },
    {
      colId: "7a729302",
      imgWidgetId: "61bbd466",
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-2.png",
      titleWidgetId: "62061beb",
      title: "Pathology",
      descWidgetId: "1abc7021",
      desc: "We have pathology lab with our best lab technician."
    }
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-1e71954b envato-background-fix elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="1e71954b"
      data-element_type="section"
      data-settings='{"shape_divider_top":"tilt","shape_divider_bottom":"tilt"}'
      style={{ padding: "80px 0 110px 0" }}
    >
      <div
        className="elementor-background-overlay"
        style={{
          backgroundColor: "#f5f7f9",
          opacity: 0.9
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

      <div
        className="elementor-container elementor-column-gap-wide"
        style={{ maxWidth: "1040px", margin: "0 auto" }}
      >
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e3d2b4b"
          data-id="1e3d2b4b"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Header Section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-479ef77c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="479ef77c"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7d6503d"
                  data-id="7d6503d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Title */}
                    <div
                      className="elementor-element elementor-element-3bb1300 elementor-widget elementor-widget-heading"
                      data-id="3bb1300"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2
                          className="elementor-heading-title elementor-size-default"
                          style={{
                            fontFamily: "Nunito",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#305595",
                            letterSpacing: "-0.5px",
                            lineHeight: "1.176",
                            textAlign: "center"
                          }}
                        >
                          Special Facilities in our Hospital
                        </h2>
                      </div>
                    </div>

                    {/* Divider Line */}
                    <div
                      className="elementor-element elementor-element-56216243 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                      data-id="56216243"
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
            </section>

            {/* Grid Cards Section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-1942650e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="1942650e"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                {cards.map((card) => (
                  <div
                    key={card.colId}
                    className="elementor-column elementor-col-33 elementor-inner-column elementor-element"
                    data-id={card.colId}
                    data-element_type="column"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      textAlign: "left",
                      margin: "20px"
                    }}
                  >
                    <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "0 0 20px 0" }}>
                      
                      {/* Card Image */}
                      <div
                        className="elementor-element elementor-widget elementor-widget-image"
                        data-id={card.imgWidgetId}
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            src={card.imgSrc}
                            alt=""
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "4px 4px 0 0",
                              marginBottom: "20px"
                            }}
                          />
                        </div>
                      </div>

                      {/* Card Title */}
                      <div
                        className="elementor-element elementor-widget elementor-widget-heading"
                        data-id={card.titleWidgetId}
                        data-element_type="widget"
                        data-widget_type="heading.default"
                        style={{ padding: "0 24px" }}
                      >
                        <div className="elementor-widget-container">
                          <h3
                            className="elementor-heading-title elementor-size-default"
                            style={{
                              fontFamily: "Nunito",
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "#333639",
                              lineHeight: "1.4",
                              whiteSpace: "pre-line"
                            }}
                          >
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Description */}
                      <div
                        className="elementor-element elementor-widget elementor-widget-text-editor"
                        data-id={card.descWidgetId}
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                        style={{ padding: "0 24px", marginTop: "8px" }}
                      >
                        <div className="elementor-widget-container">
                          <p
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.6",
                              color: "#54595f"
                            }}
                          >
                            {card.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
