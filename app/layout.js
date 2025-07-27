import "./globals.css";


export const metadata = {
  title: "Abdul Ghaffar",
  icons: "/favicon.ico",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3848566710959127"
            crossorigin="anonymous"></script>
      </head>
      <body className="overflow-x-hidden bg-purple-50">
        {children}
      </body>
    </html>
  );
}
