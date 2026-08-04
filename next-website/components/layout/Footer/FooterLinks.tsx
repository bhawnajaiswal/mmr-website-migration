"use client";

import { ReactNode } from "react";
import styles from "./Footer.module.css";

interface FooterLinksProps {
  title: string;
  children: ReactNode;
}

export default function FooterLinks({ title, children }: FooterLinksProps) {
  return (
    <div className={styles.footerColumn}>
      <h5>{title}</h5>
      {children}
    </div>
  );
}
