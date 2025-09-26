import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 nav-blur">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">
              <span className="text-primary">YG</span>
              <span className="text-foreground">FAMILY</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#artists" className="text-muted-foreground hover:text-primary transition-colors">
                Artists
              </a>
              <a href="#news" className="text-muted-foreground hover:text-primary transition-colors">
                News
              </a>
              <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors">
                Videos
              </a>
              <a href="#store" className="text-muted-foreground hover:text-primary transition-colors">
                Store
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;