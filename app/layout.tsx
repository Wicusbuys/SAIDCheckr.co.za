import type { Metadata } from "next";
import { Lato } from 'next/font/google'
import "./globals.css";

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SAIDCheckr",
  description: "Verify South African ID's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
