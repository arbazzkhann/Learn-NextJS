import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARBAZ",
  description: "Learning NextJS"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const productId = 100

  return (
    <html lang="en">
      <body>
        <nav className="bg-red">
          <ul>
            <Link href="/" replace><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href={`/products`}><li>Products</li></Link>
            <Link href={`/products/${productId}`} replace><li>Product Page</li></Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
