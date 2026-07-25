"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ThreeT.module.css";

export default function ThreeT() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const items = [
    {
      number: "1.",
      title: "Trust",
      text: "At MMR Hospital we believe that it is essential for both patients and their families to have confidence and trust in our institution."
    },
    {
      number: "2.",
      title: "Technology",
      text: "Utilizing the latest technology which can greatly enhance patient care, streamline operations, improve efficiency, and ensure better outcomes."
    },
    {
      number: "3.",
      title: "Treatment",
      text: "Our Commitment towards medical expertise, compassionate care and a patient-centred approach in providing best treatment."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.threeTSection} ${isVisible ? styles.threeTVisible : ""}`}
    >
      <div className={styles.threeTContainer}>
        {/* Header */}
        <div className={styles.threeTHeader}>
          <span className={styles.threeTTitle}>3T</span>
          <h2 className={styles.threeTSubtitle}>
            Trust – Technology – Treatment
          </h2>
          <div className={styles.threeTDivider}>
            <span className={styles.threeTDividerLine} />
          </div>
        </div>

        {/* 3-column Cards Grid */}
        <div className={styles.threeTGrid}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={styles.threeTCard}
              style={{
                transitionDelay: `${idx * 150}ms`
              }}
            >
              <span className={styles.threeTNumber}>{item.number}</span>
              <div className={styles.threeTContent}>
                <h4 className={styles.threeTCardTitle}>{item.title}</h4>
                <p className={styles.threeTCardText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
