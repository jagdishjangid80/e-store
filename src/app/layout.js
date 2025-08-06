// src/app/layout.js
import "./globals.css";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "E-store",
  keywords: "E-store, online shopping, e-commerce",
  description: "Your one-stop shop for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}