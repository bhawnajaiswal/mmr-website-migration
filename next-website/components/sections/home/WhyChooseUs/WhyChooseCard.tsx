import styles from "./WhyChooseUs.module.css";

interface WhyChooseCardProps {
  iconClass: string;
  title: string;
  description: string;
  index: number;
  animate: boolean;
}

export default function WhyChooseCard({
  iconClass,
  title,
  description,
  index,
  animate
}: WhyChooseCardProps) {
  return (
    <div
      className={`${styles.whyCard} ${animate ? styles.revealVisible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.whyCardIconContainer}>
        <span className={styles.whyCardIcon}>
          <i className={iconClass} aria-hidden="true"></i>
        </span>
      </div>
      <div className={styles.whyCardContent}>
        <h3 className={styles.whyCardTitle}>{title}</h3>
        <p className={styles.whyCardDescription}>{description}</p>
      </div>
    </div>
  );
}
