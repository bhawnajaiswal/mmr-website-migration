"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";
import styles from "./Footer.module.css";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerBottomContainer}>
        {/* Copyright notice & credit links */}
        <div className={styles.footerBottomCredits}>
          <span>Copyright © {currentYear} Martuchhaya Hospital.</span>
          <span>
            <a href="https://www.webmantra.net/" target="_blank" rel="noopener noreferrer">
              Credits Webmantra
            </a>
          </span>
          <Image src={SITE.logoWM} alt="Webmantra Icon" width={20} height={21} />
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
