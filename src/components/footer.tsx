import { Button } from "./ui/button";
import { Github, Twitter, Youtube, Globe } from "lucide-react";
import darkLogo from '../assets/qiskit-dark-logo.png';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/qiskit", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/qiskit", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/qiskit", label: "YouTube" },
    { icon: Globe, href: "https://qiskit.org", label: "Website" }
  ];

  const links = {
    "Event": [
      "Schedule",
      "Workshops",
      "Hackathon",
      "Prizes"
    ],
    "Resources": [
      "Qiskit Documentation",
      "Quantum Computing Guide",
      "Community Forum",
      "IBM Quantum Network"
    ],
    "Support": [
      "Contact Us",
      "FAQ",
      "Code of Conduct",
      "Privacy Policy"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={darkLogo} 
              alt="Qiskit Fall Fest" 
              className="w-24 h-24 mb-6"
            />
            <p className="text-gray-400 mb-6">
              Join the global quantum computing celebration and build the future with Qiskit.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pink-400 hover:bg-gray-800 p-2"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-lg mb-6 text-white">{category}</h4>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 Qiskit Fall Fest. Part of the IBM Quantum Network.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}