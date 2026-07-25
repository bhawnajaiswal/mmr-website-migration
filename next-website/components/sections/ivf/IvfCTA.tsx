"use client";

import Link from "next/link";
import styles from "@/app/ivf/Ivf.module.css";

export default function IvfCTA() {
  return (
    <section
      className={styles.ctaSection}
      style={{
        backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
      }}
    >
      <div className={styles.ctaOverlay} />

      <div className={styles.ctaContainer}>
        {/* Title */}
        <div className={styles.ctaTitle}>
          <h2>Make your Parenthood dream come true.</h2>
        </div>

        {/* Description */}
        <p className={styles.ctaDesc}>
          Thank you for considering MMR Hospital &amp; IVF Center for your healthcare needs. We look forward to serving you and helping you achieve your health and family-building goals. If you have any questions or would like to schedule a consultation, please don&apos;t hesitate to contact us.
        </p>

        {/* Action Button */}
        <Link className={styles.ctaButton} href="/consultation/">
          BOOK Consultation
        </Link>
      </div>
    </section>
  );
}
