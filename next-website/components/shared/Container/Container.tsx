import { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  variant?: "standard" | "wide";
  className?: string;
}

export default function Container({
  children,
  variant = "standard",
  className = ""
}: ContainerProps) {
  const containerClass = variant === "wide" ? styles.wide : styles.standard;

  return (
    <div className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
}
