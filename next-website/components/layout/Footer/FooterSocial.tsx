"use client";

import { SITE } from "@/config/site";
import styles from "./Footer.module.css";

export default function FooterSocial() {
  return (
    <div className={styles.footerColumn}>
      <h5>Follow Us</h5>
      <div className={styles.footerSocials}>
        {SITE.social.facebook && (
          <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        )}
        {SITE.social.twitter && (
          <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        )}
        <a href="https://in.pinterest.com/mmrhospitalraipur/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <i className="fab fa-pinterest"></i>
        </a>
        {SITE.social.instagram && (
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        )}
      </div>
    </div>
  );
}
