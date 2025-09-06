import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock, Laptop } from "lucide-react";

export function EventDetails() {
  const events = [
    {
      title: "Quantum Foundations Workshop",
      date: "October 15, 2025",
      time: "10:00 AM - 4:00 PM EST",
      format: "Virtual",
      level: "Beginner",
      description: "Introduction to quantum computing concepts and Qiskit basics"
    },
    {
      title: "Quantum Algorithms Hackathon",
      date: "October 22-24, 2025",
      time: "48 Hours",
      format: "Hybrid",
      level: "Intermediate",
      description: "Build innovative quantum algorithms and compete for prizes"
    },
    {
      title: "Industry Applications Summit",
      date: "October 29, 2025",
      time: "2:00 PM - 6:00 PM EST",
      format: "Virtual",
      level: "All Levels",
      description: "Explore real-world quantum computing applications with industry experts"
    },
    {
      title: "Quantum Hardware Deep Dive",
      date: "November 5, 2025",
      time: "11:00 AM - 3:00 PM EST",
      format: "Virtual",
      level: "Advanced",
      description: "Technical session on quantum hardware and error correction"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-gray-900">Event Schedule</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for a month-long celebration of quantum computing with workshops, 
            hackathons, and networking opportunities designed for every skill level.
          </p>
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
                    <Calendar className="w-4 h-4 mr-2 text-pink-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-pink-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-pink-600" />
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