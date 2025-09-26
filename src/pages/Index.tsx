import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ArtistShowcase from "@/components/ArtistShowcase";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import CalWidget from "@/components/CalWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <ArtistShowcase />
        <NewsSection />
      </main>
      <Footer />
      <CalWidget />
    </div>
  );
};

export default Index;
