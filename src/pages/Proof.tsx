import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Repeat, DollarSign, CheckCircle, ArrowRight, Download, Eye } from "lucide-react";

const Proof = () => {
  const results = [
    {
      icon: Star,
      metric: "4.0+",
      label: "Average Rating",
      description: "Consistent customer satisfaction across all orders"
    },
    {
      icon: Repeat,
      metric: "34%",
      label: "Repeat Customers",
      description: "Strong customer loyalty and taste consistency"
    },
    {
      icon: DollarSign,
      metric: "30%",
      label: "Lower Labor Cost",
      description: "Significant operational savings without quality compromise"
    },
    {
      icon: CheckCircle,
      metric: "100%",
      label: "Stable Operations",
      description: "Consistent performance across menu complexity"
    }
  ];

  const learnings = [
    "Chef-free kitchens are possible with the right systems and processes",
    "Recipe codification enables consistent execution across different operators",
    "Operator adoption requires simple, intuitive workflows and clear guidance",
    "Multi-cuisine complexity can be managed with proper SOP implementation"
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
                Proof it <span className="text-primary">works</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                1,000+ orders. No chefs. Happy customers.
              </p>
            </div>
          </div>
        </section>

        {/* What We Did */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What We Did</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We ran a live 6-month proof of concept kitchen without chefs. Over 1,000 orders were served, 
                across 30+ SKUs and 5 sub-cuisines (North Indian, South Indian, Bengali, Marathi, Indo-Chinese).
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card key={index} className="feature-card text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-2">{result.metric}</CardTitle>
                      <CardDescription className="text-lg font-medium">
                        {result.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kitchen in Action */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Kitchen in Action</h2>
              <p className="text-xl text-muted-foreground">
                Real operations. Real results. Real proof that chef-free kitchens work.
              </p>
            </div>

            {/* Placeholder for Kitchen Operations Dashboard */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="aspect-video bg-muted rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">Kitchen Operations Dashboard</p>
                  <p className="text-sm text-muted-foreground">Live footage and data from our POC kitchen</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Order Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Prep Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Food Waste Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Learned */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                What We <span className="text-primary">Learned</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {learnings.map((learning, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-muted-foreground">{learning}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  <Eye className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
                <Button size="lg" variant="cta" className="text-lg px-8 py-4 h-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Unit Economics
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Proof;