import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "TravelLog | Share Your Travel Stories",
  description:
    "A community travel journal where you can log trips, add photos and explore destinations on an interactive map.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className=" bg-[#f7f5f0] text-[#1c1c11]">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-[#f7f5f0] text-[#1c1c11]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}