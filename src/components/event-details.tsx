import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock, Laptop, Mic, Users } from "lucide-react";

export function EventDetails() {
  
  const getEvents = () => [
    {
      title: "Day 1: Introduction to Quantum Computing",
      date: "TBD",
      format: "Mixed",
      level: "Beginner",
      description: "Opening ceremony, welcome session, and comprehensive introduction to quantum computing fundamentals",
      subEvents: [
        {
          type: "workshop",
          title: ('Quantum 101'),
          time: ('TBD'),
          description: ('Opening ceremony, welcome session, brief history about quantum and a beginner-friendly introduction to quantum computing fundamentals and some basic terminology.'),
          location: ('Hybrid'),
          speaker: "Mohamedelfatih Seedahmed - Lead Organizer"
        },
        {
          type: "speech", 
          title: ('Building the Quantum Ecosystem'),
          time: ('TBD'),
          description: ('Sharing insights on how to enrich the quantum ecosystem in Saudi Arabia and what is the potential impact of that.'),
          location: ('Hybrid'),
          speaker: "Dr. Saad Al Owayyed"
        }
      ]
    },
    {
      title: "Day 2: Design your Quantum Education and Implement your first circuits",
      date: "TBD",
      format: "Hybrid",
      level: "Beginner to Intermediate",
      description: "Deep dive into quantum programming with practical circuit building exercises",
      subEvents: [
        {
          type: "speech",
          title: "Quantum Education",
          time: "TBD",
          description: "A Talk about quantum education in general and what are the future plans in the Kingdom.",
          location: ('Hybrid'),
          speaker: "Dr. Mohammed Felemban"
        },
        {
          type: "workshop",
          title: "Qiskit 101",
          time: "TBD", 
          description: "Hands-on workshop building quantum circuits, understanding quantum measurements, and implementing basic quantum algorithms in Qiskit"
        }
      ]
    },
    {
      title: "Day 3: Deep Dive",
      date: "TBD",
      format: "Hybrid",
      level: "Intermediate",
      description: "Explore advanced quantum algorithms and their practical implementations",
      subEvents: [
        {
          type: "speech",
          title: "Quantum economic and its opportunities",
          time: "TBD",
          description: "Exploring the intersection of quantum technology, economics, and the role of youth in driving change.",
          speaker: "Eng. Muhammad Al-Saiyari"
        },
        {
          type: "workshop",
          title: "Basic Algorithms Implementation Lab",
          time: "TBD",
          description: "Run Basic Quantum Algorithsms on simulator and real quantum hardware"
        }
      ]
    },
    {
      title: "Day 4: Hackathon Day",
      date: "TBD",
      format: "Hybrid",
      level: "All Levels",
      description: "Implementing quantum solutions in a collaborative hackathon setting",
      subEvents: [
        {
          type: "speech",
          title: "Women in Quantum",
          time: "TBD",
          description: "Highlighting women’s contributions and opportunities in the field of quantum computing.",
          speaker: "Khulud Almutairi"
        },
        {
          type: "workshop",
          title: "Quantum Hackathon",
          time: "TBD",
          description: "Intensive team-based development with mentorship support throughout the day",
          
        }
      ]
    },
    {
      title: "Day 5: Project Showcase & Closing Ceremony",
      date: "TBD",
      format: "Hybrid",
      level: "All Levels",
      description: "Present hackathon projects, awards ceremony, and networking session",
      subEvents: [
        {
          type: "speech",
          title: "IBM Roadmap and the Future of Quantum Computing",
          time: "TBD",
          description: "Presenting IBM’s vision and milestones toward building fault-tolerant quantum computers.",
          speaker: "Dr. Ahmed Al-Qatatsheh"
        },
        {
          type: "workshop",
          title: "QML (Quantum Machine Learning)",
          time: "TBD",
          description: "Learn the basics of Quantum Machine Learning and its applications.",
        }
      ]
    }
  ];
  
  const events = getEvents();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-[#E3E0D2] text-[#748995]';
      case 'Beginner to Intermediate': return 'bg-[#748995] text-white';
      case 'Intermediate': return 'bg-[#0084BD] text-white';
      case 'Advanced': return 'bg-[#000000] text-white';
      default: return 'bg-[#E3E0D2] text-[#748995]';
    }
  };

  const getSubEventIcon = (type: string) => {
    return type === 'speech' ? Mic : Users;
  };

  const getSubEventColor = (type: string) => {
    return type === 'speech' ? 'text-[#6929C4]' : 'text-[#FF006B]';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-gray-900">{('event.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {('event.subtitle')}
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
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-[#0084BD]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-[#0084BD]" />
                    <span>{event.format}</span>
                  </div>
                </div>
                
                {/* Sub-events */}
                <div className="space-y-4">
                  {event.subEvents.map((subEvent, subIndex) => {
                    const IconComponent = getSubEventIcon(subEvent.type);
                    return (
                      <div key={subIndex} className="border-l-4 border-gray-200 pl-4 py-2">
                        <div className="flex items-center mb-2">
                          <IconComponent className={`w-4 h-4 mr-2 ${getSubEventColor(subEvent.type)}`} />
                          <span className={`text-sm font-medium ${getSubEventColor(subEvent.type)}`}>
                            {(subEvent.type)}
                          </span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {subEvent.time}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{subEvent.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{subEvent.description}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                          {subEvent.location && (
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              <span>{subEvent.location}</span>
                            </div>
                          )}
                          {subEvent.speaker && (
                            <div className="flex items-center">
                              <span className="mr-1">{('Speaker ')}:</span>
                              <span className="font-medium">{subEvent.speaker}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
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