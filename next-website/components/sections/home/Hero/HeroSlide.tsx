import styles from "@/app/Home.module.css";

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
  // Original legacy Elementor properties
  const bgImgUrl = slideIdClass === "elementor-repeater-item-fc4f1bf"
    ? "/wp-content/uploads/2024/04/Home-10.png"
    : "/wp-content/uploads/2024/04/Home-12.png";

  const bgColor = slideIdClass === "elementor-repeater-item-fc4f1bf"
    ? "#833ca3"
    : "#4054b2";

  return (
    <div
      className={`${styles.slideItem} ${isActive ? styles.slideItemActive : ""}`}
    >
      {/* Background Image & Color styled as in legacy CSS */}
      <div
        className={styles.slideBg}
        style={{
          backgroundImage: `url('${bgImgUrl}')`,
          backgroundColor: bgColor
        }}
      />

      {/* Slide Inner Overlay & Content Container */}
      <div className={styles.slideInner}>
        <div className={styles.slideContent}>
          <h2 className={styles.slideHeading}>
            {heading}
          </h2>
          <p className={styles.slideDescription}>
            {description}
          </p>
          <a href={buttonUrl} className={styles.slideButton}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
