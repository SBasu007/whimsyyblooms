"use client"

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const flowers = [
  {
    name: "Sunflower",
    category: "sunflower",
  },
  {
    name: "Gerbera",
    category: "gerbera",
  },
  {
    name: "Orchid",
    category: "orchid",
  },
  {
    name: "Market Roses",
    category: "localrose",
  },
  {
    name: "Premium Roses",
    category: "bangalorerose",
  },
  {
    name: "Satin Roses",
    category: "satinroses",
  },
  {
    name: "Hot Wheels",
    category: "hotwheels",
  },
  {
    name: "Chocolates",
    category: "chocolate",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof flowers>([]);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Collections", href: "/#collections" },
    { name: "About", href: "/#about" },
    { name: "Creators", href: "/#creators" },
  ];

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      const filtered = flowers.filter((flower) =>
        flower.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(flowers);
    }
  };

  const handleSearch = (e: React.FormEvent | null, category?: string) => {
    if (e) e.preventDefault();
    const searchValue = category || searchQuery.trim();
    
    if (!searchValue) return;

    const validCollection = flowers.find(
      (flower) => flower.category === searchValue.toLowerCase() || flower.name.toLowerCase() === searchValue.toLowerCase()
    );

    if (validCollection) {
      router.push(`/collections/${validCollection.category}`);
      setSearchQuery("");
      setSuggestions([]);
      setIsSearchOpen(false);
    }
  };

  const selectSuggestion = (flower: typeof flowers[0]) => {
    setSearchQuery(flower.name);
    setSuggestions([]);
    handleSearch(null, flower.category);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-3 group">
            <Image 
              src="/logo.jpg" 
              alt="Whimsyy Blooms Logo" 
              width={48} 
              height={48} 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl font-semibold text-foreground font-[family-name:var(--font-cinzel)]">
              WHIMSYY BLOOMS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary-dark font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/917439347678" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground hover:text-primary-dark transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary-dark transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <form onSubmit={handleSearch} className="space-y-3">
              <div className="relative flex gap-2">
                <input
                  type="text"
                  placeholder="I want to buy..."
                  value={searchQuery}
                  onChange={(e) => handleSearchInput(e.target.value)}
                  onFocus={() => setSuggestions(flowers)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-dark"
                />
                <Button variant="primary" size="sm" type="submit">
                  Search
                </Button>
              </div>
              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <div className="bg-background border border-border rounded-lg overflow-hidden">
                  {suggestions.map((flower) => (
                    <button
                      key={flower.category}
                      type="button"
                      onClick={() => selectSuggestion(flower)}
                      className="w-full text-left px-4 py-2 hover:bg-primary-light/20 transition-colors text-foreground text-sm"
                    >
                      {flower.name}
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary-dark font-medium transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/917439347678" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="primary" className="w-full mt-2">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
