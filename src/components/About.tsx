import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Excellence",
      description: "Every event is crafted with love, attention to detail, and a commitment to exceeding expectations.",
      color: "creative-orange"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Creative Innovation",
      description: "We bring fresh ideas and unique styling concepts to make your event stand out and create lasting memories.",
      color: "creative-purple"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Touch",
      description: "We work closely with each client to understand their vision and bring it to life with personalized service.",
      color: "creative-teal"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-creative-blue-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-creative-blue-700 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Creatives by Hazel and Ken was born from a shared passion for creating beautiful, memorable events. 
                What started as a dream between two creative minds has grown into a trusted name in event styling 
                throughout Quezon City and beyond.
              </p>
              <p>
                We believe that every celebration deserves to be special, whether it's a child's birthday party, 
                an intimate gathering, or a grand celebration. Our expertise lies in transforming ordinary spaces 
                into extraordinary experiences through thoughtful design, quality materials, and meticulous attention to detail.
              </p>
              <p>
                With years of experience in event styling and a deep understanding of what makes celebrations truly 
                memorable, we've had the privilege of being part of countless special moments in our clients' lives.
              </p>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="bg-creative-gradient-soft p-8 shadow-xl rounded-2xl border border-creative-blue-100">
              <h3 className="text-2xl font-bold text-creative-blue-800 mb-6">What Makes Us Unique</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-creative-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Personalized consultation to understand your vision and style preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-creative-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>High-quality materials and premium decorative elements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-creative-teal-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Professional setup and breakdown services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-creative-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Flexible packages to fit various budgets and requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-creative-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Timely delivery and reliable service you can trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className={`text-center bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 border-${value.color}-100 hover:border-${value.color}-300 group`}>
              <div className={`text-${value.color}-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h4 className={`text-xl font-bold text-${value.color}-700 mb-4`}>{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;