import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock, Laptop } from "lucide-react";

export function EventDetails() {
  const events = [
    {
      title: "Day 1: Introduction to Quantum Computing",
      date: "October 20, 2025",
      time: "9:00 AM - 5:00 PM AST",
      format: "Hybrid",
      level: "Beginner",
      description: "Opening ceremony, welcome session, and comprehensive introduction to quantum computing fundamentals, basic quantum gates, and Qiskit installation workshop"
    },
    {
      title: "Day 2: Quantum Circuits and Programming",
      date: "October 21, 2025", 
      time: "9:00 AM - 5:00 PM AST",
      format: "Hybrid",
      level: "Beginner to Intermediate",
      description: "Hands-on session building quantum circuits, understanding quantum measurements, and implementing basic quantum algorithms in Qiskit"
    },
    {
      title: "Day 3: Quantum Algorithms Deep Dive",
      date: "October 22, 2025",
      time: "9:00 AM - 5:00 PM AST", 
      format: "Hybrid",
      level: "Intermediate",
      description: "Explore advanced quantum algorithms including Shor's algorithm, Grover's search, and variational quantum eigensolvers (VQE)"
    },
    {
      title: "Day 4: Hackathon - Quantum Solutions Challenge",
      date: "October 23, 2025",
      time: "9:00 AM - 9:00 PM AST",
      format: "Hybrid", 
      level: "All Levels",
      description: "12-hour hackathon where teams build innovative quantum applications. Mentorship available throughout the day for both in-person and virtual participants"
    },
    {
      title: "Day 5: Project Showcase & Closing Ceremony",
      date: "October 24, 2025",
      time: "10:00 AM - 4:00 PM AST",
      format: "Hybrid",
      level: "All Levels", 
      description: "Teams present their hackathon projects, awards ceremony, industry panel discussion on quantum computing careers, and closing networking session"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-[#E3E0D2] text-[#748995]';
      case 'Beginner to Intermediate': return 'bg-[#748995] text-white';
      case 'Intermediate': return 'bg-[#0084BD] text-white';
      case 'Advanced': return 'bg-[#000000] text-white';
      default: return 'bg-[#E3E0D2] text-[#748995]';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-gray-900">Event Schedule</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for a week-long celebration of quantum computing at King Saud University with workshops, 
            hackathons, and networking opportunities designed for every skill level.
          </p>
          <div className="mt-8 bg-[#E3E0D2] rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg text-[#0084BD] mb-2">📍 Venue Information</h3>
            <p className="text-[#748995]">
              <strong>King Saud University</strong><br/>
              College of Computer and Information Sciences<br/>
              Riyadh, Saudi Arabia<br/>
              <em>All sessions will be broadcast live for virtual participants</em>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                  <Badge className={getLevelColor(event.level)}>{event.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-[#0084BD]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-[#0084BD]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-[#0084BD]" />
                    <span>{event.format}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <Laptop className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl mb-4">Prerequisites & Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div>
              <h4 className="text-xl mb-2">Programming</h4>
              <p className="text-purple-100">Basic Python knowledge recommended</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Hardware</h4>
              <p className="text-purple-100">Computer with internet connection</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Software</h4>
              <p className="text-purple-100">Jupyter Notebook or Google Colab</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Enthusiasm</h4>
              <p className="text-purple-100">Curiosity about quantum computing!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}