import { SITE } from "@/config/site";

export default function TopBar() {
  return (
    <div className="hfe-top-bar">
      <div className="hfe-top-bar-container">
        
        {/* Left Side: Contact Info (Inline items) */}
        <div className="hfe-top-bar-left">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>{SITE.address}</span>
            </li>
            <li>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </li>
            <li>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <a href={`tel:${SITE.contact.phones[0]}`}>+91 9244122040 / 41 / 48</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
