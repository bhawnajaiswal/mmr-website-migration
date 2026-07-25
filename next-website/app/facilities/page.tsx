"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./Facilities.module.css";

interface FacilityItem {
  title: string;
  image: string;
  description: string;
  isReverse: boolean;
}

const FACILITIES_DATA: FacilityItem[] = [
  {
    title: "Operation theatre",
    image: "/wp-content/uploads/2023/12/Layer-616-1.png",
    description: "Discover a new standard of care at MMR Hospital, where our commitment to excellence is reflected in our top-notch facilities. Our cutting-edge IVF Center blends advanced technology with a comforting environment, ensuring a supportive space for individuals and couples on their fertility journey. From sophisticated fertility treatments to personalized care, we strive to make your path to parenthood a positive experience.",
    isReverse: false
  },
  {
    title: "Ambulance",
    image: "/wp-content/uploads/2023/12/Layer-616-1.png",
    description: "In our Kidney Care unit, equipped with state-of-the-art facilities, we prioritize early detection and proactive management of renal issues. Our modular Operation Theaters ensure a sterile and controlled environment for precise procedures. Our Intensive Care Unit (ICU) upholds the highest standards, providing critical care with advanced monitoring and round-the-clock attention.",
    isReverse: true
  },
  {
    title: "ICU",
    image: "/wp-content/uploads/2023/12/Layer-616-1.png",
    description: "MMR Hospital boasts quality pathology services, ensuring accurate and timely diagnostics. Our cafeteria serves nutritious meals, offering a welcoming space for patients and their families. Additionally, our Dialysis Center is equipped with modern technology, delivering exceptional care for those undergoing renal therapies.",
    isReverse: false
  },
  {
    title: "Pathology",
    image: "/wp-content/uploads/2023/12/Layer-616-1.png",
    description: "Experience comfort and care at every step in our hospital, where Modular OT, ICU quality, top-notch pathology, a good cafeteria, and a dedicated Dialysis Center converge to create a healthcare environment that exceeds expectations. At MMR Hospital, we are dedicated to your well-being, ensuring a holistic and positive healthcare experience.",
    isReverse: true
  },
  {
    title: "Cafeteria",
    image: "/wp-content/uploads/2023/12/Layer-616-1.png",
    description: "At Our Hospital, our OT and ICU services exemplify excellence in critical care. Staffed by skilled professionals, our ICU offers advanced medical care and monitoring. Whether you&apos;re navigating fertility treatments in our IVF Center or seeking expert Kidney Care, trust MMR Hospital for comprehensive and compassionate services in our state-of-the-art Intensive Care Unit.",
    isReverse: false
  }
];

// Helper component for Intersection Observer Scroll Reveal
function ScrollRevealSection({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${styles.scrollReveal} ${isVisible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <div className={styles.container}>
      <main className="main-content">
        
        {/* Section 1: Hero Banner */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroDivider} />
            <div className={styles.heroTitle}>
              <h1>
                Facilities
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Alternating Grid of Facilities */}
        <section className={styles.gridSection}>
          <div className={styles.gridContainer}>
            {FACILITIES_DATA.map((fac, idx) => (
              <ScrollRevealSection key={idx}>
                <div className={`${styles.facilityBlock} ${fac.isReverse ? styles.facilityBlockReverse : ""}`}>
                  
                  {/* Image Column */}
                  <div className={styles.facilityImageWrapper}>
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className={styles.facilityImage}
                    />
                  </div>

                  {/* Content Column */}
                  <div className={styles.facilityContent}>
                    <div className={styles.facilityHeader}>
                      <h2 className={styles.facilityTitle}>
                        {fac.title}
                      </h2>
                      <div className={styles.facilityAccentLine} />
                    </div>
                    <p className={styles.facilityText}>
                      {fac.description}
                    </p>
                  </div>

                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
