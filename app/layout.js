import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Abdul Ghaffar – Full Stack Developer & Cloud Solutions Expert",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta Description for SEO */}
        <meta
          name="description"
          content="Portfolio of Abdul Ghaffar, a full-stack developer skilled in Next.js, Node.js, and Golang for cloud solutions. Explore projects and expertise."
        />

        {/* ✅ Open Graph Tags for social sharing */}
        <meta
          property="og:title"
          content="Abdul Ghaffar – Full Stack Developer & Cloud Solutions Expert"
        />
        <meta
          property="og:description"
          content="Explore my portfolio showcasing projects in Next.js, Node.js, and Golang for cloud solutions."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://iabdulghaffar.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Google Analytics */}
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

        {/* ✅ JSON-LD Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdul Ghaffar",
              url: "https://iabdulghaffar.com",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/abdul-ghaffar01",
                "https://linkedin.com/in/abdul-ghaffar01",
              ],
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
