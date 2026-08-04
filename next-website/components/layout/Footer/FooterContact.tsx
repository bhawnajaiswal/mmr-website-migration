"use client";

import { SITE } from "@/config/site";
import styles from "./Footer.module.css";

export default function FooterContact() {
  return (
    <div className={`${styles.footerColumn} ${styles.contactColumn}`}>
      <span className={styles.contactColumnHeader}>Contact Us</span>
      
      {/* Hidden brand logo wrap to preserve DOM structure but hide via CSS */}
      <div className={styles.footerLogoWrap}>
        <img
          src={SITE.logo}
          alt={SITE.name}
          width={144}
          height={66}
        />
      </div>
      
      {/* Hidden cta wrap */}
      <div className={styles.footerCtaWrap}>
        <img
          src={SITE.ctaButtonImg}
          alt="Book Consultation"
          width={250}
        />
      </div>

      <div className={styles.footerContactInfo}>
        <p className={styles.phoneWrap}>
          <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
          <a href={`tel:${SITE.contact.phones[0]}`}>
            {SITE.contact.phones[0]}
          </a>
        </p>
        <p>
          <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i>
          <a href={`mailto:${SITE.contact.email}`}>
            {SITE.contact.email}
          </a>
        </p>
      </div>
    </div>
  );
}
