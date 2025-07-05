import React from 'react';
import { Check, Star } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: "Kiddie Party Package",
      price: "Starting at ₱8,000",
      description: "Perfect for children's birthday parties and celebrations",
      features: [
        "Balloon arch or backdrop",
        "Table centerpieces",
        "Birthday banner",
        "Party hats and decorations",
        "Themed table setup",
        "Photo booth props",
        "Setup and breakdown"
      ],
      popular: true,
      color: "creative-orange"
    },
    {
      name: "Balloon Centerpieces",
      price: "₱300 - ₱800 per piece",
      description: "Beautiful balloon arrangements for any occasion",
      features: [
        "Custom color schemes",
        "Various sizes available",
        "Helium or air-filled options",
        "Themed designs",
        "Table weights included",
        "Delivery available"
      ],
      popular: false,
      color: "creative-purple"
    },
    {
      name: "Table & Chair Rentals",
      price: "₱150 - ₱500 per set",
      description: "Quality furniture rentals for events",
      features: [
        "Round and rectangular tables",
        "Chiavari and plastic chairs",
        "Table linens available",
        "Various sizes and styles",
        "Clean and well-maintained",
        "Delivery and pickup included"
      ],
      popular: false,
      color: "creative-teal"
    }
  ];

  const addOns = [
    { name: "Photo Booth Setup", price: "₱2,500", color: "creative-blue" },
    { name: "Dessert Table Styling", price: "₱3,500", color: "creative-orange" },
    { name: "Entrance Decoration", price: "₱2,000", color: "creative-purple" },
    { name: "Ceiling Draping", price: "₱4,000", color: "creative-teal" },
    { name: "LED Lighting", price: "₱1,500", color: "creative-blue" },
    { name: "Floral Arrangements", price: "₱1,800", color: "creative-orange" }
  ];

  return (
    <section id="packages" className="py-20 bg-creative-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-creative-blue-800 mb-4">Our Packages</h2>
          <div className="w-24 h-1 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-creative-blue-700 max-w-3xl mx-auto">
            Choose from our carefully curated packages or let us create a custom solution for your special event
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white border-2 ${pkg.popular ? `border-${pkg.color}-400 shadow-2xl scale-105` : `border-${pkg.color}-200`} p-8 relative hover:shadow-xl transition-all duration-300 rounded-2xl`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-${pkg.color}-500 text-white px-4 py-1 text-sm font-medium flex items-center rounded-full`}>
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold text-${pkg.color}-700 mb-2`}>{pkg.name}</h3>
                <p className={`text-3xl font-bold text-${pkg.color}-600 mb-4`}>{pkg.price}</p>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 text-${pkg.color}-500 mt-0.5 mr-3 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 font-medium transition-all duration-200 rounded-lg ${
                  pkg.popular 
                    ? `bg-${pkg.color}-500 text-white hover:bg-${pkg.color}-600 hover:shadow-lg` 
                    : `border-2 border-${pkg.color}-400 text-${pkg.color}-600 hover:bg-${pkg.color}-500 hover:text-white`
                }`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-creative-blue-100">
          <h3 className="text-2xl font-bold text-creative-blue-800 mb-6 text-center">Popular Add-Ons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className={`flex justify-between items-center bg-creative-gradient-soft p-4 rounded-lg shadow-sm border border-${addon.color}-100 hover:shadow-md transition-shadow duration-200`}>
                <span className="text-gray-700 font-medium">{addon.name}</span>
                <span className={`font-bold text-${addon.color}-600`}>{addon.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">
              Mix and match add-ons to create the perfect package for your event
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-creative-gradient text-white px-8 py-3 font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-lg"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;