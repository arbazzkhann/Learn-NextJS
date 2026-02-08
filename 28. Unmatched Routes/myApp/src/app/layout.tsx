import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className='bg-red-600 text-white'>
            <p>I am main header.</p>
        </header>
        <main>{children}</main>
        <footer className='bg-blue-600 text-white'>
            <p>I am main footer.</p>
        </footer>
      </body>      
    </html>
  );
}
