import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { SITE } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        
        {/* Column 1: Brand Info & Booking Button */}
        <FooterColumn>
          <div className="footer-logo-wrap">
            <Link href="/">
              <img
                src={SITE.logo}
                alt={SITE.name}
                width={144}
                height={66}
                className="footer-logo-img"
              />
            </Link>
          </div>
          
          <div className="footer-cta-wrap">
            <Link href="/consultation">
              <img
                src={SITE.ctaButtonImg}
                alt="Book Consultation"
                width={250}
                className="footer-cta-img"
              />
            </Link>
          </div>

          <div className="footer-contact-info">
            <p>
              <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
              <a href={`tel:${SITE.contact.phones[0]}`}>
                {SITE.contact.phones[0]}
              </a>
            </p>
            <p>
              <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i>
              <a href={`mailto:${SITE.contact.email}`}>
                {SITE.contact.email}
              </a>
            </p>
          </div>
        </FooterColumn>

        {/* Column 2: Treatment & Services */}
        <FooterColumn title="Treatment & Services">
          <ul>
            <li><Link href="/treatment-services">Treatment & Services</Link></li>
            <li><Link href="/renal-care-2">Renal care</Link></li>
            <li><Link href="/about-us">About us</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
          </ul>
        </FooterColumn>

        {/* Column 3: Treatments */}
        <FooterColumn title="Treatments">
          <ul>
            <li><Link href="/ivf">IVF</Link></li>
            <li><Link href="/iui">IUI</Link></li>
            <li><Link href="/ivm">IVM</Link></li>
            <li><Link href="/icsi-treatment">ICSI</Link></li>
            <li><Link href="/infertility-men-women">Infertility men & women</Link></li>
          </ul>
        </FooterColumn>

        {/* Column 4: Follow Us */}
        <FooterColumn title="Follow Us">
          <div className="footer-socials" style={{ marginTop: "0" }}>
            {SITE.social.facebook && (
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {SITE.social.twitter && (
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            )}
            <a href="https://in.pinterest.com/mmrhospitalraipur/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
            {SITE.social.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            )}
          </div>
        </FooterColumn>

      </div>

      {/* Footer Bottom Bar (Copyright & Legal) */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          {/* Copyright notice & credit links */}
          <div className="footer-bottom-credits">
            <span>Copyright © {currentYear} Martuchhaya Hospital.</span>
            <span>
              <a href="https://www.webmantra.net/" target="_blank" rel="noopener noreferrer">
                Credits Webmantra
              </a>
            </span>
            <img src={SITE.logoWM} alt="Webmantra Icon" width={20} height={21} className="logo-img" />
          </div>

          {/* Legal inline list */}
          <div className="footer-bottom-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-use">Terms</Link>
            <span>|</span>
            <Link href="/career">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
