import { SITE } from "@/config/site";

export default function TopBar() {
  return (
    <div className="hfe-top-bar">
      <div className="hfe-top-bar-container">
        
        {/* Left Side: Contact Info */}
        <div className="hfe-top-bar-left">
          <ul>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <a href={`tel:${SITE.contact.phones[0]}`}>
                {SITE.contact.phones[0].replace("+91 ", "")}
              </a>
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a href={`mailto:${SITE.contact.email}`}>
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="hfe-top-bar-right">
          <ul className="hfe-social-list">
            {SITE.social.facebook && (
              <li>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            )}
            {SITE.social.twitter && (
              <li>
                <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            )}
            {SITE.social.linkedin && (
              <li>
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            )}
            {SITE.social.instagram && (
              <li>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
