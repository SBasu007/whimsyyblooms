import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Collections />
      <About />
      <Footer />
    </main>
  );
}
