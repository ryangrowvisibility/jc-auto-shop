import type { Metadata } from "next";
import { Bitter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-bitter" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-hanken" });

export const metadata: Metadata = {
  title: "JC Auto Shop | Auto Repair in Downtown Sacramento | (916) 492-1377",
  description:
    "Independent auto repair at 501 T St, Downtown Sacramento. Oil changes, brakes, A/C, clutches, alignments, transmissions, windshields and more. Rated 4.9 on Google. Call (916) 492-1377.",
  openGraph: {
    title: "JC Auto Shop | Auto Repair in Downtown Sacramento",
    description: "Honest mechanics, fair prices, a deep service menu. Call (916) 492-1377.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bitter.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
