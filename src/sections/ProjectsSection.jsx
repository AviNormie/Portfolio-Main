import React, { useState } from 'react';
import { ExternalLink, Github, Timer, Hospital, Gavel, Video, MessageSquare, Users, Trophy } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "StudySync",
      description: "A real-time collaborative study platform featuring synchronized timers, video chat, and leaderboards for study sessions.",
      link: "https://studysync-pied.vercel.app",
      github: "https://github.com/AviNormie/study-sync",
      features: [
        {
          icon: Timer,
          text: "Real-time synchronized study timer"
        },
        {
          icon: Video,
          text: "Video chat capabilities"
        },
        {
          icon: Users,
          text: "Private/public study rooms"
        },
        {
          icon: Trophy,
          text: "Global leaderboard system"
        }
      ],
      tech: ["WebSocket", "WebRTC", "MERN Stack", "Socket.io"]
    },
    {
      title: "CityCare",
      description: "Comprehensive hospital management system with patient-centric features and emergency services.",
      link: "https://city-care.vercel.app",
      github: "https://github.com/AviNormie/city-care",
      features: [
        {
          icon: Hospital,
          text: "Hospital locator with navigation"
        },
        {
          icon: MessageSquare,
          text: "Doctor appointment booking"
        },
        {
          icon: Users,
          text: "Patient management system"
        }
      ],
      tech: ["React", "Node.js", "MongoDB", "Maps API"]
    },
    {
      title: "Auction House",
      description: "Dynamic auction platform for online bidding and item listing.",
      link: "https://sparks-auction-house.vercel.app",
      github: "https://github.com/AviNormie/auction-house",
      features: [
        {
          icon: Gavel,
          text: "Real-time bidding system"
        },
        {
          icon: Timer,
          text: "Auction timer system"
        },
        {
          icon: Users,
          text: "User authentication"
        }
      ],
      tech: ["React", "Node.js", "Real-time Updates"]
    }
  ];

  return (
    <div className="min-h-screen py-20" id="projects">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`p-6 rounded-xl transition-all duration-300 ${
              hoveredProject === index 
                ? 'bg-purple-900/40 scale-102 border-purple-500' 
                : 'bg-purple-900/20 border-purple-600/30'
            } border`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300"
                  >
                    <span>Visit</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                  
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300">{project.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <feature.icon size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-600/30">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-600/20 rounded-full text-purple-300 hover:bg-purple-600/30 hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;