"use client";

import Link from "next/link";
import styles from "@/app/ivf/Ivf.module.css";

export default function IvfHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      
      {/* Decoupled Scoped Bottom Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.heroContent}>
        {/* Coral Divider */}
        <div className={styles.heroDivider} />
        
        {/* Title & Subtitle */}
        <div className={styles.heroTitle}>
          <h1>
            IVF
            <span>( In Vitro Fertilization )</span>
          </h1>
        </div>

        {/* CTA Button */}
        <Link className={styles.heroButton} href="/consultation/">
          <i aria-hidden="true" className="fas fa-envelope-open" />
          BOOK AN APPOINTMENT
        </Link>
      </div>
    </section>
  );
}
