
import React from 'react';

export const ProfileHeader = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-8 border border-gray-800 hover:border-[#00FFA3]/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#4DFFDF] p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#00FFA3] rounded-full flex items-center justify-center shadow-lg shadow-[#00FFA3]/50">
            <span className="text-xs font-bold text-black">12</span>
          </div>
        </div>
        
        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] bg-clip-text text-transparent">
            Alex Chen
          </h1>
          <p className="text-[#A0A0A0] text-lg mb-3">@alexcodes</p>
          
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 bg-[#00FFA3]/10 border border-[#00FFA3]/30 rounded-full px-4 py-2 mb-4">
            <span className="text-lg">🔥</span>
            <span className="text-[#00FFA3] font-medium">Active Coder</span>
          </div>
          
          <p className="text-[#A0A0A0] max-w-md">
            Full-stack developer passionate about clean code and innovative solutions. 
            Currently exploring AI/ML and contributing to open source.
          </p>
        </div>
        
        {/* Edit Profile Button */}
        <button className="group relative bg-transparent border-2 border-[#00FFA3] text-[#00FFA3] px-6 py-3 rounded-xl font-medium hover:bg-[#00FFA3] hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFA3]/50 hover:scale-105">
          <span className="relative z-10">Edit Profile</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-sm"></div>
        </button>
      </div>
    </div>
  );
};
