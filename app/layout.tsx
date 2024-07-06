import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navigation";
import SmoothScroll from "@/components/smoothScroll";

const inter = Inter({ subsets: ["latin"] });

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
