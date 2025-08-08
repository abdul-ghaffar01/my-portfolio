import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Abdul Ghaffar",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This will add GA in the head */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JTMJLBDLGG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JTMJLBDLGG');
          `}
        </Script>
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
