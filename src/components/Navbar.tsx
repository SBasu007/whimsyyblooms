"use client"

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bubblegum_Sans } from "next/font/google";

const bubblegum = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
});

const flowers = [
  {
    name: "Valentine's Day",
    category: "valentine",
  },
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
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Collections", href: "/#collections" },
    { name: "Browse", href: "/browse" },
    { name: "About", href: "/#about" },
    { name: "Creators", href: "/#creators" },
  ];

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
            <span
  className={`${bubblegum.className} text-[20px] md:text-3xl text-foreground`}
>
  WHIMSYY BLOOMS
</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${bubblegum.className} text-lg md:text-xl text-muted-foreground hover:text-primary-dark transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/917439347678" target="_blank" rel="noopener noreferrer">
              <Button
  variant="primary"
  size="sm"
  className={`${bubblegum.className} text-lg`}
>
  Contact Us
</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => router.push("/browse")}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${bubblegum.className} text-xl text-muted-foreground hover:text-primary-dark transition-colors duration-200 py-2`}
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/917439347678" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
  variant="primary"
  className={`${bubblegum.className} text-lg w-full mt-2`}
>
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
