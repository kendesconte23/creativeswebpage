import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-creative-blue-900 text-white py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-creative-orange-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-creative-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-creative-teal-400 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-creative-gradient bg-clip-text text-transparent">
              Creatives by Hazel & Ken
            </h3>
            <p className="text-creative-blue-100 mb-4 max-w-md">
              Transforming Spaces, Creating Memories.
              Based in Quezon City, serving Metro Manila and surrounding areas.
            </p>
            <div className="flex items-center text-creative-blue-200">
              <Heart className="w-4 h-4 mr-2 text-creative-orange-400" />
              <span className="text-sm">Made with love for every celebration</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-creative-orange-300">Quick Links</h4>
            <ul className="space-y-2 text-creative-blue-200">
              <li>
                <button 
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-creative-orange-300 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-creative-orange-300 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-creative-orange-300 transition-colors duration-200"
                >
                  Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-creative-orange-300 transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-creative-orange-300 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-creative-teal-300">Contact Info</h4>
            <div className="space-y-3 text-creative-blue-200">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-creative-teal-400" />
                <span className="text-sm">Quezon City, Metro Manila</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-creative-orange-400" />
                <span className="text-sm">+63 917 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-creative-purple-400" />
                <span className="text-sm">creatives.partydecor@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-creative-blue-700 mt-8 pt-8 text-center">
          <p className="text-creative-blue-200 text-sm">
            © 2024 Creatives by Hazel & Ken. All rights reserved. | 
            <span className="ml-2 text-creative-orange-300">Making every celebration special since 2020</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;