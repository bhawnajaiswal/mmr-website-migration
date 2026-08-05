"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site";
import styles from "./Header.module.css";

interface LogoProps {
  variant?: "header" | "footer";
}

export default function Logo({ variant = "header" }: LogoProps) {
  const width = variant === "header" ? 83 : 144;
  const height = variant === "header" ? 60 : 66;

  // Scoped module styles for the header logo; legacy global styles for footer
  const linkClass = variant === "header" ? styles.logoLink : "logo-link";
  const imgClass = variant === "header" ? styles.logoImg : "logo-img";

  return (
    <Link href="/" className={linkClass}>
      <Image
        src={SITE.logo}
        alt={SITE.name}
        width={width}
        height={height}
        className={imgClass}
        priority={variant === "header"}
      />
    </Link>
  );
}