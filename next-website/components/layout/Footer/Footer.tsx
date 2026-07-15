import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { SITE } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        
        {/* Column 1: Brand Info, Booking Button & Socials */}
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

          <div className="footer-socials">
            {SITE.social.facebook && (
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {SITE.social.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {SITE.social.youtube && (
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            )}
          </div>
        </FooterColumn>

        {/* Column 2: Treatment & Services */}
        <FooterColumn title="Treatment & Services">
          <div className="footer-treatment-split">
            <div>
              <h6>IVF Center</h6>
              <ul>
                <li><Link href="/ivf-in-vitro-fertilization">IVF – In vitro Fertilization</Link></li>
                <li><Link href="/iui-intra-uterine-insemination">IUI – Intra Uterine Insemination</Link></li>
                <li><Link href="/womens-healthcare-fertility-center/icsi">ICSI</Link></li>
                <li><Link href="/ivm-in-vitro-maturation-of-oocytes">IVM – In Vitro Maturation</Link></li>
              </ul>
            </div>
            <div>
              <h6>Renal Center</h6>
              <ul>
                <li><Link href="/renal-care/diagnosis">Renal Diagnosis</Link></li>
                <li><Link href="/chromic-kidney-disease">Chronic Kidney Disease</Link></li>
                <li><Link href="/renal-care/intensive-renal-care-unit">Intensive Renal Care</Link></li>
                <li><Link href="/renal-care/intervention-nephrology">Intervention Nephrology</Link></li>
              </ul>
            </div>
          </div>
        </FooterColumn>

        {/* Column 3: Quick Links */}
        <FooterColumn title="Quick Links">
          <ul>
            <li><Link href="/philosophy">Philosophy</Link></li>
            <li><Link href="/founders">Founders</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </FooterColumn>

        {/* Column 4: Patient Zone */}
        <FooterColumn title="Patient Zone">
          <ul>
            <li><Link href="/why-matruchhaya-hospitals">Why Matruchhaya Hospitals</Link></li>
            <li><Link href="/consultation">Consultation for Gynecology</Link></li>
            <li><Link href="/consultation-for-renal-problems">Consultation for Renal Problems</Link></li>
            <li><Link href="/fertility-journey">Fertility Journey</Link></li>
          </ul>
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
            <Link href="/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
