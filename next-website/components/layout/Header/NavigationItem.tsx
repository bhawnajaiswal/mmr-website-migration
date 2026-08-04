"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/config/navigation";
import Dropdown from "./Dropdown";
import styles from "./Header.module.css";

interface NavigationItemProps {
  item: NavItem;
}

export default function NavigationItem({ item }: NavigationItemProps) {
  const pathname = usePathname();
  const hasChildren = item.subItems && item.subItems.length > 0;

  const isParentActive =
    pathname === item.url ||
    item.subItems?.some(
      (sub) =>
        pathname === sub.url ||
        sub.subItems?.some((subSub) => pathname === subSub.url)
    );

  return (
    <li className={hasChildren ? styles.navItemWithChildren : ""}>
      <Link
        href={item.url}
        className={`${styles.navLink} ${isParentActive ? styles.active : ""}`}
      >
        {item.title}
        {hasChildren && (
          <i className={`${styles.chevronDown} fas fa-chevron-down`}></i>
        )}
      </Link>
      {hasChildren && <Dropdown items={item.subItems!} />}
    </li>
  );
}
