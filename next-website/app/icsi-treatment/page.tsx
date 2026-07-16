import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";
import SubPageIntro from "@/components/sections/shared/SubPageIntro/SubPageIntro";
import SpecialFacilities from "@/components/sections/shared/SpecialFacilities/SpecialFacilities";
import SubPageCTA from "@/components/sections/shared/SubPageCTA/SubPageCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Preserved copy-paste mistake from production SEO meta title
  title: "IVM \u2013 MMR Hospital & IVF Center \u2013 Best IVF Center in Raipur",
  description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  openGraph: {
    title: "IVM \u2013 MMR Hospital & IVF Center \u2013 Best IVF Center in Raipur",
    description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  }
};

export default function IcsiPage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6217.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6217" className="elementor elementor-6217">
          {/* Section 1: Hero Banner */}
          <SubPageHero secId="6e3b5e9c" title="ICSI (Intracytoplasmic Sperm Injection)" />

          {/* Section 2: Intro Section */}
          <SubPageIntro
            title="Intracytoplasmic Sperm Injection (ICSI) at MMR Hospital & IVF Center"
            paragraph1="At MMR Hospital &amp; IVF Center, we understand that the journey to parenthood can present unique challenges for individuals and couples struggling with infertility. That's why we offer advanced fertility treatments like Intracytoplasmic Sperm Injection (ICSI) to help overcome barriers to conception and achieve successful pregnancies."
            paragraph2="Intracytoplasmic Sperm Injection (ICSI) is a highly specialized form of in vitro fertilization (IVF) that involves the direct injection of a single sperm into an egg. This technique is particularly beneficial for couples dealing with male factor infertility, where the sperm may have difficulty penetrating the egg on its own."
            buttonText="Know about our experts.."
            buttonLink="/our-expert-team"
          />

          {/* Section 3: Core Details Section */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3705ee5b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="3705ee5b"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5da29a7a"
                data-id="5da29a7a"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  
                  {/* Inner Section 1: How Does ICSI Work? */}
                  <div
                    className="elementor-section elementor-inner-section elementor-element elementor-element-77d53844 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="77d53844"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4a3a61cb"
                          data-id="4a3a61cb"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            
                            <div
                              className="elementor-element elementor-element-8f2d4f7 elementor-widget elementor-widget-heading"
                              data-id="8f2d4f7"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  How Does ICSI Work?
                                </h3>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-76adb21 elementor-widget elementor-widget-text-editor"
                              data-id="76adb21"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>The ICSI procedure is performed as part of the IVF process and typically involves the following steps:</p>
                                </div>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-4648b52 elementor-widget elementor-widget-text-editor"
                              data-id="4648b52"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <ol>
                                    <li>
                                      <p>
                                        <strong>Ovarian Stimulation:</strong> The female partner undergoes ovarian stimulation to encourage the development of multiple eggs within the ovaries.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Egg Retrieval:</strong> Once the eggs have matured, they are retrieved from the ovaries through a minimally invasive procedure called follicular aspiration.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Sperm Collection:</strong> Meanwhile, sperm samples are collected from the male partner through ejaculation or surgical sperm retrieval techniques, such as testicular sperm extraction (TESE) or epididymal sperm aspiration (TESA).
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Injection of Sperm:</strong> Using a specialized micromanipulation technique, a single sperm is carefully selected and injected directly into the cytoplasm of each mature egg.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Fertilization and Embryo Development:</strong> After the injection, the fertilized eggs are monitored in the laboratory for signs of successful fertilization and embryo development.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Embryo Transfer:</strong> Once viable embryos have developed, one or more embryos are selected for transfer into the uterus, with the goal of establishing a pregnancy.
                                      </p>
                                    </li>
                                  </ol>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inner Section 2: Why Choose MMR Hospital & IVF Center for ICSI? */}
                  <div
                    className="elementor-section elementor-inner-section elementor-element elementor-element-9ab4075 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="9ab4075"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fb4c32a"
                          data-id="fb4c32a"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            
                            <div
                              className="elementor-element elementor-element-f99f6d3 elementor-widget elementor-widget-heading"
                              data-id="f99f6d3"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  Why Choose MMR Hospital &amp; IVF Center for ICSI?
                                </h3>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-8699d30 elementor-widget elementor-widget-text-editor"
                              data-id="8699d30"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <ul>
                                    <li>
                                      <p>
                                        <strong>Expertise:</strong> Our fertility specialists are highly experienced in performing ICSI procedures and have helped numerous couples overcome male factor infertility to achieve successful pregnancies.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>State-of-the-Art Facility:</strong> We utilize advanced technology and equipment in our state-of-the-art laboratory to ensure the highest level of precision and accuracy during the ICSI process.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Personalized Care:</strong> We understand that every patient's journey is unique, and we tailor our treatment approach to meet individual needs, providing compassionate support every step of the way.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        <strong>Success Rates:</strong> Our commitment to excellence and continuous quality improvement has resulted in consistently high success rates for ICSI, giving hope to couples seeking to expand their families.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div
                              className="elementor-element elementor-element-32b4f89 elementor-widget elementor-widget-text-editor"
                              data-id="32b4f89"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    If you're considering ICSI as part of your fertility treatment plan, we invite you to schedule a consultation with our experienced fertility team at MMR Hospital &amp; IVF Center. Together, we can explore your options and develop a personalized treatment approach to help you achieve your dream of parenthood.
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Special Facilities Grid with unlinked social icons enabled */}
          <SpecialFacilities showSocialIcons={true} />

          {/* Section 5: CTA Callout */}
          <SubPageCTA
            title="Make your Parenthood dream come true."
            description="Cras viverra lobortis odio aliquet volutpat. Ut imperdiet iaculis nisl at placerat. Nulla facilisi. Pellentesque nec suscipit est. Duis dapibus faucibus auctor."
            buttonText="BOOK Consultation"
            buttonLink="/consultation"
          />
        </div>
      </main>
    </>
  );
}
