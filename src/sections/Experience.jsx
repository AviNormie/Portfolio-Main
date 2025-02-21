import React, { useState, useEffect, useRef } from 'react';
import { Code2, Users, Briefcase, Brain, Rocket } from 'lucide-react';

const ExperienceSection = () => {
  const [activeCheckpoints, setActiveCheckpoints] = useState(new Set());
  const timelineRef = useRef(null);
  const checkpointRefs = useRef([]);
  const experiences = [
    {
      title: "Alan Turing Club",
      icon: Brain,
      description: "Member of the prestigious Alan Turing Club, contributing to computer science and programming initiatives.",
      type: "Technical Club",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Full Stack Club",
      icon: Code2,
      description: "Active participant in Full Stack Club, working on web development projects and learning cutting-edge technologies.",
      type: "Development Club",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Google Developers Club",
      icon: Users,
      description: "Member of Google Developers Club, collaborating on projects and learning about Google technologies.",
      type: "Tech Community",
      color: "from-blue-500 to-green-500"
    },
    {
      title: "Spark (E-Cell)",
      icon: Rocket,
      description: "Part of Bennett University's entrepreneurship cell, fostering innovation and business acumen.",
      type: "Entrepreneurship Cell",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Paid Internship",
      icon: Briefcase,
      description: "Currently working as a paid intern, gaining real-world experience in software development.",
      type: "Professional Experience",
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = checkpointRefs.current.findIndex(ref => ref === entry.target);
        setActiveCheckpoints(prev => {
          const newSet = new Set(prev);
          if (entry.isIntersecting) {
            newSet.add(index);
          } else {
            newSet.delete(index);
          }
          return newSet;
        });
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    checkpointRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Get the highest active checkpoint to determine line glow height
  const getLineGlowHeight = () => {
    if (activeCheckpoints.size === 0) return '0%';
    const highestActive = Math.max(...Array.from(activeCheckpoints));
    return `${(highestActive + 1) * (100 / experiences.length)}%`;
  };

  return (
    <div className="min-h-screen py-20 relative" id="experience">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Experience & Involvement
      </h2>

      <div className="space-y-16 relative">
        {/* Base timeline line */}
        <div 
          ref={timelineRef}
          className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-purple-600/20"
          style={{
            height: 'calc(100% - 100px)',
            top: '50px'
          }}
        />

        {/* Glowing timeline overlay */}
        <div 
          className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transition-all duration-500"
          style={{
            height: getLineGlowHeight(),
            top: '50px',
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
            opacity: activeCheckpoints.size > 0 ? 1 : 0
          }}
        />

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <div
            key={exp.title}
            ref={el => checkpointRefs.current[index] = el}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8`}
          >
            {/* Timeline checkpoint */}
            <div 
              className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-500 z-10
                ${activeCheckpoints.has(index) 
                  ? 'bg-purple-500 border-purple-300 shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
                  : 'bg-purple-600 border-purple-900'
                }
                border-4`
              }
            />

            {/* Experience Card */}
            <div className={`w-full md:w-5/12 p-6 rounded-xl transition-all duration-500
              ${activeCheckpoints.has(index) 
                ? 'bg-purple-900/40 scale-105' 
                : 'bg-purple-900/20'
              } 
              border border-purple-600/30`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-20 
                  ${activeCheckpoints.has(index) ? 'shadow-lg' : ''}`}>
                  <exp.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
                  <span className="text-sm text-purple-400">{exp.type}</span>
                  <p className="mt-3 text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Skills/Keywords */}
              <div className="mt-4 flex flex-wrap gap-2">
                {getRelevantSkills(exp.title).map((skill) => (
                  <span
                    key={skill}
                    className={`px-2 py-1 text-xs rounded-full transition-all duration-500
                      ${activeCheckpoints.has(index) 
                        ? 'bg-purple-600/30 text-purple-200' 
                        : 'bg-purple-600/20 text-purple-300'}`}
                  >
                    {skill}
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

// Helper function remains the same
const getRelevantSkills = (title) => {
  switch (title) {
    case "Alan Turing Club":
      return ["Algorithms", "Problem Solving", "Competitive Programming"];
    case "Full Stack Club":
      return ["MERN Stack", "Web Development", "UI/UX"];
    case "Google Developers Club":
      return ["Google Cloud", "Firebase", "Android"];
    case "Spark (E-Cell)":
      return ["Leadership", "Innovation", "Entrepreneurship"];
    case "Paid Internship":
      return ["Professional Development", "Team Collaboration", "Real-world Projects"];
    default:
      return [];
  }
};

export default ExperienceSection;