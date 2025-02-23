
import { Brain, Users, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Wellbeing Assessments",
    description:
      "Regular check-ins and AI-driven insights to monitor employee health and happiness.",
  },
  {
    icon: Users,
    title: "Team Engagement Tools",
    description:
      "Virtual team-building activities and recognition programs to strengthen connections.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time data and actionable insights for HR and leadership teams.",
  },
  {
    icon: Zap,
    title: "Personalized Recommendations",
    description:
      "Tailored wellness activities and resources based on individual needs.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empower Your Team with Smart Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a thriving workplace culture and support your employees' wellbeing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-white rounded-xl border hover:border-brand-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <feature.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
