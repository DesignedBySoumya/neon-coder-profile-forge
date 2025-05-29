
import React from 'react';

export const LevelProgress = () => {
  const currentXP = 347;
  const maxXP = 500;
  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 mb-8 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#4DFFDF] flex items-center justify-center shadow-lg shadow-[#00FFA3]/30 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-black font-bold text-xl">12</span>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FFD86F] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-black">★</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Level 12</h3>
            <p className="text-[#A0A0A0] text-sm">Code Warrior</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-[#00FFA3]">{currentXP} / {maxXP} XP</p>
          <p className="text-[#A0A0A0] text-sm">Next: Level 13</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#00FFA3] to-[#FFD86F] rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] to-[#FFD86F] animate-pulse opacity-75"></div>
          <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div>
        </div>
      </div>
      
      <p className="text-[#A0A0A0] text-sm mt-2 text-center">
        {maxXP - currentXP} XP until next level
      </p>
    </div>
  );
};
