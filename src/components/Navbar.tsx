import { useState, useEffect } from "react";
import { Brain } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

interface NavbarProps {
  onGetStarted: () => void;
}

export const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary animate-glow-pulse" />
            <span className="text-2xl font-bold text-gradient">Neurova</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
          </div>

          <GradientButton onClick={onGetStarted}>
            Get Started
          </GradientButton>
        </div>
      </div>
    </nav>
  );
};
