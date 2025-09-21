import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Cog, Globe, Star, Repeat, DollarSign, ArrowRight, Play, FileText } from "lucide-react";

const Investors = () => {
  const whyNowFactors = [
    {
      icon: Users,
      title: "Labor Shortage",
      description: "Skilled kitchen staff is increasingly scarce with 60-70% annual turnover"
    },
    {
      icon: Cog,
      title: "Technology Maturity",
      description: "Robotics and automation are now mature and affordable for commercial use"
    },
    {
      icon: Globe,
      title: "Market Gap",
      description: "No proven infrastructure exists for multi-cuisine, multi-country rollouts"
    }
  ];

  const proofMetrics = [
    {
      icon: Star,
      metric: "1,000+",
      label: "Meals Served",
      description: "Real operational proof with consistent quality"
    },
    {
      icon: DollarSign,
      metric: "30%",
      label: "Labor Savings",
      description: "Significant cost reduction without quality compromise"
    },
    {
      icon: Repeat,
      metric: "34%",
      label: "Repeat Rate",
      description: "Strong customer loyalty demonstrates market fit"
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
                From PoC to <span className="text-primary">Platform</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Building the Kitchen OS for the world
              </p>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Now</h2>
              <p className="text-xl text-muted-foreground">
                Multiple macro trends are converging to create an unprecedented opportunity in kitchen automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyNowFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <Card key={index} className="feature-card text-center">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{factor.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{factor.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Proof */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-primary">Proof</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We've moved beyond theory to deliver real results with paying customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {proofMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="feature-card text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-2">{metric.metric}</CardTitle>
                      <CardDescription className="text-lg font-medium">
                        {metric.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Traction Points */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">Customer Traction</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>LoI from Kytchens (Mumbai)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>Brand discussions underway in Dubai</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>Operator pilot program launching Q1 2025</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-xl">Technology Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>6+ months of live kitchen operations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>30+ SKUs across 6 sub-cuisines</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>Proven chef-free operations model</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                See yKOS in <span className="text-primary">Action</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Watch our kitchen operations and understand the technology behind consistent, chef-free cooking.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="feature-card">
                <CardContent className="p-8">
                  <div className="aspect-video bg-muted rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <p className="text-lg font-medium mb-2">Kitchen Operations Demo</p>
                      <p className="text-sm text-muted-foreground">Click to watch our live kitchen in action</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Market <span className="text-primary">Opportunity</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The global commercial kitchen automation market is projected to reach $X billion by 2030, 
                driven by labor shortages and demand for consistent quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Total Addressable Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Cloud Kitchens (Global)</span>
                      <span className="font-semibold">$71.4B by 2027</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Kitchen Automation</span>
                      <span className="font-semibold">$14.9B by 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Food Robotics</span>
                      <span className="font-semibold">$4.2B by 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Addressable Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Multi-cuisine Cloud Kitchens</span>
                      <span className="font-semibold">$8.5B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>QSR Chain Automation</span>
                      <span className="font-semibold">$12.3B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Virtual Brand Infrastructure</span>
                      <span className="font-semibold">$5.1B</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-surface rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-4">Interested in our journey?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Get access to our latest dataroom with detailed metrics, market analysis, and growth projections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                    <FileText className="mr-2 h-5 w-5" />
                    Request latest dataroom
                  </Button>
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4 h-auto">
                    <Play className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investors;