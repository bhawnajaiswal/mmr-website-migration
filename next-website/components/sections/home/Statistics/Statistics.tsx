"use client";

import { useEffect, useState, useRef } from "react";
import CounterCard from "./CounterCard";
import Container from "@/components/shared/Container/Container";
import styles from "@/app/Home.module.css";

const COUNTERS = [
  {
    start: 0,
    end: 20,
    suffix: "+",
    title: "Years of Experience"
  },
  {
    start: 0,
    end: 2000,
    suffix: "+",
    title: "Live Births through IVF"
  },
  {
    start: 0,
    end: 100,
    suffix: "+",
    title: "Happy Families Created"
  }
];

export default function Statistics() {
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
      className={`${styles.statsSection} ${isVisible ? styles.statsSectionVisible : ""}`}
    >
      <Container className={styles.statsContainer}>
        {/* Header Block */}
        <div className={styles.statsHeader}>
          <span className={styles.statsSubtitle}>
            20 Years Experience in infertility treatments.
          </span>
          <h2 className={styles.statsTitle}>Trusted &amp; loved by</h2>
          <div className={styles.statsDivider}>
            <span className={styles.statsDividerLine} />
          </div>
        </div>

        {/* Counters Grid */}
        <div className={styles.statsGrid}>
          {COUNTERS.map((cnt, index) => (
            <CounterCard
              key={index}
              start={cnt.start}
              end={cnt.end}
              suffix={cnt.suffix}
              title={cnt.title}
              index={index}
              animate={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
