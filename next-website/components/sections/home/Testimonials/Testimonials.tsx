"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: "c18934b",
    name: "Shailendra Arya",
    title: "Shailendra Arya",
    ratingHtml: (
      <div className="elementor-star-rating">
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
      </div>
    ),
    text: "Very Nice Hospital, very responsible and good behavior of staff. Dr. Anuradha mam so caring and responsive and very supportive doctor. My family are satisfied. Thank you so much Dr. Anuradha mam and hospital staff."
  },
  {
    id: "8a5f9f1",
    name: "Tiger Dewangan",
    title: "Tiger Dewangan",
    ratingHtml: (
      <div className="elementor-star-rating">
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-5">&#xE934;</i>
      </div>
    ),
    text: "Best doctor in IVF treatment\nAnd all staff are \ud83d\udc4d I am very happy"
  },
  {
    id: "daed4d2",
    name: "Rahul",
    title: "Rahul",
    ratingHtml: (
      <div className="elementor-star-rating">
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-full">&#xE934;</i>
        <i className="elementor-star-6">&#xE934;</i>
      </div>
    ),
    text: "Best IVF center in Raipur and also best in Renal treatments."
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-26181dfa elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="26181dfa"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-background-overlay" />
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-630f9ced"
          data-id="630f9ced"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-2c584a20 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="2c584a20"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3788e02"
                  data-id="3788e02"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    
                    {/* Heading Widget */}
                    <div
                      className="elementor-element elementor-element-21cd86a2 elementor-widget elementor-widget-heading"
                      data-id="21cd86a2"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          <a
                            href="https://g.page/r/CXmzt0u5XrAxEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google reviews by patient
                          </a>
                        </h3>
                      </div>
                    </div>

                    {/* Reviews Swiper Widget */}
                    <div
                      className="elementor-element elementor-element-c755703 elementor-widget elementor-widget-reviews"
                      data-id="c755703"
                      data-element_type="widget"
                      data-widget_type="reviews.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-swiper">
                          <div className="elementor-main-swiper swiper">
                            <div className="swiper-wrapper" style={{ position: "relative", minHeight: "220px" }}>
                              
                              {REVIEWS.map((review, index) => {
                                const isActive = index === activeIdx;
                                return (
                                  <div
                                    key={review.id}
                                    className="swiper-slide"
                                    style={{
                                      opacity: isActive ? 1 : 0,
                                      visibility: isActive ? "visible" : "hidden",
                                      transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
                                      position: isActive ? "relative" : "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%"
                                    }}
                                  >
                                    <div className={`elementor-testimonial elementor-repeater-item-${review.id}`}>
                                      <div className="elementor-testimonial__header">
                                        <div className="elementor-testimonial__image">
                                          <img
                                            decoding="async"
                                            src="/wp-content/plugins/elementor/assets/images/placeholder.png"
                                            alt={review.name}
                                          />
                                        </div>
                                        <cite className="elementor-testimonial__cite">
                                          <span className="elementor-testimonial__name">
                                            {review.name}
                                          </span>
                                          {review.ratingHtml}
                                          <span className="elementor-testimonial__title">
                                            {review.title}
                                          </span>
                                        </cite>
                                        <div className="elementor-testimonial__icon elementor-icon elementor-icon-google">
                                          <i aria-hidden="true" className="fab fa-google"></i>
                                          <span className="elementor-screen-only">Read More</span>
                                        </div>
                                      </div>
                                      <div className="elementor-testimonial__content">
                                        <div className="elementor-testimonial__text">
                                          {review.text}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}

                            </div>

                            {/* Pagination bullets */}
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                              {REVIEWS.map((_, index) => (
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
