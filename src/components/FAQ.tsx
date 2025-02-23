
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the platform ensure data privacy?",
    answer:
      "We take data privacy seriously. Our platform is GDPR compliant and uses enterprise-grade encryption. All personal data is stored securely, and we never share individual employee data with employers without consent.",
  },
  {
    question: "Can I integrate it with my existing HR tools?",
    answer:
      "Yes! Our platform offers seamless integration with popular HR tools and software. We provide APIs and pre-built integrations for tools like BambooHR, Workday, and more.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely! We offer a 14-day free trial of our Professional plan, no credit card required. You'll have full access to all features during the trial period.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide different levels of support based on your plan. All customers get access to our help center and email support. Professional and Enterprise plans include priority support and training sessions.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "You can start using the platform immediately after signing up. For enterprise customers, we offer a dedicated onboarding specialist to help with setup and implementation.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the platform and billing.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
