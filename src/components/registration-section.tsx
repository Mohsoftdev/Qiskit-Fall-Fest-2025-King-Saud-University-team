import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Gift, Star, Award, MapPin, Globe, Calendar } from "lucide-react";

export function RegistrationSection() {
  const benefits = [
    {
      icon: Award,
      title: "Participation Certificate",
      description: "Official certificate of completion for all participants",
      color: "text-[#E3E0D2]"
    },
    {
      icon: Star,
      title: "Knowledge & Skills",
      description: "Hands-on experience with Qiskit and quantum algorithms",
      color: "text-[#E3E0D2]"
    },
    {
      icon: Gift,
      title: "Networking",
      description: "Connect with quantum computing enthusiasts and researchers",
      color: "text-[#E3E0D2]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#6929C4] via-[#0084BD] to-[#4C1D95]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-white">Join the Quantum Revolution</h2>
          <p className="text-xl text-[#E3E0D2] max-w-3xl mx-auto">
            Register now for Qiskit Fall Fest 2025 at King Saud University. Choose to attend in-person 
            in Riyadh or join us virtually from anywhere in the world!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Registration Options */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#E3E0D2] mr-3" />
                  <h3 className="text-2xl text-white">In-Person Attendance</h3>
                </div>
                <p className="text-[#E3E0D2] mb-6">
                  Join us at King Saud University campus in Riyadh for hands-on workshops, 
                  networking sessions, and direct interaction with speakers and organizers.
                </p>
                <div className="space-y-3 text-[#E3E0D2] mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Full access to all workshops and labs
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Networking lunch and coffee breaks
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    KSU campus tour and facility access
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Participation certificates
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#FF006B] hover:bg-[#6929C4] text-white"
                  asChild
                >
                  <a href="https://forms.google.com/your-in-person-form-link" target="_blank" rel="noopener noreferrer">
                    Register for In-Person
                  </a>
                </Button>
                <p className="text-xs text-[#E3E0D2] mt-2 text-center">
                  *Must confirm residence in Riyadh/Saudi Arabia region
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-[#E3E0D2] mr-3" />
                  <h3 className="text-2xl text-white">Virtual Attendance</h3>
                </div>
                <p className="text-[#E3E0D2] mb-6">
                  Participate from anywhere in the world via live streaming, virtual workshops, 
                  and online interactive sessions.
                </p>
                <div className="space-y-3 text-[#E3E0D2] mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Live streaming of all sessions
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Virtual workshops and tutorials
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Online networking and Q&A sessions
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Digital participation certificates
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#0084BD] hover:bg-[#6929C4] text-white"
                  asChild
                >
                  <a href="https://forms.google.com/your-virtual-form-link" target="_blank" rel="noopener noreferrer">
                    Register for Virtual
                  </a>
                </Button>
                <p className="text-xs text-[#E3E0D2] mt-2 text-center">
                  *Open to participants worldwide
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Prizes and Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-6 text-white">What You'll Get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <benefit.icon className={`w-8 h-8 ${benefit.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="text-xl text-white mb-2">{benefit.title}</h4>
                      <p className="text-[#E3E0D2]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h4 className="text-2xl mb-4 text-white">What You'll Get</h4>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Access to all workshops and events
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  IBM Quantum Network trial access
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Exclusive Qiskit learning materials
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Certificate of participation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Networking with quantum community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}