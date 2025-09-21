import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, ShoppingCart, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Users,
    title: "Operators",
    description: "Chef-free kitchens with consistent food quality and better economics",
    features: [
      "Reduce dependency on skilled chefs",
      "Lower operational costs",
      "Consistent quality every time",
      "Smaller kitchen footprint"
    ],
    cta: "Partner with us",
    href: "/operators"
  },
  {
    icon: Building2,
    title: "Brands",
    description: "Scale without commissaries or chef churn using codified recipes",
    features: [
      "Standardize recipes globally",
      "Eliminate chef training costs",
      "Faster market expansion",
      "Quality consistency across locations"
    ],
    cta: "Grow with us",
    href: "/brands"
  },
  {
    icon: ShoppingCart,
    title: "Consumers",
    description: "Consistent, safe, and affordable food powered by yKOS technology",
    features: [
      "Guaranteed quality & consistency",
      "Enhanced food safety",
      "Affordable pricing",
      "Access to premium recipes"
    ],
    cta: "Experience yKOS",
    href: "/consumers"
  }
];

export const WhoWeServeSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            yKOS transforms the entire food ecosystem — from kitchen operators to global brands to everyday consumers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card key={index} className="feature-card group hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{segment.title}</CardTitle>
                  <CardDescription className="text-base">
                    {segment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="hero" 
                    className="w-full group-hover:bg-primary-hover transition-colors"
                    asChild
                  >
                    <a href={segment.href}>
                      {segment.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};