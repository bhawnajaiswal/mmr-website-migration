"use client";

import styles from "./GynConsultationHero.module.css";

export default function GynConsultationHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroRow}>
          
          {/* Left Column */}
          <div className={styles.heroTextCol}>
            <h1 className={styles.heroTitle}>
              Consultation for Gynecology Problems
            </h1>
            <span className={styles.heroAccentLine} />
          </div>

          {/* Right Column */}
          <div className={styles.heroImageCol}>
            <div className={styles.heroImageWrapper}>
              <img
                width="768"
                height="768"
                src="/wp-content/uploads/2024/03/Gynecology-Clinic-Instagram-Post.jpg"
                className={styles.heroImage}
                alt="Gynecology Consultation"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
