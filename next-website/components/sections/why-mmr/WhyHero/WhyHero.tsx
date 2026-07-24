"use client";

import styles from "./WhyHero.module.css";

export default function WhyHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background overlay */}
      <div className={styles.heroOverlay} />
      
      {/* Bottom Tilt Divider */}
      <div className={styles.shapeBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.heroContainer}>
        {/* Title */}
        <h1
          className={`${styles.heroTitle} ${styles.animateFadeUp}`}
          style={{ animationDelay: "100ms" }}
        >
          MMR Hospital &amp; IVF Center
        </h1>

        {/* Divider Line */}
        <div
          className={`${styles.heroDivider} ${styles.animateFadeUp}`}
          style={{ animationDelay: "200ms" }}
        >
          <span
            className={styles.heroDividerLine}
            style={{ animationDelay: "200ms" }}
          />
        </div>

        {/* Subheading Question */}
        <h2
          className={`${styles.heroQuestion} ${styles.animateFadeUp}`}
          style={{ animationDelay: "300ms" }}
        >
          Why Matruchhaya Hosptial ?
        </h2>

        {/* Subtitle Description */}
        <p
          className={`${styles.heroDesc} ${styles.animateFadeUp}`}
          style={{ animationDelay: "400ms" }}
        >
          At MMR Hospital we believe in 3T – Trust, Technology &amp; Treatment which is essential for both patients and their families to have confidence and trust in our institution.
        </p>
      </div>
    </section>
  );
}
