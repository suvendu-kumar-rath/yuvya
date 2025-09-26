import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight, Globe } from "lucide-react";

const expansionPath = [
  { region: "India", status: "Active", description: "Pilot operations in Mumbai" },
  { region: "3 Indian Cities", status: "2026 End", description: "Expansion to major metropolitan cities across India" },
  { region: "Americas, Middle East", status: "2027", description: "North American expansion and UAE markets" },
  { region: "Southeast Asia, Europe", status: "2028", description: "Malaysia, Singapore, Thailand, and European markets" }
];

export const GlobalVisionSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary-light px-4 py-2 text-sm text-primary mb-4">
            <Globe className="h-4 w-4 mr-2" />
            Global Expansion Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Universal
            <span className="text-primary block">Kitchen OS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our vision extends far beyond India. We're creating the global standard 
            for kitchen automation, designed for scalability from Day 1.
          </p>
        </div>

        {/* Expansion Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {expansionPath.map((phase, index) => (
              <Card key={index} className="feature-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        phase.status === 'Active' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{phase.region}</CardTitle>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      phase.status === 'Active' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Strategy */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="feature-card text-center">
            <CardHeader>
              <CardTitle className="text-xl">Universal Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Platform-agnostic recipe codification that works across any cuisine, 
                any culture, any kitchen setup.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card text-center">
            <CardHeader>
              <CardTitle className="text-xl">Localized Execution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Adapt to local ingredients, tastes, and regulations while maintaining 
                core quality and consistency standards.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card text-center">
            <CardHeader>
              <CardTitle className="text-xl">Scalable Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cloud-native architecture designed to support millions of kitchens 
                across diverse markets and use cases.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            "Making consistent, quality food accessible to everyone, everywhere"
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Just as operating systems standardized computing, yKOS will standardize cooking — 
            enabling any recipe to be perfectly executed in any kitchen, anywhere in the world.
          </p>
          <Button variant="secondary" size="lg">
            Join Our Global Mission
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};