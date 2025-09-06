import { Card, CardContent } from "./ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export function OrganizingTeam() {
  const organizers = [
    {
      name: "Dr. Abdullah Al-Thani",
      title: "Event Chair",
      affiliation: "King Saud University",
      department: "Computer Science Department",
      bio: "Professor of Computer Science specializing in quantum computing and quantum algorithms research.",
      email: "a.althani@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Lina Al-Rasheed",
      title: "Program Coordinator",
      affiliation: "King Saud University",
      department: "Physics Department",
      bio: "PhD candidate in quantum physics and quantum information science with focus on quantum machine learning.",
      email: "l.alrasheed@ksu.edu.sa",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Mohammed Bin Sultan",
      title: "Technical Lead",
      affiliation: "King Saud University",
      department: "Engineering Department",
      bio: "Graduate student in electrical engineering with expertise in quantum hardware and quantum control systems.",
      email: "m.binsultan@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Reem Al-Otaibi",
      title: "Logistics Coordinator",
      affiliation: "King Saud University",
      department: "Student Affairs",
      bio: "Event management specialist with experience organizing large-scale academic conferences and workshops.",
      email: "r.alotaibi@ksu.edu.sa",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Yasir Al-Dosari",
      title: "Hackathon Lead",
      affiliation: "King Saud University",
      department: "Computer Science Department",
      bio: "PhD student in quantum computing with hands-on experience in Qiskit development and quantum algorithm design.",
      email: "y.aldosari@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Nadia Al-Harbi",
      title: "Outreach Coordinator",
      affiliation: "King Saud University",
      department: "Mathematics Department",
      bio: "Assistant professor of mathematics with research interests in quantum information theory and quantum cryptography.",
      email: "n.alharbi@ksu.edu.sa",
      social: {
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-gray-900">Organizing Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team from King Saud University who are working tirelessly to bring you 
            an unforgettable quantum computing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {organizers.map((organizer, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <ImageWithFallback 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&size=96&background=random`}
                      alt={organizer.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-xl mb-1 text-gray-900">{organizer.name}</h3>
                  <p className="text-purple-600 mb-1">{organizer.title}</p>
                  <p className="text-gray-500 text-sm mb-1">{organizer.affiliation}</p>
                  <p className="text-gray-400 text-xs">{organizer.department}</p>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{organizer.bio}</p>

                <div className="flex justify-center items-center space-x-4">
                  <a 
                    href={`mailto:${organizer.email}`}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={`Email ${organizer.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {organizer.social.linkedin && (
                    <a 
                      href={organizer.social.linkedin} 
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${organizer.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {organizer.social.twitter && (
                    <a 
                      href={organizer.social.twitter} 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`${organizer.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">King Saud University</h3>
          <p className="text-lg text-purple-100 mb-6 max-w-3xl mx-auto">
            As one of Saudi Arabia's premier research institutions, King Saud University is proud to host 
            Qiskit Fall Fest 2025, bringing cutting-edge quantum computing education and research 
            opportunities to the region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-xl mb-2">Research Excellence</h4>
              <p className="text-purple-100">Leading quantum research initiatives in the Middle East</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Industry Partnerships</h4>
              <p className="text-purple-100">Collaborations with IBM Quantum Network and global partners</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Student Innovation</h4>
              <p className="text-purple-100">Fostering the next generation of quantum scientists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}