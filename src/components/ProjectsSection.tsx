import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bot, FileText, Mic } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code,
      title: "Smart Resume Screener",
      description: "AI-powered resume analysis and ranking system",
      skills: ["Azure OpenAI", "Embeddings", "GPT Prompt Engineering"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Bot,
      title: "AI Chatbot for Support",
      description: "Intelligent customer support automation",
      skills: ["Azure Bot Service", "Azure OpenAI", "React"],
      color: "bg-success/10 text-success"
    },
    {
      icon: FileText,
      title: "Document AI for Legal Contracts",
      description: "Automated legal document processing and analysis",
      skills: ["Form Recognizer", "NLP", "Azure ML"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Mic,
      title: "Voice Notes & Sentiment Analyzer",
      description: "Speech-to-text with emotion analysis",
      skills: ["Azure Speech", "Sentiment Analysis API"],
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🛠️ Hands-On Projects You'll{" "}
            <span className="text-primary">Build Live</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Projects are built in real time during live sessions, step-by-step — with deployment.
          </p>
          <div className="inline-block bg-gradient-accent text-accent-foreground px-6 py-3 rounded-full font-semibold">
            🧠 Real enterprise-grade applications, not tutorials
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${project.color}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Table */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10">
          <h3 className="text-2xl font-bold mb-6 text-center">Complete Project Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Project</th>
                  <th className="text-left py-4 px-4 font-semibold">Skills & Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">💡</span>
                      <span className="font-medium">Smart Resume Screener</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">Azure OpenAI, Embeddings, GPT Prompt Engineering</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🤖</span>
                      <span className="font-medium">AI Chatbot for Support</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">Azure Bot Service + Azure OpenAI + React</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📄</span>
                      <span className="font-medium">Document AI for Legal Contracts</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">Form Recognizer, NLP, Azure ML</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🎤</span>
                      <span className="font-medium">Voice Notes & Sentiment Analyzer</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">Azure Speech + Sentiment Analysis API</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;