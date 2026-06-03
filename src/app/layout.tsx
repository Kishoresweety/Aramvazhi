import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aram Vazhi — Empowering Society Through Ethical Technology",
    template: "%s | Aram Vazhi",
  },
  description:
    "Aram Vazhi is a digital welfare initiative focused on ethical technology, digital literacy, cybersecurity awareness, responsible AI, media literacy, and social impact.",
  keywords: [
    "digital welfare",
    "ethical AI",
    "cybersecurity awareness",
    "digital literacy",
    "media literacy",
    "social impact",
    "responsible technology",
    "Aram Vazhi",
  ],
  authors: [{ name: "Aram Vazhi" }],
  openGraph: {
    title: "Aram Vazhi — Technology for Humanity",
    description:
      "Building awareness, digital resilience, cybersecurity knowledge, and responsible AI for a healthier digital future.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aram Vazhi — Technology for Humanity",
    description:
      "Building awareness, digital resilience, and responsible AI for a healthier digital future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
