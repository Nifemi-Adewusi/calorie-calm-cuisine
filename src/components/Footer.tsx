
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/70 py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-mint-400 to-sky-400 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CC</span>
            </div>
            <span className="font-bold bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
              CalorieCuisine
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="fill-peach-400 text-peach-400" /> for healthy eating
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
