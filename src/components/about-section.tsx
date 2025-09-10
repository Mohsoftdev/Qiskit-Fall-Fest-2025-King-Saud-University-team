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
            Qiskit Fall Fest at King Saud University is a hybrid celebration of quantum computing that brings together students, 
            developers, and researchers to explore the fascinating world of quantum technology. Join us in-person in Riyadh 
            or participate virtually from anywhere in the world. Whether you're a complete beginner or an experienced quantum programmer, there's something for everyone.
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
                  <strong>Learn Quantum Fundamentals:</strong> Master the principles of quantum computing through hands-on workshops 
                  covering quantum gates, circuits, and algorithms using Qiskit.
                </p>
                <p>
                  <strong>Build Real Applications:</strong> Develop quantum applications for optimization, machine learning, 
                  and cryptography during our intensive hackathon sessions.
                </p>
                <p>
                  <strong>Network & Collaborate:</strong> Connect with quantum researchers, industry experts, and fellow enthusiasts 
                  to build lasting partnerships and advance the quantum computing community in Saudi Arabia.
                </p>
                <p>
                  <strong>Research Showcase:</strong> Present your quantum projects and research to gain feedback from experts 
                  and potentially win prizes for innovative solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">Exponential Speedup</h4>
                <p className="text-gray-600">Solve certain problems exponentially faster than classical computers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">Industry Impact</h4>
                <p className="text-gray-600">Revolutionary applications in finance, healthcare, and logistics</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg mb-2 text-gray-900">Growing Field</h4>
                <p className="text-gray-600">High demand for quantum computing skills and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}