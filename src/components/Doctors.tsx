import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    image: doctor1,
    name: "Dr. Sarah Chen",
    role: "Neurosurgeon, Stanford Medical",
    quote: "Neurova has transformed our diagnostic workflow. The accuracy and speed are remarkable.",
  },
  {
    image: doctor2,
    name: "Dr. Michael Roberts",
    role: "Radiologist, Mayo Clinic",
    quote: "An invaluable tool that helps us catch cases earlier and plan treatments more effectively.",
  },
  {
    image: doctor3,
    name: "Medical Team",
    role: "Johns Hopkins Hospital",
    quote: "The AI-powered insights have significantly improved our patient outcomes and treatment planning.",
  },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Medical Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading healthcare institutions rely on Neurova for accurate diagnostics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass p-6 hover:bg-card/60 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <p className="text-foreground mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
