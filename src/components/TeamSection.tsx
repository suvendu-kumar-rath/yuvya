import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Budhaditya Bhattacharyya",
    role: "Founder & CEO",
    background: "20+ years at Amazon, IIT KGP alumnus",
    email: "budha@yuvya.co.in",
    linkedin: "#",
    bio: "Led large-scale automation projects at Amazon, bringing deep expertise in operational systems and robotics."
  },
  {
    name: "Anshuman Mohanty", 
    role: "Co-Founder & CTO",
    background: "Amazon engineering veteran, IIT KGP",
    email: "ayusman@yuvya.co.in",
    linkedin: "#",
    bio: "Expert in AI/ML systems and robotic automation, formerly led engineering teams at Amazon's fulfillment centers."
  }
];

const advisors = [
  "RIIDL (Robotics & AI Incubator)",
  "i-Hub (IIT Delhi)",
  "Industry Veterans from F&B",
  "Robotics Engineering Advisors"
];

export const TeamSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Execution <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Amazon veterans with 20+ years of experience in automation and large-scale operations, 
            combined with deep operator empathy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card key={index} className="feature-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
                <div className="text-sm text-muted-foreground">{member.background}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisors & Backers */}
        <div className="bg-surface rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Advisors & Incubators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-background">
                <span className="text-sm font-medium">{advisor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="text-center bg-primary-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Technology should enhance human potential, not replace it. We combine cutting-edge automation 
            with deep understanding of kitchen operations to create solutions that truly work."
          </p>
        </div>
      </div>
    </section>
  );
};