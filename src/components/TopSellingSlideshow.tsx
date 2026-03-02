"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { cloudinaryUrl } from "@/lib/cloudinary";

interface SlideItem {
  id: string;
  name: string;
  price: number;
  image: string;
  whatsapp_link?: string;
}

interface TopSellingShowProps {
  items?: SlideItem[];
}

// Default top selling items - replace with your actual data source
// const defaultTopSelling: SlideItem[] = [
//   {
//     id: "1",
//     name: "Vampire's Kiss",
//     price: 749,
//     image: "/topselling/vampirekiss.jpg",
//     whatsapp_link:"https://wa.me/p/25833283482976248/917439347678",
//   },
//   {
//     id: "8",
//     name: "Witch's Arora",
//     price: 749,
//     image: "/topselling/witcharora.png",
//     whatsapp_link:"https://wa.me/p/26017265714531806/917439347678",
//   },
//   {
//     id: "2",
//     name: "Knight Wheels",
//     price: 949,
//     image: "/topselling/knightwheels.png",
//     whatsapp_link:"https://wa.me/p/26180855038188421/917439347678",
//   },
//   {
//     id: "3",
//     name: "Burning Desire",
//     price: 702,
//     image: "/topselling/burningdesire.jpg",
//     whatsapp_link:"https://wa.me/p/25979410121656253/917439347678",
//   },
//   {
//     id: "4",
//     name: "Cotton Candy Confession",
//     price: 802,
//     image: "/topselling/cottoncandy.png",
//     whatsapp_link:"https://wa.me/p/25748462648117044/917439347678",
//   },
//   {
//     id: "5",
//     name: "Sweet Treats",
//     price: 649,
//     image: "/topselling/sweettreats.jpg",
//     whatsapp_link:"https://wa.me/p/25469161776078851/917439347678",
//   },
//   {
//     id: "6",
//     name: "Butter Cream",
//     price: 179,
//     image: "/topselling/buttercream.png",
//     whatsapp_link:"https://wa.me/p/25951125051162180/917439347678",
//   },
//   {
//     id: "7",
//     name: "Immortal Roses",
//     price: 279,
//     image: "/topselling/immortalroses.jpg",
//     whatsapp_link:"https://wa.me/p/33469291376017481/917439347678",
//   },
// ];
const defaultTopSelling: SlideItem[] = [
  {
    id: "8a5e1963-1917-4e5e-a600-532cd9934ce6",
    name: "Barbie Core",
    price: 119,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772301418/barbiecore_lhv6jq.jpg",
    whatsapp_link: "https://wa.me/p/25434170702878260/917439347678",
  },
  {
  id: "c754ef58-62f2-4ce7-9a80-06207bd3d830",
  name: "CR7 Era Bloom",
  price: 479,
  image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291072/cr7_dpgqcy.jpg",
  whatsapp_link: "https://wa.me/p/25119197307753145/917439347678",
},
{
  id: "fdd29d97-3570-4600-b3c3-71f7927d87a8",
  name: "Golden Hour Garden",
  price: 549,
  image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291072/Goldenhourgarden_svusnr.jpg",
  whatsapp_link: "https://wa.me/p/26522686463983768/917439347678",
},
{
  id: "04874185-01e2-46b1-a69e-f85d5a2c4859",
  name: "LM10 Era Bloom",
  price: 479,
  image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291072/lm10_hgmvty.jpg",
  whatsapp_link: "https://wa.me/p/25849349178087920/917439347678",
},
{
  id: "995b0d33-a121-4949-bb98-52a17a4f66e8",
  name: "Scarlet Promise",
  price: 399,
  image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291073/Scarletpromise_n9lnss.jpg",
  whatsapp_link: "https://wa.me/p/26365812686359936/917439347678",
},
{
  id: "c42968ab-7cd1-4984-8d52-ceefa16ad1e3",
  name: "Soft Crimson",
  price: 299,
  image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291073/softcrimson_wnggkx.jpg",
  whatsapp_link: "https://wa.me/p/25595528280086284/917439347678",
},

  {
    id: "be4f8319-c212-42e1-8330-44ff83e4dd07",
    name: "Blue Moon",
    price: 999,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290968/bluemoon_rvklmg.jpg",
    whatsapp_link: "https://wa.me/p/25264341189874930/917439347678",
  },
  {
    id: "36797196-0f1e-48c6-ac53-44341a3d38d0",
    name: "Bubblegum Blaze",
    price: 399,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772301418/bubblegum_eyfol1.jpg",
    whatsapp_link: "https://wa.me/p/25205849645752335/917439347678",
  },
  {
    id: "f51fef4d-0b74-44b6-b18a-35d4ae7792ec",
    name: "Burning Desire",
    price: 779,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291043/burndesire_jw9zmf.jpg",
    whatsapp_link: "https://wa.me/p/25979410121656253/917439347678",
  },
  {
    id: "9157d78b-8665-49e5-8a8c-69701d6c1ca2",
    name: "Buttercream",
    price: 249,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291045/buttercream_l5jjrv.jpg",
    whatsapp_link: "https://wa.me/p/25951125051162180/917439347678",
  },
  {
    id: "6f0cacb2-d2bf-4210-88c7-02aabc26938d",
    name: "Classic Red",
    price: 839,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290969/classicred_hatl0h.jpg",
    whatsapp_link: "https://wa.me/p/25375346318817363/917439347678",
  },
  {
    id: "33970513-4256-4cc8-9f7d-16bc8e3268da",
    name: "Cotton Candy Confession",
    price: 899,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290968/cottoncandy_vso5hc.jpg",
    whatsapp_link: "https://wa.me/p/25748462648117044/917439347678",
  },
  {
    id: "e50acc3b-88e7-4d72-9819-6c7c6d5913e9",
    name: "Crimson Joy",
    price: 1399,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290968/crimsonjoy_raf3ar.jpg",
    whatsapp_link: "https://wa.me/p/25419978424338430/917439347678",
  },
  {
    id: "2f03140d-5b73-4519-a0c9-3df3ac7c23ed",
    name: "Crush Era Blooms",
    price: 2199,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290969/crush_era_lu4lp6.jpg",
    whatsapp_link: "https://wa.me/p/25225343933828581/917439347678",
  },
  {
    id: "86b6a600-83ba-42e9-84a4-be1f4825dda9",
    name: "Dark Romance",
    price: 349,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291045/darkromance_u1mtfz.jpg",
    whatsapp_link: "https://wa.me/p/33598712926386633/917439347678",
  },
  {
    id: "8caa4655-531e-46d1-9c50-6a1f3b093270",
    name: "Dream Bouquet",
    price: 899,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291048/dreambouquet_ocy71x.jpg",
    whatsapp_link: "https://wa.me/p/25932759502994435/917439347678",
  },
  {
    id: "5e376a7b-a1a1-4c35-8e77-1ba2b943f06c",
    name: "Honey Glow Blooms",
    price: 149,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291069/honeyglowblooms_gp0reh.jpg",
    whatsapp_link: "https://wa.me/p/33129252040052469/917439347678",
  },
  {
    id: "7488fca5-3717-4c80-97d0-6c1e75d293fd",
    name: "Immortal Roses",
    price: 279,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291066/immortalrose_jwskxi.jpg",
    whatsapp_link: "https://wa.me/p/33469291376017481/917439347678",
  },
  {
    id: "e0c88ca3-a822-492b-a91a-fb45c0c1e200",
    name: "Infinite Love",
    price: 799,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291066/infinitelove_fgqxu2.jpg",
    whatsapp_link: "https://wa.me/p/25296305163324293/917439347678",
  },
  {
    id: "29363bc8-e88d-4ad3-8ad4-726c4376fe9b",
    name: "Ishq Wala Rose",
    price: 419,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291046/redaura_tocbtf.jpg",
    whatsapp_link: "https://wa.me/p/25978218975094856/917439347678",
  },
  {
    id: "b7b603ba-a2ba-4983-8435-66ad5d8863fa",
    name: "Knight Wheels",
    price: 949,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772295010/knightwheels_chfbvq.jpg",
    whatsapp_link: "https://wa.me/p/26180855038188421/917439347678",
  },
  {
    id: "ebd74f1f-786a-4d45-b4b5-6c6ee03a7256",
    name: "Luxe Éternel",
    price: 1799,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291067/luxeternal_ywqsto.jpg",
    whatsapp_link: "https://wa.me/p/26448318791422225/917439347678",
  },
  {
    id: "c03e1e8b-436b-4807-9f5f-88dea9577e19",
    name: "Marshmallow Mornings",
    price: 199,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772301418/marshmallowmorning_dsso0g.jpg",
    whatsapp_link: "https://wa.me/p/25530428726566949/917439347678",
  },
  {
    id: "28c94365-dbf1-48c9-a81b-b7dcd35daeec",
    name: "Midnight Treat",
    price: 329,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291037/midnighttreat_mkn3oj.jpg",
    whatsapp_link: "https://wa.me/p/24932191399793653/917439347678",
  },
  {
    id: "d1b5ff05-b4dd-4f49-a27f-ca721cf46910",
    name: "Mystic Dark",
    price: 1049,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291067/mysticdark_btpfnp.jpg",
    whatsapp_link: "https://wa.me/p/25307941345555996/917439347678",
  },
  {
    id: "f6f91c41-711b-4d9f-9368-e13ceeecb6ad",
    name: "Racing Legends",
    price: 1402,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291042/racelegends_rjmh0g.jpg",
    whatsapp_link: "https://wa.me/p/25165720899767214/917439347678",
  },
  {
    id: "4e3d9ecc-f168-4938-9fa8-a0d181eea7ee",
    name: "Racing Romance",
    price: 348,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291041/racingrom_p7feqb.jpg",
    whatsapp_link: "https://wa.me/p/34216807931251385/917439347678",
  },
  {
    id: "b6ef4d28-c634-4d86-a163-d792b63c8445",
    name: "Racing Sun",
    price: 349,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291042/racing_sun_rkbdta.jpg",
    whatsapp_link: "https://wa.me/p/25864639999798276/917439347678",
  },
  {
    id: "0bd4bbc5-d8b8-4674-8fc5-93c5043f9106",
    name: "Racing Treat",
    price: 429,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291042/racingtreat_i5gj7e.jpg",
    whatsapp_link: "https://wa.me/p/25648231918170635/917439347678",
  },
  {
    id: "4fa65dee-4bfa-48f0-9b2b-e2744c748d8f",
    name: "Sunheart Rebel",
    price: 199,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291070/sunheart_mq4rn4.jpg",
    whatsapp_link: "https://wa.me/p/25650769657876699/917439347678",
  },
  {
    id: "40f6745f-1160-48d0-9e32-a269919211f7",
    name: "Superhero’s Choice",
    price: 1052,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291043/superherochoice_v4qcuq.jpg",
    whatsapp_link: "https://wa.me/p/25359371547076748/917439347678",
  },
  {
    id: "4ab24a87-2346-40c0-bf97-a8383e73063b",
    name: "Sweet Blossom",
    price: 349,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291037/sweetblossom_f1fzxi.jpg",
    whatsapp_link: "https://wa.me/p/25384738924540244/917439347678",
  },
  {
    id: "261a1841-801f-40ce-83ae-d7fdcee42ec6",
    name: "Sweet Ride Combo",
    price: 749,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291043/sweetride_ldzqa9.jpg",
    whatsapp_link: "https://wa.me/p/25507289305596543/917439347678",
  },
  {
    id: "703861b9-51fa-4fb2-81c1-0cbcae353ed2",
    name: "Sweet Treats",
    price: 649,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291037/Sweettrearts_w54qsf.jpg",
    whatsapp_link: "https://wa.me/p/25469161776078851/917439347678",
  },
  {
    id: "89fc7f18-c02d-455e-9ca6-2bae2142d16c",
    name: "Vampire Kiss",
    price: 839,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772290970/vampirekiss_nhewyg.jpg",
    whatsapp_link: "https://wa.me/p/25833283482976248/917439347678",
  },
  {
    id: "6c7116e9-92d1-48d8-9b00-2c97d475f3da",
    name: "White Wheels",
    price: 379,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291043/whitewheels_msllsp.jpg",
    whatsapp_link: "https://wa.me/p/25731914126445986/917439347678",
  },
  {
    id: "27bd1f08-821b-4a6c-a09e-b952375a08c0",
    name: "Witch’s Aurora",
    price: 799,
    image: "https://res.cloudinary.com/dmbu8owle/image/upload/v1772291043/witch_mhya8h.jpg",
    whatsapp_link: "https://wa.me/p/26017265714531806/917439347678",
  },
];


const TopSellingSlideshow = ({ items = defaultTopSelling }: TopSellingShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentItem = items[currentIndex];

  return (
    <section
      id="topsellingslideshow"
      className="w-full bg-gradient-to-b from-background to-primary-light/10 py-8 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          {/* <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Top Selling Bouquets
          </h2> */}
          {/* <p className="text-muted-foreground text-sm md:text-base">
            Our most loved bouquets by customers
          </p> */}
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <a
            href={currentItem.whatsapp_link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg group block cursor-pointer"
          >
            <Image
              src={cloudinaryUrl(currentItem.image, 960)}
              alt={currentItem.name}
              fill
              unoptimized
              className="w-full h-full object-cover transition-opacity duration-500"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
            />

            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Top Selling Badge */}
            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl animate-pulse">
              <span className="text-white font-black text-base md:text-lg flex items-center gap-2">
                 VALENTINE SPECIAL ❤️
              </span>
            </div>

            {/* Item Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <div className="flex items-end justify-between gap-4">
                <h3 className="inline-block text-xl md:text-3xl font-bold bg-purple-300/90 text-purple-900 px-4 md:px-6 py-2 md:py-3 rounded-lg backdrop-blur-sm">
                  {currentItem.name}
                </h3>
                <span className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                  ₹{currentItem.price}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-foreground transition-colors duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-foreground transition-colors duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </a>

          {/* Indicators / Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          {/* <div className="mt-6 md:mt-8 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                  <p className="text-white text-xs md:text-sm font-semibold truncate">
                    {item.name}
                  </p>
                </div>
              </button>
            ))}
          </div> */}

          {/* Browse All Button */}
          {/* <div className="text-center mt-8">
            <a href="#collections">
              <Button variant="outline" className="text-sm md:text-base">
                Browse All Collections
              </Button>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopSellingSlideshow;
