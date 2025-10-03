import { Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-float" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Brain Tumor Detection</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Revolutionizing Brain Tumor{" "}
            <span className="text-gradient">Diagnostics</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI technology that identifies tumor type, volume, and stage with 97% accuracy. 
            Get your personalized treatment plan in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              <Brain className="w-5 h-5" />
              Start Diagnosis
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">97%</div>
              <div className="text-muted-foreground">Accuracy</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-muted-foreground">Scans Analyzed</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5min</div>
              <div className="text-muted-foreground">Average Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
