import type { Metadata } from "next";
import { Playfair_Display, Raleway, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whimsyy Blooms - Art of Bouquet",
  description: "Discover our curated collection of stunning flower bouquets, crafted to bring joy and elegance to your special occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1CWRC8E1F8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CWRC8E1F8');
          `}
        </script>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${raleway.variable} ${cinzel.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}
