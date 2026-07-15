import { SITE } from "@/config/site";

export default function TopBar() {
  return (
    <div className="hfe-top-bar" style={{ backgroundColor: "#443c7c", color: "#ffffff", padding: "8px 0", fontSize: "14px" }}>
      <div className="hfe-top-bar-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        
        {/* Left Side: Contact Info */}
        <div className="hfe-top-bar-left">
          <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "20px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fa fa-phone" aria-hidden="true" style={{ fontSize: "14px" }}></i>
              <a href={`tel:${SITE.contact.phones[0]}`} style={{ color: "#ffffff", textDecoration: "none" }}>
                {SITE.contact.phones.join(" / ").replace("+91 ", "")}
              </a>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: "14px" }}></i>
              <a href={`mailto:${SITE.contact.email}`} style={{ color: "#ffffff", textDecoration: "none" }}>
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="hfe-top-bar-right">
          <ul className="hfe-social-list" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "15px" }}>
            {SITE.social.facebook && (
              <li>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#ffffff" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            )}
            {SITE.social.twitter && (
              <li>
                <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: "#ffffff" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            )}
            {SITE.social.linkedin && (
              <li>
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#ffffff" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            )}
            {SITE.social.instagram && (
              <li>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#ffffff" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}
