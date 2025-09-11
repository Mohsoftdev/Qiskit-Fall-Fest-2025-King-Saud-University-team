import { Card, CardContent } from "./ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OrganizingTeam() {
  const organizers = [
    {
      name: "Mohamedelfaith Seedahmed",
      title: "Lead Organizer & Qiskit Advocate",
      affiliation: "King Saud University",
      department: "Computer Engineering Department",
      bio: "Leading the organization of Qiskit Fall Fest 2025 at King Saud University, passionate about quantum computing education and community building in Saudi Arabia.",
      email: "m.seedahmed@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Hassan AlHusayni",
      title: "Co-organizer & Qiskit Advocate",
      affiliation: "King Saud University",
      department: "Qiskit Fall Fest 2025",
      bio: "Supporting the coordination and technical aspects of the event, with focus on workshop development and participant engagement.",
      email: "h.alhusayni@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ola Mahjoub",
      title: "Co-organizer",
      affiliation: "King Saud University",
      department: "Qiskit Fall Fest 2025",
      bio: "Managing logistics and outreach efforts to ensure a successful hybrid event experience for all participants.",
      email: "o.mahjoun@ksu.edu.sa",
      social: {
        linkedin: "#",
        twitter: "#"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#0084BD]">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#0084BD] to-[#748995] rounded-full flex items-center justify-center">
                    <ImageWithFallback 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&size=96&background=0084BD&color=ffffff`}
                      alt={organizer.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-xl mb-1 text-gray-900">{organizer.name}</h3>
                  <p className="text-[#0084BD] mb-1">{organizer.title}</p>
                  <p className="text-gray-500 text-sm mb-1">{organizer.affiliation}</p>
                  <p className="text-[#748995] text-xs">{organizer.department}</p>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{organizer.bio}</p>

                <div className="flex justify-center items-center space-x-4">
                  <a 
                    href={`mailto:${organizer.email}`}
                    className="text-gray-400 hover:text-[#0084BD] transition-colors"
                    aria-label={`Email ${organizer.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {organizer.social.linkedin && (
                    <a 
                      href={organizer.social.linkedin} 
                      className="text-gray-400 hover:text-[#0084BD] transition-colors"
                      aria-label={`${organizer.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {organizer.social.twitter && (
                    <a 
                      href={organizer.social.twitter} 
                      className="text-gray-400 hover:text-[#0084BD] transition-colors"
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

        <div className="bg-gradient-to-r from-[#0084BD] to-[#748995] rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">Partners made it this hackathon possible</h3>
          <p className="text-lg text-[#E3E0D2] mb-6 max-w-3xl mx-auto">
            A warm thank you to our partners for their invaluable support and collaboration in making
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-xl mb-2">Future Technologies Club (King Saud University)</h4>
              <p className="text-[#E3E0D2]">///////////////////////////////////////</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Industry Partnerships</h4>
              <p className="text-[#E3E0D2]">Collaborations with IBM Quantum Network and global partners</p>
            </div>
            <div>
              <h4 className="text-xl mb-2">Student Innovation</h4>
              <p className="text-[#E3E0D2]">Fostering the next generation of quantum scientists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}