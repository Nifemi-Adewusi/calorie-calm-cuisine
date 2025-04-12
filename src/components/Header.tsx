
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm py-4 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-mint-400 to-sky-400 flex items-center justify-center">
            <span className="text-white font-bold">CC</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
            CalorieCuisine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/meals" className="text-foreground/80 hover:text-foreground transition-colors">
            Meal Plans
          </Link>
          <Button variant="default" className="bg-gradient-to-r from-mint-400 to-sky-400 hover:from-mint-500 hover:to-sky-500">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/meals" 
              className="text-foreground/80 hover:text-foreground py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Meal Plans
            </Link>
            <Button 
              variant="default" 
              className="w-full bg-gradient-to-r from-mint-400 to-sky-400 hover:from-mint-500 hover:to-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
