"use client";

import { ChevronDown, Search } from "lucide-react";
import { Bubblegum_Sans } from "next/font/google";
import Image from "next/image";
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
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video> */}

      <Image
        src="/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Lavender Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-violet-300/50 via-fuchsia-200/40 to-purple-300/50" /> */}

      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      <FloatingPetals />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[100svh]">
        <div className="max-w-5xl mx-auto text-center">

          {/* Mobile Heading */}
          <div className="md:hidden">
            <h1
              className={`${bubblegum.className} text-6xl text-white leading-none mb-2`}
              style={{
                textShadow: `
                  0 1px 2px rgba(0,0,0,0.9),
                  0 2px 6px rgba(0,0,0,0.8),
                  0 4px 12px rgba(0,0,0,0.6)
                `,
              }}
            >
              Experience
            </h1>

            <h1
              className={`${bubblegum.className} text-5xl text-white leading-none mb-3`}
              style={{
                textShadow: `
                  0 1px 2px rgba(0,0,0,0.9),
                  0 2px 6px rgba(0,0,0,0.8),
                  0 4px 12px rgba(0,0,0,0.6)
                `,
              }}
            >
              the art of
            </h1>
          </div>

          {/* Desktop Heading */}
          <h1
            className={`${bubblegum.className} hidden md:block text-7xl lg:text-8xl text-white leading-tight`}
            style={{
              textShadow: `
                0 1px 2px rgba(0,0,0,0.9),
                0 2px 6px rgba(0,0,0,0.8),
                0 4px 12px rgba(0,0,0,0.6)
              `,
            }}
          >
            Experience the Art of
          </h1>

          {/* Animated Flower Name */}
          <div
            className={`${bubblegum.className} text-7xl sm:text-7xl md:text-8xl lg:text-9xl leading-none`}
            style={{
              textShadow: `
                0 1px 2px rgba(0,0,0,0.9),
                0 2px 6px rgba(0,0,0,0.8),
                0 4px 12px rgba(0,0,0,0.6)
              `,
            }}
          >
            <span className="text-[#A347D1]">
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
          <div
            className="mt-8 text-lg md:text-xl text-white/95 max-w-2xl mx-auto px-4"
            style={{
              textShadow: `
                0 2px 4px rgba(0,0,0,0.9),
                0 4px 10px rgba(0,0,0,0.7)
              `,
            }}
          >
            Discover our curated collection of stunning flower bouquets,
            crafted to bring joy and elegance to your special occasions.
          </div>

          {/* Explore CTA */}
          <Link
            href="/browse"
            className={`${bubblegum.className}
    mt-8 inline-flex items-center gap-2
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce hidden md:block z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;