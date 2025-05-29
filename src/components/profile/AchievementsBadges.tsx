
import React from 'react';

const badges = [
  { name: 'First Blood', icon: '🥇', tier: 'gold', unlocked: true, description: 'Solved first problem', category: 'Milestone' },
  { name: 'Speed Demon', icon: '⚡', tier: 'platinum', unlocked: true, description: 'Solved in under 2 minutes', category: 'Performance' },
  { name: 'Night Owl', icon: '🦉', tier: 'silver', unlocked: true, description: 'Solved problems after midnight', category: 'Dedication' },
  { name: 'Marathon', icon: '🏃', tier: 'gold', unlocked: true, description: '100+ day streak', category: 'Consistency' },
  { name: 'Algorithm Master', icon: '🧠', tier: 'platinum', unlocked: false, description: 'Master all algorithm categories', category: 'Mastery' },
  { name: 'Code Reviewer', icon: '📋', tier: 'bronze', unlocked: true, description: 'Reviewed 50+ submissions', category: 'Community' },
  { name: 'Problem Setter', icon: '🎯', tier: 'gold', unlocked: false, description: 'Created 10+ problems', category: 'Contribution' },
  { name: 'Debugger', icon: '🐛', tier: 'silver', unlocked: true, description: 'Found 25+ bugs in submissions', category: 'Quality' }
];

export const AchievementsBadges = () => {
  const unlockedCount = badges.filter(badge => badge.unlocked).length;
  
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>🏆</span>
          Achievements & Badges
        </h3>
        <span className="text-sm text-[#A0A0A0]">
          {unlockedCount}/{badges.length} unlocked
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 auto-fit-grid">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`group relative p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
              badge.unlocked
                ? 'bg-[#0D0D0D] border-gray-700 hover:border-[#00FFA3]/50 hover:shadow-lg hover:shadow-[#00FFA3]/20 hover:scale-105'
                : 'bg-gray-800/50 border-gray-700 opacity-60'
            }`}
            style={{ minWidth: '120px' }}
          >
            <div className="text-center">
              <div className={`text-3xl mb-2 transition-transform duration-300 ${
                badge.unlocked ? 'group-hover:scale-110' : 'grayscale'
              }`}>
                {badge.icon}
              </div>
              <h4 className={`font-medium text-sm mb-1 ${
                badge.unlocked ? 'text-white' : 'text-gray-500'
              }`}>
                {badge.name}
              </h4>
              <div className={`w-full h-1 rounded-full ${
                badge.tier === 'platinum' ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                badge.tier === 'gold' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                badge.tier === 'silver' ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                'bg-gradient-to-r from-orange-400 to-yellow-600'
              } ${!badge.unlocked ? 'opacity-30' : ''}`}>
              </div>
              <p className="text-xs text-[#A0A0A0] mt-1">{badge.category}</p>
            </div>
            
            {badge.unlocked && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3]/10 to-[#4DFFDF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            )}
            
            {/* Enhanced Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-black/90 text-white text-xs rounded px-3 py-2 whitespace-nowrap shadow-lg border border-gray-700">
                <div className="font-medium">{badge.description}</div>
                <div className="text-[#A0A0A0] text-xs mt-1">{badge.tier.charAt(0).toUpperCase() + badge.tier.slice(1)} Tier</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
