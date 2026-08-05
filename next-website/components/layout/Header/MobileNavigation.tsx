"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/config/navigation";
import styles from "./Header.module.css";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleSubItem = (title: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className={styles.mobileMenu}>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        className={styles.mobileToggle}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"} aria-hidden="true"></i>
      </button>

      {isOpen && (
        <div className={styles.mobileDrawer} id="mobile-navigation-drawer">
          <ul className={styles.mobileMenuList}>
            {NAVIGATION_ITEMS.map((item) => {
              const hasChildren = item.subItems && item.subItems.length > 0;
              const isExpanded = !!expandedItems[item.title];

              return (
                <li key={item.title} className={styles.mobileMenuLi}>
                  <div className={styles.mobileMenuRow}>
                    <Link
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileMenuLink}
                    >
                      {item.title}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={(e) => toggleSubItem(item.title, e)}
                        className={styles.mobileMenuExpandBtn}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.title}`}
                        aria-expanded={isExpanded}
                      >
                        <i
                          className={isExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}
                          aria-hidden="true"
                        ></i>
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className={styles.mobileSubMenu}>
                      {item.subItems!.map((subItem) => {
                        const hasSubChildren = subItem.subItems && subItem.subItems.length > 0;
                        const isSubExpanded = !!expandedItems[subItem.title];

                        return (
                          <li key={subItem.title} className={styles.mobileSubMenuLi}>
                            <div className={styles.mobileMenuRow}>
                              <Link
                                href={subItem.url}
                                onClick={() => setIsOpen(false)}
                                className={styles.mobileMenuSubLink}
                              >
                                {subItem.title}
                              </Link>
                              {hasSubChildren && (
                                <button
                                  type="button"
                                  onClick={(e) => toggleSubItem(subItem.title, e)}
                                  className={styles.mobileMenuExpandBtnSmall}
                                  aria-label={`${isSubExpanded ? "Collapse" : "Expand"} ${subItem.title}`}
                                  aria-expanded={isSubExpanded}
                                >
                                  <i
                                    className={isSubExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              )}
                            </div>

                            {hasSubChildren && isSubExpanded && (
                              <ul className={styles.mobileSubSubMenu}>
                                {subItem.subItems!.map((subSub) => (
                                  <li key={subSub.title} className={styles.mobileSubSubMenuLi}>
                                    <Link
                                      href={subSub.url}
                                      onClick={() => setIsOpen(false)}
                                      className={styles.mobileMenuSubSubLink}
                                    >
                                      {subSub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
