import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Sarah Al-Rashid",
      title: "Quantum Computing Researcher",
      affiliation: "King Saud University",
      bio: "Leading researcher in quantum algorithms and their applications to optimization problems. Published 50+ papers in quantum computing.",
      expertise: ["Quantum Algorithms", "Optimization", "QAOA"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Prof. Ahmed Mahmoud",
      title: "IBM Quantum Ambassador",
      affiliation: "IBM Research",
      bio: "Senior quantum software engineer at IBM with expertise in Qiskit development and quantum machine learning applications.",
      expertise: ["Qiskit", "Quantum ML", "Hardware"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Dr. Fatima Al-Zahra",
      title: "Quantum Cryptography Expert",
      affiliation: "KACST",
      bio: "Specialist in quantum cryptography and quantum key distribution with focus on practical implementations.",
      expertise: ["Quantum Cryptography", "QKD", "Security"],
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Omar Hassan",
      title: "Quantum Startup Founder",
      affiliation: "QuantumTech MENA",
      bio: "Entrepreneur building quantum computing solutions for the Middle East market. Former Google Quantum AI researcher.",
      expertise: ["Quantum Business", "NISQ Algorithms", "Industry Applications"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Dr. Noura Al-Mansouri",
      title: "Quantum Error Correction Specialist",
      affiliation: "KAUST",
      bio: "Expert in quantum error correction codes and fault-tolerant quantum computing architectures.",
      expertise: ["Error Correction", "Fault Tolerance", "Quantum Codes"],
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Khalid Bin Rashid",
      title: "Quantum Software Engineer",
      affiliation: "Rigetti Computing",
      bio: "Quantum software engineer specializing in quantum cloud platforms and quantum programming frameworks.",
      expertise: ["Quantum Cloud", "Software Engineering", "Quantum Compilers"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    const colors = [
      "bg-[#6929C4]/10 text-[#6929C4]",
      "bg-[#FF006B]/10 text-[#FF006B]", 
      "bg-[#0084BD]/10 text-[#0084BD]",
      "bg-[#748995]/10 text-[#748995]",
      "bg-[#E3E0D2]/40 text-[#000000]",
      "bg-[#4C1D95]/10 text-[#4C1D95]"
    ];
    return colors[expertise.length % colors.length];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#6929C4]/5 to-[#FF006B]/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-gray-900">Featured Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from world-renowned quantum computing experts, researchers, and industry leaders 
            who will share their insights and experience during our event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#6929C4] to-[#FF006B] rounded-full flex items-center justify-center">
                    <ImageWithFallback 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=96&background=random`}
                      alt={speaker.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-xl mb-1 text-gray-900">{speaker.name}</h3>
                  <p className="text-[#6929C4] mb-1">{speaker.title}</p>
                  <p className="text-gray-500 text-sm">{speaker.affiliation}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{speaker.bio}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className={`text-xs ${getExpertiseColor(skill)}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {speaker.social.linkedin && (
                    <a 
                      href={speaker.social.linkedin} 
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${speaker.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a 
                      href={speaker.social.twitter} 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`${speaker.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.social.website && (
                    <a 
                      href={speaker.social.website} 
                      className="text-gray-400 hover:text-[#6929C4] transition-colors"
                      aria-label={`${speaker.name} Website`}
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More speakers to be announced soon!</p>
          <p className="text-sm text-gray-500">
            Want to speak at our event? <a href="#contact" className="text-[#6929C4] hover:text-[#FF006B]">Get in touch with us</a>
          </p>
        </div>
      </div>
    </section>
  );
}