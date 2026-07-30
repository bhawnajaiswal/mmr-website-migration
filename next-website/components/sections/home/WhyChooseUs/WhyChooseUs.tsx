"use client";

import { useEffect, useState, useRef } from "react";
import WhyChooseCard from "./WhyChooseCard";
import styles from "@/app/Home.module.css";

const ROW_1_CARDS = [
  {
    columnId: "26e1ca76",
    widgetId: "455fd4d1",
    iconClass: "fas fa-user-md",
    title: "Experienced Doctor's",
    description: "We have the best team of experienced doctors who are capable of understanding your problems and providing successful treatment."
  },
  {
    columnId: "609d0f40",
    widgetId: "35c776a6",
    iconClass: "fas fa-laptop-medical",
    title: "Online Consultation",
    description: "If you are not able to visit us, you can consult our experts from the comfort of your home with the help of our online consultation facility."
  },
  {
    columnId: "fabe02e",
    widgetId: "bfb4155",
    iconClass: "fas fa-ambulance",
    title: "Emergency Pickup",
    description: "At MMR Hospital & IVF Center, we understand that emergencies can happen at any time. That's why we offer a dedicated Emergency Pickup Service to ensure timely transportation for patients in need of urgent medical care."
  }
];

const ROW_2_CARDS = [
  {
    columnId: "6905d309",
    widgetId: "161c5d63",
    iconClass: "fas fa-thumbs-up",
    title: "Trust",
    description: "At MMR Hospital we believe that it is essential for both patients and their families to have confidence and trust in our institution."
  },
  {
    columnId: "5078c741",
    widgetId: "1c09e062",
    iconClass: "fas fa-microchip",
    title: "Technology",
    description: "Utilizing the latest technology which can greatly enhance patient care, streamline operations, improve efficiency, and ensure better outcomes."
  },
  {
    columnId: "3dbf3dad",
    widgetId: "2af1a90b",
    iconClass: "fas fa-briefcase-medical",
    title: "Treatment",
    description: "Our Commitment towards medical expertise, compassionate care and a patient-centred approach in providing best treatment."
  }
];

export default function WhyChooseUs() {
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

  const allCards = [...ROW_1_CARDS, ...ROW_2_CARDS];

  return (
    <section
      ref={sectionRef}
      className={`${styles.whySection} ${isVisible ? styles.whySectionVisible : ""}`}
    >
      {/* Top Shape Divider */}
      <div className={styles.whyShapeDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.whyShapeDividerSvg}>
          <path d="M0,6V0h1000v100L0,6z" fill="#ffffff" />
        </svg>
      </div>

      <div className={styles.whyContainer}>
        {/* Header Block */}
        <div className={styles.whyHeader}>
          <span className={styles.whySubtitle}>Six reasons we&apos;re the best</span>
          <h2 className={styles.whyTitle}>Why Choose Us</h2>
          <div className={styles.whyDivider}>
            <span className={styles.whyDividerLine} />
          </div>
        </div>

        {/* Card Grid Block */}
        <div className={styles.whyGrid}>
          {allCards.map((card, index) => (
            <WhyChooseCard
              key={card.widgetId}
              iconClass={card.iconClass}
              title={card.title}
              description={card.description}
              index={index}
              animate={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
