"use client";

import { useState } from "react";

export default function GynConsultationForm() {
  const [formData, setFormData] = useState({
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
    if (!formData.consultingFor || formData.consultingFor === "Consulting for *") {
      newErrors.consultingFor = "This field is required.";
    }
    if (!formData.email) {
      newErrors.email = "This field is required.";
    }
    if (!formData.mobile) {
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
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c5b23b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="c5b23b7"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3334c0b"
            data-id="3334c0b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              
              {/* Inner Section */}
              <div
                className="elementor-section elementor-inner-section elementor-element elementor-element-0b2717f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="0b2717f"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    
                    {/* Left Column: Info & Contacts */}
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7fc3828"
                      data-id="7fc3828"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        
                        {/* Subtitle Widget */}
                        <div
                          className="elementor-element elementor-element-3d6c1a0 elementor-widget elementor-widget-text-editor"
                          data-id="3d6c1a0"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p>
                                If you're experiencing a gynecological problem or have concerns about your reproductive health, schedule fill up the form and we will be happy to assist you.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Guide Text Widget */}
                        <div
                          className="elementor-element elementor-element-e343cf4 elementor-widget elementor-widget-text-editor"
                          data-id="e343cf4"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p>
                                Before your appointment, make a list of questions or concerns you want to discuss. It can be helpful to keep a symptom diary, noting the date, symptoms, and any patterns you've observed.
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                Depending on your symptoms and the doctor's assessment, we will recommend diagnostic tests such as blood tests, ultrasound, Pap smear, or others.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Phone Contacts Widget */}
                        <div
                          className="elementor-element elementor-element-abe588e elementor-widget elementor-widget-icon-list"
                          data-id="abe588e"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items elementor-inline-items">
                              <li className="elementor-icon-list-item elementor-inline-item">
                                <a href="tel:+919244122040">
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

                        {/* Email Contact Widget */}
                        <div
                          className="elementor-element elementor-element-881a19c elementor-widget elementor-widget-icon-list"
                          data-id="881a19c"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <a href="mailto:info@mmrhospitals.com">
                                  <span className="elementor-icon-list-icon">
                                    <img
                                      src="/wp-content/uploads/2023/11/email-1.svg"
                                      alt="Email Icon"
                                      width={32}
                                      height={32}
                                    />
                                  </span>
                                  <span className="elementor-icon-list-text">info@mmrhospitals.com</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right Column: Appointment Form */}
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3557aa8"
                      data-id="3557aa8"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        
                        {/* Form Title */}
                        <div
                          className="elementor-element elementor-element-e8d9332 elementor-widget elementor-widget-heading"
                          data-id="e8d9332"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Schedule an Appointment for gynecology problems
                            </h2>
                          </div>
                        </div>

                        {/* Form Widget */}
                        <div
                          className="elementor-element elementor-element-12b0299 elementor-widget elementor-widget-form"
                          data-id="12b0299"
                          data-element_type="widget"
                          data-widget_type="form.default"
                        >
                          <div className="elementor-widget-container">
                            <form className="elementor-form" onSubmit={handleSubmit}>
                              <div className="elementor-form-fields-wrapper elementor-labels-above">
                                
                                {/* Field 1: Consulting for */}
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
                                      <option value="Adolescent Problems">Adolescent Problems</option>
                                      <option value="Reproductive Age Group Problems">Reproductive Age Group Problems</option>
                                      <option value="Pere Menopausal">Pere Menopausal</option>
                                      <option value="Female Fertility Problems">Female Fertility Problems</option>
                                      <option value="Male Infertility Problems">Male Infertility Problems</option>
                                      <option value="Female Fertility Treatments">Female Fertility Treatments</option>
                                      <option value="Male Fertility Treatments">Male Fertility Treatments</option>
                                      <option value="Fertility Preservation">Fertility Preservation</option>
                                      <option value="Female Diagnosis">Female Diagnosis</option>
                                      <option value="Male Diagnosis">Male Diagnosis</option>
                                      <option value="Genomics">Genomics</option>
                                      <option value="Ectopic Pregnancy">Ectopic Pregnancy</option>
                                      <option value="IUI – Intra Uterine Insemination">IUI – Intra Uterine Insemination</option>
                                      <option value="IVM – In Vitro Maturation of Oocytes">IVM – In Vitro Maturation of Oocytes</option>
                                      <option value="Other">Other (Please mention in comment box)</option>
                                    </select>
                                  </div>
                                  {errors.consultingFor && (
                                    <span className="elementor-form-error-message">{errors.consultingFor}</span>
                                  )}
                                </div>

                                {/* Field 2: Email */}
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

                                {/* Field 3: Mobile No */}
                                <div className="elementor-field-type-number elementor-field-group elementor-column elementor-field-group-field_f782e76 elementor-col-50">
                                  <input
                                    type="tel"
                                    name="mobile"
                                    id="form-field-field_f782e76"
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

                                {/* Field 4: Date */}
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

                                {/* Field 5: Time */}
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

                                {/* Field 6: Message */}
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

                                {/* Field 7: Google ReCAPTCHA badge placeholder */}
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
  );
}
