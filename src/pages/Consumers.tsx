import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, ThermometerSun, Star, Repeat, CheckCircle, ArrowRight } from "lucide-react";

const Consumers = () => {
  const trustFactors = [
    {
      icon: Target,
      title: "Precision SOPs",
      description: "Cooked with precision SOPs, not guesswork"
    },
    {
      icon: Shield,
      title: "Hygienic Environment", 
      description: "Prepared in a monitored, hygienic environment"
    },
    {
      icon: ThermometerSun,
      title: "Consistent Taste",
      description: "Delivered with consistent taste, every time"
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
                Made with <span className="text-primary">yKOS</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Safe. Consistent. Delicious.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
              <p className="text-xl text-muted-foreground mb-8">
                When you see the <strong>"Made with yKOS"</strong> seal, you know your meal was:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {trustFactors.map((factor, index) => {
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

        {/* Trust Badge */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-16">
                The <span className="text-primary">yKOS</span> Trust Seal
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border-2 border-primary/30 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">Made with yKOS</div>
                      <div className="text-sm text-muted-foreground">Consistent Quality Assured</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">Like "Intel Inside" for Kitchens</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    The yKOS seal represents a commitment to quality, consistency, and safety. 
                    When you see this badge, you can trust that your meal was prepared using 
                    our proven Kitchen Operating System.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Quality guaranteed</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Hygiene monitored</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>Taste consistent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Proven <span className="text-primary">Results</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Our kitchens have already served 1,000+ meals with exceptional quality and customer satisfaction.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="feature-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">4.0+</CardTitle>
                    <CardDescription>Average Rating</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">Consistent customer satisfaction across all orders</p>
                  </CardContent>
                </Card>

                <Card className="feature-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                      <Repeat className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">34%</CardTitle>
                    <CardDescription>Repeat Rate</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">Strong customer loyalty and taste consistency</p>
                  </CardContent>
                </Card>

                <Card className="feature-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">1,000+</CardTitle>
                    <CardDescription>Meals Served</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">Real proof of consistent quality delivery</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                The <span className="text-primary">Future</span> of Food
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Imagine having access to celebrity chef recipes, prepared with perfect consistency, 
                anywhere in the world. That's the future we're building with yKOS.
              </p>

              <div className="bg-background rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Coming Soon: Global Recipe Access</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Order your favorite dishes from renowned chefs, prepared with the same precision 
                  and quality standards, whether you're in Mumbai, Dubai, or anywhere else yKOS operates.
                </p>
                <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
                  Stay Updated
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

export default Consumers;