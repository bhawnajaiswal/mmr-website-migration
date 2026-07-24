"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./NewsBlogs.module.css";

const blogPosts = [
  {
    id: "7048",
    slug: "rising-infertility-rates-in-india-a-growing-concern",
    title: "Rising Infertility Rates in India: A Growing Concern",
    date: "August 30, 2024",
    excerpt: "Rising Infertility Rates in India: A Growing Concern",
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png" // fallback image
  },
  {
    id: "7084",
    slug: "the-reality-of-ivf-success-rates-what-you-need-to-know",
    title: "The Reality of IVF Success Rates: What You Need to Know",
    date: "August 30, 2024",
    // Preserving production excerpt duplicate quirk
    excerpt: "Rising Infertility Rates in India: A Growing Concern",
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png" // fallback image
  },
  {
    id: "3295",
    slug: "renal-replacement-therapy",
    title: "Renal Replacement Therapy",
    date: "November 7, 2023",
    excerpt: "Treatments for individuals with kidney failure, providing essential support when their kidneys can no longer adequately filter waste and excess fluid from the blood.",
    image: "/wp-content/uploads/2023/11/renal-replacement-th.png"
  },
  {
    id: "3297",
    slug: "intervention-nephrology",
    title: "Intervention Nephrology",
    date: "November 7, 2023",
    excerpt: "Renal biopsy is a diagnostic procedure where a small sample of kidney tissue is extracted for examination.",
    image: "/wp-content/uploads/2023/11/intervention-nephrology-th.png"
  },
  {
    id: "3291",
    slug: "diagnosis",
    title: "Renal Diagnosis",
    date: "November 7, 2023",
    excerpt: "Diagnosis involves assessing changes in kidney function through blood tests and identifying the underlying cause to initiate prompt treatment.",
    image: "/wp-content/uploads/2023/11/renal-dignosis-th.png"
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

export default function NewsBlogsPage() {
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
                News And Blogs
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Blog Posts Grid */}
        <section className={styles.blogsSection}>
          <div className={styles.blogsContainer}>
            <div className={styles.blogsGrid}>
              {blogPosts.map((post, idx) => (
                <ScrollRevealSection key={post.id}>
                  <article
                    className={styles.blogCard}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <Link
                      className={styles.blogImageWrapper}
                      href={`/news-blogs/${post.slug}`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className={styles.blogImage}
                        loading="lazy"
                      />
                    </Link>
                    
                    <div className={styles.blogCardContent}>
                      <div className={styles.blogMeta}>
                        <i className="far fa-calendar-alt" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className={styles.blogCardTitle}>
                        <Link href={`/news-blogs/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className={styles.blogExcerpt}>{post.excerpt}</p>
                      
                      <Link
                        className={styles.readMoreLink}
                        href={`/news-blogs/${post.slug}`}
                      >
                        Read More <i className="fas fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </article>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Bottom Banner */}
        <section className={styles.hospitalSection}>
          {/* Decoupled Scoped Top Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
              <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
            </svg>
          </div>

          <div className={styles.hospitalContainer}>
            {/* Left Column: Info Text */}
            <ScrollRevealSection className={styles.hospitalLeft}>
              <span className={styles.hospitalSubtitle}>Our Hospital</span>
              <h2 className={styles.hospitalTitle}>We are available for 24/7 for your service.</h2>
              <p className={styles.hospitalDesc}>
                At MMR Hospital &amp; IVF Center, we understand that healthcare needs can arise at any time, which is why we are proud to offer round-the-clock services to our patients. Our dedicated team of medical professionals and support staff is available 24/7 to provide prompt, compassionate, and high-quality care whenever you need it.
              </p>
            </ScrollRevealSection>

            {/* Right Column: Hospital Image */}
            <ScrollRevealSection className={styles.hospitalRight}>
              <img
                src="/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png"
                alt="MMR Hospital IVF Center"
                className={styles.hospitalImage}
              />
            </ScrollRevealSection>
          </div>
        </section>

      </main>
    </div>
  );
}
