import type { Metadata } from "next";
import { SITE } from "@/config/site";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&family=Roboto+Slab:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Global Stylesheets from Asset Layer */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/css/frontend-lite.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/widget-slides.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/header-footer.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/style.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/hello-elementor/theme.min.css" />
        <link rel="stylesheet" href="/css/common.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
        {/* Site Global Header Shell */}
        <Header />

        {/* Page Content Container */}
        <main className="site-main-content">
          {children}
        </main>

        {/* Site Global Footer Shell */}
        <Footer />
      </body>
    </html>
  );
}
