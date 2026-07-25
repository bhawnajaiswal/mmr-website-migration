"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/app/Home.module.css";

const REVIEWS = [
  {
    id: "c18934b",
    name: "Shailendra Arya",
    title: "Shailendra Arya",
    stars: 5,
    text: "Very Nice Hospital, very responsible and good behavior of staff. Dr. Anuradha mam so caring and responsive and very supportive doctor. My family are satisfied. Thank you so much Dr. Anuradha mam and hospital staff."
  },
  {
    id: "8a5f9f1",
    name: "Tiger Dewangan",
    title: "Tiger Dewangan",
    stars: 5,
    text: "Best doctor in IVF treatment\nAnd all staff are 👍 I am very happy"
  },
  {
    id: "daed4d2",
    name: "Rahul",
    title: "Rahul",
    stars: 5,
    text: "Best IVF center in Raipur and also best in Renal treatments."
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((activeIdx + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const handleSlideChange = (newIdx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx(newIdx);
      setIsAnimating(false);
    }, 300); // Matches the transition duration in CSS
  };

  const handlePrev = () => {
    handleSlideChange((activeIdx - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    handleSlideChange((activeIdx + 1) % REVIEWS.length);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.reviewSection} ${isVisible ? styles.reviewSectionVisible : ""}`}
    >
      <div className={styles.reviewContainer}>
        {/* Heading */}
        <div className={styles.reviewHeader}>
          <h2 className={styles.reviewTitle}>
            <a
              href="https://g.page/r/CXmzt0u5XrAxEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewTitleLink}
            >
              Google reviews by patients
            </a>
          </h2>
          <div className={styles.reviewTitleDivider}>
            <span className={styles.reviewTitleDividerLine} />
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className={styles.reviewCarouselWrapper}>
          <div className={styles.reviewCarouselInner}>
            {REVIEWS.map((review, index) => {
              const isActive = index === activeIdx;
              return (
                <div
                  key={review.id}
                  className={`${styles.reviewSlide} ${isActive ? styles.reviewSlideActive : ""} ${isAnimating && isActive ? styles.reviewSlideTransitioning : ""}`}
                  style={{
                    display: isActive ? "block" : "none"
                  }}
                >
                  <div className={styles.reviewCard}>
                    <div className={styles.reviewCardHeader}>
                      <div className={styles.reviewUserInfo}>
                        <div className={styles.reviewAvatar}>
                          {/* Use first letter of name as a modern avatar placeholder */}
                          <span>{review.name.charAt(0)}</span>
                        </div>
                        <div className={styles.reviewMeta}>
                          <span className={styles.reviewName}>{review.name}</span>
                          <div className={styles.reviewStars}>
                            {"★".repeat(review.stars)}
                            {"☆".repeat(5 - review.stars)}
                          </div>
                          <span className={styles.reviewSubtitle}>Patient Review</span>
                        </div>
                      </div>

                      <div className={styles.reviewGoogleBrand}>
                        <i className="fab fa-google" />
                      </div>
                    </div>

                    <div className={styles.reviewCardContent}>
                      <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className={`${styles.reviewNavButton} ${styles.reviewNavPrev}`}
            aria-label="Previous review"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={handleNext}
            className={`${styles.reviewNavButton} ${styles.reviewNavNext}`}
            aria-label="Next review"
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Pagination Dots */}
          <div className={styles.reviewDots}>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`${styles.reviewDot} ${index === activeIdx ? styles.reviewDotActive : ""}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
