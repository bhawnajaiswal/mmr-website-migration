import type { Metadata } from "next";
import { Jost, Montserrat, Nunito, Roboto } from "next/font/google";
import { SITE } from "@/config/site";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";
import "./globals.css";

// Google Fonts Optimization via next/font/google
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// App Router Metadata API Configuration
export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: [
    "IVF Raipur", 
    "Kidney Care Raipur", 
    "Best IVF Center Raipur", 
    "MMR Hospital", 
    "Nephrology Chhattisgarh"
  ],
  authors: [{ name: "MMR Hospital & IVF Center" }],
  creator: "MMR Hospital",
  publisher: "MMR Hospital",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: SITE.name,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${jost.variable} ${montserrat.variable} ${nunito.variable} ${roboto.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18149939807"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18149939807');
          `}
        </Script>
        {/* Global Stylesheets from Asset Layer (Swiper stylesheet purged in REF-016) */}
        <link rel="stylesheet" href="/css/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/css/frontend-lite.min.css" />
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
