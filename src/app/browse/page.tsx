"use client";

import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, SlidersHorizontal, X, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BouquetCard from "@/components/BouquetCard";
import { supabase, FlowerCatalog } from "@/lib/supabase";

/* ───────── category map (no valentine) ───────── */
const CATEGORIES: { key: string; label: string }[] = [
  { key: "sunflower", label: "Sunflower" },
  { key: "gerbera", label: "Gerbera" },
  { key: "orchid", label: "Orchid" },
  { key: "localrose", label: "Market Roses" },
  { key: "bangalorerose", label: "Premium Roses" },
  { key: "satinroses", label: "Satin Roses" },
  { key: "hotwheels", label: "Hot Wheels" },
  { key: "chocolate", label: "Chocolates" },
];

/* ───────── helpers ───────── */
const DEBOUNCE_MS = 300;

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/* ═══════════════════════════════════════════════
   Browse Page
   ═══════════════════════════════════════════════ */
export default function BrowsePage() {
  const router = useRouter();

  /* ── data ── */
  const [allBouquets, setAllBouquets] = useState<FlowerCatalog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* ── filters ── */
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, DEBOUNCE_MS);

  /* price range – initialised after fetch */
  const [absoluteMin, setAbsoluteMin] = useState(0);
  const [absoluteMax, setAbsoluteMax] = useState(10000);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(10000);

  /* mobile filter drawer */
  const [filterOpen, setFilterOpen] = useState(false);

  /* ── fetch once ── */
  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        const { data, error: err } = await supabase
          .from("flower_catalog")
          .select("*");

        if (err) throw err;

        const items: FlowerCatalog[] = data ?? [];
        setAllBouquets(items);

        if (items.length > 0) {
          const prices = items.map((b) => Number(b.price));
          const min = Math.floor(Math.min(...prices));
          const max = Math.ceil(Math.max(...prices));
          setAbsoluteMin(min);
          setAbsoluteMax(max);
          setPriceMin(min);
          setPriceMax(max);
        }
      } catch (e) {
        console.error(e);
        setError("Failed to load bouquets. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  /* ── filtering logic ── */
  const filtered = useMemo(() => {
    return allBouquets.filter((b) => {
      // category
      if (selectedCategories.size > 0 && !selectedCategories.has(b.category))
        return false;

      // price
      const p = Number(b.price);
      if (p < priceMin || p > priceMax) return false;

      // name search
      if (
        debouncedSearch &&
        !b.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
        return false;

      return true;
    });
  }, [allBouquets, selectedCategories, priceMin, priceMax, debouncedSearch]);

  /* ── handlers ── */
  const toggleCategory = useCallback((key: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategories(new Set());
    setSearchQuery("");
    setPriceMin(absoluteMin);
    setPriceMax(absoluteMax);
  }, [absoluteMin, absoluteMax]);

  const activeFilterCount =
    selectedCategories.size +
    (priceMin !== absoluteMin || priceMax !== absoluteMax ? 1 : 0) +
    (searchQuery ? 1 : 0);

  /* ── range slider helpers ── */
  const handleMinChange = (val: number) => {
    setPriceMin(Math.min(val, priceMax - 1));
  };

  const handleMaxChange = (val: number) => {
    setPriceMax(Math.max(val, priceMin + 1));
  };

  const rangePercent = (val: number) =>
    ((val - absoluteMin) / (absoluteMax - absoluteMin || 1)) * 100;

  /* ═══════════ Filter panel content (shared desktop / mobile) ═══════════ */
  const FilterContent = (
    <>
      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-2">
          Search by Name
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="e.g. Rose Elegance..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary-dark/40 transition-shadow"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategories.has(cat.key);
            return (
              <button
                key={cat.key}
                onClick={() => toggleCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${active
                    ? "bg-primary-dark text-white border-primary-dark shadow-sm"
                    : "bg-primary-lighter text-primary-darker border-primary-light hover:bg-primary-light hover:border-primary"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">
          Price Range
        </label>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary-dark tabular-nums">
            ₹{priceMin}
          </span>
          <span className="text-sm font-medium text-primary-dark tabular-nums">
            ₹{priceMax}
          </span>
        </div>

        {/* dual-thumb range slider */}
        <div className="range-slider-wrap">
          {/* track background */}
          <div className="range-track" />
          {/* active fill */}
          <div
            className="range-fill"
            style={{
              left: `${rangePercent(priceMin)}%`,
              width: `${rangePercent(priceMax) - rangePercent(priceMin)}%`,
            }}
          />
          {/* min thumb */}
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            value={priceMin}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="range-thumb range-thumb--min"
          />
          {/* max thumb */}
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            value={priceMax}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="range-thumb range-thumb--max"
          />
        </div>
      </div>

      {/* Reset */}
      {activeFilterCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full py-2.5 rounded-xl text-sm font-medium text-primary-dark border border-primary-dark/30 hover:bg-primary-light/40 transition-colors"
        >
          Reset All Filters
        </button>
      )}
    </>
  );

  /* ═══════════════════ Render ═══════════════════ */
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* ── Header ── */}
        <div className="flex items-center gap-3 mb-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => router.push("/#home")}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-primary-light/50 text-primary-darker rounded-full text-sm font-medium mb-4">
            Browse All
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
            Explore Our Bouquets
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Filter by category, price, or search by name to find the perfect
            arrangement.
          </p>
        </div>

        {/* ── Layout: sidebar + grid ── */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card">
              <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-auto text-xs bg-primary-dark text-white px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </h2>
              {FilterContent}
            </div>
          </aside>

          {/* Main content */}
          <section className="flex-1 min-w-0">
            {/* Result count */}
            {!loading && !error && (
              <p className="text-sm text-muted-foreground mb-4">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                bouquet{filtered.length !== 1 ? "s" : ""}
              </p>
            )}

            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-10 h-10 border-4 border-primary-light border-t-primary-dark rounded-full animate-spin" />
                <p className="text-muted-foreground">Loading bouquets…</p>
              </div>
            ) : error ? (
              <div className="text-center py-24">
                <p className="text-red-500 text-xl">{error}</p>
              </div>
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((bouquet, idx) => (
                  <BouquetCard
                    key={bouquet.id}
                    id={bouquet.id}
                    name={bouquet.name}
                    description={bouquet.description}
                    price={Number(bouquet.price)}
                    image={bouquet.flower_img_url}
                    whatsapp_link={bouquet.whatsapp_link}
                    delay={idx * 0.05}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
                <Flower2 className="w-16 h-16 opacity-30" />
                <p className="text-xl font-medium">No bouquets match your filters</p>
                <p className="text-sm">
                  Try adjusting your filters or{" "}
                  <button
                    onClick={resetFilters}
                    className="text-primary-dark underline underline-offset-2 hover:text-primary-darker"
                  >
                    reset all
                  </button>
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* ── Mobile filter FAB ── */}
      <button
        onClick={() => setFilterOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-primary-dark text-white shadow-lg hover:bg-primary-darker transition-colors"
      >
        <SlidersHorizontal className="w-5 h-5" />
        Filters
        {activeFilterCount > 0 && (
          <span className="text-xs bg-white text-primary-dark px-2 py-0.5 rounded-full font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* ── Mobile filter drawer ── */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          {/* drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-white rounded-t-3xl p-6 pt-3 animate-slide-up shadow-2xl">
            {/* Handle */}
            <div className="flex justify-center mb-2">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </h2>
              <button
                onClick={() => setFilterOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {FilterContent}
            {/* Apply (closes drawer) */}
            <Button
              variant="primary"
              className="w-full mt-4"
              onClick={() => setFilterOpen(false)}
            >
              Show {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
