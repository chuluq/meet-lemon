import type { Metadata } from "next";
import { Be_Vietnam_Pro, Outfit } from "next/font/google";
import "./globals.css";

const be_vietnam_pro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Meet Lemon",
  description: "Build a better site for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${be_vietnam_pro.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
