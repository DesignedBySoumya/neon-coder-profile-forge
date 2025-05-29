import React, { useState } from 'react';
export const ContributionHeatmap = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Generate contribution data for the selected year
  const generateContributions = (year: number) => {
    const contributions = [];
    const startDate = new Date(year, 0, 1); // January 1st of the year
    const endDate = new Date(year, 11, 31); // December 31st of the year

    // Find the first Monday of the year (or the Monday before if year doesn't start on Monday)
    const firstMonday = new Date(startDate);
    while (firstMonday.getDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() - 1);
    }

    // Generate 52 weeks * 7 days = 364 cells
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        const date = new Date(firstMonday);
        date.setDate(date.getDate() + week * 7 + day);
        const count = date.getFullYear() === year && date <= endDate ? Math.floor(Math.random() * 12) // Random contribution count
        : 0; // No contributions for dates outside the year

        contributions.push({
          date: date.toISOString().split('T')[0],
          count,
          week,
          day
        });
      }
    }
    return contributions;
  };
  const contributions = generateContributions(selectedYear);
  const getIntensity = (count: number) => {
    if (count === 0) return 'bg-gray-800/50';
    if (count <= 2) return 'bg-[#0e4429]';
    if (count <= 4) return 'bg-[#006d32]';
    if (count <= 6) return 'bg-[#26a641]';
    if (count <= 8) return 'bg-[#39d353]';
    return 'bg-[#00FFA3]';
  };
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayLabels = ['Mon', 'Wed', 'Fri'];
  const availableYears = [2022, 2023, 2024, 2025];
  return <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>📅</span>
          Contribution Activity
        </h3>
        
        {/* Year Selector */}
        <select value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))} className="bg-[#0D0D0D] border border-gray-700 rounded-lg px-3 py-1 text-white text-sm focus:border-[#00FFA3]/50 focus:outline-none">
          {availableYears.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      
      <div className="contribution-heatmap">
        {/* Month Labels */}
        <div className="<div class=\"grid grid-cols-52 gap-[2px] mb-2 text-xs text-[#A0A0A0]\">\n  <div class=\"col-span-4 text-left\">Jan</div>\n  <div class=\"col-span-4 text-left\">Feb</div>\n  <div class=\"col-span-4 text-left\">Mar</div>\n  <div class=\"col-span-4 text-left\">Apr</div>\n  <div class=\"col-span-4 text-left\">May</div>\n  <div class=\"col-span-4 text-left\">Jun</div>\n  <div class=\"col-span-4 text-left\">Jul</div>\n  <div class=\"col-span-4 text-left\">Aug</div>\n  <div class=\"col-span-4 text-left\">Sep</div>\n  <div class=\"col-span-4 text-left\">Oct</div>\n  <div class=\"col-span-4 text-left\">Nov</div>\n  <div class=\"col-span-4 text-left\">Dec</div>\n</div>\n">
          {Array.from({
          length: 52
        }, (_, weekIndex) => {
          const weekDate = new Date(selectedYear, 0, 1 + weekIndex * 7);
          const isFirstWeekOfMonth = weekDate.getDate() <= 7;
          const month = weekDate.getMonth();
          return <div key={weekIndex} className="text-center">
                {isFirstWeekOfMonth ? monthLabels[month] : ''}
              </div>;
        })}
        </div>

        <div className="flex gap-2">
          {/* Day Labels */}
          <div className="flex flex-col gap-[2px] text-xs text-[#A0A0A0] justify-center">
            {dayLabels.map((day, index) => <div key={day} className="h-[10px] flex items-center" style={{
            marginTop: index === 0 ? '0' : '10px'
          }}>
                {day}
              </div>)}
          </div>

          {/* Contribution Grid */}
          <div className="flex-1 overflow-hidden">
            <div className="grid gap-[2px]" style={{
            gridTemplateColumns: 'repeat(52, 1fr)',
            gridTemplateRows: 'repeat(7, 10px)'
          }}>
              {contributions.map((contribution, index) => {
              const isToday = contribution.date === new Date().toISOString().split('T')[0];
              return <div key={index} className={`
                      ${getIntensity(contribution.count)} 
                      rounded-sm transition-all duration-200 cursor-pointer group relative
                      hover:ring-2 hover:ring-[#00FFA3]/50 hover:scale-110
                      ${isToday ? 'ring-2 ring-[#00FFA3] ring-opacity-80' : ''}
                    `} style={{
                aspectRatio: '1'
              }} title={`${contribution.count} contributions on ${new Date(contribution.date).toLocaleDateString()}`}>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                        <div className="font-medium">
                          {contribution.count} contribution{contribution.count !== 1 ? 's' : ''}
                        </div>
                        <div className="text-[#A0A0A0]">
                          {new Date(contribution.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-800/50 rounded-sm"></div>
            <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#00FFA3] rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
        
        <div className="text-xs text-[#A0A0A0]">
          {contributions.reduce((sum, c) => sum + c.count, 0)} contributions in {selectedYear}
        </div>
      </div>
    </div>;
};