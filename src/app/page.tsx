import Hero from "@/components/Hero";
import TopSellingSlideshow from "@/components/TopSellingSlideshow";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopSellingSlideshow />
      <Collections />
      <About />
      <Creators />
      <Footer />
    </main>
  );
}
