import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Gift, Star, Award } from "lucide-react";

export function RegistrationSection() {
  const prizes = [
    {
      icon: Award,
      title: "Grand Prize",
      description: "IBM Quantum Network Access + $5,000",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Runner-up",
      description: "Qiskit Swag Bundle + $2,000",
      color: "text-gray-600"
    },
    {
      icon: Gift,
      title: "Participation",
      description: "Certificate + Exclusive Qiskit Merchandise",
      color: "text-bronze-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-white">Join the Quantum Revolution</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Register now for Qiskit Fall Fest 2025 and be part of the largest quantum computing 
            community event of the year. Limited spots available!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Registration Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-white">Register for Free</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-white">Quantum Computing Experience</Label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Complete Beginner</SelectItem>
                      <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert/Researcher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="university" className="text-white">University/Organization (Optional)</Label>
                  <Input 
                    id="university" 
                    placeholder="Enter your institution"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    className="border-white/30 data-[state=checked]:bg-pink-600"
                  />
                  <Label htmlFor="newsletter" className="text-white text-sm">
                    Subscribe to Qiskit newsletter for updates and quantum computing news
                  </Label>
                </div>

                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3">
                  Register for Free
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Prizes and Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-6 text-white">Amazing Prizes & Benefits</h3>
              <div className="space-y-4">
                {prizes.map((prize, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <prize.icon className={`w-8 h-8 ${prize.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="text-xl text-white mb-2">{prize.title}</h4>
                      <p className="text-purple-200">{prize.description}</p>
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