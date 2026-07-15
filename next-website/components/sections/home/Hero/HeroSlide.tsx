interface HeroSlideProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  slideIdClass: string; // e.g. "elementor-repeater-item-fc4f1bf"
  isActive: boolean;
}

export default function HeroSlide({
  heading,
  description,
  buttonText,
  buttonUrl,
  slideIdClass,
  isActive
}: HeroSlideProps) {
  return (
    <div
      className={`swiper-slide ${slideIdClass} ${isActive ? "swiper-slide-active" : ""}`}
      style={{
        display: isActive ? "block" : "none",
        position: "relative",
        width: "100%",
        height: "630px"
      }}
    >
      {/* Background Image Container */}
      <div className="swiper-slide-bg" />

      {/* Slide Inner Overlay & Content Container */}
      <div className="swiper-slide-inner">
        <div className="swiper-slide-contents">
          <h2 className="elementor-slide-heading">
            {heading}
          </h2>
          <p className="elementor-slide-description">
            {description}
          </p>
          <a href={buttonUrl} className="elementor-slide-button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
