
import React, { useState } from 'react';

const skillCategories = {
  Advanced: [
    { name: 'JavaScript', level: 95, projects: 8, description: 'Frontend & backend development' },
    { name: 'React', level: 90, projects: 6, description: 'UI development, hooks, state management' },
    { name: 'Python', level: 88, projects: 5, description: 'Data structures, algorithms, ML' }
  ],
  Intermediate: [
    { name: 'Node.js', level: 75, projects: 4, description: 'Backend APIs, Express, middleware' },
    { name: 'TypeScript', level: 70, projects: 3, description: 'Type safety, large codebases' },
    { name: 'AWS', level: 65, projects: 2, description: 'Cloud deployment, S3, Lambda' }
  ],
  Fundamental: [
    { name: 'Docker', level: 45, projects: 2, description: 'Containerization, deployment' },
    { name: 'Rust', level: 35, projects: 1, description: 'Systems programming, performance' },
    { name: 'Go', level: 40, projects: 1, description: 'Concurrent programming, microservices' }
  ]
};

const languages = [
  { name: 'JavaScript', usage: 85, color: '#F7DF1E' },
  { name: 'Python', usage: 75, color: '#3776AB' },
  { name: 'TypeScript', usage: 60, color: '#3178C6' },
  { name: 'C++', usage: 45, color: '#00599C' },
  { name: 'Java', usage: 40, color: '#ED8B00' },
  { name: 'Rust', usage: 25, color: '#000000' },
  { name: 'Go', usage: 30, color: '#00ADD8' },
  { name: 'SQL', usage: 55, color: '#336791' }
];

export const SkillsLanguages = () => {
  const [sortBy, setSortBy] = useState('usage'); // 'usage' or 'alphabetical'
  
  const sortedLanguages = [...languages].sort((a, b) => {
    if (sortBy === 'usage') {
      return b.usage - a.usage;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-6">
      {/* Skills */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <span>🧠</span>
          Skills
        </h3>
        
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-6 last:mb-0">
            <h4 className="text-[#00FFA3] font-medium text-sm mb-3 uppercase tracking-wide">
              {category}
            </h4>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                    <span className="text-[#A0A0A0] text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="h-full bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] animate-pulse opacity-75"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    <div className="bg-[#0D0D0D] border border-gray-700 rounded px-2 py-1">
                      <p className="text-xs text-[#A0A0A0]">{skill.description}</p>
                      <p className="text-xs text-[#00FFA3]">Used in {skill.projects} projects</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Languages */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>💻</span>
            Languages
          </h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#0D0D0D] border border-gray-700 rounded px-2 py-1 text-white text-xs focus:border-[#00FFA3] focus:outline-none transition-colors duration-200"
          >
            <option value="usage">By Usage</option>
            <option value="alphabetical">A-Z</option>
          </select>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {sortedLanguages.map((language) => (
            <div
              key={language.name}
              className="group relative px-3 py-2 bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-[#00FFA3] rounded-full text-sm font-medium hover:bg-[#00FFA3]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>{language.name}</span>
              
              {/* Usage tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  {language.usage}% usage
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Usage summary */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="text-xs text-[#A0A0A0] mb-2">Top 3 Languages</div>
          <div className="flex gap-4">
            {sortedLanguages.slice(0, 3).map((lang, index) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FFA3]"></div>
                <span className="text-xs text-white">{lang.name}</span>
                <span className="text-xs text-[#A0A0A0]">{lang.usage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
