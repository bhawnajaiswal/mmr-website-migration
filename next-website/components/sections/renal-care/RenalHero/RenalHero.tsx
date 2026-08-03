"use client";

import Link from "next/link";
import styles from "./RenalHero.module.css";

export default function RenalHero() {
  return (
    <section className={styles.heroSection}>
      {/* Abstract Glowing Kidney Graphic Background */}
      <img 
        src="/images/glowing_kidney.jpg" 
        alt="Kidney Care background graphic" 
        className={styles.kidneyBgGraphic}
      />

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
              <span className={styles.underlineText}>Kidney</span> Care
            </h1>

            {/* Subheading */}
            <p className={styles.heroSubtitle}>
              Advanced care. Compassionate approach.<br />Better outcomes.
            </p>

            {/* 4 Feature Grid Bullets */}
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-sync-alt" />
                </div>
                <span>Kidney Transplant</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-tint" />
                </div>
                <span>Urology Treatments</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-filter" />
                </div>
                <span>Dialysis &amp; CRRT</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-stethoscope" />
                </div>
                <span>Nephrology Care</span>
              </div>
            </div>

            {/* Book Appointment CTA Button */}
            <Link className={styles.appointmentBtn} href="/consultation-for-renal-problems">
              <i className="far fa-calendar-check" />
              Book an Appointment
            </Link>
          </div>

          {/* Under-button trust indicators */}
          <div className={styles.bottomTrustRow}>
            <div className={styles.trustItem}>
              <i className={`fas fa-check-circle ${styles.trustIcon}`} style={{ color: "#3b82f6" }} />
              <span>Experienced Nephrologists</span>
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

        {/* Right Column: Doctor photo and overlapping details card */}
        <div className={styles.rightColumn}>
          <div className={styles.doctorImageWrapper}>
            <img 
              src="/wp-content/uploads/2024/04/renalCare_Hero.png" 
              alt="Dr. Prawash Chowdhary" 
              className={styles.doctorImage}
            />

            {/* Overlapping details card (Glassmorphism design) */}
            {/* <div className={styles.doctorCard}>
              {/* <div className={styles.doctorBadge}>
                <i className="fas fa-user-md" style={{ marginRight: "6px" }} />
                <span>Meet Our Kidney Specialist</span>
              </div>
              <h2 className={styles.doctorName}>Dr. Prawash Chowdhary</h2>
              <h3 className={styles.doctorTitle}>Director - Nephrology</h3>
              <p className={styles.doctorCredentials}>
                MBBS, MD (Nephrology), FASN (USA), FRCP (London), Ex. Senior Consultant
              </p> */}

              {/* Doctor Statistics Bottom Grid */}
              {/* <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="far fa-clock" style={{ color: "#6b21a8" }} />
                  </div>
                  <div className={styles.statText}>
                    <span className={styles.statNumber}>17+</span>
                    <span className={styles.statLabel}>Years Experience</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-user-friends" style={{ color: "#3b82f6" }} />
                  </div>
                  <div className={styles.statText}>
                    <span className={styles.statNumber}>5000+</span>
                    <span className={styles.statLabel}>Happy Patients</span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-award" style={{ color: "#eab308" }} />
                  </div>
                  <div className={styles.statText}>
                    <span className={styles.statNumber}>Expert</span>
                    <span className={styles.statLabel}>Kidney Disorders</span>
                  </div>
                </div>
              </div> 
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}