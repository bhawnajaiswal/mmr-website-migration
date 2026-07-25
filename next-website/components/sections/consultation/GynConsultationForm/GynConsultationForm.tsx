"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./GynConsultationForm.module.css";

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

    // Backend submission architecture placeholder remains intact
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer} ref={containerRef}>
        <div className={`${styles.formRow} ${styles.formScrollArea} ${isVisible ? styles.formVisible : ""}`}>
          
          {/* Left Column: Info & Contacts */}
          <div className={styles.textBlock}>
            <p>
              If you&apos;re experiencing a gynecological problem or have concerns about your reproductive health, schedule fill up the form and we will be happy to assist you.
            </p>
            <p>
              Before your appointment, make a list of questions or concerns you want to discuss. It can be helpful to keep a symptom diary, noting the date, symptoms, and any patterns you&apos;ve observed.
            </p>
            <p>
              Depending on your symptoms and the doctor&apos;s assessment, we will recommend diagnostic tests such as blood tests, ultrasound, Pap smear, or others.
            </p>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactGroupText}>
                  <span className={styles.contactIcon}>
                    <img
                      src="/wp-content/uploads/2023/11/call-2.svg"
                      alt="Call Icon"
                      width={32}
                      height={32}
                    />
                  </span>
                  <a href="tel:+919244122040">+91 9244122040</a>
                  <span className={styles.separator}>/</span>
                  <a href="tel:+919244122041">41</a>
                  <span className={styles.separator}>/</span>
                  <a href="tel:+919244122048">48</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <a href="mailto:info@mmrhospitals.com">
                  <span className={styles.contactIcon}>
                    <img
                      src="/wp-content/uploads/2023/11/email-1.svg"
                      alt="Email Icon"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span>info@mmrhospitals.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Appointment Form */}
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>
              Schedule an Appointment for gynecology problems
            </h2>

            <form onSubmit={handleSubmit} className={styles.fieldsGrid}>
              
              {/* Field 1: Consulting for */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <div className={styles.selectWrapper}>
                  <select
                    name="consultingFor"
                    className={`${styles.selectControl} ${
                      errors.consultingFor ? styles.errorField : ""
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
                  <span className={styles.errorMessage}>{errors.consultingFor}</span>
                )}
              </div>

              {/* Field 2: Email */}
              <div className={styles.fieldGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className={`${styles.inputControl} ${
                    errors.email ? styles.errorField : ""
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              {/* Field 3: Mobile No */}
              <div className={styles.fieldGroup}>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No.*"
                  className={`${styles.inputControl} ${
                    errors.mobile ? styles.errorField : ""
                  }`}
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                {errors.mobile && (
                  <span className={styles.errorMessage}>{errors.mobile}</span>
                )}
              </div>

              {/* Field 4: Date */}
              <div className={styles.fieldGroup}>
                <input
                  type="date"
                  name="date"
                  placeholder="DD-MM-YYYY *"
                  className={`${styles.inputControl} ${
                    errors.date ? styles.errorField : ""
                  }`}
                  value={formData.date}
                  onChange={handleInputChange}
                />
                {errors.date && (
                  <span className={styles.errorMessage}>{errors.date}</span>
                )}
              </div>

              {/* Field 5: Time */}
              <div className={styles.fieldGroup}>
                <input
                  type="time"
                  name="time"
                  placeholder="Time *"
                  className={`${styles.inputControl} ${
                    errors.time ? styles.errorField : ""
                  }`}
                  value={formData.time}
                  onChange={handleInputChange}
                />
                {errors.time && (
                  <span className={styles.errorMessage}>{errors.time}</span>
                )}
              </div>

              {/* Field 6: Message */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Query / Message"
                  className={styles.textareaControl}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              {/* Field 7: Google ReCAPTCHA badge placeholder */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <div className={styles.captchaContainer}>
                  <input
                    type="checkbox"
                    id="recaptcha-placeholder"
                    className={styles.captchaCheckbox}
                    required
                  />
                  <label htmlFor="recaptcha-placeholder" className={styles.captchaLabel}>
                    I am not a robot
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
