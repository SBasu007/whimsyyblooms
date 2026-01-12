"use client"

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center gradient-soft overflow-hidden pt-16 md:pt-20 md:min-h-screen"
    >
      {/* Decorative Elements - Hidden on Mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-light/50 text-primary-darker rounded-full text-sm font-medium mb-4 md:mb-6 animate-fade-up">
          </span>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Experience the Art of{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Bouquets
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover our curated collection of stunning flower bouquets, 
            crafted to bring joy and elegance to your special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#collections">
              <Button variant="primary" size="lg">
                Explore Collections
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <a
        href="#topsellingslideshow"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary-dark transition-colors animate-bounce hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
