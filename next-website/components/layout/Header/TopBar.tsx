"use client";

import { SITE } from "@/config/site";
import styles from "./Header.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContainer}>
        
        {/* Contact Info (Inline items) */}
        <div className={styles.topBarLeft}>
          <ul className={styles.topBarList}>
            <li className={styles.topBarItem}>
              <i className={`${styles.topBarIcon} fas fa-map-marker-alt`} aria-hidden="true"></i>
              <span className={styles.topBarText}>{SITE.address}</span>
            </li>
            <li className={styles.topBarItem}>
              <i className={`${styles.topBarIcon} fas fa-envelope`} aria-hidden="true"></i>
              <a href={`mailto:${SITE.contact.email}`} className={styles.topBarLink}>{SITE.contact.email}</a>
            </li>
            <li className={styles.topBarItem}>
              <i className={`${styles.topBarIcon} fas fa-phone-alt`} aria-hidden="true"></i>
              <a href={`tel:${SITE.contact.phones[0]}`} className={styles.topBarLink}>+91 9244122040 / 41 / 48</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
