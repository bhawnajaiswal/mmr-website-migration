import TopBar from "./TopBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { SITE } from "@/config/site";

export default function Header() {
  return (
    <header className="site-header">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Branding & Navigation Row */}
      <div className="main-header-row">
        <div className="header-container">
          {/* Logo Branding */}
          <div className="header-col-left">
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <div className="header-col-center">
            <Navigation />
          </div>

          {/* Right Side: CTA Button / Mobile Trigger */}
          <div className="header-col-right">
            {/* Inquiry Trigger */}
            <a href="/contact" className="hfe-enquiry-trigger" aria-label="Book Consultation">
              <img
                src={SITE.logoEnq}
                alt="Book Consultation"
                width={41}
                height={41}
                className="logo-img"
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
