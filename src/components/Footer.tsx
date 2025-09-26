import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-primary">YG</span>
              <span className="text-foreground">FAMILY</span>
            </div>
            <p className="text-muted-foreground">
              Home to the world's biggest K-pop artists and the hottest music trends.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Artists */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Artists</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">BLACKPINK</li>
              <li className="hover:text-primary cursor-pointer transition-colors">TREASURE</li>
              <li className="hover:text-primary cursor-pointer transition-colors">WINNER</li>
              <li className="hover:text-primary cursor-pointer transition-colors">AKMU</li>
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Content</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Music Videos</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Behind the Scenes</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Live Performances</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Interviews</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 YG Entertainment. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with ❤️ for music lovers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;