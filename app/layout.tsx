import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navigation";
import SmoothScroll from "@/components/smoothScroll";
import localFont from 'next/font/local'
const inter = Inter({ subsets: ["latin"] });
const bitmapFont = localFont({
  variable: '--font-StrechPro',
  src: '../public/fonts/StretchPro.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Skylink",
  description: "Skylink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <SmoothScroll>
          <NavBar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
