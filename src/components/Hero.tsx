"use client";

import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const maxTranslate = isMobile ? 90 : 180;
  const currentTranslate = Math.max(0, maxTranslate - scrollY);

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

      {/* <FloatingPetals /> */}

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
          {/* <div
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
          </div> */}

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
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce hidden md:block z-30"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      {/* Torn Paper Effect Transition */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none select-none flex flex-col items-center"
        style={{ transform: `translateY(${currentTranslate}px)` }}
      >
        {/* Flower Sketch Illustration positioned in the middle of the torn paper */}
        <div className="absolute bottom-2 md:bottom-4 z-30 opacity-60">
          <svg
            viewBox="0 0 100 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-14 h-16 md:w-20 md:h-24 text-purple-900/20 dark:text-purple-300/20"
          >
            {/* Main stem */}
            <path d="M50,110 C50,85 52,60 48,35" />
            {/* Center flower */}
            <path d="M48,35 C45,28 42,25 45,20 C47,15 51,15 53,20 C56,25 53,28 50,35" />
            <path d="M45,20 C48,22 50,22 53,20" />
            <path d="M48,35 C48,26 50,26 50,35" />
            {/* Left branch */}
            <path d="M49,75 C42,70 38,62 34,55" />
            {/* Left flower */}
            <path d="M34,55 C30,51 28,48 32,44 C35,40 39,42 40,47 C41,51 38,53 34,55" />
            <path d="M32,44 C34,46 36,47 40,47" />
            {/* Right branch */}
            <path d="M50,60 C58,55 62,47 66,40" />
            {/* Right flower */}
            <path d="M66,40 C62,36 60,33 64,29 C67,25 71,27 72,32 C73,36 70,38 66,40" />
            <path d="M64,29 C66,31 68,32 72,32" />
            {/* Leaf details */}
            <path d="M49,90 C42,88 38,82 44,80 C48,78 50,84 49,90 Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M50,80 C58,78 62,72 56,70 C52,68 50,74 50,80 Z" fill="currentColor" fillOpacity="0.1" />
          </svg>
        </div>

        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="relative block w-full h-[90px] md:h-[180px]"
        >
          {/* Layer 1: Back Paper (Lighter/Shadowed appearance) */}
          <path
            d={generateTornPath(1440, 200, 155, 115, 12, 42)}
            fill="hsl(280 50% 96%)"
            opacity={0.4}
            className="translate-y-[-5px]"
          />
          {/* Layer 2: Main Paper */}
          <path
            d={generateTornPath(1440, 240, 160, 115, 10, 84)}
            fill="hsl(280 50% 96%)"
            style={{
              filter: "drop-shadow(0px -5px 10px rgba(0, 0, 0, 0.05))",
            }}
          />
        </svg>
      </div>
    </section>
  );
};

// Seeded pseudo-random torn path generator for hydration safety
const generateTornPath = (
  width: number,
  segments: number,
  baseHeight: number,
  peakHeight: number,
  variance: number,
  seed: number
) => {
  let path = `M 0 ${baseHeight}`;
  const step = width / segments;
  for (let i = 1; i <= segments; i++) {
    const rawVal = Math.sin(seed + i * 13.37) * 43758.5453123;
    const r = rawVal - Math.floor(rawVal);
    const x = i * step;

    // Center-focused upward peak (sin curve)
    const centerFactor = Math.sin(Math.PI * (i / segments));
    // Calculate the baseline curving upwards in the middle (using power for a steeper peak)
    const currentBase = baseHeight - peakHeight * Math.pow(centerFactor, 2.5);

    // High frequency micro-noise for paper fibers
    const fiberVal = Math.sin(seed * 2 + i * 27.89) * 23456.789;
    const fiberR = fiberVal - Math.floor(fiberVal);

    // Variance is slightly boosted at the center peak
    const dynamicVariance = variance * (1.0 + 0.5 * centerFactor);
    const wave = Math.sin(i * 0.22) * (dynamicVariance * 0.45);
    const noise = (r - 0.5) * (dynamicVariance * 0.45) + (fiberR - 0.5) * 5;
    const y = currentBase + wave + noise;

    path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  path += ` L ${width} 200 L 0 200 Z`;
  return path;
};

export default Hero;