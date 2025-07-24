import "./globals.css";


export const metadata = {
  title: "Abdul Ghaffar",
  icons: "/favicon.ico",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="overflow-x-hidden bg-purple-50">
        {children}
      </body>
    </html>
  );
}
