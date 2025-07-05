import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ViberContact from './ViberContact';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Quezon City, Metro Manila", "Philippines"],
      color: "creative-blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+63 960 471 6706", "+63 949 803 8875"],
      color: "creative-orange"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["creativeseventstyling@gmail.com"],
      color: "creative-purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: By appointment"],
      color: "creative-teal"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-creative-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-creative-blue-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-creative-blue-700 max-w-3xl mx-auto">
            Ready to make your event unforgettable? Chat with us directly on Viber for instant responses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Viber Contact */}
          <div>
            <ViberContact />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-creative-blue-800 mb-6">Get in Touch</h3>
              <p className="text-creative-blue-700 text-lg mb-8">
                We'd love to hear from you! Chat with us on Viber for immediate responses, 
                or reach out through any of the following ways.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-${info.color}-100`}>
                  <div className={`text-${info.color}-500 mt-1`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-${info.color}-700 mb-2`}>{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-creative-blue-100">
              <h4 className="font-bold text-creative-blue-800 mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-orange-500 rounded-full mr-3"></span>Free consultation and quote</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-purple-500 rounded-full mr-3"></span>Professional setup and breakdown</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-teal-500 rounded-full mr-3"></span>Flexible scheduling and packages</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-blue-500 rounded-full mr-3"></span>Quality materials and decorations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-orange-500 rounded-full mr-3"></span>Experienced team you can trust</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-creative-purple-500 rounded-full mr-3"></span>Serving Quezon City and nearby areas</li>
              </ul>
            </div>

            <div className="bg-creative-gradient p-6 rounded-2xl text-white">
              <h4 className="font-bold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Instant Messaging Available
              </h4>
              <p className="text-creative-blue-50 mb-4">
                Get immediate responses by chatting with us on Viber! Scan our QR codes or fill out your details for a personalized conversation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="font-medium">Ken Desconte</p>
                  <p className="text-creative-blue-100">Event Styling Specialist</p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="font-medium">Hazel Desconte</p>
                  <p className="text-creative-blue-100">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;