import TopBar from "./TopBar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      {/* Top Contact Bar */}
      {/* <TopBar /> */}

      {/* Main Branding & Navigation Row */}
      <div className="main-header-row">
        <div className="header-container">
          
          {/* Left Side: Logo & Brand Name Title */}
          <div className="header-col-left">
            <Logo variant="header" />
            <h2 className="header-brand-title">
              <Link href="/">MMR Hospital &amp; IVF Center</Link>
            </h2>
          </div>

          {/* Center/Right: Desktop Navigation */}
          <div className="header-col-center">
            <Navigation />
          </div>

          {/* Right Side: Mobile Drawer Trigger */}
          <div className="header-col-right">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}