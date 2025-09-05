import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from "./ui/fonts";
import Sidebar from "./sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Sidebar - Fixed width, left aligned */}
          <div className="w-64 bg-gray-50 border-r border-gray-200">
            <Sidebar />
          </div>

          {/* Main Content - Takes remaining space */}
          <div className="flex-1 bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}