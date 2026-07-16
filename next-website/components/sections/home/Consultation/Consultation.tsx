"use client";

import { useState } from "react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    treatment: "Fertility"
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      // Simulate API submit to match CRM endpoint requirements later
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", treatment: "Fertility" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-b656142 envato-background-fix elementor-section-full_width elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle"
      data-id="b656142"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"pyramids","shape_divider_bottom_negative":"yes","shape_divider_top":"pyramids"}'
    >
      <div className="elementor-background-overlay" />
      
      {/* Top Pyramids Divider */}
      <div className="elementor-shape elementor-shape-top" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
        </svg>
      </div>

      {/* Bottom Pyramids Divider */}
      <div className="elementor-shape elementor-shape-bottom" data-negative="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6a54dc55"
          data-id="6a54dc55"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Main Heading */}
            <div
              className="elementor-element elementor-element-2e30534f elementor-widget elementor-widget-heading"
              data-id="2e30534f"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  If you have been facing any infertility problem, then <br />
                  consult our fertility specialist.
                </h2>
              </div>
            </div>

            {/* Custom WPForms Replicant Widget */}
            <div
              className="elementor-element elementor-element-0c61adb elementor-widget elementor-widget-wpforms"
              data-id="0c61adb"
              data-element_type="widget"
              data-widget_type="wpforms.default"
            >
              <div className="elementor-widget-container">
                <div className="wpforms-container wpforms-container-full" id="wpforms-container-6155">
                  <form
                    id="wpforms-form-6155"
                    className="wpforms-validate wpforms-form wpforms-ajax-form"
                    data-formid="6155"
                    onSubmit={handleSubmit}
                  >
                    <div className="wpforms-field-container">
                      
                      {/* Name fields row */}
                      <div className="wpforms-field wpforms-field-name wpforms-field-required">
                        <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
                          <legend className="wpforms-field-label" style={{ color: "#FFF6F6FA", fontSize: "16px", marginBottom: "8px", fontWeight: "600" }}>
                            Name <span className="wpforms-required-label">*</span>
                          </legend>
                          <div style={{ display: "flex", gap: "15px" }}>
                            <div style={{ flex: 1 }}>
                              <input
                                type="text"
                                id="wpforms-6155-field_2"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="elementor-field elementor-size-lg elementor-field-textual"
                              />
                              <label htmlFor="wpforms-6155-field_2" style={{ color: "#FEF9F98C", fontSize: "12px", marginTop: "4px", display: "block" }}>
                                First
                              </label>
                            </div>
                            <div style={{ flex: 1 }}>
                              <input
                                type="text"
                                id="wpforms-6155-field_2-last"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="elementor-field elementor-size-lg elementor-field-textual"
                              />
                              <label htmlFor="wpforms-6155-field_2-last" style={{ color: "#FEF9F98C", fontSize: "12px", marginTop: "4px", display: "block" }}>
                                Last
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      {/* Email field */}
                      <div className="wpforms-field wpforms-field-email wpforms-field-required" style={{ marginTop: "20px" }}>
                        <label className="wpforms-field-label" htmlFor="wpforms-6155-field_3" style={{ color: "#FFF6F6FA", fontSize: "16px", marginBottom: "8px", display: "block", fontWeight: "600" }}>
                          Email <span className="wpforms-required-label">*</span>
                        </label>
                        <input
                          type="email"
                          id="wpforms-6155-field_3"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          spellCheck="false"
                          required
                          className="elementor-field elementor-size-lg elementor-field-textual"
                        />
                      </div>

                      {/* Dropdown field */}
                      <div className="wpforms-field wpforms-field-select" style={{ marginTop: "20px" }}>
                        <label className="wpforms-field-label" htmlFor="wpforms-6155-field_1" style={{ color: "#FFF6F6FA", fontSize: "16px", marginBottom: "8px", display: "block", fontWeight: "600" }}>
                          Treatment For
                        </label>
                        <select
                          id="wpforms-6155-field_1"
                          name="treatment"
                          value={formData.treatment}
                          onChange={handleChange}
                          className="elementor-field elementor-size-lg elementor-field-textual"
                        >
                          <option value="Fertility">Fertility</option>
                          <option value="Renal Care">Renal Care</option>
                        </select>
                      </div>

                    </div>

                    {/* Submit Button */}
                    <div className="wpforms-submit-container" style={{ textAlign: "center", marginTop: "30px" }}>
                      <button
                        type="submit"
                        name="wpforms[submit]"
                        id="wpforms-submit-6155"
                        className="elementor-button"
                        disabled={status === "submitting"}
                        style={{
                          backgroundColor: "#f08080",
                          color: "#ffffff",
                          borderRadius: "45px",
                          padding: "12px 30px",
                          fontSize: "16px",
                          cursor: status === "submitting" ? "not-allowed" : "pointer",
                          fontWeight: "bold",
                          border: "none"
                        }}
                      >
                        {status === "submitting" ? "Sending..." : "Submit"}
                      </button>
                    </div>

                    {status === "success" && (
                      <div style={{ color: "#00FF88", marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>
                        Your message has been sent successfully!
                      </div>
                    )}
                    {status === "error" && (
                      <div style={{ color: "#FF4444", marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>
                        An error occurred. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Terms and Conditions Label */}
            <div
              className="elementor-element elementor-element-1557ac98 elementor-widget elementor-widget-heading"
              data-id="1557ac98"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Terms & conditions are apply
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
