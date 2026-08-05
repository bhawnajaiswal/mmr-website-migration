"use client";

import { useEffect, useState, useRef } from "react";
import DoctorCard from "./DoctorCard";
import Container from "@/components/shared/Container/Container";
import { DOCTOR_IMAGES } from "@/config/assets/doctors";
import styles from "./Doctors.module.css";

const DOCTORS = [
  {
    imageUrl: DOCTOR_IMAGES.doctorAnuradha,
    name: "Dr. Anuradha Tibrewal Chowdhary",
    degree: "MD (OBGYN) ,FRM,FICOG,FAMS",
    description: "Infertility / IVF - ICSI specialist , Laparoscopic surgeon, Consultant in reproductive medicine.",
    socialLinks: {
      facebook: "https://www.facebook.com/dranuradhatibrewalchowdhary/",
      twitter: "",
      googlePlus: "",
      linkedin: "",
      instagram: ""
    }
  },
  {
    imageUrl: DOCTOR_IMAGES.doctorPrawash,
    name: "Dr. Prawash Chowdhary",
    degree: "MD, DNB (Nephrology)",
    description: "MNAMS, FASN (USA), FISN - ANIO, FRCP (London), Interventional Nephrologist.",
    socialLinks: {
      facebook: "https://www.facebook.com/prawash.chowdhary",
      twitter: "",
      googlePlus: "",
      linkedin: "",
      instagram: ""
    }
  }
];

export default function Doctors() {
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

  return (
    <section
      ref={sectionRef}
      className={`${styles.docSection} ${isVisible ? styles.docSectionVisible : ""}`}
    >
      {/* Top Pyramids Shape Divider */}
      <div className={styles.docShapeDividerTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.docShapeDividerSvg} aria-hidden="true" focusable="false">
          <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#ffffff" />
        </svg>
      </div>

      <Container className={styles.docContainer}>
        {/* Header Block */}
        <div className={styles.docHeader}>
          <span className={styles.docSubtitle}>Dedicated Professionals</span>
          <h2 className={styles.docTitle}>Meet the team</h2>
          <div className={styles.docDivider}>
            <span className={styles.docDividerLine} />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className={styles.docGrid}>
          {DOCTORS.map((doc, index) => (
            <DoctorCard
              key={doc.name}
              imageUrl={doc.imageUrl}
              name={doc.name}
              degree={doc.degree}
              description={doc.description}
              socialLinks={doc.socialLinks}
              index={index}
              animate={isVisible}
            />
          ))}
        </div>
      </Container>

      {/* Bottom Pyramids Negative Shape Divider */}
      <div className={styles.docShapeDividerBottom}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.docShapeDividerSvg} aria-hidden="true" focusable="false">
          <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
