import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-purple-50">
        {children}
      </body>
    </html>
  );
}
