"use client";

import { useState } from "react";

export default function RenalConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    consultingFor: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    if (!formData.consultingFor || formData.consultingFor === "Consulting for *") {
      newErrors.consultingFor = "This field is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "This field is required.";
    }
    if (!formData.date) {
      newErrors.date = "This field is required.";
    }
    if (!formData.time) {
      newErrors.time = "This field is required.";
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
        href="/wp-content/uploads/elementor/css/post-3731.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="3731" className="elementor elementor-3731">
          
          {/* Section 1: Hero Banner */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-01bc2f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="01bc2f1"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e6e3248"
                  data-id="e6e3248"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-section elementor-inner-section elementor-element elementor-element-7d5fe20 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="7d5fe20"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          
                          {/* Left Column: Heading */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b85b52b"
                            data-id="b85b52b"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-2fb7c7d elementor-widget elementor-widget-heading"
                                data-id="2fb7c7d"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Consultation for Renal Problems
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Hero Image */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-65f207e"
                            data-id="65f207e"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-b77a2bf elementor-widget elementor-widget-image"
                                data-id="b77a2bf"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-image">
                                    {/* Preserving production quirk: using Gynecology banner on Renal page */}
                                    <img
                                      src="/wp-content/uploads/2024/03/Gynecology-Clinic-Instagram-Post-1.jpg"
                                      className="attachment-large size-large wp-image-5634"
                                      alt="Gynecology Clinic Post"
                                      width={800}
                                      height={800}
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

          {/* Section 2: Banner CTA */}
          <div
            className="elementor-element elementor-element-018a738 e-con-boxed e-con"
            data-id="018a738"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-7f7bdf1 elementor-align-center elementor-widget elementor-widget-button"
                data-id="7f7bdf1"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      href="#Appointment"
                      className="elementor-button elementor-button-link elementor-size-md"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Schedule an Appointment</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Consultation Content & Form */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2c6220c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="2c6220c"
            id="Appointment"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bbb663c"
                  data-id="bbb663c"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-section elementor-inner-section elementor-element elementor-element-b4b54c4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="b4b54c4"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          
                          {/* Left Column: Info & Contacts */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-05e8c01"
                            data-id="05e8c01"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              
                              {/* Subtitle / Intro Text (Preserving "reproductive health" wording quirk) */}
                              <div
                                className="elementor-element elementor-element-07c95f6 elementor-widget elementor-widget-text-editor"
                                data-id="07c95f6"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>
                                      If you're experiencing a renal problem or have concerns about your reproductive health, schedule fill up the form and we will be happy to assist you.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Description Text */}
                              <div
                                className="elementor-element elementor-element-2f398c5 elementor-widget elementor-widget-text-editor"
                                data-id="2f398c5"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>
                                      At MMR Hospital, we prioritize your kidney health. If you have concerns about renal problems, take the first step toward comprehensive care by filling out our Renal Problems Consultation Form. Our expert nephrologists are committed to providing personalized solutions tailored to your specific needs.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Phone Contacts Inline List */}
                              <div
                                className="elementor-element elementor-element-8111711 elementor-widget elementor-widget-icon-list"
                                data-id="8111711"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                              >
                                <div className="elementor-widget-container">
                                  <ul className="elementor-icon-list-items elementor-inline-items">
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                      <a href="tel:+91 9244122040">
                                        <span className="elementor-icon-list-icon">
                                          <img
                                            src="/wp-content/uploads/2023/11/call-2.svg"
                                            alt="Call Icon"
                                            width={32}
                                            height={32}
                                          />
                                        </span>
                                        <span className="elementor-icon-list-text">+91 9244122040</span>
                                      </a>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                      <span className="elementor-icon-list-text"> / </span>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                      <a href="tel:+919244122041">
                                        <span className="elementor-icon-list-text">41</span>
                                      </a>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                      <span className="elementor-icon-list-text"> / </span>
                                    </li>
                                    <li className="elementor-icon-list-item elementor-inline-item">
                                      <a href="tel:+919244122048">
                                        <span className="elementor-icon-list-text">48</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              {/* Email Contact Widget (Preserving "matruchhayaclinic.com" domain quirk) */}
                              <div
                                className="elementor-element elementor-element-a23ba02 elementor-widget elementor-widget-icon-list"
                                data-id="a23ba02"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                              >
                                <div className="elementor-widget-container">
                                  <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                      <a href="mailto:info@matruchhayaclinic.com">
                                        <span className="elementor-icon-list-icon">
                                          <img
                                            src="/wp-content/uploads/2023/11/email-1.svg"
                                            alt="Email Icon"
                                            width={32}
                                            height={32}
                                          />
                                        </span>
                                        <span className="elementor-icon-list-text">info@matruchhayaclinic.com</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Right Column: Appointment Form */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bfaafb3"
                            data-id="bfaafb3"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              
                              {/* Form Title */}
                              <div
                                className="elementor-element elementor-element-556297c elementor-widget elementor-widget-heading"
                                data-id="556297c"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Schedule an Appointment for Renal Problems
                                  </h2>
                                </div>
                              </div>

                              {/* Form Widget */}
                              <div
                                className="elementor-element elementor-element-156af9f elementor-widget elementor-widget-form"
                                data-id="156af9f"
                                data-element_type="widget"
                                data-widget_type="form.default"
                              >
                                <div className="elementor-widget-container">
                                  <form className="elementor-form" onSubmit={handleSubmit}>
                                    <div className="elementor-form-fields-wrapper elementor-labels-above">
                                      
                                      {/* Field 1: Name */}
                                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
                                        <input
                                          type="text"
                                          name="name"
                                          id="form-field-name"
                                          className={`elementor-field-textual elementor-size-lg elementor-field ${
                                            errors.name ? "elementor-error" : ""
                                          }`}
                                          placeholder="Your Name *"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                        />
                                        {errors.name && (
                                          <span className="elementor-form-error-message">{errors.name}</span>
                                        )}
                                      </div>

                                      {/* Field 2: Consulting for select */}
                                      <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-field_44a55a7 elementor-col-50">
                                        <div className="elementor-select-wrapper">
                                          <select
                                            name="consultingFor"
                                            id="form-field-field_44a55a7"
                                            className={`elementor-field-textual elementor-size-lg elementor-field ${
                                              errors.consultingFor ? "elementor-error" : ""
                                            }`}
                                            value={formData.consultingFor}
                                            onChange={handleInputChange}
                                          >
                                            <option value="">Consulting for *</option>
                                            <option value="Acute Renal Failure">Acute Renal Failure</option>
                                            <option value="Chronic Renal Failure">Chronic Renal Failure</option>
                                            <option value="Nephrotic Syndrome">Nephrotic Syndrome</option>
                                            <option value="Renal Stone Problem">Renal Stone Problem</option>
                                            <option value="Urinary Tract Infection Problem">Urinary Tract Infection Problem</option>
                                            <option value="Renal Tumor Problem">Renal Tumor Problem</option>
                                            <option value="Hypertension & Kidney Disease">Hypertension &amp; Kidney Disease</option>
                                            <option value="Diabetic Kidney Disease">Diabetic Kidney Disease</option>
                                            <option value="Pediatric Kidney Disease">Pediatric Kidney Disease</option>
                                            <option value="Obstetric Kidney Disease">Obstetric Kidney Disease</option>
                                            <option value="Hemodialysis (Haemo Dialysis)">Hemodialysis (Haemo Dialysis)</option>
                                            <option value="Peritoneal Dialysis">Peritoneal Dialysis</option>
                                            <option value="Renal Transplant">Renal Transplant</option>
                                            <option value="Renal Biopsy">Renal Biopsy</option>
                                            <option value="Permcath Insertion">Permcath Insertion</option>
                                            <option value="Other">Other (Please mention in comment box)</option>
                                          </select>
                                        </div>
                                        {errors.consultingFor && (
                                          <span className="elementor-form-error-message">{errors.consultingFor}</span>
                                        )}
                                      </div>

                                      {/* Field 3: Email */}
                                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50">
                                        <input
                                          type="email"
                                          name="email"
                                          id="form-field-email"
                                          className={`elementor-field-textual elementor-size-lg elementor-field ${
                                            errors.email ? "elementor-error" : ""
                                          }`}
                                          placeholder="Email *"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                        />
                                        {errors.email && (
                                          <span className="elementor-form-error-message">{errors.email}</span>
                                        )}
                                      </div>

                                      {/* Field 4: Mobile No. */}
                                      <div className="elementor-field-type-number elementor-field-group elementor-column elementor-field-group-field_0044c59 elementor-col-50">
                                        <input
                                          type="tel"
                                          name="mobile"
                                          id="form-field-field_0044c59"
                                          className={`elementor-field-textual elementor-size-lg elementor-field ${
                                            errors.mobile ? "elementor-error" : ""
                                          }`}
                                          placeholder="Mobile No.*"
                                          value={formData.mobile}
                                          onChange={handleInputChange}
                                        />
                                        {errors.mobile && (
                                          <span className="elementor-form-error-message">{errors.mobile}</span>
                                        )}
                                      </div>

                                      {/* Field 5: Date */}
                                      <div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_24cd334 elementor-col-50">
                                        <input
                                          type="date"
                                          name="date"
                                          id="form-field-field_24cd334"
                                          className={`elementor-field-textual elementor-size-lg elementor-field ${
                                            errors.date ? "elementor-error" : ""
                                          }`}
                                          placeholder="DD-MM-YYYY *"
                                          value={formData.date}
                                          onChange={handleInputChange}
                                        />
                                        {errors.date && (
                                          <span className="elementor-form-error-message">{errors.date}</span>
                                        )}
                                      </div>

                                      {/* Field 6: Time */}
                                      <div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-field_b4887c8 elementor-col-50">
                                        <input
                                          type="time"
                                          name="time"
                                          id="form-field-field_b4887c8"
                                          className={`elementor-field-textual elementor-size-lg elementor-field ${
                                            errors.time ? "elementor-error" : ""
                                          }`}
                                          placeholder="Time *"
                                          value={formData.time}
                                          onChange={handleInputChange}
                                        />
                                        {errors.time && (
                                          <span className="elementor-form-error-message">{errors.time}</span>
                                        )}
                                      </div>

                                      {/* Field 7: Query / Message */}
                                      <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-field_2438d0f elementor-col-100">
                                        <textarea
                                          className="elementor-field-textual elementor-size-lg elementor-field"
                                          name="message"
                                          id="form-field-field_2438d0f"
                                          rows={4}
                                          placeholder="Query / Message"
                                          value={formData.message}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* Field 8: Google ReCAPTCHA stub */}
                                      <div className="elementor-field-type-recaptcha elementor-field-group elementor-column elementor-col-100">
                                        <div className="elementor-field" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 15px", backgroundColor: "#fff" }}>
                                          <input type="checkbox" id="recaptcha-placeholder" style={{ width: "20px", height: "20px", cursor: "pointer" }} required />
                                          <label htmlFor="recaptcha-placeholder" style={{ margin: 0, cursor: "pointer", fontSize: "14px", color: "#555" }}>
                                            I am not a robot
                                          </label>
                                        </div>
                                      </div>

                                      {/* Submit Button */}
                                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                        <button
                                          type="submit"
                                          className="elementor-button elementor-size-md elementor-form-submit-button"
                                        >
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Submit</span>
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
