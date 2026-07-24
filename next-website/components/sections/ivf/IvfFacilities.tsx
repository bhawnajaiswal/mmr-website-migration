"use client";

import styles from "@/app/ivf/Ivf.module.css";

export default function IvfFacilities() {
  const facilities = [
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital.png",
      title: "Advanced Modular Operation Theatre",
      desc: "We have the best modular operation theatre's with all facilities."
    },
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-1.png",
      title: "Embryology Lab",
      desc: "We provide best IVF, ICSI & IUI treatments."
    },
    {
      imgSrc: "/wp-content/uploads/2024/08/MMR-Hospital-2.png",
      title: "Pathology",
      desc: "We have pathology lab with our best lab technician."
    }
  ];

  return (
    <section className={styles.facilitiesSection}>
      
      {/* Decoupled Scoped Top Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      {/* Decoupled Scoped Bottom Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className={styles.facilitiesContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>Special Facilities in our Hospital</h2>
          </div>
          <div className={styles.sectionDivider} />
        </div>

        {/* 3 Facility Cards Grid */}
        <div className={styles.facilitiesGrid}>
          {facilities.map((fac, idx) => (
            <div key={idx} className={styles.facilityCard}>
              <div className={styles.facilityImageWrapper}>
                <img
                  src={fac.imgSrc}
                  alt={fac.title}
                  className={styles.facilityImage}
                />
              </div>
              <div className={styles.facilityCardContent}>
                <h3 className={styles.facilityCardTitle}>{fac.title}</h3>
                <p className={styles.facilityCardDesc}>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
