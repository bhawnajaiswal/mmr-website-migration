"use client";

import Link from "next/link";
import styles from "@/app/TreatmentPage.module.css";

export default function RenalHero() {
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
          <h1>Renal Care</h1>
        </div>
        <Link className={styles.heroButton} href="/consultation-for-renal-problems">
          <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "10px" }} />
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
