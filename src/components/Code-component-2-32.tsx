import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import darkLogo from '../assets/qiskit-logo-dar.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Register", href: "#register" },
    { name: "Resources", href: "#resources" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={darkLogo} 
              alt="Qiskit Fall Fest" 
              className="w-10 h-10"
            />
            <span className="text-white text-lg">Qiskit Fall Fest</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-pink-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-pink-300 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full mt-4">
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}