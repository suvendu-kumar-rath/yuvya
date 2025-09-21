import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, Users, TrendingUp, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";

const Brands = () => {
  const painPoints = [
    {
      icon: Building2,
      title: "Commissary Dependency",
      description: "High CAPEX requirements and slow scaling due to large infrastructure needs"
    },
    {
      icon: Users,
      title: "Chef Churn Risk",
      description: "Skilled chef turnover threatens taste consistency and brand equity"
    },
    {
      icon: Clock,
      title: "Slow Market Entry",
      description: "Expansion into new cities is costly and time-consuming"
    }
  ];

  const enablements = [
    {
      title: "Codified Recipes",
      description: "Plug your SOPs into yKOS for consistent food execution everywhere",
      icon: CheckCircle
    },
    {
      title: "Multi-cuisine Ready",
      description: "Proven with Indian, Indo-Chinese, Marathi, Bengali, and more cuisines",
      icon: CheckCircle
    },
    {
      title: "Rapid Rollout",
      description: "Launch in 100-200 sq ft kitchens instead of large commissaries",
      icon: CheckCircle
    },
    {
      title: "Data & Insights",
      description: "Track recipe performance, customer repeats, and margin analytics",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-surface/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Expand your brand <span className="text-primary">without commissaries</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                No chefs. No inconsistency. Just growth.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Pain Today */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Brand Pain Today</h2>
              <p className="text-xl text-muted-foreground">
                Traditional scaling methods create barriers that slow growth and increase risk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {painPoints.map((pain, index) => {
                const Icon = pain.icon;
                return (
                  <Card key={index} className="feature-card text-center border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                      </div>
                      <CardTitle className="text-xl">{pain.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{pain.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What yKOS Enables */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                What <span className="text-primary">yKOS</span> Enables
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform your brand expansion strategy with technology that scales consistently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {enablements.map((enablement, index) => {
                const Icon = enablement.icon;
                return (
                  <Card key={index} className="feature-card">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{enablement.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{enablement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proof of Expertise */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Proof of <span className="text-primary">Expertise</span>
              </h2>
              
              <Card className="feature-card border-primary/20 border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Multi-Cuisine Mastery</h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Our POC handled 30+ SKUs across 6 sub-cuisines with 1,000+ orders — all without chefs. 
                        That's the level of consistency we can bring to your brand.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">30+</div>
                          <div className="text-sm text-muted-foreground">Recipe SKUs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">6</div>
                          <div className="text-sm text-muted-foreground">Sub-cuisines</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">1,000+</div>
                          <div className="text-sm text-muted-foreground">Orders Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">0</div>
                          <div className="text-sm text-muted-foreground">Chefs Required</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="aspect-square bg-muted rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-lg text-muted-foreground">Cuisine Performance Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-background rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-4">Want to scale with confidence?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Let's discuss how yKOS can transform your brand expansion strategy and ensure consistent quality at every location.
                </p>
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  Share your brand info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;