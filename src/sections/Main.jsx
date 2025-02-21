import React, { useState, useEffect } from 'react';
import { Code2, Smartphone, Server, Box, Send, Download, ExternalLink, Terminal } from 'lucide-react';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI Libraries'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    mobile: ['React Native'],
    tools: ['Git', 'GitHub', 'Deployment', 'Version Control']
  };

  useEffect(() => {
    setIsVisible(true);
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    setTimeout(typeText, 500);

    const handleScroll = () => {
      const sections = ['home', 'skills', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 text-white p-8 max-w-6xl mx-auto" id="home">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center">
        <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Avi Srivastava
          </h1>
          <h2 className="text-2xl text-purple-300 font-mono">{typedText}<span className="animate-pulse">|</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl hover:text-purple-200 transition-colors duration-300">
            First-year B.Tech CSE student passionate about web and app development.
            Skilled in MERN stack and modern technologies. Looking for freelance opportunities.
          </p>
          <div className="flex gap-4 mt-8">
            <button 
              onClick={scrollToContact}
              className="group px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>Contact Me</span>
            </button>
            <button className="group px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-600/20 flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen py-20" id="skills">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div
              key={category}
              className="p-6 rounded-xl bg-purple-900/20 border border-purple-600/30 transform hover:scale-105 transition-all duration-300 hover:bg-purple-900/30"
              style={{
                animationDelay: `${idx * 200}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {getCategoryIcon(category)}
                <h3 className="text-xl font-semibold">{formatCategory(category)}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-default
                      ${hoveredSkill === skill 
                        ? 'bg-purple-600/40 scale-110 text-white' 
                        : 'bg-purple-600/20 text-purple-300'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen py-20" id="about">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 hover:text-purple-200 transition-colors duration-300">
              As a first-year B.Tech CSE student, I'm passionate about creating innovative web and mobile solutions. 
              My journey in development started with web technologies and quickly expanded to include mobile development.
            </p>
            <p className="text-lg text-gray-300 hover:text-purple-200 transition-colors duration-300">
              When I'm not coding, you can find me on the badminton court, where I enjoy maintaining a healthy balance 
              between technical growth and physical activity.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <h3 className="text-xl font-semibold text-purple-300">What I'm Currently...</h3>
              {[
                "Learning advanced Next.js features",
                "Looking for freelance opportunities",
                "Building personal projects"
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3 group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  <p className="group-hover:translate-x-2 transition-transform duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="w-full h-full bg-purple-900/20 rounded-xl border border-purple-600/30 transition-all duration-300 group-hover:bg-purple-900/30 group-hover:border-purple-500 p-6">
              <Terminal 
                size={48} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" 
              />
              <div className="font-mono text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>$ npm install passion</p>
                <p>$ npm run create-awesome-projects</p>
                <p>$ git commit -m "Always learning"</p>
                <p>$ git push -u origin life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    frontend: <Code2 className="text-purple-400" size={24} />,
    backend: <Server className="text-purple-400" size={24} />,
    mobile: <Smartphone className="text-purple-400" size={24} />,
    tools: <Box className="text-purple-400" size={24} />
  };
  return icons[category];
};

const formatCategory = (category) => {
  const formatted = category.charAt(0).toUpperCase() + category.slice(1);
  switch(category) {
    case 'frontend':
      return 'Frontend Development';
    case 'backend':
      return 'Backend Development';
    case 'mobile':
      return 'Mobile Development';
    case 'tools':
      return 'Tools & Deployment';
    default:
      return formatted;
  }
};

export default Main;