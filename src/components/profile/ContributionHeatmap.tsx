
import React, { useState } from 'react';

export const ContributionHeatmap = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const years = [2022, 2023, 2024];

  // Generate exactly 365 days of contribution data
  const generateContributions = () => {
    const contributions = [];
    const startDate = new Date(selectedYear, 0, 1);
    const endDate = new Date(selectedYear, 11, 31);
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      // Create realistic contribution patterns
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const baseActivity = isWeekend ? 0.2 : 0.6;
      const randomFactor = Math.random();
      
      let count = 0;
      if (randomFactor < baseActivity) {
        count = Math.floor(Math.random() * 8) + 1;
      }
      
      contributions.push({
        date: date.toISOString().split('T')[0],
        count,
        dayOfWeek
      });
    }
    return contributions;
  };

  const contributions = generateContributions();
  
  const getIntensity = (count: number) => {
    if (count === 0) return 'bg-[#1A1A1A] border border-gray-800';
    if (count <= 2) return 'bg-[#00FFA3]/20 border border-[#00FFA3]/30';
    if (count <= 4) return 'bg-[#00FFA3]/40 border border-[#00FFA3]/50';
    if (count <= 6) return 'bg-[#00FFA3]/60 border border-[#00FFA3]/70';
    return 'bg-[#00FFA3] border border-[#00FFA3] shadow-sm shadow-[#00FFA3]/30';
  };

  const getTooltipText = (contribution: any) => {
    const date = new Date(contribution.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    
    if (contribution.count === 0) {
      return `No contributions on ${formattedDate}`;
    }
    return `${contribution.count} contribution${contribution.count > 1 ? 's' : ''} on ${formattedDate}`;
  };

  // Group contributions into weeks
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>📅</span>
          Contribution Activity
        </h3>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-[#0D0D0D] border border-gray-700 rounded-lg px-3 py-1 text-white text-sm focus:border-[#00FFA3] focus:outline-none transition-colors duration-200"
        >
          {years.map(year => (
            <option key={year} value={year} className="bg-[#0D0D0D]">
              {year}
            </option>
          ))}
        </select>
      </div>
      
      {/* Fixed-size container to prevent overflow */}
      <div className="w-full overflow-hidden">
        <div className="min-w-[700px] max-w-full">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-[#A0A0A0] ml-8">
            {monthLabels.map((month, index) => (
              <div key={month} className="flex-1 text-center">
                {month}
              </div>
            ))}
          </div>
          
          {/* Day labels and grid */}
          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col justify-around w-8 text-xs text-[#A0A0A0] pr-2">
              {dayLabels.map((day, index) => (
                <div key={day} className={index % 2 === 1 ? '' : 'invisible'}>
                  {day}
                </div>
              ))}
            </div>
            
            {/* Contribution grid - fixed size */}
            <div className="flex gap-1 flex-1">
              {weeks.slice(0, 52).map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1 flex-1">
                  {week.map((contribution, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`aspect-square rounded-sm ${getIntensity(contribution.count)} hover:ring-2 hover:ring-[#00FFA3]/50 transition-all duration-200 cursor-pointer group relative`}
                      style={{ maxWidth: '14px', maxHeight: '14px' }}
                      title={getTooltipText(contribution)}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                          {getTooltipText(contribution)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-[#A0A0A0]">
          {contributions.reduce((sum, c) => sum + c.count, 0)} contributions in {selectedYear}
        </span>
        <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-[#1A1A1A] border border-gray-800 rounded-sm"></div>
            <div className="w-3 h-3 bg-[#00FFA3]/20 rounded-sm"></div>
            <div className="w-3 h-3 bg-[#00FFA3]/40 rounded-sm"></div>
            <div className="w-3 h-3 bg-[#00FFA3]/60 rounded-sm"></div>
            <div className="w-3 h-3 bg-[#00FFA3] rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
