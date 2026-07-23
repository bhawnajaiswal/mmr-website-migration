"use client";

import { useState, useEffect } from "react";

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
      style={{ padding: "40px 0" }}
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
              style={{ margin: "0 auto", padding: "0" }}
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
                      style={{ textAlign: "center", marginBottom: "30px" }}
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

                    {/* Reviews Swiper Widget Container */}
                    <div
                      className="elementor-element elementor-element-c755703 elementor-widget elementor-widget-reviews"
                      data-id="c755703"
                      data-element_type="widget"
                      data-widget_type="reviews.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="reviews-carousel-wrapper" style={{ position: "relative", maxWidth: "1140px", margin: "0 auto", padding: "0 60px" }}>
                          
                          <div className="swiper-wrapper" style={{ minHeight: "220px", position: "relative" }}>
                            {REVIEWS.map((review, index) => {
                              const isActive = index === activeIdx;
                              return (
                                <div
                                  key={review.id}
                                  className="swiper-slide"
                                  style={{
                                    display: isActive ? "block" : "none",
                                    width: "100%"
                                  }}
                                >
                                  <div
                                    className={`elementor-testimonial elementor-repeater-item-${review.id}`}
                                    style={{
                                      backgroundColor: "#ffffff",
                                      padding: "30px",
                                      border: "1px solid #eaeaea",
                                      textAlign: "left",
                                      borderRadius: "0px"
                                    }}
                                  >
                                    <div
                                      className="elementor-testimonial__header"
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "16px"
                                      }}
                                    >
                                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                        <div className="elementor-testimonial__image">
                                          <img
                                            src="/wp-content/plugins/elementor/assets/images/placeholder.png"
                                            alt={review.name}
                                            style={{
                                              width: "50px",
                                              height: "50px",
                                              borderRadius: "50%",
                                              objectFit: "cover"
                                            }}
                                          />
                                        </div>
                                        <cite className="elementor-testimonial__cite" style={{ fontStyle: "normal" }}>
                                          <div
                                            className="elementor-testimonial__name"
                                            style={{
                                              fontFamily: '"Nunito", sans-serif',
                                              fontSize: "17px",
                                              fontWeight: "700",
                                              color: "#333333"
                                            }}
                                          >
                                            {review.name}
                                          </div>
                                          <div className="elementor-star-rating" style={{ color: "#f0ad4e", fontSize: "16px", margin: "3px 0" }}>
                                            {"★".repeat(review.stars)}
                                          </div>
                                          <div
                                            className="elementor-testimonial__title"
                                            style={{
                                              fontSize: "13px",
                                              color: "#888888"
                                            }}
                                          >
                                            {review.title}
                                          </div>
                                        </cite>
                                      </div>

                                      <div
                                        className="elementor-testimonial__icon elementor-icon elementor-icon-google"
                                        style={{ fontSize: "32px", color: "#4285F4" }}
                                      >
                                        <i className="fab fa-google" />
                                      </div>
                                    </div>

                                    <div className="elementor-testimonial__content">
                                      <div
                                        className="elementor-testimonial__text"
                                        style={{
                                          fontFamily: '"Nunito Sans", sans-serif',
                                          fontSize: "15px",
                                          lineHeight: "1.6",
                                          color: "#555555",
                                          whiteSpace: "pre-line"
                                        }}
                                      >
                                        {review.text}
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Pagination bullets */}
                          <div
                            className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                            style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}
                          >
                            {REVIEWS.map((_, index) => (
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
                              left: "15px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              fontSize: "24px",
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
                              right: "15px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              fontSize: "24px",
                              color: "#305595"
                            }}
                          >
                            <i className="fas fa-chevron-right" />
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
