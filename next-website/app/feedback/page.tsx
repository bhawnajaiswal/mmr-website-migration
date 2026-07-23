"use client";

import { useState } from "react";
import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    department: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    if (!formData.feedback.trim()) {
      newErrors.feedback = "This field is required.";
    }
    if (!formData.department) {
      newErrors.department = "This field is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        department: ""
      });
    }, 1500);
  };

  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-6718.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="6718" className="elementor elementor-6718">
          
          {/* Section 1: Hero Banner (ID: 2c6b695e) */}
          <SubPageHero
            secId="2c6b695e"
            title="Feedback"
            subtitle="Your feedback valuable for us.........."
            backgroundColor="transparent"
          />

          {/* Section 2: Form Description Section (ID: 5e636f30) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-5e636f30 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="5e636f30"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6c5ef29e"
                  data-id="6c5ef29e"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-51723db6 elementor-widget elementor-widget-heading"
                      data-id="51723db6"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Your feedback is valuable.
                        </h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-5b194108 elementor-widget elementor-widget-heading"
                      data-id="5b194108"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          If you like our service, please take a moment in giving us your valuable feedback.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Feedback Form (ID: 66b711bb) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-66b711bb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="66b711bb"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                
                {/* Left Column Spacer */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5f55a0fb"
                  data-id="5f55a0fb"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap" />
                </div>

                {/* Center Column: Form */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0880a5d"
                  data-id="0880a5d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-26934bb elementor-widget elementor-widget-wpforms"
                      data-id="26934bb"
                      data-element_type="widget"
                      data-widget_type="wpforms.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="wpforms-container wpforms-container-full" id="wpforms-6714">
                          
                          {submitSuccess ? (
                            <div className="wpforms-confirmation-container-full" style={{ padding: "20px", backgroundColor: "#fdf8f8", border: "1px solid #f08080", borderRadius: "10px", textAlign: "center", color: "#333" }}>
                              <p>Thanks for your valuable feedback!</p>
                            </div>
                          ) : (
                            <form className="wpforms-form" onSubmit={handleSubmit}>
                              
                              {/* Field 1: Name */}
                              <div className="wpforms-field wpforms-field-name" style={{ marginBottom: "20px" }}>
                                <label className="wpforms-field-label" htmlFor="wpforms-6714-field_0" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px", color: "rgba(0, 0, 0, 0.85)" }}>
                                  Name <span className="wpforms-required-label" style={{ color: "#d63637" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  id="wpforms-6714-field_0"
                                  className="wpforms-field-medium"
                                  name="name"
                                  style={{ width: "100%", padding: "10px 15px", border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "3px", backgroundColor: "#ffffff", color: "rgba(0, 0, 0, 0.7)", outline: "none" }}
                                  value={formData.name}
                                  onChange={handleInputChange}
                                />
                                {errors.name && (
                                  <span className="wpforms-error" style={{ color: "#d63637", fontSize: "12px", display: "block", marginTop: "5px" }}>{errors.name}</span>
                                )}
                              </div>

                              {/* Field 2: Email */}
                              <div className="wpforms-field wpforms-field-email" style={{ marginBottom: "20px" }}>
                                <label className="wpforms-field-label" htmlFor="wpforms-6714-field_1" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px", color: "rgba(0, 0, 0, 0.85)" }}>
                                  Email <span className="wpforms-required-label" style={{ color: "#d63637" }}>*</span>
                                </label>
                                <input
                                  type="email"
                                  id="wpforms-6714-field_1"
                                  className="wpforms-field-medium"
                                  name="email"
                                  placeholder="example@gmail.com"
                                  style={{ width: "100%", padding: "10px 15px", border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "3px", backgroundColor: "#ffffff", color: "rgba(0, 0, 0, 0.7)", outline: "none" }}
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                {errors.email && (
                                  <span className="wpforms-error" style={{ color: "#d63637", fontSize: "12px", display: "block", marginTop: "5px" }}>{errors.email}</span>
                                )}
                              </div>

                              {/* Field 3: Radio choices */}
                              <div className="wpforms-field wpforms-field-radio" style={{ marginBottom: "20px" }}>
                                <label className="wpforms-field-label" style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize: "14px", color: "rgba(0, 0, 0, 0.85)" }}>
                                  Which department do you have a suggestion for? <span className="wpforms-required-label" style={{ color: "#d63637" }}>*</span>
                                </label>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                  <li style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input
                                      type="radio"
                                      id="wpforms-6714-field_3_1"
                                      name="department"
                                      value="Fertiity Treatment"
                                      checked={formData.department === "Fertiity Treatment"}
                                      onChange={handleInputChange}
                                      style={{ cursor: "pointer" }}
                                    />
                                    {/* Preserving production spelling typo: "Fertiity" */}
                                    <label htmlFor="wpforms-6714-field_3_1" style={{ margin: 0, cursor: "pointer", fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                                      Fertiity Treatment
                                    </label>
                                  </li>
                                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input
                                      type="radio"
                                      id="wpforms-6714-field_3_2"
                                      name="department"
                                      value="Kidney Care"
                                      checked={formData.department === "Kidney Care"}
                                      onChange={handleInputChange}
                                      style={{ cursor: "pointer" }}
                                    />
                                    <label htmlFor="wpforms-6714-field_3_2" style={{ margin: 0, cursor: "pointer", fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                                      Kidney Care
                                    </label>
                                  </li>
                                </ul>
                                {errors.department && (
                                  <span className="wpforms-error" style={{ color: "#d63637", fontSize: "12px", display: "block", marginTop: "5px" }}>{errors.department}</span>
                                )}
                              </div>

                              {/* Field 4: Feedback Text */}
                              <div className="wpforms-field wpforms-field-textarea" style={{ marginBottom: "25px" }}>
                                <label className="wpforms-field-label" htmlFor="wpforms-6714-field_2" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px", color: "rgba(0, 0, 0, 0.85)" }}>
                                  Feedback <span className="wpforms-required-label" style={{ color: "#d63637" }}>*</span>
                                </label>
                                <textarea
                                  id="wpforms-6714-field_2"
                                  className="wpforms-field-medium"
                                  name="feedback"
                                  placeholder="Write your suggestion or feedback here"
                                  rows={4}
                                  style={{ width: "100%", padding: "10px 15px", border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "3px", backgroundColor: "#ffffff", color: "rgba(0, 0, 0, 0.7)", outline: "none" }}
                                  value={formData.feedback}
                                  onChange={handleInputChange}
                                />
                                {errors.feedback && (
                                  <span className="wpforms-error" style={{ color: "#d63637", fontSize: "12px", display: "block", marginTop: "5px" }}>{errors.feedback}</span>
                                )}
                              </div>

                              {/* Submit Button wrapper */}
                              <div className="wpforms-submit-container" style={{ textAlign: "left" }}>
                                <button
                                  type="submit"
                                  className="wpforms-submit"
                                  disabled={isSubmitting}
                                  style={{
                                    backgroundColor: "#f08080",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: "15px",
                                    padding: "10px 25px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    opacity: isSubmitting ? 0.7 : 1,
                                    outline: "none",
                                    transition: "background-color 0.3s"
                                  }}
                                >
                                  {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                              </div>

                            </form>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column Spacer */}
                <div
                  className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-af5a3d9"
                  data-id="af5a3d9"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap" />
                </div>

              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
