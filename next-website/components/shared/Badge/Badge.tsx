import styles from "./Badge.module.css";

interface BadgeProps {
  text: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export default function Badge({
  text,
  variant = "primary",
  className = ""
}: BadgeProps) {
  const badgeClass = `${styles.badge} ${styles[variant]} ${className}`;

  return (
    <span className={badgeClass}>
      {text}
    </span>
  );
}
