import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ArrowRight, Users, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Ready to Build{" "}
            <span className="text-accent">AI-Powered Apps</span>?
          </h2>
          <p className="text-2xl mb-4">Don't just learn AI. Build with it.</p>
          <p className="text-xl text-primary-foreground/90">
            Your next role: <span className="text-accent font-semibold">Azure AI Engineer</span> or{" "}
            <span className="text-accent font-semibold">AI Cloud Architect</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA */}
          <div className="space-y-8">
            <Card className="bg-card/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="text-2xl font-bold">Transform Your Career Today</div>
                  
                  <div className="space-y-4">
                    <Button variant="accent" size="lg" className="w-full text-lg py-6">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Reserve Your Seat Now
                    </Button>
                    
                    <p className="text-sm text-primary-foreground/80">
                      Seats are limited. Batches fill fast.
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-success" />
                      <span>Limited Seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-success" />
                      <span>Starting Soon</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">❓ Have Questions?</h3>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Talk to a Learning Advisor | Get Career Guidance | Discuss Certification Roadmap
              </p>
            </div>

            <Card className="bg-card/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Free 1:1 Consultation</h4>
                    <p className="text-primary-foreground/80 mb-6">
                      Get personalized career guidance and course recommendations
                    </p>
                  </div>

                  <Button variant="outline" size="lg" className="w-full text-lg py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    📞 Book a Free 1:1 Call Now
                  </Button>

                  <div className="text-center text-sm text-primary-foreground/70">
                    No commitment required • 15-minute consultation
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <div className="text-lg font-semibold">
                🔥 What happens after you join?
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>✅ Immediate access to course materials</div>
                <div>✅ Join exclusive student community</div>
                <div>✅ 1:1 onboarding call with mentor</div>
                <div>✅ Start building your first AI project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;