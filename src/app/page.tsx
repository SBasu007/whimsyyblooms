import Hero from "@/components/Hero";
import TopSellingSlideshow from "@/components/TopSellingSlideshow";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopSellingSlideshow />
      <Collections />
      <About />
      <Footer />
    </main>
  );
}
