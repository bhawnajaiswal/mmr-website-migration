"use client";

import { useState } from "react";
import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";
import Link from "next/link";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "This field is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Finalize form submission backend architecture (save-to-database, email action, and redirect).
  };

  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6684.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6684" className="elementor elementor-6684">
          
          {/* Section 1: Hero Banner (ID: 66d1934) */}
          {/* Preserving production quirk: title is "Thanks for Connecting with us..." */}
          <SubPageHero
            secId="66d1934"
            title="Thanks for Connecting with us..."
            subtitle="+91 9244122040"
            buttonLink="/treatment-services"
            backgroundColor="transparent"
          />

          {/* Section 2: Info Block (ID: 5745c968) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5745c968 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="5745c968"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                
                {/* Column 1: Hospital Name */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1f91cd2a"
                  data-id="1f91cd2a"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-1f036e6c elementor-widget elementor-widget-heading"
                      data-id="1f036e6c"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          MMR Hospital &amp; IVF Center.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Contact Us Info */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7618afd4"
                  data-id="7618afd4"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-3c7ef932 elementor-widget elementor-widget-heading"
                      data-id="3c7ef932"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Contact Us
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-20ac5432 elementor-widget elementor-widget-icon-list"
                      data-id="20ac5432"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">
                              Plot No. C, 132-133, Sector-9, Kamal Vihar, Raipur, Dunda, Chhattisgarh 492004
                            </span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="tel:+919244122040">
                              <span className="elementor-icon-list-text">+91 9244122040</span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="mailto:info@mmrhospitals.com">
                              <span className="elementor-icon-list-text">info@mmrhospitals.com</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Appointments */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-55bd61f"
                  data-id="55bd61f"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-4cd3f484 elementor-widget elementor-widget-heading"
                      data-id="4cd3f484"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Appointments
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-section elementor-inner-section elementor-element elementor-element-362c039b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="362c039b"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-65d7f104 elementor-widget elementor-widget-text-editor"
                                data-id="65d7f104"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>Book an appointment for you.</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4efbbed9 elementor-align-left elementor-widget elementor-widget-button"
                                data-id="4efbbed9"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <Link
                                      href="/consultation"
                                      className="elementor-button elementor-button-link elementor-size-md elementor-animation-shrink"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Book Online</span>
                                      </span>
                                    </Link>
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
            </div>
          </section>

          {/* Section 3: Visit Our Hospital / Map Section (ID: 862287f) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-862287f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="862287f"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                
                {/* Left Column: Wording */}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-269f68d6"
                  data-id="269f68d6"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-531495f5 elementor-widget elementor-widget-heading"
                      data-id="531495f5"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Visit our Hospital
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-5f5565 elementor-widget elementor-widget-text-editor"
                      data-id="5f5565"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-text-editor elementor-clearfix">
                          <p>Have a question or need assistance? Don&apos;t hesitate to contact us via phone, email, or by filling out the form below. Our dedicated staff is committed to providing you with prompt and personalized support. We provide you the best gynecologist in Raipur.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Google Maps Embed */}
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-381dbce9"
                  data-id="381dbce9"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-section elementor-inner-section elementor-element elementor-element-3316da1b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="3316da1b"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4c8787c7"
                            data-id="4c8787c7"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-2887f9f3 elementor-widget elementor-widget-google_maps"
                                data-id="2887f9f3"
                                data-element_type="widget"
                                data-widget_type="google_maps.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-custom-embed">
                                    <iframe
                                      title="MMR Hospital and IVF Center Raipur Map"
                                      src="https://maps.google.com/maps?q=MMR%20Hospital%20and%20IVF%20Center,%20Raipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                      width="100%"
                                      height="360"
                                      style={{ border: 0 }}
                                      allowFullScreen
                                      loading="lazy"
                                    />
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
            </div>
          </section>

          {/* Section 4: Send Us a Message Form Section (ID: 48930726) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-48930726 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="48930726"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1c9e593d"
                  data-id="1c9e593d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    <div
                      className="elementor-element elementor-element-7d432646 elementor-widget elementor-widget-heading"
                      data-id="7d432646"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Send us a Message
                        </h2>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-1395f388 elementor-widget elementor-widget-form"
                      data-id="1395f388"
                      data-element_type="widget"
                      data-widget_type="form.default"
                    >
                      <div className="elementor-widget-container">
                        <form className="elementor-form" onSubmit={handleSubmit}>
                          <div className="elementor-form-fields-wrapper elementor-labels-above">
                            
                            {/* Field 1: Name (custom ID is "email") */}
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-email elementor-col-100">
                              <input
                                type="text"
                                name="name"
                                id="form-field-email"
                                className={`elementor-field-textual elementor-size-md elementor-field ${
                                  errors.name ? "elementor-error" : ""
                                }`}
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                              {errors.name && (
                                <span className="elementor-form-error-message">{errors.name}</span>
                              )}
                            </div>

                            {/* Field 2: Email (custom ID is "6850d19") */}
                            <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-6850d19 elementor-col-100">
                              <input
                                type="email"
                                name="email"
                                id="form-field-6850d19"
                                className={`elementor-field-textual elementor-size-md elementor-field ${
                                  errors.email ? "elementor-error" : ""
                                }`}
                                placeholder="someone@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                              {errors.email && (
                                <span className="elementor-form-error-message">{errors.email}</span>
                              )}
                            </div>

                            {/* Field 3: Website (custom ID is "f9f57ad") */}
                            <div className="elementor-field-type-url elementor-field-group elementor-column elementor-field-group-f9f57ad elementor-col-100">
                              <input
                                type="url"
                                name="website"
                                id="form-field-f9f57ad"
                                className="elementor-field-textual elementor-size-md elementor-field"
                                placeholder="http://yourwebsite.com"
                                value={formData.website}
                                onChange={handleInputChange}
                              />
                            </div>

                            {/* Field 4: Message (custom ID is "da6d553") */}
                            <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-da6d553 elementor-col-100">
                              <textarea
                                className="elementor-field-textual elementor-size-md elementor-field"
                                name="message"
                                id="form-field-da6d553"
                                rows={4}
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                              <button
                                type="submit"
                                className="elementor-button elementor-size-md elementor-form-submit-button"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">Send Message</span>
                                </span>
                              </button>
                            </div>

                          </div>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Social / Stay Connected (ID: 7b036404) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-7b036404 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="7b036404"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-25aa3a76"
                  data-id="25aa3a76"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    <div
                      className="elementor-element elementor-element-3c8bc194 elementor-widget elementor-widget-heading"
                      data-id="3c8bc194"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Stay Connected.
                        </h2>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-3e27daf6 elementor-widget elementor-widget-heading"
                      data-id="3e27daf6"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          We&apos;d love to hear from you on our social network.<br />Use the following social mediums and give your valuable suggestions.
                        </h3>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-59f25837 elementor-shape-circle e-grid-align-center elementor-widget elementor-widget-social-icons"
                      data-id="59f25837"
                      data-element_type="widget"
                      data-widget_type="social-icons.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-social-icons-wrapper elementor-grid-align-center">
                          
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-shrink"
                              href="https://www.facebook.com/profile.php?id=61553532623603&amp;mibextid=ZbWKwL"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Facebook-f</span>
                              <i className="fab fa-facebook-f" />
                            </a>
                          </span>

                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink"
                              href="https://twitter.com/MMRHospital"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Twitter</span>
                              <i className="fab fa-twitter" />
                            </a>
                          </span>

                          {/* Preserving production G+ to Pinterest mapping quirk */}
                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-google-plus elementor-animation-shrink"
                              href="https://in.pinterest.com/mmrhospitalraipur/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Google-plus</span>
                              <i className="fab fa-pinterest" />
                            </a>
                          </span>

                          <span className="elementor-grid-item">
                            <a
                              className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink"
                              href="https://www.instagram.com/mmrhospitalandivfcenter/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="elementor-screen-only">Instagram</span>
                              <i className="fab fa-instagram" />
                            </a>
                          </span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
