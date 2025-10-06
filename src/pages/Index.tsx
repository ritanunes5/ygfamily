import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ArtistShowcase from "@/components/ArtistShowcase";
import NewsSection from "@/components/NewsSection";
import ContactForm from "@/components/ContactForm";
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
        <ContactForm />
      </main>
      
      {/* Calendar Widget Section */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Questions & Answers</h2>
            <p className="text-muted-foreground">Agende uma sessão connosco</p>
          </div>
          <CalWidget />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
