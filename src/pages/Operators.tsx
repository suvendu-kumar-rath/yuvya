import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Clock, Target, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react";

const Operators = () => {
  const problems = [
    {
      icon: Users,
      title: "High Staff Churn",
      description: "60-70% annual turnover creates constant training costs and inconsistent quality"
    },
    {
      icon: TrendingDown,
      title: "Daily Chaos",
      description: "Unpredictable costs, quality issues, and operational complexity"
    },
    {
      icon: Target,
      title: "Consistency Issues",
      description: "Hard to replicate the same quality and taste across multiple outlets"
    }
  ];

  const benefits = [
    {
      title: "Skill-free Operations",
      description: "SOP-led workflows ensure predictable food quality without skilled chefs",
      metric: "Days not months",
      metricDesc: "Staff productivity timeline"
    },
    {
      title: "Better Margins", 
      description: "Reduce labor costs while maintaining or improving food quality",
      metric: "20-25%",
      metricDesc: "Operating margin vs 10-12% traditional"
    },
    {
      title: "Smaller Footprint",
      description: "Operate in 100-200 sq ft spaces with lower rent and asset-light scaling",
      metric: "50-60%",
      metricDesc: "Space reduction vs traditional kitchens"
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
                Run kitchens <span className="text-primary">without chefs</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Better margins. Less chaos.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">The Problem</h2>
              <p className="text-xl text-muted-foreground">
                Traditional kitchen operations are plagued with challenges that make scaling difficult and profitability uncertain.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="feature-card text-center border-red-200 dark:border-red-800">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                      <CardTitle className="text-xl">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How yKOS Helps */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                How <span className="text-primary">yKOS</span> Helps
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform your kitchen operations with our proven system that eliminates common pain points.
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{benefit.description}</p>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-primary mr-4">{benefit.metric}</div>
                      <div className="text-sm text-muted-foreground">{benefit.metricDesc}</div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <Card className="feature-card">
                      <CardContent className="p-8">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                            <p className="text-lg font-medium">{benefit.title} in Action</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How You Start */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-16">
                How You <span className="text-primary">Start</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="feature-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-2xl">Deploy yKOS Lite</CardTitle>
                    <CardDescription>Start with your existing kitchen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Implement our proven system in your current setup. Begin serving customers 
                      with consistent quality immediately.
                    </p>
                  </CardContent>
                </Card>

                <Card className="feature-card">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-2xl">Upgrade to Full yKOS</CardTitle>
                    <CardDescription>Scale as demand grows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Add robotic modules and advanced automation as your business expands 
                      and you're ready for the next level.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="bg-surface rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to simplify your kitchen?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join the pilot program and start transforming your operations today.
                </p>
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  Pilot yKOS Lite
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

export default Operators;