import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Star, Repeat, ChefHat, ArrowRight } from "lucide-react";

const proofPoints = [
  {
    icon: TrendingUp,
    metric: "1,000+",
    label: "Orders Delivered",
    description: "Successfully serving meals in pilot kitchens"
  },
  {
    icon: ChefHat,
    metric: "30+",
    label: "Recipe SKUs",
    description: "Diverse menu options codified and automated"
  },
  {
    icon: Repeat,
    metric: "34%",
    label: "Repeat Orders",
    description: "High customer satisfaction and retention"
  },
  {
    icon: Star,
    metric: "4.0★",
    label: "Average Rating",
    description: "Consistent quality drives customer loyalty"
  }
];

export const ProofSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-primary">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real data from our pilot operations demonstrates the transformative power of yKOS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="feature-card text-center">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-light flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{point.metric}</div>
                  <CardTitle className="text-lg">{point.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{point.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Visual Evidence */}
        <div className="bg-surface rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kitchen in Action</h3>
              <p className="text-muted-foreground mb-6">
                Our pilot kitchens demonstrate real-world performance with measurable results. 
                No stock photos, no simulations — just proven technology serving real customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Order Accuracy</span>
                  <span className="font-semibold">99.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Prep Time Reduction</span>
                  <span className="font-semibold">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Food Waste Reduction</span>
                  <span className="font-semibold">40%</span>
                </div>
              </div>
            </div>
            {/* <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Kitchen Operations Dashboard</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};