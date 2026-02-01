import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
          </ul>
        </nav>
        <input type="text" placeholder="Enter text"/>
        {children}
      </body>
    </html>
  );
}