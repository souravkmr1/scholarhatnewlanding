import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Building, Award } from "lucide-react";

const LearningPath = () => {
  const pathSteps = [
    {
      icon: Brain,
      number: "1",
      title: "Foundations of Azure AI & GenAI",
      description: "Master the fundamentals before diving deep",
      topics: [
        "Cloud AI ecosystem, LLMs, GPT",
        "Azure AI Studio, AI services",
        "Understanding AI/ML pipeline"
      ],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: Code,
      number: "2", 
      title: "Prompt Engineering & GPT Integrations",
      description: "Learn to communicate effectively with AI models",
      topics: [
        "Craft effective prompts",
        "Use OpenAI models within Azure apps",
        "Advanced prompt patterns"
      ],
      color: "bg-success/10 text-success border-success/20"
    },
    {
      icon: Building,
      number: "3",
      title: "Enterprise AI App Architecture",
      description: "Build production-ready AI applications",
      topics: [
        "Cognitive Services, Document AI, Bot Framework",
        "Using REST APIs with Azure SDK + .NET + JavaScript",
        "Scalable AI architecture patterns"
      ],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: Award,
      number: "4",
      title: "Certification Track",
      description: "Get certified and prove your expertise",
      topics: [
        "AI-900: Azure AI Fundamentals",
        "AI-102: Designing and Implementing Azure AI Solutions",
        "Practice tests, mock interviews, mentorship"
      ],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎓 Your{" "}
            <span className="text-primary">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully designed curriculum that takes you from fundamentals to certification, 
            with hands-on projects at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pathSteps.map((step, index) => (
            <Card key={index} className={`${step.color} hover:shadow-card transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-current/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-current/20 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm mb-4 opacity-80">{step.description}</p>
                <div className="space-y-2">
                  {step.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start space-x-2">
                      <span className="text-current mt-1">▶</span>
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              🎯 Designed for{" "}
              <span className="text-primary">Working Professionals</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mid-level .NET / Backend / Full Stack Developers",
              "Software Engineers looking to shift into AI", 
              "Cloud Engineers & DevOps transitioning to AI/ML",
              "Anyone preparing for AI-900 or AI-102 certification"
            ].map((audience, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 border-primary/10">
                <div className="text-4xl mb-4">✅</div>
                <p className="font-medium">{audience}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-muted/50 px-8 py-4 rounded-2xl">
              <Badge variant="outline" className="text-sm">🎥 Flexible live & recorded access</Badge>
              <Badge variant="outline" className="text-sm">🕘 USA-friendly morning & evening batches</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;