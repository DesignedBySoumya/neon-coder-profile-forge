
import React from 'react';

interface ProfileHeaderProps {
  onEditClick: () => void;
}

export const ProfileHeader = ({ onEditClick }: ProfileHeaderProps) => {
  return (
    <div className="bg-[#16181D] rounded-2xl p-6 border border-gray-800 hover:border-[#00FFCB]/30 transition-all duration-300">
      {/* Avatar Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FFCB] to-[#29FFC6] p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-[#16181D] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#00FFCB] rounded-full flex items-center justify-center shadow-lg shadow-[#00FFCB]/50">
            <span className="text-xs font-bold text-black">12</span>
          </div>
        </div>
        
        {/* User Info */}
        <h1 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00FFCB] to-[#29FFC6] bg-clip-text text-transparent">
          Alex Chen
        </h1>
        <p className="text-[#A0A0A0] text-sm mb-3">@alexcodes</p>
        
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 bg-[#00FFCB]/10 border border-[#00FFCB]/30 rounded-full px-3 py-1 mb-4">
          <span className="text-sm">🔥</span>
          <span className="text-[#00FFCB] font-medium text-sm">Active Coder</span>
        </div>
        
        {/* Bio */}
        <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 line-clamp-2">
          Full-stack developer passionate about clean code and innovative solutions. Currently exploring AI/ML.
        </p>
        
        {/* Edit Profile Button */}
        <button 
          onClick={onEditClick}
          className="group relative bg-transparent border-2 border-[#00FFCB] text-[#00FFCB] px-4 py-2 rounded-xl font-medium hover:bg-[#00FFCB] hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFCB]/50 hover:scale-105 text-sm w-full"
        >
          <span className="relative z-10">Edit Profile</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFCB] to-[#29FFC6] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-sm"></div>
        </button>
      </div>
    </div>
  );
};
