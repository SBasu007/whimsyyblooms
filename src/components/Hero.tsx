"use client";

import { ChevronDown, Search } from "lucide-react";
import { Bubblegum_Sans } from "next/font/google";
import TextType from "./TextType";
import FloatingPetals from "./FloatingPetals";
import Link from "next/link";

const bubblegum = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden min-h-[100svh] md:min-h-screen"
    >
      {/* <FloatingPetals /> */}

      {/* Lavender Watercolor Droplets Background with Mask to fade to transparent at the bottom */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none gradient-soft"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
        }}
      >
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="watercolor-filter">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
              <feDisplacementMap in="blur" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            </filter>

            <linearGradient id="droplet-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="droplet-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FCE7F3" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="droplet-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#E0E7FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Droplet 1: Top Left - Purple/Lavender */}
        <svg
          viewBox="0 0 200 200"
          className="absolute -top-10 -left-10 w-64 h-64 md:w-[450px] md:h-[450px] mix-blend-multiply opacity-80 animate-float"
          style={{ animationDuration: "12s" }}
        >
          <path
            d="M 90,30 C 135,25 175,65 170,110 C 165,155 130,175 90,170 C 50,165 35,130 30,90 C 25,50 45,35 90,30 Z"
            fill="url(#droplet-grad-1)"
            filter="url(#watercolor-filter)"
          />
        </svg>

        {/* Droplet 2: Top Right - Pink/Lavender */}
        <svg
          viewBox="0 0 200 200"
          className="absolute top-20 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] mix-blend-multiply opacity-75 animate-float"
          style={{ animationDuration: "16s", animationDelay: "2s" }}
        >
          <path
            d="M 100,40 C 140,30 170,70 165,110 C 160,150 120,165 95,160 C 70,155 45,135 40,95 C 35,55 60,50 100,40 Z"
            fill="url(#droplet-grad-2)"
            filter="url(#watercolor-filter)"
          />
        </svg>

        {/* Droplet 3: Center Left - Indigo/Lavender */}
        <svg
          viewBox="0 0 200 200"
          className="absolute top-[40%] -left-16 w-60 h-60 md:w-[350px] md:h-[350px] mix-blend-multiply opacity-80 animate-float"
          style={{ animationDuration: "14s", animationDelay: "1s" }}
        >
          <path
            d="M 95,35 C 130,25 160,55 155,95 C 150,135 125,165 85,160 C 45,155 40,115 35,85 C 30,55 60,45 95,35 Z"
            fill="url(#droplet-grad-3)"
            filter="url(#watercolor-filter)"
          />
        </svg>

        {/* Droplet 4: Bottom Right - Lavender/Fuchsia */}
        <svg
          viewBox="0 0 200 200"
          className="absolute bottom-10 -right-16 w-72 h-72 md:w-[400px] md:h-[400px] mix-blend-multiply opacity-75 animate-float"
          style={{ animationDuration: "18s" }}
        >
          <path
            d="M 100,30 C 145,25 165,65 160,105 C 155,145 125,170 90,165 C 55,160 45,125 40,90 C 35,55 55,35 100,30 Z"
            fill="url(#droplet-grad-1)"
            filter="url(#watercolor-filter)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[100svh]">
        <div className="max-w-5xl mx-auto text-center">

          {/* Mobile Heading */}
          <div className="md:hidden">
            <h1 className={`${bubblegum.className} text-6xl text-black leading-none mb-2`}>
              Experience
            </h1>

            <h1 className={`${bubblegum.className} text-5xl text-black leading-none mb-3`}>
              the art of
            </h1>
          </div>

          {/* Desktop Heading */}
          <h1 className={`${bubblegum.className} hidden md:block text-7xl lg:text-8xl text-black leading-tight`}>
            Experience the Art of
          </h1>

          {/* Animated Flower Name */}
          <div className={`${bubblegum.className} text-7xl sm:text-7xl md:text-8xl lg:text-9xl leading-none`}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              <TextType
                text={[
                  "Bouquets",
                  "Roses",
                  "Orchids",
                  "Gerberas",
                  "Sunflowers",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                showCursor
                cursorCharacter="."
              />
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-xl text-muted-foreground mt-6 md:mt-8 mb-6 md:mb-8 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover our curated collection of stunning flower bouquets,
            crafted to bring joy and elegance to your special occasions.
          </p>


          {/* Explore CTA */}
          <Link
            href="/browse"
            className={`${bubblegum.className}
    inline-flex items-center gap-2
    px-6 py-3 rounded-full
    bg-[#A347D1] text-white text-lg font-medium
    hover:bg-[#A347D1]
    hover:scale-105
    transition-all duration-300
  `}
            style={{
              textShadow: `
      0 1px 2px rgba(0,0,0,0.9),
      0 2px 6px rgba(0,0,0,0.8),
      0 4px 12px rgba(0,0,0,0.6)
    `,
              boxShadow: `
      0 4px 10px rgba(0,0,0,0.35),
      0 8px 24px rgba(163,71,209,0.35),
      0 0 40px rgba(163,71,209,0.15)
    `,
            }}
          >
            Explore
            <Search className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#topsellingslideshow"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-purple-950/50 hover:text-[#A347D1] transition-colors animate-bounce hidden md:block z-30"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;