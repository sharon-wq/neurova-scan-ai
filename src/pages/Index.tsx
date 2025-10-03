import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Doctors } from "@/components/Doctors";
import { AuthDialog } from "@/components/AuthDialog";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setAuthOpen(true);
  };

  const handleAuthSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <Doctors />
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-2xl text-center space-y-6 max-w-3xl mx-auto border-2 border-primary/30">
            <h2 className="text-4xl font-bold">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of medical professionals using Neurova for accurate brain tumor diagnostics
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent text-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-cyan hover:glow-purple rounded-md text-lg px-8 py-4"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <AuthDialog
        open={authOpen}
        onOpenChange={setAuthOpen}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
