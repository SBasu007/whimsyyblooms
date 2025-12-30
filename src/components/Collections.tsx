"use client"

import FlowerCard from "./FlowerCard";

const flowers = [
  {
    name: "Sunflower",
    description: "Bright and cheerful blooms that bring warmth and happiness to any space.",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",
    color: "#F5B041",
  },
  {
    name: "Gerbera",
    description: "Vibrant daisy-like flowers available in a stunning array of colors.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    color: "#E74C3C",
  },
  {
    name: "Orchid",
    description: "Exotic and elegant blooms that symbolize luxury and refined beauty.",
    image: "/orchids.png",
    color: "#CB94F7",
  },
  {
    name: "Rose",
    description: "Timeless classics expressing love, passion and heartfelt emotions.",
    image: "/rose.png",
    color: "#C0392B",
  },
];

const Collections = () => {
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

        {/* Flower Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {flowers.map((flower, index) => (
            <FlowerCard
              key={flower.name}
              {...flower}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
