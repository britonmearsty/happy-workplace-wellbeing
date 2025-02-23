
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-brand-600">
              WellnessWork
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-brand-600 transition-colors">
              FAQ
            </a>
            <Link to="/auth">
              <Button variant="outline" className="mr-2">
                Log in
              </Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-gray-50"
            >
              FAQ
            </a>
            <div className="px-3 py-2 space-y-2">
              <Link to="/auth">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
