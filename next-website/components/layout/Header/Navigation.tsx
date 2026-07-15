"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, NavItem } from "@/config/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderSubItems = (subItems: NavItem[]) => {
    return (
      <ul className="sub-menu" style={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        padding: "10px 0",
        margin: 0,
        listStyle: "none",
        minWidth: "220px",
        zIndex: 999,
        borderTop: "3px solid #443c7c"
      }}>
        {subItems.map((item) => {
          const hasNested = item.subItems && item.subItems.length > 0;
          return (
            <li key={item.title} className="menu-item-has-children" style={{ position: "relative" }}
                onMouseEnter={() => hasNested && handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}>
              <Link href={item.url} style={{
                display: "block",
                padding: "8px 20px",
                color: "#333333",
                textDecoration: "none",
                fontSize: "14px",
                transition: "background 0.2s"
              }} className="hfe-sub-menu-item">
                {item.title}
                {hasNested && <span style={{ float: "right", fontSize: "10px", marginTop: "4px" }}>▶</span>}
              </Link>
              {hasNested && activeDropdown === item.title && (
                <ul className="sub-menu-nested" style={{
                  position: "absolute",
                  top: 0,
                  left: "100%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  padding: "10px 0",
                  margin: 0,
                  listStyle: "none",
                  minWidth: "200px",
                  zIndex: 1000,
                  borderLeft: "2px solid #443c7c"
                }}>
                  {item.subItems!.map((subSub) => (
                    <li key={subSub.title}>
                      <Link href={subSub.url} style={{
                        display: "block",
                        padding: "8px 20px",
                        color: "#333333",
                        textDecoration: "none",
                        fontSize: "14px"
                      }} className="hfe-sub-menu-item">
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
    );
  };

  return (
    <nav className="hfe-nav" style={{ display: "block" }}>
      <ul className="hfe-nav-menu" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "25px" }}>
        {NAVIGATION_ITEMS.map((item) => {
          const isHome = item.url === "/";
          const isActive = isHome ? pathname === "/" : pathname.startsWith(item.url);
          const hasChildren = item.subItems && item.subItems.length > 0;

          return (
            <li
              key={item.title}
              className={`menu-item ${hasChildren ? "menu-item-has-children" : ""}`}
              style={{ position: "relative" }}
              onMouseEnter={() => hasChildren && handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.url}
                style={{
                  display: "block",
                  padding: "15px 0",
                  color: isActive ? "#2b89ff" : "#585858",
                  fontWeight: 500,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                className="hfe-menu-item"
              >
                {item.title}
                {hasChildren && <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>}
              </Link>
              {hasChildren && activeDropdown === item.title && renderSubItems(item.subItems!)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
