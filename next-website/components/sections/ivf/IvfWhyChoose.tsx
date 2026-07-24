"use client";

import styles from "@/app/ivf/Ivf.module.css";

export default function IvfWhyChoose() {
  const cards = [
    {
      icon: "fas fa-user-md",
      title: "Experienced Team",
      desc: "Our fertility specialists have extensive experience and expertise in reproductive medicine, ensuring that you receive the highest standard of care."
    },
    {
      icon: "fas fa-notes-medical",
      title: "Personalized Treatment Plans",
      desc: "We understand that every patient is unique, and we tailor our treatment approach to address your specific needs and circumstances."
    },
    {
      icon: "fas fa-microscope",
      title: "Advanced Technology",
      desc: "Our state-of-the-art laboratory is equipped with the latest technology and equipment to optimize embryo development and maximize your chances of success."
    },
    {
      icon: "fas fa-heart",
      title: "Supportive Environment",
      desc: "We are committed to providing compassionate and supportive care throughout your IVF journey, offering emotional support and guidance at every step."
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyContainer}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>Why Choose MMR Hospital &amp; IVF Center for IVF?</h2>
          </div>
          <div className={styles.sectionDivider} />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className={styles.whyGrid}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <i className={card.icon} />
              </div>
              <h3 className={styles.whyCardTitle}>{card.title}</h3>
              <p className={styles.whyCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
