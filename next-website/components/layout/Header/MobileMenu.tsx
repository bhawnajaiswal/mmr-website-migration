"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/config/navigation";

export default function MobileMenu() {
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
    <div className="hfe-mobile-menu">
      {/* Hamburger Trigger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="hfe-mobile-menu-trigger"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="hfe-mobile-menu-drawer">
          <ul className="hfe-mobile-menu-list">
            {NAVIGATION_ITEMS.map((item) => {
              const hasChildren = item.subItems && item.subItems.length > 0;
              const isExpanded = !!expandedItems[item.title];

              return (
                <li key={item.title}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      className="hfe-mobile-menu-link"
                    >
                      {item.title}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={(e) => toggleSubItem(item.title, e)}
                        className="hfe-mobile-menu-expand-btn"
                        style={{ background: "none", border: "none", color: "#888888", padding: "5px 10px" }}
                      >
                        <i className={isExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                      </button>
                    )}
                  </div>

                  {/* Sub-menu Level 1 */}
                  {hasChildren && isExpanded && (
                    <ul className="hfe-mobile-sub-menu" style={{ listStyle: "none", margin: "10px 0 0 15px", padding: 0, borderLeft: "2px solid #443c7c" }}>
                      {item.subItems!.map((subItem) => {
                        const hasSubChildren = subItem.subItems && subItem.subItems.length > 0;
                        const isSubExpanded = !!expandedItems[subItem.title];

                        return (
                          <li key={subItem.title} style={{ padding: "8px 0 8px 10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Link
                                href={subItem.url}
                                onClick={() => setIsOpen(false)}
                                style={{ color: "#555555", textDecoration: "none", fontSize: "14px" }}
                              >
                                {subItem.title}
                              </Link>
                              {hasSubChildren && (
                                <button
                                  onClick={(e) => toggleSubItem(subItem.title, e)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "#888888",
                                    padding: "3px 8px"
                                  }}
                                >
                                  <i className={isSubExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                                </button>
                              )}
                            </div>

                            {/* Sub-menu Level 2 */}
                            {hasSubChildren && isSubExpanded && (
                              <ul style={{ listStyle: "none", margin: "5px 0 0 10px", padding: 0, borderLeft: "1px solid #ccc" }}>
                                {subItem.subItems!.map((subSub) => (
                                  <li key={subSub.title} style={{ padding: "5px 0 5px 10px" }}>
                                    <Link
                                      href={subSub.url}
                                      onClick={() => setIsOpen(false)}
                                      style={{ color: "#777777", textDecoration: "none", fontSize: "13px" }}
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
