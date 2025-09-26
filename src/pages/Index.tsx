import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArtistShowcase from "@/components/ArtistShowcase";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ArtistShowcase />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
