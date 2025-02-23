
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$5",
    description: "Perfect for small teams getting started",
    features: [
      "Basic wellbeing assessments",
      "Team engagement tools",
      "Basic analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$10",
    description: "Best for growing organizations",
    features: [
      "Advanced wellbeing assessments",
      "Custom engagement programs",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom integrations",
      "Team training sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "All Professional features",
      "Dedicated success manager",
      "Custom feature development",
      "SLA guarantees",
      "On-premise deployment",
      "24/7 phone support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team's size and needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                plan.popular
                  ? "border-2 border-brand-500 scale-105 md:scale-110"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-brand-500 px-4 py-1 text-sm font-semibold text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /user/mo
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 flex-shrink-0 text-brand-500" />
                    <span className="ml-3 text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-brand-500 hover:bg-brand-600" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
