import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'We pour our heart into every event, ensuring your special day is perfect in every detail.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our skilled professionals bring years of experience in wedding planning and event coordination.',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We maintain the highest standards in all our services, from setup to execution.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your schedule and ensure everything is ready when you need it.',
    },
  ];

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About CREATIVES</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We are passionate about creating unforgettable wedding experiences. 
            Our Sari-Sari store approach means we offer everything you need for your special day, 
            all in one convenient location.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-white/80">
              <p>
                Founded with a vision to make dream weddings accessible to everyone, 
                CREATIVES started as a small family business with big dreams. 
                Just like a traditional Sari-Sari store that provides everything 
                the community needs, we offer comprehensive wedding services under one roof.
              </p>
              <p>
                Our journey began when we realized that couples were struggling to 
                coordinate multiple vendors for their wedding day. We decided to become 
                the one-stop solution, offering everything from elegant decorations to 
                professional photography services.
              </p>
              <p>
                Today, we're proud to have helped hundreds of couples create their 
                perfect wedding day, each one unique and filled with love, laughter, 
                and unforgettable memories.
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <img
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wedding setup"
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Complete wedding packages</li>
              <li>• Affordable pricing options</li>
              <li>• Personalized service</li>
              <li>• Local expertise</li>
              <li>• Stress-free planning</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <div className="glass-dark p-4 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Section */}
        <div className="mt-20 text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              To make every couple's wedding dreams come true by providing exceptional, 
              affordable, and comprehensive wedding services. We believe that every love 
              story deserves to be celebrated beautifully, and we're here to make that happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;