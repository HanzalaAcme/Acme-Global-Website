import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
//import { Analytics } from "@vercel/analytics/next";

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/PlayfairDisplay-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  fallback: ["Playfair Display", "georgia", "New Times Roman", "serif"],
  display: "swap",
  preload: false,
});

const Dm_Sans = localFont({
  src: "../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
  weight: "300 400 500",
  variable: "--font-dm-sans",
  fallback: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  preload: false,
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.acmeglobal.tech"),
  title: "ACME Global Hub",
  description:
    "ACME Global Hub delivers cloud, cybersecurity, enterprise applications, AI and managed IT services that help businesses modernize, work securely and grow.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${Dm_Sans.className} h-full antialiased`}
    >
      <body className="overflow-x-hidden min-h-full flex flex-col">
        <Navbar />
        <GoogleAnalytics/>
        {children}
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
