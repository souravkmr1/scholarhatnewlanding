import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, BookOpen } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            👨‍🏫 Learn from the{" "}
            <span className="text-primary">Best in the Industry</span>
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card border-primary/10">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Instructor Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Shailendra Chauhan</h3>
                  <div className="space-y-2">
                    <Badge variant="default" className="mr-2">10× Microsoft MVP</Badge>
                    <Badge variant="outline" className="mr-2">Global AI Consultant</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-lg">Trained 1,00,000+ Developers Worldwide</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-lg">Microsoft Most Valuable Professional</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-primary" />
                    <span className="text-lg">Global AI & Cloud Architecture Expert</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="text-lg">Enterprise AI Implementation Specialist</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-lg italic">
                    "Get mentored live — not just recorded lectures. Learn architecture, 
                    implementation, and enterprise best practices from someone who builds 
                    and deploys AI in the real world."
                  </p>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-6">
                <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
                  <h4 className="text-2xl font-bold mb-4">Real-World Experience</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">▶</span>
                      <span>Led AI transformations for Fortune 500 companies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">▶</span>
                      <span>Architected enterprise-scale Azure AI solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">▶</span>
                      <span>Published Azure AI best practices and patterns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">▶</span>
                      <span>Active contributor to Azure AI community</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">AI Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstructorSection;