import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VerifyID",
  description: "Verify South African ID's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
