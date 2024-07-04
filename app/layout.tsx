import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navigation";
import Layout from "@/components/stairsTransition";

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
        <Layout>
          <NavBar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
