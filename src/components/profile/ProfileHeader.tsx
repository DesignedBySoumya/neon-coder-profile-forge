
import React from 'react';

interface ProfileHeaderProps {
  onEditClick: () => void;
}

export const ProfileHeader = ({ onEditClick }: ProfileHeaderProps) => {
  const currentXP = 347;
  const maxXP = 500;
  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-[#00FFA3]/30 transition-all duration-300">
      {/* Avatar Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#4DFFDF] p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* User Info */}
        <h1 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] bg-clip-text text-transparent">
          Alex Chen
        </h1>
        <p className="text-[#A0A0A0] text-sm mb-3">@alexcodes</p>
        
        {/* Bio */}
        <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 text-center">
          Full-stack developer passionate about clean code and innovative solutions. Currently exploring AI/ML technologies.
        </p>
        
        {/* Status and Level Badges */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-[#00FFA3]/10 border border-[#00FFA3]/30 rounded-full px-3 py-1">
            <span className="text-sm">🔥</span>
            <span className="text-[#00FFA3] font-medium text-sm">Active Coder</span>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] rounded-full px-3 py-1">
              <span className="text-sm">⭐</span>
              <span className="text-black font-bold text-sm">Level 12</span>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Code Warrior • {currentXP}/{maxXP} XP
              </div>
            </div>
          </div>
        </div>
        
        {/* XP Progress */}
        <div className="w-full mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#A0A0A0]">XP Progress</span>
            <span className="text-xs text-[#00FFA3] font-medium">{currentXP}/{maxXP}</span>
          </div>
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] animate-pulse opacity-75"></div>
            </div>
          </div>
          <p className="text-[#A0A0A0] text-xs mt-1 text-center">
            {maxXP - currentXP} XP until Level 13
          </p>
        </div>
        
        {/* Edit Profile Button */}
        <button 
          onClick={onEditClick}
          className="group relative bg-transparent border-2 border-[#00FFA3] text-[#00FFA3] px-4 py-2 rounded-xl font-medium hover:bg-[#00FFA3] hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFA3]/50 hover:scale-105 text-sm w-full"
        >
          <span className="relative z-10">Edit Profile</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-sm"></div>
        </button>
      </div>
    </div>
  );
};
