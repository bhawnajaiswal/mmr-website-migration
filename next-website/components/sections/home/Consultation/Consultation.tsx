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
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
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

      <div className="elementor-container elementor-column-gap-no" style={{ width: "100%", maxWidth: "1040px" }}>
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6a54dc55"
          data-id="6a54dc55"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "100px 20px" }}>
            
            {/* Main Heading */}
            <div
              className="elementor-element elementor-element-2e30534f elementor-widget elementor-widget-heading"
              data-id="2e30534f"
              data-element_type="widget"
              data-widget_type="heading.default"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <div className="elementor-widget-container">
                <h2
                  className="elementor-heading-title elementor-size-default"
                  style={{
                    color: "#ffffff",
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: "31px",
                    fontWeight: "600",
                    lineHeight: "1.16em"
                  }}
                >
                  If you have been facing any infertility problem, then <br />
                  consult our fertility specialist.
                </h2>
              </div>
            </div>

            {/* Form Container (Matches Production 1040px Width Container) */}
            <div
              className="elementor-element elementor-element-0c61adb elementor-widget elementor-widget-wpforms"
              data-id="0c61adb"
              data-element_type="widget"
              data-widget_type="wpforms.default"
              style={{ width: "100%" }}
            >
              <div className="elementor-widget-container">
                <div className="wpforms-container" id="wpforms-container-6155">
                  <form
                    id="wpforms-form-6155"
                    className="wpforms-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="wpforms-field-container">
                      
                      {/* Name Fields (2 Columns) */}
                      <div className="wpforms-field wpforms-field-name" style={{ marginBottom: "18px" }}>
                        <label className="wpforms-field-label" style={{ color: "#ffffff", fontSize: "15px", marginBottom: "6px", display: "block", fontWeight: "600" }}>
                          Name <span className="wpforms-required-label" style={{ color: "#ff8080" }}>*</span>
                        </label>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <div style={{ flex: 1 }}>
                            <input
                              type="text"
                              id="wpforms-6155-field_2"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              style={{
                                width: "100%",
                                padding: "10px 14px",
                                fontSize: "15px",
                                borderRadius: "4px",
                                border: "1px solid #ffffff",
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                color: "#333333",
                                outline: "none",
                                boxSizing: "border-box"
                              }}
                            />
                            <label htmlFor="wpforms-6155-field_2" style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", marginTop: "4px", display: "block" }}>
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
                              style={{
                                width: "100%",
                                padding: "10px 14px",
                                fontSize: "15px",
                                borderRadius: "4px",
                                border: "1px solid #ffffff",
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                color: "#333333",
                                outline: "none",
                                boxSizing: "border-box"
                              }}
                            />
                            <label htmlFor="wpforms-6155-field_2-last" style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "12px", marginTop: "4px", display: "block" }}>
                              Last
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="wpforms-field wpforms-field-email" style={{ marginBottom: "18px" }}>
                        <label className="wpforms-field-label" htmlFor="wpforms-6155-field_3" style={{ color: "#ffffff", fontSize: "15px", marginBottom: "6px", display: "block", fontWeight: "600" }}>
                          Email <span className="wpforms-required-label" style={{ color: "#ff8080" }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="wpforms-6155-field_3"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          spellCheck="false"
                          required
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            fontSize: "15px",
                            borderRadius: "4px",
                            border: "1px solid #ffffff",
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            color: "#333333",
                            outline: "none",
                            boxSizing: "border-box"
                          }}
                        />
                      </div>

                      {/* Dropdown Field */}
                      <div className="wpforms-field wpforms-field-select" style={{ marginBottom: "24px" }}>
                        <label className="wpforms-field-label" htmlFor="wpforms-6155-field_1" style={{ color: "#ffffff", fontSize: "15px", marginBottom: "6px", display: "block", fontWeight: "600" }}>
                          Treatment For
                        </label>
                        <select
                          id="wpforms-6155-field_1"
                          name="treatment"
                          value={formData.treatment}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            fontSize: "15px",
                            borderRadius: "4px",
                            border: "1px solid #ffffff",
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            color: "#333333",
                            outline: "none",
                            boxSizing: "border-box"
                          }}
                        >
                          <option value="Fertility">Fertility</option>
                          <option value="Renal Care">Renal Care</option>
                        </select>
                      </div>

                    </div>

                    {/* Submit Button */}
                    <div className="wpforms-submit-container" style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        name="wpforms[submit]"
                        id="wpforms-submit-6155"
                        disabled={status === "submitting"}
                        style={{
                          backgroundColor: "#f08080",
                          color: "#ffffff",
                          borderRadius: "45px",
                          padding: "12px 40px",
                          fontSize: "16px",
                          cursor: status === "submitting" ? "not-allowed" : "pointer",
                          fontWeight: "700",
                          border: "none",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                          transition: "background-color 0.3s ease"
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
              style={{ textAlign: "center", marginTop: "24px" }}
            >
              <div className="elementor-widget-container">
                <h3
                  className="elementor-heading-title elementor-size-default"
                  style={{
                    color: "#ffffff",
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontSize: "16px",
                    fontWeight: "300"
                  }}
                >
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
