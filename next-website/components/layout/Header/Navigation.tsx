import Link from "next/link";
import { NAVIGATION_ITEMS, NavItem } from "@/config/navigation";

export default function Navigation() {
  const renderSubItems = (subItems: NavItem[]) => {
    return (
      <ul className="sub-menu">
        {subItems.map((item) => {
          const hasNested = item.subItems && item.subItems.length > 0;
          return (
            <li key={item.title} className={hasNested ? "menu-item-has-children" : ""}>
              <Link href={item.url} className="hfe-sub-menu-item">
                {item.title}
                {hasNested && <i className="fas fa-chevron-right" style={{ float: "right", fontSize: "10px", marginTop: "4px" }}></i>}
              </Link>
              {hasNested && (
                <ul className="sub-menu-nested">
                  {item.subItems!.map((subSub) => (
                    <li key={subSub.title}>
                      <Link href={subSub.url} className="hfe-sub-menu-item">
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
    <nav className="hfe-nav">
      <ul className="hfe-nav-menu">
        {NAVIGATION_ITEMS.map((item) => {
          const hasChildren = item.subItems && item.subItems.length > 0;

          return (
            <li key={item.title} className={`menu-item ${hasChildren ? "menu-item-has-children" : ""}`}>
              <Link href={item.url} className="hfe-menu-item">
                {item.title}
                {hasChildren && <i className="fas fa-chevron-down" style={{ fontSize: "10px", marginLeft: "5px" }}></i>}
              </Link>
              {hasChildren && renderSubItems(item.subItems!)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
