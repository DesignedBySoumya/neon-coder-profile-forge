
import React from 'react';

export const ContributionHeatmap = () => {
  // Generate contribution data for the heatmap
  const generateContributions = () => {
    const contributions = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 364); // 52 weeks back
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const count = Math.floor(Math.random() * 10); // Random contribution count
      contributions.push({
        date: date.toISOString().split('T')[0],
        count
      });
    }
    return contributions;
  };

  const contributions = generateContributions();
  
  const getIntensity = (count: number) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 2) return 'bg-[#0e4429]';
    if (count <= 4) return 'bg-[#006d32]';
    if (count <= 6) return 'bg-[#26a641]';
    return 'bg-[#00FFA3]';
  };

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <span>📅</span>
        Contribution Activity
      </h3>
      
      <div className="grid grid-cols-53 gap-1 mb-4">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-sm ${getIntensity(contribution.count)} hover:ring-2 hover:ring-[#00FFA3]/50 transition-all duration-200 cursor-pointer group relative`}
            title={`${contribution.count} contributions on ${contribution.date}`}
          >
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {contribution.count} contributions<br/>
                {new Date(contribution.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
          <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#00FFA3] rounded-sm"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};
