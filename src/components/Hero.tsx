import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPackages = () => {
    const element = document.querySelector('#packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-creative-gradient-soft flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-creative-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-creative-orange-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-creative-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-creative-teal-400 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/455696953_950813343724936_390550727179131139_n.jpg" 
              alt="Creatives by Hazel & Ken Logo" 
              className="h-32 w-auto md:h-40 lg:h-48 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-creative-gradient bg-clip-text text-transparent">Creatives by</span>
            <br />
            <span className="text-creative-blue-700">Hazel & Ken</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-creative-blue-800 mb-8 font-medium">
              Transforming Spaces, Creating Memories!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToPackages}
                className="bg-creative-gradient text-white px-8 py-3 text-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-lg"
              >
                View Our Packages
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-creative-blue-500 text-creative-blue-700 px-8 py-3 text-lg font-medium hover:bg-creative-blue-500 hover:text-white transition-all duration-200 rounded-lg"
              >
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className="pt-12">
            <button
              onClick={scrollToPackages}
              className="animate-bounce text-creative-blue-600 hover:text-creative-orange-500 transition-colors duration-200"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;