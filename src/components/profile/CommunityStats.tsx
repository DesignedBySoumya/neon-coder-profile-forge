
import React from 'react';

const communityStats = [
  { 
    icon: '👁️', 
    label: 'Profile Views', 
    value: '2,847', 
    trend: '+12%', 
    trendType: 'positive',
    tooltip: 'from last week'
  },
  { 
    icon: '💬', 
    label: 'Discussions', 
    value: '156', 
    trend: '+8%', 
    trendType: 'positive',
    tooltip: 'threads participated'
  },
  { 
    icon: '⭐', 
    label: 'Solution Likes', 
    value: '1,234', 
    trend: '+24%', 
    trendType: 'positive',
    tooltip: 'total likes received'
  },
  { 
    icon: '⬆️', 
    label: 'Reputation', 
    value: '8,952', 
    trend: '+15%', 
    trendType: 'positive',
    tooltip: 'community rating'
  }
];

export const CommunityStats = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <span>🌐</span>
        Community Insights
      </h3>
      
      <div className="space-y-4">
        {communityStats.map((stat, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-3 bg-[#0D0D0D] rounded-lg border border-gray-700 hover:border-[#00FFA3]/30 hover:shadow-lg hover:shadow-[#00FFA3]/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
              <div>
                <span className="text-[#A0A0A0] text-sm block">{stat.label}</span>
                <span className="text-white font-bold text-lg group-hover:text-[#00FFA3] transition-colors duration-300">
                  {stat.value}
                </span>
              </div>
            </div>
            <div className="text-right relative group">
              <div className={`text-xs font-medium flex items-center gap-1 ${
                stat.trendType === 'positive' ? 'text-[#00FFA3]' : 'text-red-400'
              }`}>
                <span>{stat.trend}</span>
                <span className="bg-[#00FFA3]/20 text-[#00FFA3] px-1.5 py-0.5 rounded-full text-xs">
                  {stat.trendType === 'positive' ? '↗' : '↘'}
                </span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  {stat.tooltip}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] bg-clip-text text-transparent">
            Top 15%
          </div>
          <div className="text-xs text-[#A0A0A0]">among active contributors</div>
        </div>
      </div>
    </div>
  );
};
