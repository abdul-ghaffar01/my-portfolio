import ".././globals.css";


export const metadata = {
  title: "chat - Abdul Ghaffar",
  icons: "/favicon.ico",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
