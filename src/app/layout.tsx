import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";
import "./style.css";
import Script from "next/script";

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "فاطمة محمد - الصحة تبدأ من التغذية السليمة - اكتشف حياتك الصحية الآن!",
  description: "الموقع الخاص بأخصائية التغذية فاطمة محمد - الأردن",
};

export const revalidate = 60 * 60 * 24 * 7; // seconds * minutes * hours * days

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={arabicFont.className}>
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
