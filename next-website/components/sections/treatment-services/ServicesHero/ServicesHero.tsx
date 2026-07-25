"use client";

import styles from "@/app/TreatmentPage.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      
      {/* Bottom Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className={styles.shapeDividerSvg}
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroDivider} />
        <div className={styles.heroTitle}>
          <h1>Our Services</h1>
        </div>
      </div>
    </section>
  );
}
