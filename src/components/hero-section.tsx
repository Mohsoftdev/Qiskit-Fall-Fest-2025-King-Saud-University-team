import { Button } from "./ui/button";
import pinkLogo from '../assets/70bbabb05dae9f557d6546dfd3c6e41864e8f1c7.png';
import quantumAtom from '../assets/67cbe5d5f43944e161286e9f18429b206d4d0eaa.png';
import timelineImage1 from '../assets/Emojis/Timeline_01.png';
import timelineImage2 from '../assets/Emojis/Timeline_02.png';
import timelineImage3 from '../assets/Emojis/Timeline_03.png';
import timelineImage4 from '../assets/Emojis/Timeline_04.png';
export function HeroSection() {
  
  return (
    <section className="relative pt-8 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6929C4] via-[#0084BD] to-[#4C1D95] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32">
          <img src={quantumAtom} alt="" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute bottom-40 right-32 w-24 h-24">
          <img src={quantumAtom} alt="" className="w-full h-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>
        <div className="absolute top-1/2 left-10 w-20 h-20">
          <img src={quantumAtom} alt="" className="w-full h-full animate-spin" style={{ animationDuration: '25s' }} />
        </div>
      </div>
      {/* Timeline Images Matrix - Perfect 2x2 Square */}
      <div className="absolute top-20 right-8 hidden lg:block">
        <div className="w-40 h-40 grid grid-cols-2 grid-rows-2 gap-1 p-2 bg-transperant backdrop-blur-sm">
          <div className="group">
            <img
              src={timelineImage1}
                  alt="Quantum Learning"
                  className="w-14 h-14 object-cover rounded-sm transition-transform duration-300 group-hover:scale-105 opacity-70 hover:opacity-90"
                />
              </div>
              <div className="group">
                <img 
                  src={timelineImage2} 
                  alt="Quantum Exploration" 
                  className="w-14 h-14 object-cover rounded-sm transition-transform duration-300 group-hover:scale-105 opacity-70 hover:opacity-90"
                />
              </div>
              <div className="group">
                <img 
                  src={timelineImage3} 
                  alt="Quantum Creation" 
                  className="w-14 h-14 object-cover rounded-sm transition-transform duration-300 group-hover:scale-105 opacity-70 hover:opacity-90"
                />
              </div>
              <div className="group">
                <img 
                  src={timelineImage4} 
                  alt="Quantum Computing Journey" 
                  className="w-14 h-14 object-cover rounded-sm transition-transform duration-300 group-hover:scale-105 opacity-70 hover:opacity-90"
                />
              </div>
            </div>
          </div>

      <div className="container mt-12 mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex items-center justify-center gap-8">
          <img 
            src={pinkLogo} 
            alt="Qiskit Fall Fest 2025" 
            className="w-64 h-64 drop-shadow-2xl"
          />
          
          
        </div>
        
        <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-[#FF006B] to-[#E3E0D2] bg-clip-text text-transparent">
          Qiskit Fall Fest 2025
        </h1>
        
        <p className="text-2xl md:text-3xl text-[#E3E0D2] mb-4 max-w-4xl mx-auto">
          Join the global quantum computing celebration and build the future with Qiskit
        </p>
        
        <p className="text-xl text-[#FF006B] mb-8 max-w-3xl mx-auto">
          Hosted by TBD • Hybrid Event • Riyadh, Saudi Arabia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a  className="bg-[#FF006B] hover:bg-[#6929C4] text-white px-8 py-2 text-lg rounded-lg" href="#register">
            Register Now
          </a>
          <Button variant="outline" size="lg" className="border-[#E3E0D2] text-[#E3E0D2] hover:bg-[#E3E0D2] hover:text-[#6929C4] px-8 py-4 text-lg">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-[#E3E0D2] mb-16">
          <div>
            <h3 className="text-2xl mb-2">Hybrid Format</h3>
            <p className="text-[#E3E0D2]/80">Join us in-person at location TBD or virtually online</p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">18 - 22 November 2025</h3>
            <p className="text-[#E3E0D2]/80">5-day quantum computing celebration</p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Open to All</h3>
            <p className="text-[#E3E0D2]/80">Students, researchers, and quantum enthusiasts</p>
          </div>
        </div>


      </div>
    </section>
  );
}