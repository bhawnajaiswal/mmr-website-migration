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
      {/* Background Image Container (Absolute behind text) */}
      <div
        className="swiper-slide-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Slide Inner Overlay & Content Container */}
      <div className="swiper-slide-inner">
        <div className="elementor-slide-content">
          <h2 className="elementor-slide-heading">
            {heading}
          </h2>
          <p className="elementor-slide-description" style={{ whiteSpace: "pre-line" }}>
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
