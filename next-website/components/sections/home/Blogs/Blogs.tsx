"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = BLOG_SLIDES.length;
  const maxIdx = isMobile ? totalSlides - 1 : totalSlides - 3;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
  };

  return (
    <section
      className="elementor-element elementor-element-3299d28 e-con-full e-flex e-con e-parent"
      data-id="3299d28"
      data-element_type="container"
      style={{ padding: "40px 20px", maxWidth: "1140px", margin: "0 auto" }}
    >
      {/* Heading Widget */}
      <div
        className="elementor-element elementor-element-fe98fa3 elementor-widget elementor-widget-heading"
        data-id="fe98fa3"
        data-element_type="widget"
        data-widget_type="heading.default"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <div className="elementor-widget-container">
          <h2
            className="elementor-heading-title elementor-size-default"
            style={{
              color: "#305595",
              fontFamily: '"Nunito", sans-serif',
              fontSize: "32px",
              fontWeight: "700"
            }}
          >
            Blogs
          </h2>
        </div>
      </div>

      {/* Media Carousel Swiper Widget */}
      <div
        className="elementor-element elementor-element-a8759f5 elementor-skin-carousel elementor-arrows-yes elementor-pagination-type-bullets elementor-widget elementor-widget-media-carousel"
        data-id="a8759f5"
        data-element_type="widget"
        data-widget_type="media-carousel.default"
        style={{ position: "relative", padding: "0 35px" }}
      >
        <div className="elementor-widget-container">
          <div className="elementor-swiper" style={{ overflow: "hidden" }}>
            <div className="elementor-main-swiper swiper">
              <div
                className="swiper-wrapper"
                style={{
                  display: "flex",
                  gap: "15px",
                  transition: "transform 0.5s ease-in-out",
                  transform: isMobile 
                    ? `translateX(-${activeIdx * 100}%)`
                    : `translateX(-${activeIdx * (100 / 3)}%)`
                }}
              >
                {BLOG_SLIDES.map((slide) => {
                  const content = (
                    <div
                      className="elementor-carousel-image"
                      style={{
                        backgroundImage: `url('${slide.imageUrl}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "240px",
                        width: "100%",
                        borderRadius: "0px"
                      }}
                    />
                  );

                  return (
                    <div
                      key={slide.id}
                      className="swiper-slide"
                      style={{
                        flex: isMobile ? "0 0 100%" : "0 0 calc((100% - 30px) / 3)",
                        boxSizing: "border-box"
                      }}
                    >
                      {slide.link ? (
                        <Link href={slide.link} style={{ display: "block", height: "100%" }}>
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Pagination Bullets */}
              <div
                className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "25px" }}
              >
                {Array.from({ length: maxIdx + 1 }).map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setActiveIdx(index)}
                    className={`swiper-pagination-bullet ${
                      index === activeIdx ? "swiper-pagination-bullet-active" : ""
                    }`}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: index === activeIdx ? "#305595" : "#ccc",
                      cursor: "pointer",
                      display: "inline-block"
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div
                onClick={handlePrev}
                className="elementor-swiper-button elementor-swiper-button-prev"
                role="button"
                aria-label="Previous Slide"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "22px",
                  color: "#305595"
                }}
              >
                <i className="fas fa-chevron-left" />
              </div>
              <div
                onClick={handleNext}
                className="elementor-swiper-button elementor-swiper-button-next"
                role="button"
                aria-label="Next Slide"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "22px",
                  color: "#305595"
                }}
              >
                <i className="fas fa-chevron-right" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
