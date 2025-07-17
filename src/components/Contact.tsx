import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+63 912 345 6789',
      link: 'tel:+639123456789',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@creatives.wedding',
      link: 'mailto:hello@creatives.wedding',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Manila, Philippines',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 9AM-6PM',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: '#',
      color: 'text-blue-400',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: '#',
      color: 'text-pink-400',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      link: '#',
      color: 'text-green-400',
    },
  ];

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start planning your dream wedding? Get in touch with us today! 
            We're here to answer all your questions and help you create the perfect celebration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl">
            <div className="text-center mb-8">
              <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Contact via Viber</h2>
              <p className="text-white/80">
                Click on the QR codes below or tap the contact buttons to chat with us directly on Viber
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Hazel Contact */}
              <div className="glass-dark p-6 rounded-2xl text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white p-2 rounded-xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=viber://chat?number=%2B639498038875"
                    alt="Hazel Viber QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hazel Desconte</h3>
                <p className="text-white/80 mb-3">Creative Director</p>
                <p className="text-white/60 text-sm mb-4">+639498038875</p>
                <button
                  onClick={() => window.open('viber://chat?number=%2B639498038875', '_blank')}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Hazel
                </button>
              </div>

              {/* Ken Contact */}
              <div className="glass-dark p-6 rounded-2xl text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white p-2 rounded-xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=viber://chat?number=%2B639604716706"
                    alt="Ken Viber QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ken Desconte</h3>
                <p className="text-white/80 mb-3">Event Styling Specialist</p>
                <p className="text-white/60 text-sm mb-4">+639604716706</p>
                <button
                  onClick={() => window.open('viber://chat?number=%2B639604716706', '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Ken
                </button>
              </div>
            </div>

            {/* Instant Messaging Section */}
            <div className="glass-dark p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Instant Messaging Available</h3>
              </div>
              <p className="text-white/80 mb-6">
                Get immediate responses by chatting with us on Viber! Simply click on the QR codes above or use the chat buttons to start a conversation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => window.open('viber://chat?number=%2B639604716706', '_blank')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ken Desconte
                  <span className="text-xs opacity-80">Event Styling Specialist</span>
                </button>
                
                <button
                  onClick={() => window.open('viber://chat?number=%2B639498038875', '_blank')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hazel Desconte
                  <span className="text-xs opacity-80">Creative Director</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass p-8 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="glass-dark p-3 rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{info.title}</h3>
                        <a
                          href={info.link}
                          className="text-white/80 hover:text-white transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`glass-dark p-4 rounded-full ${social.color} hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
              <p className="text-white/80 mt-4 text-sm">
                Stay updated with our latest work and wedding inspiration!
              </p>
            </div>

            {/* Business Hours */}
            <div className="glass p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;