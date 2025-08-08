import "./globals.css";


export const metadata = {
  title: "Abdul Ghaffar",
  icons: "/favicon.ico",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        {```
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JTMJLBDLGG"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JTMJLBDLGG');
        </script>```}
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
