"use client";

import { useState, useEffect, useRef } from "react";
import heroStyles from "@/components/sections/consultation/GynConsultationHero/GynConsultationHero.module.css";
import formStyles from "@/components/sections/consultation/GynConsultationForm/GynConsultationForm.module.css";

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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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

    // Backend submission architecture placeholder remains intact
  };

  return (
    <main className="main-content">
      
      {/* Section 1: Hero Banner */}
          <section className={heroStyles.heroSection}>
            <div className={heroStyles.heroContainer}>
              <div className={heroStyles.heroRow}>
                
                {/* Left Column: Heading */}
                <div className={heroStyles.heroTextCol}>
                  <h1 className={heroStyles.heroTitle}>
                    Consultation for Renal Problems
                  </h1>
                  <span className={heroStyles.heroAccentLine} />
                </div>

                {/* Right Column: Hero Image */}
                <div className={heroStyles.heroImageCol}>
                  <div className={heroStyles.heroImageWrapper}>
                    <img
                      src="/wp-content/uploads/2024/03/Gynecology-Clinic-Instagram-Post-1.jpg"
                      className={heroStyles.heroImage}
                      alt="Gynecology Clinic Post"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section 3: Consultation Content & Form */}
          <section
            className={formStyles.formSection}
            id="Appointment"
          >
            <div className={formStyles.formContainer} ref={containerRef}>
              <div className={`${formStyles.formRow} ${formStyles.formScrollArea} ${isVisible ? formStyles.formVisible : ""}`}>
                
                {/* Left Column: Info & Contacts */}
                <div className={formStyles.textBlock}>
                  <p>
                    If you&apos;re experiencing a renal problem or have concerns about your reproductive health, schedule fill up the form and we will be happy to assist you.
                  </p>
                  <p>
                    At MMR Hospital, we prioritize your kidney health. If you have concerns about renal problems, take the first step toward comprehensive care by filling out our Renal Problems Consultation Form. Our expert nephrologists are committed to providing personalized solutions tailored to your specific needs.
                  </p>

                  <ul className={formStyles.contactList}>
                    <li className={formStyles.contactItem}>
                      <div className={formStyles.contactGroupText}>
                        <span className={formStyles.contactIcon}>
                          <img
                            src="/wp-content/uploads/2023/11/call-2.svg"
                            alt="Call Icon"
                            width={32}
                            height={32}
                          />
                        </span>
                        <a href="tel:+91 9244122040">+91 9244122040</a>
                        <span className={formStyles.separator}>/</span>
                        <a href="tel:+919244122041">41</a>
                        <span className={formStyles.separator}>/</span>
                        <a href="tel:+919244122048">48</a>
                      </div>
                    </li>
                    <li className={formStyles.contactItem}>
                      <a href="mailto:info@matruchhayaclinic.com">
                        <span className={formStyles.contactIcon}>
                          <img
                            src="/wp-content/uploads/2023/11/email-1.svg"
                            alt="Email Icon"
                            width={32}
                            height={32}
                          />
                        </span>
                        <span>info@matruchhayaclinic.com</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Appointment Form */}
                <div className={formStyles.formWrapper}>
                  <h2 className={formStyles.formTitle}>
                    Schedule an Appointment for Renal Problems
                  </h2>

                  <form onSubmit={handleSubmit} className={formStyles.fieldsGrid}>
                    
                    {/* Field 1: Name */}
                    <div className={`${formStyles.fieldGroup} ${formStyles.fullWidth}`}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        className={`${formStyles.inputControl} ${
                          errors.name ? formStyles.errorField : ""
                        }`}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <span className={formStyles.errorMessage}>{errors.name}</span>
                      )}
                    </div>

                    {/* Field 2: Consulting for select */}
                    <div className={`${formStyles.fieldGroup} ${formStyles.fullWidth}`}>
                      <div className={formStyles.selectWrapper}>
                        <select
                          name="consultingFor"
                          className={`${formStyles.selectControl} ${
                            errors.consultingFor ? formStyles.errorField : ""
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
                        <span className={formStyles.errorMessage}>{errors.consultingFor}</span>
                      )}
                    </div>

                    {/* Field 3: Email */}
                    <div className={formStyles.fieldGroup}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        className={`${formStyles.inputControl} ${
                          errors.email ? formStyles.errorField : ""
                        }`}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className={formStyles.errorMessage}>{errors.email}</span>
                      )}
                    </div>

                    {/* Field 4: Mobile No. */}
                    <div className={formStyles.fieldGroup}>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile No.*"
                        className={`${formStyles.inputControl} ${
                          errors.mobile ? formStyles.errorField : ""
                        }`}
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                      {errors.mobile && (
                        <span className={formStyles.errorMessage}>{errors.mobile}</span>
                      )}
                    </div>

                    {/* Field 5: Date */}
                    <div className={formStyles.fieldGroup}>
                      <input
                        type="date"
                        name="date"
                        placeholder="DD-MM-YYYY *"
                        className={`${formStyles.inputControl} ${
                          errors.date ? formStyles.errorField : ""
                        }`}
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                      {errors.date && (
                        <span className={formStyles.errorMessage}>{errors.date}</span>
                      )}
                    </div>

                    {/* Field 6: Time */}
                    <div className={formStyles.fieldGroup}>
                      <input
                        type="time"
                        name="time"
                        placeholder="Time *"
                        className={`${formStyles.inputControl} ${
                          errors.time ? formStyles.errorField : ""
                        }`}
                        value={formData.time}
                        onChange={handleInputChange}
                      />
                      {errors.time && (
                        <span className={formStyles.errorMessage}>{errors.time}</span>
                      )}
                    </div>

                    {/* Field 7: Query / Message */}
                    <div className={`${formStyles.fieldGroup} ${formStyles.fullWidth}`}>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Query / Message"
                        className={formStyles.textareaControl}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Field 8: Google ReCAPTCHA stub */}
                    <div className={`${formStyles.fieldGroup} ${formStyles.fullWidth}`}>
                      <div className={formStyles.captchaContainer}>
                        <input
                          type="checkbox"
                          id="recaptcha-placeholder"
                          className={formStyles.captchaCheckbox}
                          required
                        />
                        <label htmlFor="recaptcha-placeholder" className={formStyles.captchaLabel}>
                          I am not a robot
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className={`${formStyles.fieldGroup} ${formStyles.fullWidth}`}>
                      <button type="submit" className={formStyles.submitBtn}>
                        Submit
                      </button>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          </section>
      </main>
    );
  }
