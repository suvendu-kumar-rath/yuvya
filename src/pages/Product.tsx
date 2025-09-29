import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Cog, Bot } from "lucide-react";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-surface/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Kitchen
                <span className="text-primary block">Operating System</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Consistent. Skill-free. Scalable.
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                yKOS is a full-stack Kitchen Operating System — combining software, hardware, and robotics — 
                built to make running complex ethnic kitchens predictable, not painful.
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
              
              {/* yKOS Lite */}
              <Card className="feature-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <Cog className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl mb-2">yKOS Lite</CardTitle>
                  <CardDescription className="text-lg">Available Now</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Prep playbooks and voice prompts guide every step</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Induction cooktops and wokies execute pre-coded recipes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Notion-based dashboard tracks recipes, QA, and tasks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Built from our proof-of-concept, already tested on 1,000+ orders</span>
                    </li>
                  </ul>
                  <Button variant="hero" className="w-full">
                    Pilot yKOS Lite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* yKOS Full */}
              <Card className="feature-card border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl mb-2">yKOS Full</CardTitle>
                  <CardDescription className="text-lg">Future Vision</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Robotic modules for curry, bread, marination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Ingredient dispensers and marination units</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>IoT-enabled cook stations with adaptive recipe logic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Cloud-based orchestration for multi-site rollout</span>
                    </li>
                  </ul>
                  <Button variant="cta" className="w-full">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                See yKOS <span className="text-primary">in Action</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Watch our Kitchen Operating System transform food preparation
              </p>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZOQGDKBtSq8"
                  title="yKOS Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Product <span className="text-primary">Roadmap</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-6 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Oct '25 → yKOS Lite launches with external operators</h3>
                    <p className="text-muted-foreground">Full commercial deployment of our proven system to partner kitchens.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/70 flex items-center justify-center mr-6 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mar '26 → Hardware Beta with automation triggers</h3>
                    <p className="text-muted-foreground">Integration of smart hardware and automated cooking triggers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center mr-6 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sep '26 onward → Full robotic kitchens at scale</h3>
                    <p className="text-muted-foreground">Complete automation with robotic modules for mass deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-muted-foreground italic leading-relaxed">
                "yKOS digitizes recipes, enforces SOPs, and orchestrates both humans and machines in the kitchen."
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;