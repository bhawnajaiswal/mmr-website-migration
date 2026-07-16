import WhyChooseCard from "./WhyChooseCard";

const ROW_1_CARDS = [
  {
    columnId: "26e1ca76",
    widgetId: "455fd4d1",
    iconClass: "fas fa-user-md",
    title: "Experienced Doctor's",
    description: "We have the best team of experienced doctors who are capable of understanding your problems and providing successful treatment."
  },
  {
    columnId: "609d0f40",
    widgetId: "35c776a6",
    iconClass: "fas fa-laptop-medical",
    title: "Online Consultation",
    description: "If you are not able to visit us, you can consult our experts from the comfort of your home with the help of our online consultation facility."
  },
  {
    columnId: "fabe02e",
    widgetId: "bfb4155",
    iconClass: "fas fa-ambulance",
    title: "Emergency Pickup",
    description: "At MMR Hospital & IVF Center, we understand that emergencies can happen at any time. That's why we offer a dedicated Emergency Pickup Service to ensure timely transportation for patients in need of urgent medical care."
  }
];

const ROW_2_CARDS = [
  {
    columnId: "6905d309",
    widgetId: "161c5d63",
    iconClass: "fas fa-thumbs-up",
    title: "Trust",
    description: "At MMR Hospital we believe that it is essential for both patients and their families to have confidence and trust in our institution."
  },
  {
    columnId: "5078c741",
    widgetId: "1c09e062",
    iconClass: "icon icon-laptop-phone",
    title: "Technology",
    description: "Utilizing the latest technology which can greatly enhance patient care, streamline operations, improve efficiency, and ensure better outcomes."
  },
  {
    columnId: "3dbf3dad",
    widgetId: "2af1a90b",
    iconClass: "fas fa-briefcase-medical",
    title: "Treatment",
    description: "Our Commitment towards medical expertise, compassionate care and a patient-centred approach in providing best treatment."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3cb27ab4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="3cb27ab4"
      data-element_type="section"
    >
      {/* Background Overlay styled by post-5721.css */}
      <div className="elementor-background-overlay" />

      {/* Top Wave Brush Shape Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z" />
          <path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z" />
          <path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z" />
          <path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z" />
          <path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z" />
          <path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z" />
          <path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z" />
          <path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z" />
          <path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-148ee6e4"
          data-id="148ee6e4"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Heading Sub-section */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-3c9c3f38 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="3c9c3f38"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-77b3b7c"
                  data-id="77b3b7c"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Subtitle */}
                    <div
                      className="elementor-widget elementor-widget-heading elementor-element elementor-element-5c9e28d8"
                      data-id="5c9e28d8"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Six reasons we&apos;re the best
                        </h3>
                      </div>
                    </div>

                    {/* Title */}
                    <div
                      className="elementor-widget elementor-widget-heading elementor-element elementor-element-4b8d1709"
                      data-id="4b8d1709"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Why choose us
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="elementor-widget elementor-widget-divider elementor-element elementor-element-9b8ee76"
                      data-id="9b8ee76"
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

            {/* Cards Row 1 */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-395752c4 envato-top-0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="395752c4"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                {ROW_1_CARDS.map((card) => (
                  <WhyChooseCard
                    key={card.widgetId}
                    columnId={card.columnId}
                    widgetId={card.widgetId}
                    iconClass={card.iconClass}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </section>

            {/* Cards Row 2 */}
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-5e8518f7 envato-top-0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="5e8518f7"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-wide">
                {ROW_2_CARDS.map((card) => (
                  <WhyChooseCard
                    key={card.widgetId}
                    columnId={card.columnId}
                    widgetId={card.widgetId}
                    iconClass={card.iconClass}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
