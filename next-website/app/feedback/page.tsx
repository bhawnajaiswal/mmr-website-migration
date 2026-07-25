"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Feedback.module.css";

// Helper component for Intersection Observer Scroll Reveal
function ScrollRevealSection({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${styles.scrollReveal} ${isVisible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

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
    <div className={styles.container}>
      <main className="main-content">
        
        {/* Section 1: Hero Banner */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroDivider} />
            <div className={styles.heroTitle}>
              <h1>
                Feedback
              </h1>
            </div>
            <span className={styles.heroSubtitle}>Your feedback valuable for us..........</span>
          </div>
        </section>

        {/* Section 2: Form Description Section */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introTitle}>
              <h2>Your feedback is valuable.</h2>
            </div>
            <p className={styles.introText}>
              If you like our service, please take a moment in giving us your valuable feedback.
            </p>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Feedback Form */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <ScrollRevealSection>
              <div className={styles.formCard}>
                {submitSuccess ? (
                  <div className={styles.successMessage}>
                    <i className="fas fa-check-circle" style={{ display: "block", fontSize: "2.5rem", color: "#f08080", marginBottom: "16px" }} />
                    <p>Thanks for your valuable feedback!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    
                    {/* Field 1: Name */}
                    <div className={styles.formField}>
                      <label className={styles.formLabel} htmlFor="wpforms-6714-field_0">
                        Name <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        type="text"
                        id="wpforms-6714-field_0"
                        className={`${styles.formInput} ${errors.name ? styles.inputError : ""}`}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <span className={styles.errorMessage}>{errors.name}</span>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div className={styles.formField}>
                      <label className={styles.formLabel} htmlFor="wpforms-6714-field_1">
                        Email <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        type="email"
                        id="wpforms-6714-field_1"
                        className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className={styles.errorMessage}>{errors.email}</span>
                      )}
                    </div>

                    {/* Field 3: Radio choices */}
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        Which department do you have a suggestion for? <span className={styles.requiredStar}>*</span>
                      </label>
                      <ul className={styles.radioList}>
                        <li className={styles.radioItem}>
                          <input
                            type="radio"
                            id="wpforms-6714-field_3_1"
                            name="department"
                            value="Fertiity Treatment"
                            checked={formData.department === "Fertiity Treatment"}
                            onChange={handleInputChange}
                            className={styles.radioInput}
                          />
                          {/* Preserving production spelling typo: "Fertiity" */}
                          <label htmlFor="wpforms-6714-field_3_1" className={styles.radioLabel}>
                            Fertiity Treatment
                          </label>
                        </li>
                        <li className={styles.radioItem}>
                          <input
                            type="radio"
                            id="wpforms-6714-field_3_2"
                            name="department"
                            value="Kidney Care"
                            checked={formData.department === "Kidney Care"}
                            onChange={handleInputChange}
                            className={styles.radioInput}
                          />
                          <label htmlFor="wpforms-6714-field_3_2" className={styles.radioLabel}>
                            Kidney Care
                          </label>
                        </li>
                      </ul>
                      {errors.department && (
                        <span className={styles.errorMessage}>{errors.department}</span>
                      )}
                    </div>

                    {/* Field 4: Feedback Text */}
                    <div className={styles.formField}>
                      <label className={styles.formLabel} htmlFor="wpforms-6714-field_2">
                        Feedback <span className={styles.requiredStar}>*</span>
                      </label>
                      <textarea
                        id="wpforms-6714-field_2"
                        className={`${styles.formTextarea} ${errors.feedback ? styles.inputError : ""}`}
                        name="feedback"
                        placeholder="Write your suggestion or feedback here"
                        rows={4}
                        value={formData.feedback}
                        onChange={handleInputChange}
                      />
                      {errors.feedback && (
                        <span className={styles.errorMessage}>{errors.feedback}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className={styles.submitContainer}>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </ScrollRevealSection>
          </div>
        </section>

      </main>
    </div>
  );
}
