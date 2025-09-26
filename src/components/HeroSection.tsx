import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-artist.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Featured Artist" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-primary animate-glow">Vibe the New Flow</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover the latest from your favorite artists, exclusive content, 
            and the hottest music trends from the YG Family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
              <Play className="w-5 h-5 mr-2" />
              Watch Latest
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Artists
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;