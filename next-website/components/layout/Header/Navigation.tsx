"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, NavItem } from "@/config/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const renderSubItems = (subItems: NavItem[]) => {
    return (
      <ul className="sub-menu">
        {subItems.map((item) => {
          const hasNested = item.subItems && item.subItems.length > 0;
          const isSubActive = pathname === item.url;
          
          return (
            <li key={item.title} className={hasNested ? "menu-item-has-children" : ""}>
              <Link
                href={item.url}
                className={`hfe-sub-menu-item ${isSubActive ? "active" : ""}`}
              >
                {item.title}
                {hasNested && (
                  <i
                    className="fas fa-chevron-right"
                    style={{ float: "right", fontSize: "10px", marginTop: "4px" }}
                  ></i>
                )}
              </Link>
              {hasNested && (
                <ul className="sub-menu-nested">
                  {item.subItems!.map((subSub) => {
                    const isSubSubActive = pathname === subSub.url;
                    return (
                      <li key={subSub.title}>
                        <Link
                          href={subSub.url}
                          className={`hfe-sub-menu-item ${isSubSubActive ? "active" : ""}`}
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
  };

  return (
    <nav className="hfe-nav">
      <ul className="hfe-nav-menu">
        {NAVIGATION_ITEMS.map((item) => {
          const hasChildren = item.subItems && item.subItems.length > 0;
          const isParentActive =
            pathname === item.url ||
            item.subItems?.some(
              (sub) =>
                pathname === sub.url ||
                sub.subItems?.some((subSub) => pathname === subSub.url)
            );

          return (
            <li
              key={item.title}
              className={`menu-item ${hasChildren ? "menu-item-has-children" : ""}`}
            >
              <Link
                href={item.url}
                className={`hfe-menu-item ${isParentActive ? "active" : ""}`}
              >
                {item.title}
                {hasChildren && (
                  <i className="fas fa-chevron-down" style={{ fontSize: "10px", marginLeft: "5px" }}></i>
                )}
              </Link>
              {hasChildren && renderSubItems(item.subItems!)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
