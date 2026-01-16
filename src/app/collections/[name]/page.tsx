"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BouquetCard from "@/components/BouquetCard";
import { supabase, FlowerCatalog } from "@/lib/supabase";

const categoryNames: Record<string, string> = {
  sunflower: "Sunflower",
  gerbera: "Gerbera",
  orchid: "Orchid",
  localrose: "Market Roses",
  bangalorerose: "Bangalore Roses",
  hotwheels: "Hot Wheels",
  chocolate: "Chocolates",
  satinroses: "Satin Roses",
};

const collectionOrder = [
  "sunflower",
  "gerbera",
  "orchid",
  "localrose",
  "bangalorerose",
  "satinroses",
  "hotwheels",
  "chocolate",
];

export default function CollectionPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const collectionCategory = params.name as string;
  const buyoutText = searchParams.get('buyout') || null;
  const [bouquets, setBouquets] = useState<FlowerCatalog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const displayName = categoryNames[collectionCategory] || collectionCategory;

  const handleNextCollection = () => {
    const currentIndex = collectionOrder.indexOf(collectionCategory);
    const nextIndex = (currentIndex + 1) % collectionOrder.length;
    router.push(`/collections/${collectionOrder[nextIndex]}`);
  };

  useEffect(() => {
    async function fetchBouquets() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('flower_catalog')
          .select('*')
          .eq('category', collectionCategory);

        if (error) throw error;
        
        setBouquets(data || []);
      } catch (err) {
        console.error('Error fetching bouquets:', err);
        setError('Failed to load bouquets');
      } finally {
        setLoading(false);
      }
    }

    fetchBouquets();
  }, [collectionCategory]);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="primary" 
          onClick={() => router.push("/#collections")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collections
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {displayName} Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {buyoutText || `Browse our beautiful selection of ${displayName.toLowerCase()} bouquets`}
          </p>
        </div>

        {/* Bouquets Grid */}
        {loading ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl">Loading bouquets...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        ) : bouquets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {bouquets.map((bouquet, index) => (
              <BouquetCard
                key={bouquet.id}
                id={bouquet.id}
                name={bouquet.name}
                description={bouquet.description}
                price={Number(bouquet.price)}
                image={bouquet.flower_img_url}
                whatsapp_link={bouquet.whatsapp_link}
                delay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-xl">No bouquets found in this collection.</p>
          </div>
        )}

        {/* Next Collection Button */}
        <div className="flex justify-center mt-12">
          <Button 
            variant="primary" 
            onClick={handleNextCollection}
          >
            Next Collection →
          </Button>
        </div>
      </div>
    </main>
  );
}
