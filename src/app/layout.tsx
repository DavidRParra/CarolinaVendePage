import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/SocialMedia";


const fuente = Roboto({
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carolina Vende",
  description: "Carolina Vende Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={fuente.className}
      >
        
        <NavBar/>
        
        {children}
        

        <SocialMedia/>
      </body>
    </html>
  );
}
