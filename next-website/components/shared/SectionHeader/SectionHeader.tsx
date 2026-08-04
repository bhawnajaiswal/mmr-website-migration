"use client";

import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  showDivider?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  showDivider = true,
  className = ""
}: SectionHeaderProps) {
  const headerClass = `${styles.header} ${styles[align]} ${className}`;

  return (
    <div className={headerClass}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {showDivider && <div className={styles.divider} />}
    </div>
  );
}
