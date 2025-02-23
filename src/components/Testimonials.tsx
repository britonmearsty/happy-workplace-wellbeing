
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we support our remote teams. The AI-driven insights have helped us identify and address potential burnout before it becomes a problem.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    quote:
      "The engagement tools and analytics have made a measurable impact on our company culture. Our employee satisfaction scores have increased by 40% since implementing this solution.",
    author: "Michael Chen",
    role: "People Operations Manager",
    company: "InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    quote:
      "What impressed me most was how quickly we saw results. Within just two months, we noticed a significant improvement in team collaboration and overall workplace happiness.",
    author: "Emma Rodriguez",
    role: "Chief People Officer",
    company: "Global Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by HR Teams Everywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how organizations are transforming their workplace culture with our platform.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <Quote className="h-8 w-8 text-brand-600 mb-6" />
                    <blockquote className="text-xl text-gray-900 mb-6">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
