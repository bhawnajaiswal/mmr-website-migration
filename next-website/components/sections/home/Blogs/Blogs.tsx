"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BLOG_SLIDES = [
  {
    id: "e22acaf",
    imageUrl: "/wp-content/uploads/2024/03/woman-s-hands-support-human-embryo-icon-blurred-background-tree-scaled.jpg",
    link: "/rising-infertility-rates-in-india-a-growing-concern"
  },
  {
    id: "8469299",
    imageUrl: "/wp-content/uploads/2024/03/senior-man-suffering-from-kidney-pain-home-scaled.jpg",
    link: null
  },
  {
    id: "c116bd4",
    imageUrl: "/wp-content/uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg",
    link: "/the-reality-of-ivf-success-rates-what-you-need-to-know"
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
  // On desktop we show 3 slides, so max index to shift is totalSlides - 3
  const maxIdx = isMobile ? totalSlides - 1 : totalSlides - 3;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
  };

  return (
    <div
      className="elementor-element elementor-element-3299d28 e-con-full e-flex e-con e-parent"
      data-id="3299d28"
      data-element_type="container"
    >
      {/* Heading Widget */}
      <div
        className="elementor-element elementor-element-fe98fa3 elementor-widget elementor-widget-heading"
        data-id="fe98fa3"
        data-element_type="widget"
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">Blogs</h2>
        </div>
      </div>

      {/* Media Carousel Swiper Widget */}
      <div
        className="elementor-element elementor-element-a8759f5 elementor-skin-carousel elementor-arrows-yes elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-media-carousel"
        data-id="a8759f5"
        data-element_type="widget"
        data-widget_type="media-carousel.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-swiper">
            <div className="elementor-main-swiper swiper">
              <div
                className="swiper-wrapper"
                style={{
                  gap: "10px",
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
                        height: "240px"
                      }}
                    />
                  );

                  return (
                    <div
                      key={slide.id}
                      className="swiper-slide"
                      style={{
                        flex: isMobile ? "0 0 100%" : "0 0 calc((100% - 20px) / 3)",
                        boxSizing: "border-box"
                      }}
                    >
                      {slide.link ? (
                        <Link href={slide.link} style={{ display: "block" }}>
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
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                {Array.from({ length: maxIdx + 1 }).map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setActiveIdx(index)}
                    className={`swiper-pagination-bullet ${
                      index === activeIdx ? "swiper-pagination-bullet-active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div
                onClick={handlePrev}
                className="elementor-swiper-button elementor-swiper-button-prev"
                role="button"
                aria-label="Previous Slide"
                style={{ cursor: "pointer" }}
              >
                <i aria-hidden="true" className="eicon-chevron-left"></i>
                <span className="elementor-screen-only">Previous</span>
              </div>
              <div
                onClick={handleNext}
                className="elementor-swiper-button elementor-swiper-button-next"
                role="button"
                aria-label="Next Slide"
                style={{ cursor: "pointer" }}
              >
                <i aria-hidden="true" className="eicon-chevron-right"></i>
                <span className="elementor-screen-only">Next</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
