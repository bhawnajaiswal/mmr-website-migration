"use client";

import styles from "./HelpCTA.module.css";

export default function HelpCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaOverlay} />
      
      {/* Top Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={styles.shapeFill} d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Bottom Tilt Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={styles.shapeFill} d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.ctaContainer}>
        <h3 className={styles.ctaTitle}>
          We are here to help.
        </h3>
      </div>
    </section>
  );
}
