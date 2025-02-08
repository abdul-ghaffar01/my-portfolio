export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <title>Instagram home page ui clone using tailwindcss</title>
      </head>
      <body className="bg-black h-fit overflow-scroll">
        {children}
      </body>
    </html>
  );
}
