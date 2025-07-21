import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "Texas, USA",
      role: "Senior AI Engineer at Fintech",
      quote: "ScholarHat's Azure AI training changed my game. I was stuck in backend roles, and now I work on GenAI-powered solutions for a U.S.-based fintech. Their live projects and expert mentorship are unmatched.",
      rating: 5
    },
    {
      name: "Susan B.",
      location: "New York",
      role: "Full Stack Developer → AI Architect",
      quote: "Forget YouTube tutorials — this is enterprise-grade AI training delivered by someone who actually ships code at scale. Best investment I made this year.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            💬 Hear from Our{" "}
            <span className="text-primary">Learners</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real success stories from developers who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-accent text-accent-foreground px-8 py-4 rounded-2xl shadow-accent">
            <p className="text-lg font-semibold">
              Join 1,00,000+ developers who've transformed their careers with ScholarHat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;