import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel-Log-A travel log book",
  description: "Your Own Destinations Iternary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className=" bg-[#fdfae7] text-[#1c1c11]">
        <Navbar />
        <div className="min-h-screen pt-16 pb-16 bg-[#fdfae7] text-[#1c1c11]">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
