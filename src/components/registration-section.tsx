import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Gift, Star, Award, MapPin, Globe, Calendar } from "lucide-react";
import { RegistrationPopup } from "./RegistrationPopup";

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
                    Interactive challenges
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Participation Certificates
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#E3E0D2] rounded-full mr-3"></div>
                    Networking with speakers and organizers
                  </div>

                </div>
                <RegistrationPopup>
                <Button
                  className="w-full bg-[#FF006B] hover:bg-[#6929C4] text-white p-4 h-auto whitespace-normal"
                  asChild
                >
                  <a href="#register"
                    className="flex items-center justify-center text-center leading-tight"
                  >
                    Register for In-Person<br />
                    (Opens on October 20 kindly follow organizers on LinkedIn for updates)
                  </a>
                </Button>
                </RegistrationPopup>
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
                    Participation certificates
                  </div>
                </div>
                <RegistrationPopup>
                <Button
                  className="w-full bg-[#0084BD] hover:bg-[#6929C4] text-white p-4 h-auto whitespace-normal"
                  asChild
                >
                  
                  <a href="#register"  className="flex items-center justify-center text-center leading-tight">
                    Register for Virtual (Opens on October 20 kindly follow organizers on linkedIn for updates)
                  </a>
                  
                </Button>
                </RegistrationPopup>
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
          </div>
        </div>
      </div>
    </section>
  );
}
// https://docs.google.com/forms/d/e/1FAIpQLScAv8REJhNIK1eqBW0AWRw6HY9pRvmqED2sbOU_-C4Cgq5sHQ/viewform?usp=header