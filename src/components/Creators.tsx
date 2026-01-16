"use client"

interface CreatorProps {
  name: string;
  role: string;
  education: string;
  description: string;
  image: string;
}

const creators: CreatorProps[] = [
  {
    name: "Ambarish Mitra",
    role: "Head Florist",
    education: "Pursuing a three-year Multidisciplinary B.Com program.",
    description:
      "The creative heart of Whimsyy Blooms — every artistic, modern bouquet you see is handcrafted by him with an exquisite eye for detail and contemporary elegance.",
    image: "creators/ambar.png",
  },
  {
    name: "Soumodeep Saha",
    role: "Head of Finance & Management",
    education: "Pursuing Bachelor in Commerce (Honours)",
    description:
      "The numbers wizard who keeps everything running smoothly — handling all financial planning, management, and smart growth decisions with impressive precision.",
    image: "creators/soumodeep.png",
  },
  {
    name: "Preetam Mukherjee",
    role: "Strategy Director",
    education: "Pursuing Bachelor in Microbiology (Honours)",
    description:
      "The visionary strategist steering the brand forward — executing our big-picture goals and bringing Whimsyy Blooms to life across social media with energy and flair.",
    image: "creators/preetam.png",
  },
];

const CreatorCard = ({ creator }: { creator: CreatorProps }) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      {/* Image Container */}
      <div className="mb-6 w-full max-w-xs">
        <div className="rounded-2xl overflow-hidden shadow-soft aspect-square">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
          {creator.name}
        </h3>
        <p className="text-primary-dark font-semibold text-sm md:text-base">
          {creator.role}
        </p>
        <p className="text-muted-foreground text-xs md:text-sm italic">
          {creator.education}
        </p>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
        {creator.description}
      </p>
    </div>
  );
};

const Creators = () => {
  return (
    <section id="creators" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-light/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary-light/50 text-primary-darker rounded-full text-sm font-medium mb-4">
            Meet the Creators
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three College Friends,{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              One Mission
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re three passionate college friends on a mission to revolutionize flower gifting in Kolkata
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {creators.map((creator, index) => (
            <div key={creator.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <CreatorCard creator={creator} />
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 lg:p-10 space-y-6 animate-fade-up">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are three college students who got tired of 90s-style bouquets and
                prices that scream "you must be rich to show your love." So we stopped
                ranting… and started building - Modern exquisite designs & Prices that
                actually make sense.
              </p>
              <p>
                That&apos;s why we:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">✓</span>
                  <span>Work directly with farmers and small growers for the freshest possible blooms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">✓</span>
                  <span>Artfully craft bouquets with thoughtful artistic touch that turns every arrangement into quietly unforgettable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-dark font-bold">✓</span>
                  <span>Keep pricing honest, transparent, and surprisingly gentle on the wallet</span>
                </li>
              </ul>
              <p className="pt-4">
                We&apos;re still young. We still panic when a big order comes in at 11 PM.
                We still argue about which colour combination looks better at 3 a.m. But
                we&apos;re also dead serious about one thing: Making beautiful, genuinely
                fresh flowers feel joyful, piece of art, and honest again — for everyone.
              </p>
              <p className="font-semibold text-foreground text-lg">
                Welcome to the new era of artistic bouquets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
