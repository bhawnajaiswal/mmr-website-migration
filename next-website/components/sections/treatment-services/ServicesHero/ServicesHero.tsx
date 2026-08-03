"use client";

import Link from "next/link";
import styles from "@/components/sections/renal-care/RenalHero/RenalHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      {/* Abstract Glowing Kidney/Medical graphic background can be omitted or kept if neutral. Let's keep it clean since it's IVF Care */}
      
      {/* Floating Plus Decors */}
      <div className={`${styles.floatingPlus} ${styles.plus1}`}>+</div>
      <div className={`${styles.floatingPlus} ${styles.plus2}`}>+</div>
      <div className={`${styles.floatingPlus} ${styles.plus3}`}>+</div>

      {/* Wave bottom transition divider */}
      <div className={styles.waveDivider}>
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className={styles.waveDividerSvg}
        >
          <path 
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
            fill="#ffffff" 
          />
        </svg>
      </div>

      <div className={styles.heroContainer}>
        {/* Left Column: Heading, description, feature bullets, booking CTA */}
        <div className={styles.leftColumn}>
          <div className={styles.contentGroup}>
            {/* Top emergency badge */}
            <div className={styles.emergencyBadge}>
              <i className="far fa-clock" />
              <span>24/7 Emergency &amp; Ambulance Service</span>
            </div>

            {/* Main title */}
            <h1 className={styles.heroTitle}>
              <span className={styles.underlineText}>IVF</span> Care
            </h1>

            {/* Subheading */}
            <p className={styles.heroSubtitle}>
              Advanced fertility care. Compassionate approach.<br />Better outcomes.
            </p>

            {/* 4 Feature Grid Bullets */}
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-baby" />
                </div>
                <span>IVF Treatment</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-heart" />
                </div>
                <span>IUI Treatment</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-notes-medical" />
                </div>
                <span>Fertility Assessment</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-stethoscope" />
                </div>
                <span>Laparoscopic Surgery</span>
              </div>
            </div>

            {/* Book Appointment CTA Button */}
            <Link className={styles.appointmentBtn} href="/consultation">
              <i className="far fa-calendar-check" />
              Book an Appointment
            </Link>
          </div>

          {/* Under-button trust indicators */}
          <div className={styles.bottomTrustRow}>
            <div className={styles.trustItem}>
              <i className={`fas fa-check-circle ${styles.trustIcon}`} style={{ color: "#3b82f6" }} />
              <span>Experienced Fertility Specialists</span>
            </div>
            <div className={styles.trustItem}>
              <i className={`fas fa-check-circle ${styles.trustIcon}`} style={{ color: "#3b82f6" }} />
              <span>Advanced Technology</span>
            </div>
            <div className={styles.trustItem}>
              <i className={`fas fa-check-circle ${styles.trustIcon}`} style={{ color: "#3b82f6" }} />
              <span>Personalized Patient Care</span>
            </div>
          </div>
        </div>

        {/* Right Column: Composite single artwork image */}
        <div className={styles.rightColumn}>
          <div className={styles.doctorImageWrapper}>
            <img 
              src="/images/IVF_Hero.png" 
              alt="IVF Treatment and Fertility Care Specialist" 
              className={styles.doctorImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
