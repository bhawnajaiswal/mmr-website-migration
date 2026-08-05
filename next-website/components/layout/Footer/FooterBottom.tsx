"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerBottomContainer}>
        {/* Copyright notice */}
        <div className={styles.footerBottomCredits}>
          <span>Copyright © {currentYear} Martuchhaya Hospital.</span>
        </div>

        {/* Legal links */}
        <div className={styles.footerBottomLegal}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-of-use">Terms</Link>
          <span>|</span>
          <Link href="/career">Careers</Link>
        </div>
      </div>
    </div>
  );
}
