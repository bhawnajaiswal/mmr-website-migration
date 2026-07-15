import { ReactNode } from "react";

interface FooterColumnProps {
  title?: string;
  children: ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="footer-column">
      {title && <h5>{title}</h5>}
      <div className="footer-column-content">
        {children}
      </div>
    </div>
  );
}
