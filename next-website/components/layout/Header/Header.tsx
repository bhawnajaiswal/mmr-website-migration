"use client";

import TopBar from "./TopBar";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Branding from "./Branding";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      {/* Scoped Top Info Bar */}
      <TopBar />

      {/* Main Brand & Nav Bar */}
      <div className={styles.mainHeaderRow}>
        <div className={styles.headerContainer}>
          
          {/* Brand Logo & Name */}
          <Branding />

          {/* Centered Desktop Menu */}
          <div className={styles.headerColCenter}>
            <DesktopNavigation />
          </div>

          {/* Right-aligned Mobile Trigger */}
          <div className={styles.headerColRight}>
            <MobileNavigation />
          </div>

        </div>
      </div>
    </header>
  );
}