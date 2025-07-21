import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Briefcase, DollarSign } from "lucide-react";

const WhyAzureAI = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "56% YoY",
      label: "AI jobs are growing in the USA",
      description: "Unprecedented demand for AI skills"
    },
    {
      icon: Briefcase,
      value: "Scale",
      label: "Enterprises adopting Azure OpenAI, GPT-4, LLMs at scale",
      description: "Real business transformation"
    },
    {
      icon: Users,
      value: "Scarce",
      label: "Demand for Azure AI Engineers is skyrocketing",
      description: "But skilled talent is limited"
    },
    {
      icon: DollarSign,
      value: "$130K+",
      label: "Developers with Cloud + AI expertise packages",
      description: "Premium compensation awaits"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🔥 Why Azure AI & GenAI Engineer is the{" "}
            <span className="text-primary">Most In-Demand Role</span> Today?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ScholarHat's program helps you tap into this opportunity with certification + 
            project-led mastery — led by real industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-primary/10">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-glow">
            <p className="text-lg font-semibold">
              From Developer to Architect — Learn to build with AI, not fear it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAzureAI;