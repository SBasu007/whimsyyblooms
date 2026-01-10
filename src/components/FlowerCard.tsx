"use client"

import Link from "next/link";
import { useState } from "react";

interface FlowerCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  color: string;
  buyout?: string;
  delay?: number;
}

const FlowerCard = ({ name, category, description, image, color, buyout, delay = 0 }: FlowerCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const collectionSlug = category;
  
  return (
    <div
      onClick={() => setShowOverlay(!showOverlay)}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image Container */}
      <div className="relative h-80 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Lavender Overlay with Details */}
        <div className={`absolute inset-0 bg-purple-400/90 ${showOverlay ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {name}
          </h3>
          <p className="text-white text-sm md:text-base leading-relaxed mb-6">
            {description}
          </p>
          <Link
            href={`/collections/${collectionSlug}${buyout ? `?buyout=${encodeURIComponent(buyout)}` : ''}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg"
          >
            Click here to explore
          </Link>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default FlowerCard;
