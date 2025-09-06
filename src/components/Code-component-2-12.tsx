import { Button } from "./ui/button";
import pinkLogo from 'figma:asset/70bbabb05dae9f557d6546dfd3c6e41864e8f1c7.png';
import quantumAtom from 'figma:asset/67cbe5d5f43944e161286e9f18429b206d4d0eaa.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 overflow-hidden">
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <img 
            src={pinkLogo} 
            alt="Qiskit Fall Fest 2025" 
            className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Qiskit Fall Fest
        </h1>
        
        <p className="text-2xl md:text-3xl text-pink-200 mb-8 max-w-4xl mx-auto">
          Join the global quantum computing celebration and build the future with Qiskit
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-purple-900 px-8 py-4 text-lg">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-pink-100">
          <div>
            <h3 className="text-2xl mb-2">Global Event</h3>
            <p className="text-pink-200">Connect with quantum enthusiasts worldwide</p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">October 2025</h3>
            <p className="text-pink-200">Multiple dates and formats available</p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">All Levels</h3>
            <p className="text-pink-200">From beginners to quantum experts</p>
          </div>
        </div>
      </div>
    </section>
  );
}