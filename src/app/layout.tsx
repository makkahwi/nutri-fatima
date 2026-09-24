import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";

import Script from "next/script";
import { getSiteUrl } from "./site-url";

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

const baseMetadata: Metadata = {
  title: "فاطمة محمد | أخصائية تغذية سريرية وحميات في الأردن",
  description:
    "فاطمة محمد أخصائية تغذية سريرية وحميات في الأردن. تقدم استشارات تغذية وخططًا غذائية شخصية لخسارة الوزن وزيادته بشكل صحي وبناء عادات غذائية متوازنة.",
  openGraph: {
    type: "profile",
    locale: "ar_JO",
    title: "فاطمة محمد | أخصائية تغذية في الأردن",
    description: "استشارات تغذية سريرية وحميات وخطط غذائية شخصية مع فاطمة محمد في الأردن.",
    images: [{ url: "/images/logo/logo-c.png", alt: "شعار فاطمة محمد أخصائية التغذية" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
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

export function generateMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  return {
    ...baseMetadata,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: siteUrl },
    openGraph: { ...baseMetadata.openGraph, url: siteUrl, siteName: "فاطمة محمد" },
    twitter: {
      card: "summary_large_image",
      title: "فاطمة محمد | أخصائية تغذية في الأردن",
      description: "استشارات تغذية سريرية وحميات وخطط غذائية شخصية مع فاطمة محمد في الأردن.",
      images: ["/images/logo/logo-c.png"],
    },
  };
}

export const revalidate = 60 * 60 * 24 * 7; // seconds * minutes * hours * days

const Layout = ({ children }: { children: React.ReactNode }) => {
  const siteUrl = getSiteUrl();
  return (
    <html dir="rtl" lang="ar">
      <body className={`${arabicFont.variable} ${englishFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteUrl}/#fatima-mohammad`,
              url: siteUrl,
              name: "فاطمة محمد",
              alternateName: "Fatima Mohammad",
              jobTitle: "أخصائية تغذية سريرية وحميات",
              description: "أخصائية تغذية سريرية وحميات في الأردن، تقدم استشارات وخطط تغذية شخصية.",
              email: "fatemamohammad2008@gmail.com",
              telephone: "+962797035869",
              address: { "@type": "PostalAddress", addressCountry: "JO" },
              knowsAbout: ["التغذية السريرية", "الحميات", "التثقيف الغذائي"],
              alumniOf: { "@type": "CollegeOrUniversity", name: "الجامعة الهاشمية" },
            }).replace(/</g, "\\u003c"),
          }}
        />
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
