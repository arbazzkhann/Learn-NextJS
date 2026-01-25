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
          <li className="flex justify-around bg-amber-700 text-white font-bold">
            <Link href='/'><ul>Home</ul></Link>
            <Link href='/about'><ul>About</ul></Link>
            <Link href='/contact'><ul>Contact</ul></Link>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
