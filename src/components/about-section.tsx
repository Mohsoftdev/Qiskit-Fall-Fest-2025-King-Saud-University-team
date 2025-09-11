import { Card, CardContent } from "./ui/card";
import { Code, Users, Trophy, BookOpen } from "lucide-react";
import darkLogo from '../assets/qiskit-dark-logo.png';

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Hands-on Coding",
      description: "Build quantum applications using Qiskit, IBM's open-source quantum computing framework"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with quantum computing enthusiasts, researchers, and developers worldwide"
    },
    {
      icon: Trophy,
      title: "Competitions & Prizes",
      description: "Participate in hackathons and challenges with amazing prizes and recognition"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access workshops, tutorials, and expert-led sessions for all skill levels"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <img 
            src={darkLogo} 
            alt="Qiskit Fall Fest" 
            className="w-32 h-32 mx-auto mb-8"
          />
          <h2 className="text-5xl mb-6 text-gray-900">What is Qiskit Fall Fest?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Qiskit Fall Fest is a global celebration of quantum technology, research, and collaboration through engaging different 
            quantum-themed activities. This year , King Saud university brings that joy into campus in Riyadh and you can also join 
            virtually from anywhere in the world. Together we will honor the past, explore the quantum breakthroughs of today, and 
            a take a glimpse into the future that we are building together. Join us and don’t miss out the fun!!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-[#FF006B] transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#6929C4]" />
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#6929C4]/10 to-[#FF006B]/10 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6 text-gray-900">What Will We Accomplish?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Workshops: </strong> Hands-on sessions designed for all levels and covering a wide range of topics 
                  using Qiskit, IBM's open-source quantum computing framework.
                </p>
                <p>
                  <strong>Keynote Sessions:</strong> Talks from experts exploring quantum education and sharing 
                  their diverse perspectives about the future of quantum computing and its applications.
                </p>
                <p>
                  <strong>Network & Collaboration:</strong> Connect with other students, researchers, industry experts and other 
                  quantum enthusiasts to build connections that go beyond the event.
                </p>
                <p>
                  <strong>Competitions & Prizes:</strong> Participate in challenges and hackathon and gain prizes to celebrate the achievement.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl mb-6 text-pink-600">Why Quantum ?!</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">Exponential Speedup</h4>
                <p className="text-gray-600">Quantum computers can solve certain problems exponentially faster than classical computers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">Diverse applications:</h4>
                <p className="text-gray-600">Quantum technologies have a cross-industry impact ranging from medicine and chemistry to finance and communication.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">National Alignment</h4>
                <p className="text-gray-600">It aligns with Saudi Vision 2030’s focus on advanced technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}