"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/config/navigation";
import styles from "./Header.module.css";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubItem = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className={styles.mobileMenu}>
      {/* Hamburger Toggle */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className={styles.mobileToggle}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
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
                        onClick={(e) => toggleSubItem(item.title, e)}
                        className={styles.mobileMenuExpandBtn}
                        aria-label={isExpanded ? `Collapse ${item.title} submenu` : `Expand ${item.title} submenu`}
                        aria-expanded={isExpanded}
                      >
                        <i className={isExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                      </button>
                    )}
                  </div>

                  {/* Sub-menu Level 1 */}
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
                                  onClick={(e) => toggleSubItem(subItem.title, e)}
                                  className={styles.mobileMenuExpandBtnSmall}
                                  aria-label={isSubExpanded ? `Collapse ${subItem.title} submenu` : `Expand ${subItem.title} submenu`}
                                  aria-expanded={isSubExpanded}
                                >
                                  <i className={isSubExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                                </button>
                              )}
                            </div>

                            {/* Sub-menu Level 2 */}
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
