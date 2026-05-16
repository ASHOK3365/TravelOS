import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI TravelOS — Your AI-Powered Travel Planner",
  description:
    "Plan your dream trip with AI-generated itineraries, smart route optimization, real-time weather alerts, and collaborative group planning. Powered by Gemini AI.",
  keywords: ["travel planner", "AI itinerary", "trip planner", "travel OS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
