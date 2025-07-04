import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import bnbLogo from "@assets/image1_1749360591972.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={bnbLogo} 
              alt="BnB Software Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <button
                className={cn(
                  "transition-colors duration-200 font-medium text-lg",
                  isScrolled ? "text-gray-700 hover:text-green-500" : "text-white hover:text-green-300"
                )}
              >
                Home
              </button>
            </Link>
            <Link href="/solutions">
              <button
                className={cn(
                  "transition-colors duration-200 font-medium text-lg",
                  isScrolled ? "text-gray-700 hover:text-green-500" : "text-white hover:text-green-300"
                )}
              >
                Solutions
              </button>
            </Link>
            <Link href="/about">
              <button
                className={cn(
                  "transition-colors duration-200 font-medium text-lg",
                  isScrolled ? "text-gray-700 hover:text-green-500" : "text-white hover:text-green-300"
                )}
              >
                About Us
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={cn(
                  "transition-colors duration-200 font-medium text-lg",
                  isScrolled ? "text-gray-700 hover:text-green-500" : "text-white hover:text-green-300"
                )}
              >
                Contact
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="bg-green-400 text-white px-8 py-3 rounded-full hover:bg-green-500 transition-colors duration-200 font-medium text-lg"
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors duration-200",
              isScrolled ? "text-gray-700 hover:text-green-500" : "text-white hover:text-green-300"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <Link href="/">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium text-lg"
                >
                  Home
                </button>
              </Link>
              <Link href="/solutions">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium text-lg"
                >
                  Solutions
                </button>
              </Link>
              <Link href="/about">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium text-lg"
                >
                  About Us
                </button>
              </Link>
              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-green-500 transition-colors duration-200 font-medium text-lg"
                >
                  Contact
                </button>
              </Link>
              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white bg-green-400 rounded-full px-6 font-medium hover:bg-green-500 transition-colors duration-200 text-lg"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
