"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "@/app/TreatmentPage.module.css";

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
      { threshold: 0.15 }
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

interface TreatmentSectionProps {
  secId: string;
  innerSecId: string;
  imgColId: string;
  textColId: string;
  imgWidgetId: string;
  textWidgetId: string;
  btnWidgetId?: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt?: string;
  iconSrc?: string;
  buttonUrl: string;
  reverseLayout: boolean;
}

export default function TreatmentSection({
  title,
  desc,
  imgSrc,
  imgAlt = "best ivf center in Raipur",
  iconSrc,
  buttonUrl,
  reverseLayout,
}: TreatmentSectionProps) {
  return (
    <ScrollRevealSection 
      className={styles.introSection} 
      style={{ 
        backgroundColor: reverseLayout ? "var(--color-background-light)" : "var(--color-white)",
        padding: "80px 20px"
      }}
    >
      <div className={styles.introContainer}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "50px", 
            alignItems: "center" 
          }} 
          className={`responsive-grid-split ${reverseLayout ? "reverse-layout-split" : ""}`}
        >
          {/* Image Column */}
          <div 
            style={{ 
              position: "relative", 
              overflow: "hidden", 
              borderRadius: "16px", 
              boxShadow: "var(--shadow-lg)",
              order: reverseLayout ? 2 : 1
            }}
            className="grid-image-col"
          >
            <img
              src={imgSrc}
              alt={imgAlt}
              style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
              className="hover-scale-img"
            />
          </div>

          {/* Text Column */}
          <div 
            className={styles.introContent}
            style={{ 
              order: reverseLayout ? 1 : 2
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* {iconSrc && (
                <div style={{ width: "48px", height: "48px", flexShrink: 0, borderRadius: "50%", background: "rgba(92, 53, 154, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={iconSrc} alt="" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
                </div>
              )} */}
              <div className={styles.introTitle}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-primary)" }}>{title}</h2>
              </div>
            </div>
            
            <p 
              className={styles.introText1} 
              style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.6", color: "var(--color-text-dark)" }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
            
            <Link 
              className={styles.introButton} 
              href={buttonUrl}
              style={{ 
                marginTop: "10px",
                borderColor: "var(--color-accent)",
                color: "var(--color-primary)",
                alignSelf: "flex-start",
                gap: "8px"
              }}
            >
              Learn More &raquo;
            </Link>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
