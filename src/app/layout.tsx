import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/\bFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ viewport는 metadata에서 빼고 별도 export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LaunchMate - AI-Powered Business Plan Generator",
  description:
    "Transform your startup ideas into comprehensive business plans with AI. Generate market analysis, competitor research, revenue models, and pitch decks automatically.",
  keywords: ["business plan", "startup", "AI", "market analysis", "pitch deck", "entrepreneur"],
  authors: [{ name: "LaunchMate" }],
  robots: "index, follow",
  openGraph: {
    title: "LaunchMate - AI-Powered Business Plan Generator",
    description: "Transform your startup ideas into comprehensive business plans with AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchMate - AI-Powered Business Plan Generator",
    description: "Transform your startup ideas into comprehensive business plans with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
