import { Brain, Target, TrendingUp, FileText, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Tumor Type Identification",
    description: "Accurately identifies multiple tumor types including gliomas, meningiomas, and pituitary tumors using advanced AI algorithms.",
  },
  {
    icon: Target,
    title: "Volume Calculation",
    description: "Precise 3D volumetric analysis of tumor size and growth patterns for effective treatment planning.",
  },
  {
    icon: TrendingUp,
    title: "Stage Detection",
    description: "Determines tumor grade and stage with medical-grade precision to guide treatment decisions.",
  },
  {
    icon: FileText,
    title: "Personalized Treatment Plans",
    description: "Generate comprehensive, personalized treatment recommendations based on your specific diagnosis.",
  },
  {
    icon: Zap,
    title: "97% AI Accuracy",
    description: "Trained on thousands of validated medical images with performance matching specialist radiologists.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and full HIPAA compliance to protect your sensitive medical data.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">AI Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced capabilities designed to revolutionize brain tumor diagnostics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass p-6 hover:bg-card/60 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-cyan">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
