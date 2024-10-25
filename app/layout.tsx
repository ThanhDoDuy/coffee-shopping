import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.css";


const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify weights you need
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Nikay Coffee shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={jost.className}>
      {children}
    </body>
  </html>
  );
}
