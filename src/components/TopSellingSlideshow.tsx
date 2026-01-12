"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface SlideItem {
  id: string;
  name: string;
  price: number;
  image: string;
  whatsapp_link?: string;
}

interface TopSellingShowProps {
  items?: SlideItem[];
}

// Default top selling items - replace with your actual data source
const defaultTopSelling: SlideItem[] = [
  {
    id: "1",
    name: "Premium Red Roses",
    price: 999,
    image: "/rose.png",
  },
  {
    id: "2",
    name: "Sunflower Bliss",
    price: 749,
    image: "/sunflower.png",
  },
  {
    id: "3",
    name: "Gerbera Mix",
    price: 849,
    image: "/gerbera.png",
  },
  {
    id: "4",
    name: "Exotic Orchids",
    price: 1299,
    image: "/orchid.png",
  },
];

const TopSellingSlideshow = ({ items = defaultTopSelling }: TopSellingShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentItem = items[currentIndex];

  return (
    <section
      id="topsellingslideshow"
      className="w-full bg-gradient-to-b from-background to-primary-light/10 py-8 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Top Selling Bouquets
          </h2>
          {/* <p className="text-muted-foreground text-sm md:text-base">
            Our most loved bouquets by customers
          </p> */}
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg group">
            <Image
              src={currentItem.image}
              alt={currentItem.name}
              fill
              className="w-full h-full object-cover transition-opacity duration-500"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
            />

            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Item Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <h3 className="text-xl md:text-3xl font-bold mb-2">
                {currentItem.name}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-bold">
                  ₹{currentItem.price}
                </span>
                <a
                  href={currentItem.whatsapp_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm" className="md:size-default">
                    Order Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-foreground transition-colors opacity-0 group-hover:opacity-100 md:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-foreground transition-colors opacity-0 group-hover:opacity-100 md:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators / Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          {/* <div className="mt-6 md:mt-8 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                  <p className="text-white text-xs md:text-sm font-semibold truncate">
                    {item.name}
                  </p>
                </div>
              </button>
            ))}
          </div> */}

          {/* Browse All Button */}
          {/* <div className="text-center mt-8">
            <a href="#collections">
              <Button variant="outline" className="text-sm md:text-base">
                Browse All Collections
              </Button>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopSellingSlideshow;
