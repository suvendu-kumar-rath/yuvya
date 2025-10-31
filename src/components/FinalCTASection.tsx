import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Building2, TrendingUp } from "lucide-react";

const ctaOptions = [
  {
    icon: Users,
    title: "Operators",
    description: "Ready to transform your kitchen?",
    action: "Pilot yKOS Lite",
    href: "/operators",
    variant: "hero" as const
  },
  {
    icon: Building2,
    title: "Brands", 
    description: "Scale your recipes globally?",
    action: "Share Your Brand Info",
    href: "/brands",
    variant: "cta" as const
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Interested in the opportunity?",
    action: "Request Investor Deck",
    href: "/investors",
    variant: "minimal" as const
  }
];

export const FinalCTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Join the
            <span className="text-primary block">Kitchen Revolution?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're an operator, brand, or investor — there's a place for you 
            in the future of food production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="feature-card text-center group hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={option.variant} 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href={option.href}>
                      {option.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Have questions? Want to learn more?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a 
              href="mailto:budha@yuvya.co.in" 
              className="text-sm text-primary hover:text-primary-hover"
            >
              budha@yuvya.co.in
            </a>
            <a 
              href="tel:+918928608388" 
              className="text-sm text-primary hover:text-primary-hover"
            >
              +91 89286 08388
            </a>
            <a 
              href="https://linkedin.com/company/yuvya-india" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-hover"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};