"use client";

import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary" | "cta" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel
}: ButtonProps) {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
