"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/config/navigation";
import styles from "./Header.module.css";

interface DropdownProps {
  items: NavItem[];
}

export default function Dropdown({ items }: DropdownProps) {
  const pathname = usePathname();

  return (
    <ul className={styles.dropdown}>
      {items.map((item) => {
        const hasNested = item.subItems && item.subItems.length > 0;
        const isSubActive = pathname === item.url;

        return (
          <li key={item.title} className={hasNested ? styles.hasNested : ""}>
            <Link
              href={item.url}
              className={`${styles.dropdownLink} ${isSubActive ? styles.active : ""}`}
            >
              {item.title}
              {hasNested && (
                <i className={`${styles.chevronRight} fas fa-chevron-right`}></i>
              )}
            </Link>
            {hasNested && (
              <ul className={styles.nestedDropdown}>
                {item.subItems!.map((subSub) => {
                  const isSubSubActive = pathname === subSub.url;
                  return (
                    <li key={subSub.title}>
                      <Link
                        href={subSub.url}
                        className={`${styles.dropdownLink} ${isSubSubActive ? styles.active : ""}`}
                      >
                        {subSub.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
