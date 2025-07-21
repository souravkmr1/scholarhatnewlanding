import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, Monitor, CreditCard, Gift } from "lucide-react";

const PricingSection = () => {
  const features = [
    "🔴 Live Classes with Microsoft MVPs",
    "📂 Lifetime Access to Recordings & Projects", 
    "💼 Certification Prep + Practice Tests (AI-900, AI-102)",
    "🧑‍💻 Project Codebase + GitHub Deployment",
    "🧭 1:1 Career Coaching + Resume Support",
    "💬 Real-time Doubt Clearing + Peer Group",
    "🌎 Global Community of Engineers + Recruiters"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎯 Pricing &{" "}
            <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get access to expert-led live training, 4 projects, and certification roadmap 
            at just a fraction of U.S. bootcamp cost
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What You Get */}
          <div>
            <h3 className="text-3xl font-bold mb-8">✅ What You Get</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Batch Details */}
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>🕘 Upcoming Batch Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span><strong>Starts:</strong> [Insert Start Date]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>Timings:</strong> Morning & Evening USA Batches Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span><strong>Format:</strong> 100% Live Online Classes | Flexible Schedule</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Card */}
          <div className="space-y-8">
            <Card className="border-primary/20 shadow-glow hover:shadow-accent transition-all duration-300">
              <CardHeader className="text-center bg-gradient-primary text-primary-foreground rounded-t-lg">
                <Badge variant="secondary" className="mb-4 mx-auto">Most Popular</Badge>
                <CardTitle className="text-3xl font-bold">Azure AI Engineer Program</CardTitle>
                <p className="text-primary-foreground/90">Complete certification + project mastery</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2">Premium Training</div>
                  <p className="text-muted-foreground">At just a fraction of U.S. bootcamp cost</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>💳 EMI options available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gift className="w-5 h-5 text-accent" />
                    <span>🎁 Special scholarship available for early applicants</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-6">
                  Reserve Your Seat Now
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Seats are limited. Batches fill fast.
                </p>
              </CardContent>
            </Card>

            {/* Certification */}
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🎓</span>
                  <span>Globally Recognized Certification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Become a Microsoft Certified Azure AI Engineer</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Get a ScholarHat Completion Certificate signed by Microsoft MVPs</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Showcase your real-world AI portfolio on LinkedIn, GitHub & your resume</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;