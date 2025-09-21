import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced robotic kitchen system"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-primary-light px-4 py-2 text-sm text-primary mb-8">
            <span className="font-medium">Already serving 1,000+ meals without a chef</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Kitchen
            <span className="text-primary block">Operating System</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your kitchen operations with yKOS — the world's first Kitchen Operating System 
            that combines robotics, AI, and automation to deliver consistent, scalable food production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
              For Operators
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="cta" className="text-lg px-8 py-4 h-auto">
              For Brands
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="minimal" className="text-lg px-8 py-4 h-auto">
              For Investors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground">Orders Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Recipe SKUs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">34%</div>
              <div className="text-sm text-muted-foreground">Repeat Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.2★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};