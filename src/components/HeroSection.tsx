import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-semibold">
                🧠 Azure AI & GenAI Engineer Certification Training
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build AI-Powered Apps with{" "}
                <span className="text-accent">Azure AI</span>,{" "}
                <span className="text-accent">OpenAI</span> & GPT
              </h1>
              
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Learn LIVE from Microsoft MVPs | Build 4 Real Projects | Get Certified
              </p>
              
              <p className="text-lg text-primary-foreground/80">
                Future-proof your tech career in the AI era with the most hands-on, 
                project-based, globally trusted Azure AI training for developers.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">56% YoY</div>
                  <div className="text-sm text-primary-foreground/80">AI Job Growth</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">$130K+</div>
                  <div className="text-sm text-primary-foreground/80">Average Package</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                Reserve Your Seat Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Book Free 1:1 Call
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>100% Live Training</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Certification Prep</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="space-y-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-center">Why This Program?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Learn from Microsoft MVPs</div>
                    <div className="text-sm text-primary-foreground/80">Real industry experts, not just instructors</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold">4 Enterprise Projects</div>
                    <div className="text-sm text-primary-foreground/80">Build real AI applications during live sessions</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold">AI-900 & AI-102 Prep</div>
                    <div className="text-sm text-primary-foreground/80">Complete certification roadmap</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold">USA-Friendly Timings</div>
                    <div className="text-sm text-primary-foreground/80">Morning & evening batches available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;