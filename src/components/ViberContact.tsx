import React, { useState } from 'react';
import { QrCode, MessageCircle, Phone, User, Mail, Calendar, Send } from 'lucide-react';

interface ViberContactProps {
  onFormSubmit?: (data: any) => void;
}

const ViberContact: React.FC<ViberContactProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Viber contact information
  const kenViber = "+639604716706"; // Ken's Viber number
  const hazelViber = "+639498038875"; // Hazel's Viber number

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateViberMessage = () => {
    let message = `Hi! I'm interested in your event styling services.\n\n`;
    message += `Name: ${formData.name}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    if (formData.phone) message += `Phone: ${formData.phone}\n`;
    if (formData.eventType) message += `Event Type: ${formData.eventType}\n`;
    if (formData.eventDate) message += `Event Date: ${formData.eventDate}\n`;
    if (formData.message) message += `\nMessage: ${formData.message}`;
    
    return encodeURIComponent(message);
  };

  const handleViberContact = async (viberNumber: string, contactName: string) => {
    if (!formData.name || !formData.message) {
      alert('Please fill in your name and message before contacting via Viber.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database first
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-contact-form`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || undefined,
          phone: formData.phone || undefined,
          eventType: formData.eventType || undefined,
          eventDate: formData.eventDate || undefined,
          message: `${formData.message}\n\n[Contacted via Viber - ${contactName}]`,
          source: 'viber'
        }),
      });

      if (response.ok) {
        // Generate Viber message
        const viberMessage = generateViberMessage();
        const viberUrl = `viber://chat?number=${viberNumber}&text=${viberMessage}`;
        
        // Try to open Viber app
        window.location.href = viberUrl;
        
        // Fallback: Show manual instructions
        setTimeout(() => {
          alert(`If Viber didn't open automatically, please:\n1. Open Viber app\n2. Search for: ${viberNumber}\n3. Send your message manually`);
        }, 2000);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: ''
        });
        setShowForm(false);

        if (onFormSubmit) {
          onFormSubmit(formData);
        }
      } else {
        alert('Failed to save your information. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-creative-blue-100">
      <div className="text-center mb-6">
        <MessageCircle className="w-12 h-12 text-creative-purple-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-creative-blue-800 mb-2">Contact via Viber</h3>
        <p className="text-creative-blue-700">
          Scan QR code or fill out the form to chat with us directly on Viber
        </p>
      </div>

      {!showForm ? (
        <div className="space-y-6">
          {/* QR Codes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-creative-gradient-soft rounded-xl border border-creative-purple-200">
              <img 
                src="/Ken Desconte Viber.PNG" 
                alt="Ken's Viber QR Code" 
                className="w-32 h-32 mx-auto mb-4 rounded-lg shadow-md"
              />
              <h4 className="font-bold text-creative-purple-700 mb-2">Ken Desconte</h4>
              <p className="text-sm text-gray-600 mb-3">Event Styling Specialist</p>
              <div className="flex items-center justify-center text-sm text-creative-purple-600">
                <Phone className="w-4 h-4 mr-2" />
                {kenViber}
              </div>
            </div>

            <div className="text-center p-6 bg-creative-gradient-soft rounded-xl border border-creative-teal-200">
              <img 
                src="/Hazel Desconte Viber.PNG" 
                alt="Hazel's Viber QR Code" 
                className="w-32 h-32 mx-auto mb-4 rounded-lg shadow-md"
              />
              <h4 className="font-bold text-creative-teal-700 mb-2">Hazel Desconte</h4>
              <p className="text-sm text-gray-600 mb-3">Creative Director</p>
              <div className="flex items-center justify-center text-sm text-creative-teal-600">
                <Phone className="w-4 h-4 mr-2" />
                {hazelViber}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Or fill out your details first for a more personalized conversation
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-creative-gradient text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Fill Details & Contact via Viber
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="viber-name" className="block text-sm font-medium text-creative-blue-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="viber-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="viber-email" className="block text-sm font-medium text-creative-blue-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="viber-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="viber-phone" className="block text-sm font-medium text-creative-blue-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="viber-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                  placeholder="+63 917 123 4567"
                />
              </div>
              <div>
                <label htmlFor="viber-eventType" className="block text-sm font-medium text-creative-blue-700 mb-2">
                  Event Type
                </label>
                <select
                  id="viber-eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="graduation">Graduation Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="viber-eventDate" className="block text-sm font-medium text-creative-blue-700 mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="viber-eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="viber-message" className="block text-sm font-medium text-creative-blue-700 mb-2">
                Message *
              </label>
              <textarea
                id="viber-message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-creative-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-creative-blue-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
                placeholder="Tell us about your event requirements..."
              ></textarea>
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-center text-gray-600 font-medium">Choose who to contact:</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleViberContact(kenViber, 'Ken')}
                disabled={isSubmitting || !formData.name || !formData.message}
                className="flex items-center justify-center gap-3 bg-creative-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-creative-purple-600 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmitting ? 'Connecting...' : 'Chat with Ken'}
              </button>
              
              <button
                onClick={() => handleViberContact(hazelViber, 'Hazel')}
                disabled={isSubmitting || !formData.name || !formData.message}
                className="flex items-center justify-center gap-3 bg-creative-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-creative-teal-600 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmitting ? 'Connecting...' : 'Chat with Hazel'}
              </button>
            </div>

            <button
              onClick={() => setShowForm(false)}
              className="w-full text-creative-blue-600 py-2 text-sm hover:text-creative-blue-800 transition-colors duration-200"
            >
              ← Back to QR Codes
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-creative-blue-50 rounded-lg">
        <h4 className="font-medium text-creative-blue-800 mb-2">How it works:</h4>
        <ol className="text-sm text-creative-blue-700 space-y-1">
          <li>1. Scan the QR code with your phone camera or Viber app</li>
          <li>2. Or fill out the form and click to chat directly</li>
          <li>3. Your details will be saved and you'll be connected to Viber</li>
          <li>4. Start chatting with Ken or Hazel immediately!</li>
        </ol>
      </div>
    </div>
  );
};

export default ViberContact;