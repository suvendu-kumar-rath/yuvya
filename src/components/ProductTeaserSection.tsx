import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductTeaserSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The yKOS <span className="text-primary">Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From semi-automated kitchens today to fully robotic operations tomorrow — 
            yKOS evolves with your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* yKOS Lite */}
          <Card className="feature-card relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Available Today
              </span>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">yKOS Lite</CardTitle>
              <CardDescription className="text-base">
                Semi-automated kitchen operations with guided workflows and quality control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Digital recipe management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Guided cooking workflows</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Quality monitoring systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Inventory integration</span>
                </li>
              </ul>
              <div className="bg-primary-light rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-primary mb-1">Pilot Results</div>
                <div className="text-xs text-muted-foreground">
                  60% faster prep • 99% consistency • 40% less waste
                </div>
              </div>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">
                  Pilot yKOS Lite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* yKOS Full */}
          <Card className="feature-card relative overflow-hidden border-primary/20">
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Coming 2026
              </span>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">yKOS Full</CardTitle>
              <CardDescription className="text-base">
                Fully robotic kitchen operations with autonomous cooking and service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Robotic cooking automation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">AI-powered quality control</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Autonomous ingredient handling</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                  <span className="text-sm">Zero-touch operations</span>
                </li>
              </ul>
              <div className="bg-accent rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-accent-foreground mb-1">Future Vision</div>
                <div className="text-xs text-muted-foreground">
                  100% consistency • 24/7 operations • Scalable to any cuisine
                </div>
              </div>
              <Button variant="minimal" className="w-full" asChild>
                <Link to="/contact">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/product">
              Explore the Full Product
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};