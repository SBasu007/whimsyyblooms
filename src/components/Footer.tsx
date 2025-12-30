"use client"

import { Flower2, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-lighter py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-semibold">
                Whimsyy Blooms
              </span>
            </div>
            <p className="text-primary-light/70 mb-6 leading-relaxed">
              Creating beautiful moments through the art of floral design since 2013.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-lighter/10 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-lighter/10 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-lighter/10 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Collections", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-3">
              {["Sunflowers", "Gerberas", "Orchids", "Roses"].map((flower) => (
                <li key={flower}>
                  <a
                    href="#collections"
                    className="text-primary-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {flower}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-light/70">
                  45/4, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-light/70">+91 7439 347 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-light/70">whimsyyblooms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-lighter/10 mt-12 pt-8 text-center">
          <p className="text-primary-light/50 text-sm">
            © {new Date().getFullYear()} Whimsyy Blooms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
