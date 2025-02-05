import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Abdul Ghaffar</title>
      </head>
      <body className="overflow-x-hidden bg-purple-50">
        {children}
      </body>
    </html>
  );
}
