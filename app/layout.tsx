import type { Metadata } from "next";
import "./globals.css";
import {Footer,Navbar} from "@/components";
import React from "react";



export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @ts-ignore
    // @ts-ignore
    return (
    <html lang="en">
      <body className="relative">
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
