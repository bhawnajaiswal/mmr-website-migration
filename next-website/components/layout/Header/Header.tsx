import TopBar from "./TopBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { SITE } from "@/config/site";

export default function Header() {
  return (
    <header className="site-header" style={{ width: "100%", position: "relative", zIndex: 1000, backgroundColor: "#ffffff" }}>
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Branding & Navigation Row */}
      <div className="main-header-row" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "10px 0" }}>
        <div className="header-container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px"
        }}>
          {/* Logo Branding */}
          <div className="header-col-left">
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <div className="header-col-center">
            <Navigation />
          </div>

          {/* Right Side: CTA Button / Mobile Trigger */}
          <div className="header-col-right" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Inquiry Trigger */}
            <a href="/contact" className="hfe-enquiry-trigger" aria-label="Book Consultation" style={{ display: "inline-block" }}>
              <img
                src={SITE.logoEnq}
                alt="Book Consultation"
                width={41}
                height={41}
                style={{ verticalAlign: "middle" }}
              />
            </a>

            {/* Mobile Navigation Drawer Trigger */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
