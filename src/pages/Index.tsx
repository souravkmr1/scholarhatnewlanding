import HeroSection from "@/components/HeroSection";
import WhyAzureAI from "@/components/WhyAzureAI";
import InstructorSection from "@/components/InstructorSection";
import ProjectsSection from "@/components/ProjectsSection";
import LearningPath from "@/components/LearningPath";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyAzureAI />
      <InstructorSection />
      <ProjectsSection />
      <LearningPath />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default Index;
