"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/app/Home.module.css";

const BLOG_SLIDES = [
  {
    id: "e22acaf",
    imageUrl: "/wp-content/uploads/2024/03/woman-s-hands-support-human-embryo-icon-blurred-background-tree-scaled.jpg",
    link: "/news-blogs/rising-infertility-rates-in-india-a-growing-concern"
  },
  {
    id: "8469299",
    imageUrl: "/wp-content/uploads/2024/03/senior-man-suffering-from-kidney-pain-home-scaled.jpg",
    link: null
  },
  {
    id: "c116bd4",
    imageUrl: "/wp-content/uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg",
    link: "/news-blogs/the-reality-of-ivf-success-rates-what-you-need-to-know"
  },
  {
    id: "15ab02a",
    imageUrl: "/wp-content/uploads/2024/03/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled.jpg",
    link: null
  }
];

export default function Blogs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const totalSlides = BLOG_SLIDES.length;
  const maxIdx = Math.max(0, totalSlides - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.blogSection} ${isVisible ? styles.blogSectionVisible : ""}`}
    >
      <div className={styles.blogContainer}>
        {/* Heading */}
        <div className={styles.blogHeader}>
          <span className={styles.blogSubtitle}>Latest News &amp; Insights</span>
          <h2 className={styles.blogTitle}>Blogs</h2>
          <div className={styles.blogDivider}>
            <span className={styles.blogDividerLine} />
          </div>
        </div>

        {/* Carousel Container */}
        <div className={styles.blogCarouselWrapper}>
          <div className={styles.blogCarouselInner}>
            <div
              className={styles.blogSliderTrack}
              style={{
                transform: `translateX(-${activeIdx * (100 / visibleCount)}%)`,
                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              }}
            >
              {BLOG_SLIDES.map((slide) => {
                const cardContent = (
                  <div className={styles.blogCard}>
                    <div className={styles.blogImageWrapper}>
                      <img
                        src={slide.imageUrl}
                        alt="MMR Hospital Medical Blog"
                        className={styles.blogImage}
                        loading="lazy"
                      />
                    </div>
                  </div>
                );

                return (
                  <div
                    key={slide.id}
                    className={styles.blogSlide}
                    style={{
                      flex: `0 0 ${100 / visibleCount}%`,
                      padding: "0 12px"
                    }}
                  >
                    {slide.link ? (
                      <Link href={slide.link} className={styles.blogLink}>
                        {cardContent}
                      </Link>
                    ) : (
                      cardContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className={`${styles.blogNavButton} ${styles.blogNavPrev}`}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={handleNext}
            className={`${styles.blogNavButton} ${styles.blogNavNext}`}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Dots Navigation */}
          <div className={styles.blogDots}>
            {Array.from({ length: maxIdx + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIdx(index)}
                className={`${styles.blogDot} ${index === activeIdx ? styles.blogDotActive : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
