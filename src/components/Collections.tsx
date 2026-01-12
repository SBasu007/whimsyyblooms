"use client"


import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FlowerCard from "./FlowerCard";

const flowers = [
  {
    name: "Sunflower",
    category: "sunflower",
    description: "Bright and cheerful blooms that bring warmth and happiness to any space.",
    buyout:"Pure sunshine bursting with joy – perfect for uplifting the heart." ,
    image: "/sunflower.png",
    color: "#F5B041",
  },
  {
    name: "Gerbera",
    category: "gerbera",
    description: "Vibrant daisy-like flowers available in a stunning array of colors.",
    buyout:"Lively compositions of gerberas , gracefully symbolizing purity, innocence, and joy",
    image: "/gerbera.png",
    color: "#E74C3C",
  },
  {
    name: "Orchid",
    category: "orchid",
    description: "Exotic and elegant blooms that symbolize luxury and refined beauty.",
    buyout:"Exquisite orchids symbolizing luxury, rare beauty, and enduring love.",
    image: "/orchid.png",
    color: "#CB94F7",
  },
  {
    name: "Market Roses",
    category: "localrose",
    description: "Timeless classics expressing love, passion and heartfelt emotions.",
    buyout:"Where every petal is a promise of love",
    image: "/rose.png",
    color: "#C0392B",
  },
  {
    name: "Premium Roses",
    category: "bangalorerose",
    description: "Premium roses known for their vibrant colors and long-lasting freshness.",
    buyout:"Premium roses renowned for vibrant color and lasting freshness.",  
    image: "/bangalorerose.png",
    color: "#E91E63",
  },
  {
    name: "Hot Wheels",
    category: "hotwheels",
    description: "Adorable and fun toys to bring joy to every occasion.",
    buyout:"Perfect for young enthusiasts and playful gifts that combine excitement with elegance.",
    image: "/toy.png",
    color: "#FFD700",
  },
  {
    name: "Chocolates",
    category: "chocolate",
    description: "Delicious chocolates to sweeten your celebrations.",
    buyout:"Here every chocolate is a flower and every bite is a bloom of pure joy",
    image: "/chocolate.png",
    color: "#8B4513",
  },
];

const Collections = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // width of one card + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="collections" className="py-5 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light/50 text-primary-darker rounded-full text-sm font-medium mb-4">
            Our Collections
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Collections
          </h2>
          <p className="text-muted-foreground text-lg">
            Each bouquet is thoughtfully arranged to capture the unique essence 
            and beauty of nature&apos;s most stunning blooms.
          </p>
        </div>

        {/* Responsive Carousel/Grid */}
        {/* Mobile: grid, Desktop: horizontal carousel */}
        <div>
          {/* Mobile grid (shown on small screens) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {flowers.map((flower, index) => (
              <Link 
                key={flower.name}
                href={`/collections/${flower.category}${flower.buyout ? `?buyout=${encodeURIComponent(flower.buyout)}` : ''}`}
                className="flex flex-col items-center animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-foreground mt-3 group-hover:text-primary transition-colors">
                  {flower.name}
                </p>
              </Link>
            ))}
          </div>
          {/* Desktop carousel (shown on md and up) */}
          <div className="relative hidden md:block">
            {/* Left Button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Scroll left"
              style={{ marginLeft: '-32px' }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            {/* Right Button */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Scroll right"
              style={{ marginRight: '-32px' }}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-8 pb-4 scroll-smooth hide-scrollbar"
            >
              {flowers.map((flower, index) => (
                <div key={flower.name} className="flex-none w-80">
                  <FlowerCard
                    {...flower}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Collections;
