"use client";
import { DM_Sans } from "next/font/google";
import SideBar from "@/components/commons/SideBar";
import Header from "@/components/commons/Header";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

// Initialize the font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <NextUIProvider>
          <div className="flex justify-start items-start relative w-full h-full min-h-screen max-h-screen overflow-hidden bg-[#F5F5F5]">
            <SideBar />
            <main className="flex flex-col relative justify-start items-start w-full h-full min-h-screen max-h-screen overflow-hidden bg-[#F6F6F6]">
              <Header />
              <div className=" w-full h-auto overflow-auto">{children}</div>
            </main>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
