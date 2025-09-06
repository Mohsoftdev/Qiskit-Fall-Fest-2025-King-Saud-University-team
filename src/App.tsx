import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { EventDetails } from "./components/event-details";
import { SpeakersSection } from "./components/speakers-section";
import { OrganizingTeam } from "./components/organizing-team";
import { RegistrationSection } from "./components/registration-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="schedule">
          <EventDetails />
        </section>
        <section id="speakers">
          <SpeakersSection />
        </section>
        <section id="team">
          <OrganizingTeam />
        </section>
        <section id="register">
          <RegistrationSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}