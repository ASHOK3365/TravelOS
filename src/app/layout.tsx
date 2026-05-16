import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelOS — AI-Powered Travel Intelligence",
  description: "Plan, optimize, and experience trips with AI-powered itineraries, smart routing, live weather, and budget intelligence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
