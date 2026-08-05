"use client";

import { NAVIGATION_ITEMS } from "@/config/navigation";
import NavigationItem from "./NavigationItem";
import styles from "./Header.module.css";

export default function DesktopNavigation() {
  return (
    <nav className={styles.headerNav} aria-label="Primary navigation">
      <ul className={styles.navList}>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
}
