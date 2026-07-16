import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";
import SubPageIntro from "@/components/sections/shared/SubPageIntro/SubPageIntro";
import SpecialFacilities from "@/components/sections/shared/SpecialFacilities/SpecialFacilities";
import SubPageCTA from "@/components/sections/shared/SubPageCTA/SubPageCTA";

export default function IvfPage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-5969.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="5969" className="elementor elementor-5969">
          
          {/* Section 1: Hero Banner */}
          <SubPageHero title="IVF" secId="6e3b5e9c" />

          {/* Section 2: Intro Section */}
          <SubPageIntro
            title="Welcome to MMR Hospital &amp; IVF Center"
            paragraph1="Welcome to MMR Hospital &amp; IVF Center, where we specialize in providing comprehensive and compassionate IVF services to individuals and couples struggling with infertility. Our state-of-the-art facility, led by experienced fertility specialists, is dedicated to helping you achieve your dream of parenthood through personalized and advanced reproductive care."
            paragraph2="In Vitro Fertilization (IVF) is a fertility treatment that involves fertilizing eggs with sperm outside the body in a laboratory setting. The resulting embryos are then carefully monitored and selected for transfer into the uterus, with the goal of establishing a successful pregnancy."
          />

          {/* Section 3: Core Details Section */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3705ee5b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="3705ee5b"
            data-element_type="section"
            style={{ padding: "50px 0" }}
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "0 20px" }}>
                  
                  {/* Subheading: Our IVF Process */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3
                        className="elementor-heading-title elementor-size-default"
                        style={{
                          color: "#333",
                          fontSize: "28px",
                          fontWeight: "700",
                          marginBottom: "15px"
                        }}
                      >
                        Our IVF Process -
                      </h3>
                    </div>
                  </div>
                  
                  {/* Paragraph: Process Description & Steps */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <p>At MMR Hospital &amp; IVF Center, we offer a comprehensive IVF program that encompasses the following steps:</p>
                      <ol>
                        <li>
                          <strong>Initial Consultation:</strong> Your journey begins with an in-depth consultation with one of our experienced fertility specialists. During this appointment, we will review your medical history, discuss your fertility goals, and recommend appropriate diagnostic tests to assess your reproductive health.
                        </li>
                        <li>
                          <strong>Ovarian Stimulation:</strong> In preparation for IVF, we use medications to stimulate the ovaries to produce multiple eggs. Close monitoring and ultrasound examinations are performed to track follicular development.
                        </li>
                        <li>
                          <strong>Egg Retrieval:</strong> Once the eggs have matured, they are retrieved from the ovaries using a minimally invasive procedure called transvaginal ultrasound-guided aspiration. This procedure is performed under sedation to ensure your comfort.
                        </li>
                        <li>
                          <strong>Fertilization and Embryo Culture:</strong> The retrieved eggs are then fertilized with sperm in the laboratory. Our embryologists carefully monitor embryo development over the next few days, assessing their quality and viability.
                        </li>
                        <li>
                          <strong>Embryo Transfer:</strong> The highest-quality embryos are selected for transfer into the uterus. This procedure is typically performed 3 to 5 days after egg retrieval and involves placing the embryos directly into the uterine cavity using a thin catheter.
                        </li>
                        <li>
                          <strong>Pregnancy Test and Follow-up Care:</strong> Approximately two weeks after embryo transfer, a pregnancy test is performed to determine if the treatment was successful. Our team provides ongoing support and guidance throughout your IVF journey, including follow-up consultations and counseling as needed.
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Subheading: Why Choose MMR Hospital */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-heading"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                    style={{ marginTop: "40px" }}
                  >
                    <div className="elementor-widget-container">
                      <h3
                        className="elementor-heading-title elementor-size-default"
                        style={{
                          color: "#333",
                          fontSize: "28px",
                          fontWeight: "700",
                          marginBottom: "15px"
                        }}
                      >
                        Why Choose MMR Hospital &amp; IVF Center for IVF ?
                      </h3>
                    </div>
                  </div>

                  {/* Paragraph: Why Choose MMR Hospital List */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <ul>
                        <li>
                          <strong>Experienced Team:</strong> Our fertility specialists have extensive experience and expertise in reproductive medicine, ensuring that you receive the highest standard of care.
                        </li>
                        <li>
                          <strong>Personalized Treatment Plans:</strong> We understand that every patient is unique, and we tailor our treatment approach to address your specific needs and circumstances.
                        </li>
                        <li>
                          <strong>Advanced Technology:</strong> Our state-of-the-art laboratory is equipped with the latest technology and equipment to optimize embryo development and maximize your chances of success.
                        </li>
                        <li>
                          <strong>Supportive Environment:</strong> We are committed to providing compassionate and supportive care throughout your IVF journey, offering emotional support and guidance at every step.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Closing Callout */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="elementor-widget-container">
                      <p>
                        If you&apos;re ready to take the next step on your fertility journey, we invite you to schedule a consultation with our team at MMR Hospital &amp; IVF Center. Together, we can explore your options and develop a personalized treatment plan to help you achieve your goal of starting or expanding your family.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Special Facilities Grid */}
          <SpecialFacilities />

          {/* Section 5: CTA Callout */}
          <SubPageCTA
            title="Make your Parenthood dream come true."
            description="Thank you for considering MMR Hospital &amp; IVF Center for your healthcare needs. We look forward to serving you and helping you achieve your health and family-building goals. If you have any questions or would like to schedule a consultation, please don&apos;t hesitate to contact us."
            buttonText="BOOK Consultation"
            buttonLink="/consultation-for-renal-problems"
          />

        </div>
      </main>
    </>
  );
}
