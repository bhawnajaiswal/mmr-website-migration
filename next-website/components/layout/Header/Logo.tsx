"use client";

import Link from "next/link";
import { SITE } from "@/config/site";
import styles from "./Header.module.css";

interface LogoProps {
  variant?: "header" | "footer";
}

export default function Logo({ variant = "header" }: LogoProps) {
  const linkClass = variant === "header" ? styles.logoLink : "logo-link";
  const imgClass = variant === "header" ? styles.logoImg : "logo-img";

  return (
    <Link href="/" className={linkClass} aria-label={SITE.name}>
      <img
        src={SITE.logo}
        alt={SITE.name}
        className={imgClass}
        loading={variant === "header" ? "eager" : "lazy"}
        decoding="async"
      />
    </Link>
  );
}
