import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";

import Script from "next/script";

const arabicFont = localFont({
  src: [
    { path: "../assets/fonts/ar/Alexandria-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/ar/Alexandria-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/ar/Alexandria-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/ar/Alexandria-Bold.ttf", weight: "700" },
  ],
  variable: "--font-arabic",
  display: "swap",
});

const englishFont = localFont({
  src: [
    { path: "../assets/fonts/en/Montserrat-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/en/Montserrat-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/en/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/en/Montserrat-Bold.ttf", weight: "700" },
  ],
  variable: "--font-english",
  fallback: [],
  adjustFontFallback: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fatimamohammad.com"),
  title: { default: "فاطمة محمد | تغذية صحية بلا حرمان", template: "%s | فاطمة محمد" },
  description: "الموقع الخاص بأخصائية التغذية فاطمة محمد - الأردن",
  keywords: ["تغذية صحية", "أخصائية تغذية", "نظام غذائي متوازن", "موسوعة التغذية", "الأردن"],
  authors: [{ name: "فاطمة محمد" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ar_JO", siteName: "فاطمة محمد", title: "فاطمة محمد | تغذية صحية بلا حرمان", description: "تغذية متوازنة ومحتوى عربي موثق يساعدك على بناء نمط صحي قابل للاستمرار." },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "فاطمة محمد",
    statusBarStyle: "default",
  },
};

export const revalidate = 60 * 60 * 24 * 7; // seconds * minutes * hours * days

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="rtl" lang="ar">
      <body className={`${arabicFont.variable} ${englishFont.variable}`}>
        <main>{children}</main>

        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G67CGLCY30"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G67CGLCY30');
          `}
        </Script>
      </body>
    </html>
  );
};

export default Layout;
