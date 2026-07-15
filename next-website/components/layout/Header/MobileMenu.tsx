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
    <div className="hfe-mobile-menu" style={{ display: "none" }}> {/* Managed via media queries in CSS */}
      {/* Hamburger Trigger */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        style={{
          background: "none",
          border: "none",
          color: "#585858",
          fontSize: "24px",
          cursor: "pointer",
          padding: "5px"
        }}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#ffffff",
          zIndex: 9999,
          overflowY: "auto",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAVIGATION_ITEMS.map((item) => {
              const hasChildren = item.subItems && item.subItems.length > 0;
              const isExpanded = !!expandedItems[item.title];

              return (
                <li key={item.title} style={{ borderBottom: "1px solid #f1f1f1", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link
                      href={item.url}
                      onClick={() => setIsOpen(false)}
                      style={{ color: "#333333", textDecoration: "none", fontSize: "16px", fontWeight: 500 }}
                    >
                      {item.title}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={(e) => toggleSubItem(item.title, e)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#888888",
                          fontSize: "14px",
                          padding: "5px 10px"
                        }}
                      >
                        {isExpanded ? "▲" : "▼"}
                      </button>
                    )}
                  </div>

                  {/* Sub-menu Level 1 */}
                  {hasChildren && isExpanded && (
                    <ul style={{ listStyle: "none", margin: "10px 0 0 15px", padding: 0, borderLeft: "2px solid #443c7c" }}>
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
                                    fontSize: "12px",
                                    padding: "3px 8px"
                                  }}
                                >
                                  {isSubExpanded ? "▲" : "▼"}
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
