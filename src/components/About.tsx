"use client"

import { Leaf, Heart, Sparkles, Flower } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Sourced directly from local farms for the freshest blooms.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each arrangement is handcrafted by our expert florists.",
  },
  {
    icon: Sparkles,
    title: "Pre-Order Delivery",
    description: "Fresh flowers delivered to your doorstep within 2 to 3 days.",
  },
  {
    icon: Flower,
    title: "Unique Designs",
    description: "Every design may differ as ever flowers blooms differently",
  }
];

const About = () => {
  return (
    <section id="about" className="py-8 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-soft animate-fade-up">
                  <img
                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&auto=format&fit=crop&q=80"
                    alt="Flower arrangement"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <img
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&auto=format&fit=crop&q=80"
                    alt="Bouquet close-up"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-soft animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  <img
                    src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&auto=format&fit=crop&q=80"
                    alt="Pink roses"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft animate-fade-up" style={{ animationDelay: "0.3s" }}>
                  <img
                    src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&auto=format&fit=crop&q=80"
                    alt="Flower shop"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary-light/50 text-primary-darker rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Crafting Moments of{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Natural Beauty</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              At Whimsyy Blooms, we believe every flower tells a story. For over a year,
              we&apos;ve been dedicated to creating stunning floral arrangements that
              celebrate life&apos;s most precious moments.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-light/50 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flower Carts Locations */}
        <div className="mt-12 border-t border-border/40 pt-10">
          <div className="text-center mb-2">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Our {" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Flower Carts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Visit our physical flower carts in Kolkata to experience and pick your favorite blooms in person!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Location 1 */}
            <div className="bg-gradient-card p-4 rounded-xl border border-border/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
              <div className="mb-3">
                <h4 className="font-display text-base md:text-lg font-bold text-foreground">
                  Lake Mall Cart
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                  Near Lake Mall, Kolkata
                </p>
              </div>
              <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden border border-border/30">
                <iframe
                  title="Lake Gardens Cart Location"
                  src="https://maps.google.com/maps?q=22.516774,88.347005&z=16&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-gradient-card p-4 rounded-xl border border-border/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
              <div className="mb-3">
                <h4 className="font-display text-base md:text-lg font-bold text-foreground">
                  Rabindra Sarobar Cart
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                  Near Rabindra Sarobar, Kolkata
                </p>
              </div>
              <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden border border-border/30">
                <iframe
                  title="Whimsyy Blooms Workshop Location"
                  src="https://maps.google.com/maps?q=22.50928,88.3477398&z=16&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
