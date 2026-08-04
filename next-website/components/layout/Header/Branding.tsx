"use client";

import Link from "next/link";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Branding() {
  return (
    <div className={styles.brand}>
      <div className={styles.logo}>
        <Logo variant="header" />
      </div>
      <div className={styles.brandTitleContainer}>
        <h2 className={styles.brandTitle}>
          <Link href="/">MMR Hospital &amp; IVF Center</Link>
        </h2>
      </div>
    </div>
  );
}
