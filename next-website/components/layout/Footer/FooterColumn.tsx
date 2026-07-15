import { ReactNode } from "react";

interface FooterColumnProps {
  title?: string;
  children: ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="footer-column" style={{ flex: "1 1 200px", margin: "10px 0" }}>
      {title && (
        <h5 style={{
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "20px",
          position: "relative",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}>
          {title}
        </h5>
      )}
      <div className="footer-column-content">
        {children}
      </div>
    </div>
  );
}
