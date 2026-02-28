"use client"

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { cloudinaryUrl } from "@/lib/cloudinary";

interface BouquetCardProps {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  image: string | null;
  whatsapp_link?: string | null;
  delay?: number;
}

const BouquetCard = ({ id, name, description, price, image, whatsapp_link, delay = 0 }: BouquetCardProps) => {
  const handleWhatsAppOrder = () => {
    if (whatsapp_link) {
      window.open(whatsapp_link, '_blank');
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 animate-fade-up flex flex-col h-full"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={cloudinaryUrl(image, 800) || '/placeholder.jpg'}
          alt={name}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 bg-white flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 flex-grow">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl text-primary-dark tabular-nums font-sans">
            ₹{price}
          </span>
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleWhatsAppOrder}
            disabled={!whatsapp_link}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order on WhatsApp
          </Button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default BouquetCard;
