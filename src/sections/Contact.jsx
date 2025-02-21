import React, { useState } from 'react';
import { Github, Linkedin, Send, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFocused, setIsFocused] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/AviNormie',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/avi-srivastava-567067306/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      url: 'https://avi-porfolio.vercel.app',
      color: 'hover:text-pink-400'
    }
  ];

  const handleInputFocus = (field) => setIsFocused(field);
  const handleInputBlur = () => setIsFocused(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleInputFocus('name')}
                onBlur={handleInputBlur}
                className="w-full bg-purple-900/20 border border-purple-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your Name"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300
                  ${isFocused === 'name' ? 'w-full' : 'w-0'}`}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleInputFocus('email')}
                onBlur={handleInputBlur}
                className="w-full bg-purple-900/20 border border-purple-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your Email"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300
                  ${isFocused === 'email' ? 'w-full' : 'w-0'}`}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleInputFocus('message')}
                onBlur={handleInputBlur}
                rows="5"
                className="w-full bg-purple-900/20 border border-purple-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
                placeholder="Your Message"
              />
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300
                  ${isFocused === 'message' ? 'w-full' : 'w-0'}`}
              />
            </div>

            <button className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-purple-900/20 border border-purple-600/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-300 ${link.color} transition-colors duration-300`}
                  >
                    <link.icon size={24} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-purple-900/20 border border-purple-600/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Info</h3>
              <div className="space-y-3 text-gray-300">
                <p>First Year B.Tech CSE Student</p>
                <p>Available for Freelance Projects</p>
                <p>Open to Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;