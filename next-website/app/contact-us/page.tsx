"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./Contact.module.css";

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

    // Form logic is preserved
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
              <h1>Contact Us</h1>
            </div>
            <p className={styles.heroSubtitleText}>
              We&apos;re here to answer your questions, help you book an appointment, and guide you to the right specialist.
            </p>
            <span className={styles.heroSubtitle}>+91 9244122040</span>
            <Link href="/consultation" className={styles.bookButton} style={{ marginTop: "12px" }}>
              Book Appointment
            </Link>
          </div>
        </section>

        {/* Section 2: Info Block (Single Premium Card) */}
        <section className={styles.infoSection}>
          <div className={styles.infoContainerSingle}>
            
            <ScrollRevealSection>
              <div className={styles.infoCardSingle}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIcon}>
                    <i className="fas fa-info-circle" />
                  </div>
                  <h3 className={styles.infoCardTitle}>Contact Information</h3>
                </div>
                
                <div className={styles.infoCardBody}>
                  {/* Hospital Details */}
                  <div className={styles.hospitalDetails}>
                    <h4 className={styles.hospitalName}>MMR Hospital &amp; IVF Center</h4>
                    <p className={styles.hospitalCompany}>Matruchhaya Medicare &amp; Research Pvt. Ltd.</p>
                  </div>
                  
                  {/* Comfortable Spacing Separator */}
                  <div className={styles.detailsSpacer} />
                  
                  {/* Address and Contacts */}
                  <ul className={styles.infoList}>
                    <li className={styles.infoListItem}>
                      <i className="fas fa-map-marker-alt" />
                      <span>Plot No. C, 132-133, Sector-9, Kamal Vihar, Dunda, Raipur, Chhattisgarh 492004</span>
                    </li>
                    <li className={styles.infoListItem}>
                      <i className="fas fa-phone-alt" />
                      <a href="tel:+919244122040">+91 9244122040</a>
                    </li>
                    <li className={styles.infoListItem}>
                      <i className="fas fa-envelope" />
                      <a href="mailto:info@mmrhospitals.com">info@mmrhospitals.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollRevealSection>

          </div>
        </section>

        {/* Section 3: Visit Our Hospital / Map Section */}
        <section className={styles.visitSection}>
          {/* Decoupled Scoped Top Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
              <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
            </svg>
          </div>

          {/* Decoupled Scoped Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
            </svg>
          </div>

          <div className={styles.visitContainer}>
            {/* Left Column: Wording */}
            <ScrollRevealSection className={styles.visitLeft}>
              <h2 className={styles.visitTitle}>Visit our Hospital</h2>
              <p className={styles.visitText}>
                Have a question or need assistance? Don&apos;t hesitate to contact us via phone, email, or by filling out the form below. Our dedicated staff is committed to providing you with prompt and personalized support. We provide you the best gynecologist in Raipur.
              </p>
            </ScrollRevealSection>

            {/* Right Column: Google Maps Embed */}
            <ScrollRevealSection className={styles.visitRight}>
              <iframe
                title="MMR Hospital and IVF Center Raipur Map"
                src="https://maps.google.com/maps?q=MMR%20Hospital%20and%20IVF%20Center,%20Raipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className={styles.mapEmbed}
              />
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 4: Send Us a Message Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <ScrollRevealSection>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    
                    {/* Field 1: Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="form-field-email"
                        className={`${styles.formInput} ${errors.name ? styles.inputError : ""}`}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <span className={styles.errorMessage}>{errors.name}</span>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="form-field-6850d19"
                        className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
                        placeholder="someone@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className={styles.errorMessage}>{errors.email}</span>
                      )}
                    </div>

                    {/* Field 3: Website */}
                    <div>
                      <input
                        type="url"
                        name="website"
                        id="form-field-f9f57ad"
                        className={styles.formInput}
                        placeholder="http://yourwebsite.com"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Field 4: Message */}
                    <div>
                      <textarea
                        className={styles.formTextarea}
                        name="message"
                        id="form-field-da6d553"
                        rows={4}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className={styles.submitButton}
                      >
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 5: Social / Stay Connected */}
        <section className={styles.socialSection}>
          <div className={styles.socialContainer}>
            <ScrollRevealSection className={styles.socialTitle}>
              <h2>Stay Connected.</h2>
            </ScrollRevealSection>
            <ScrollRevealSection className={styles.socialDesc}>
              <h3>
                We&apos;d love to hear from you on our social network.<br />Use the following social mediums and give your valuable suggestions.
              </h3>
            </ScrollRevealSection>

            <ScrollRevealSection className={styles.socialList}>
              <a
                className={styles.socialIconLink}
                href="https://www.facebook.com/profile.php?id=61553532623603&amp;mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a
                className={styles.socialIconLink}
                href="https://twitter.com/MMRHospital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>

              {/* Preserving production G+ to Pinterest mapping quirk */}
              <a
                className={styles.socialIconLink}
                href="https://in.pinterest.com/mmrhospitalraipur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest" />
              </a>

              <a
                className={styles.socialIconLink}
                href="https://www.instagram.com/mmrhospitalandivfcenter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </ScrollRevealSection>
          </div>
        </section>

      </main>
    </div>
  );
}
