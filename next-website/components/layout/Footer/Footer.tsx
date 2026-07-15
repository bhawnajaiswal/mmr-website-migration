import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { SITE } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ backgroundColor: "#443c7c", color: "#f1f1f1", padding: "60px 0 20px" }}>
      <div className="footer-top-container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "40px"
      }}>
        
        {/* Column 1: Brand Info, Booking Button & Socials */}
        <FooterColumn>
          <div style={{ marginBottom: "20px" }}>
            <Link href="/">
              <img
                src={SITE.logo}
                alt={SITE.name}
                width={144}
                height={66}
                style={{ backgroundColor: "#ffffff", padding: "5px", borderRadius: "4px" }}
              />
            </Link>
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <Link href="/consultation">
              <img
                src={SITE.ctaButtonImg}
                alt="Book Consultation"
                width={250}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Link>
          </div>

          <div style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
            <p style={{ margin: "5px 0" }}>
              <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>
              <a href={`tel:${SITE.contact.phones[0]}`} style={{ color: "#f1f1f1", textDecoration: "none" }}>
                {SITE.contact.phones[0]}
              </a>
            </p>
            <p style={{ margin: "5px 0" }}>
              <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i>
              <a href={`mailto:${SITE.contact.email}`} style={{ color: "#f1f1f1", textDecoration: "none" }}>
                {SITE.contact.email}
              </a>
            </p>
          </div>

          <div className="footer-socials" style={{ display: "flex", gap: "15px" }}>
            {SITE.social.facebook && (
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "18px" }}>
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {SITE.social.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "18px" }}>
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {SITE.social.youtube && (
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "18px" }}>
                <i className="fab fa-youtube"></i>
              </a>
            )}
          </div>
        </FooterColumn>

        {/* Column 2: Treatment & Services */}
        <FooterColumn title="Treatment & Services">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <h6 style={{ color: "#ffffff", fontWeight: 600, margin: "0 0 10px 0", fontSize: "14px" }}>IVF Center</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                <li><Link href="/ivf-in-vitro-fertilization" style={{ color: "#f1f1f1", textDecoration: "none" }}>IVF – In vitro Fertilization</Link></li>
                <li><Link href="/iui-intra-uterine-insemination" style={{ color: "#f1f1f1", textDecoration: "none" }}>IUI – Intra Uterine Insemination</Link></li>
                <li><Link href="/womens-healthcare-fertility-center/icsi" style={{ color: "#f1f1f1", textDecoration: "none" }}>ICSI</Link></li>
                <li><Link href="/ivm-in-vitro-maturation-of-oocytes" style={{ color: "#f1f1f1", textDecoration: "none" }}>IVM – In Vitro Maturation</Link></li>
              </ul>
            </div>
            <div>
              <h6 style={{ color: "#ffffff", fontWeight: 600, margin: "0 0 10px 0", fontSize: "14px" }}>Renal Center</h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                <li><Link href="/renal-care/diagnosis" style={{ color: "#f1f1f1", textDecoration: "none" }}>Renal Diagnosis</Link></li>
                <li><Link href="/chromic-kidney-disease" style={{ color: "#f1f1f1", textDecoration: "none" }}>Chronic Kidney Disease</Link></li>
                <li><Link href="/renal-care/intensive-renal-care-unit" style={{ color: "#f1f1f1", textDecoration: "none" }}>Intensive Renal Care</Link></li>
                <li><Link href="/renal-care/intervention-nephrology" style={{ color: "#f1f1f1", textDecoration: "none" }}>Intervention Nephrology</Link></li>
              </ul>
            </div>
          </div>
        </FooterColumn>

        {/* Column 3: Quick Links */}
        <FooterColumn title="Quick Links">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", lineHeight: "2.2" }}>
            <li><Link href="/philosophy" style={{ color: "#f1f1f1", textDecoration: "none" }}>Philosophy</Link></li>
            <li><Link href="/founders" style={{ color: "#f1f1f1", textDecoration: "none" }}>Founders</Link></li>
            <li><Link href="/facilities" style={{ color: "#f1f1f1", textDecoration: "none" }}>Facilities</Link></li>
            <li><Link href="/career" style={{ color: "#f1f1f1", textDecoration: "none" }}>Career</Link></li>
            <li><Link href="/contact" style={{ color: "#f1f1f1", textDecoration: "none" }}>Contact</Link></li>
          </ul>
        </FooterColumn>

        {/* Column 4: Patient Zone */}
        <FooterColumn title="Patient Zone">
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", lineHeight: "2.2" }}>
            <li><Link href="/why-matruchhaya-hospitals" style={{ color: "#f1f1f1", textDecoration: "none" }}>Why Matruchhaya Hospitals</Link></li>
            <li><Link href="/consultation" style={{ color: "#f1f1f1", textDecoration: "none" }}>Consultation for Gynecology</Link></li>
            <li><Link href="/consultation-for-renal-problems" style={{ color: "#f1f1f1", textDecoration: "none" }}>Consultation for Renal Problems</Link></li>
            <li><Link href="/fertility-journey" style={{ color: "#f1f1f1", textDecoration: "none" }}>Fertility Journey</Link></li>
          </ul>
        </FooterColumn>

      </div>

      {/* Footer Bottom Bar (Copyright & Legal) */}
      <div className="footer-bottom" style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        marginTop: "40px",
        paddingTop: "20px",
        fontSize: "13px"
      }}>
        <div className="footer-bottom-container" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          {/* Copyright notice & credit links */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span>Copyright © {currentYear} Martuchhaya Hospital.</span>
            <span>
              <a href="https://www.webmantra.net/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "none" }}>
                Credits Webmantra
              </a>
            </span>
            <img src={SITE.logoWM} alt="Webmantra Icon" width={20} height={21} style={{ verticalAlign: "middle" }} />
          </div>

          {/* Legal inline list */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/privacy-policy" style={{ color: "#f1f1f1", textDecoration: "none" }}>Privacy Policy</Link>
            <span>|</span>
            <Link href="/disclaimer" style={{ color: "#f1f1f1", textDecoration: "none" }}>Disclaimer</Link>
            <span>|</span>
            <Link href="/terms-of-use" style={{ color: "#f1f1f1", textDecoration: "none" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
