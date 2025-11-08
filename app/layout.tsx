import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Earnkit",
  description: "Launch & Earn your next app",
  icons: "/logo-2.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="/bg.png" />
      </Head>

      <body className="overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
