"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/app/Home.module.css";

export default function Consultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    treatment: "Fertility"
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      ref={sectionRef}
      className={`${styles.consultSection} ${isVisible ? styles.consultSectionVisible : ""}`}
    >
      {/* Background image & gradient overlay wrapper */}
      <div className={styles.consultBgImage} />
      <div className={styles.consultOverlay} />
      
      {/* Top Pyramid shape divider (consistent with legacy layout transition) */}
      <div className={styles.consultShapeDividerTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.consultShapeDividerSvg}>
          <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom Pyramid shape divider */}
      <div className={styles.consultShapeDividerBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.consultShapeDividerSvg}>
          <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" fill="#ffffff" />
        </svg>
      </div>

      <div className={styles.consultContainer}>
        {/* Left Side: Consultation Heading */}
        <div className={styles.consultTextColumn}>
          <h2 className={styles.consultTitle}>
            If you have been facing any infertility problem, then consult our fertility specialist.
          </h2>
          <div className={styles.consultTitleDivider}>
            <span className={styles.consultTitleDividerLine} />
          </div>
          <p className={styles.consultSupportText}>
            Our experienced team of specialists is dedicated to providing personalized care, advanced treatment methodologies, and supportive counseling every step of your journey.
          </p>
        </div>

        {/* Right Side: Form Card */}
        <div className={styles.consultFormColumn}>
          <div className={styles.consultFormCard}>
            <form onSubmit={handleSubmit} className={styles.consultForm}>
              
              {/* Name Fields (First & Last side-by-side) */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Name <span className={styles.formRequired}>*</span>
                </label>
                <div className={styles.formRow}>
                  <div className={styles.formCol}>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formCol}>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                      className={styles.formInput}
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Email <span className={styles.formRequired}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  spellCheck="false"
                  required
                  placeholder="name@example.com"
                  className={styles.formInput}
                />
              </div>

              {/* Dropdown Select Field */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Treatment For</label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="Fertility">Fertility</option>
                  <option value="Kidney Care">Kidney Care</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className={styles.formSubmitWrapper}>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={styles.formSubmitBtn}
                >
                  {status === "submitting" ? "Sending..." : "Book Appointment"}
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className={styles.formSuccessMsg}>
                  Your message has been sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className={styles.formErrorMsg}>
                  An error occurred. Please try again.
                </div>
              )}
            </form>

            {/* Terms and Conditions */}
            <p className={styles.formTerms}>Terms &amp; conditions are apply</p>
          </div>
        </div>
      </div>
    </section>
  );
}
