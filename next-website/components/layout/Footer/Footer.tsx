"use client";

import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerTopContainer}>
        
        {/* Column 1: Brand Info & Hidden Elements */}
        <FooterContact />

        {/* Column 2: Treatment & Services Links */}
        <FooterLinks title="Treatment & Services">
          <ul>
            <li><Link href="/treatment-services">Treatment & Services</Link></li>
            <li><Link href="/renal-care-2">Kidney care</Link></li>
          </ul>
        </FooterLinks>

        {/* Column 3: Treatments Subpages */}
        <FooterLinks title="Treatments">
          <ul>
            <li><Link href="/ivf">IVF</Link></li>
            <li><Link href="/iui">IUI</Link></li>
            <li><Link href="/ivm">IVM</Link></li>
            <li><Link href="/icsi-treatment">ICSI</Link></li>
            <li><Link href="/infertility-men-women">Infertility men & women</Link></li>
          </ul>
        </FooterLinks>

        {/* Column 4: Social Media Icons Grid */}
        <FooterSocial />

      </div>

      {/* Bottom bar credits and legal links */}
      <FooterBottom />
    </footer>
  );
}
