
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
            Transform Your Workplace with 
            <span className="text-brand-600"> AI-Powered</span> Employee Wellbeing
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
            Boost engagement, reduce burnout, and foster a positive work culture with our comprehensive platform designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
          <div className="relative mx-auto max-w-[800px] animate-float">
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Platform Preview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
