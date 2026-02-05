import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "red", height: "50px"}}>
          <p>Hey im Header</p>
        </header>
        <main>{children}</main>
        <footer style={{backgroundColor: "orange", color: "blue", height: "50px"}}>
          <p>Hey im footer</p>
        </footer>
      </body>
    </html>
  );
}