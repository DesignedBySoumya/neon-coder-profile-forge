
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditProfileModal = ({ isOpen, onClose }: EditProfileModalProps) => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Chen',
    username: 'alexcodes',
    bio: 'Full-stack developer passionate about clean code and innovative solutions. Currently exploring AI/ML technologies.',
    status: '🔥 Active Coder'
  });

  const statusOptions = [
    '🔥 Active Coder',
    '🌙 Night Owl',
    '🌿 Chill Mode',
    '⚡ Speed Demon',
    '🎯 Focused',
    '🚀 On Fire',
    '🧘 Zen Mode'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Profile updated:', formData);
    // Show success toast here
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Glassmorphic Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-[#1A1A1A]/95 backdrop-blur-xl border border-[#00FFA3]/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-[#00FFA3]/20 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] bg-clip-text text-transparent">
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            className="text-[#A0A0A0] hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4 group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#4DFFDF] p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs">Change</span>
              </div>
            </div>
            <button
              type="button"
              className="text-[#00FFA3] hover:text-[#4DFFDF] transition-colors duration-200 text-sm font-medium px-4 py-2 border border-[#00FFA3]/30 rounded-lg hover:border-[#00FFA3]/50 hover:bg-[#00FFA3]/10"
            >
              Upload New Photo
            </button>
          </div>
          
          {/* Full Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00FFA3] focus:outline-none focus:ring-2 focus:ring-[#00FFA3]/20 transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
          
          {/* Username */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]">@</span>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-white focus:border-[#00FFA3] focus:outline-none focus:ring-2 focus:ring-[#00FFA3]/20 transition-all duration-200"
                placeholder="username"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00FFA3] focus:outline-none focus:ring-2 focus:ring-[#00FFA3]/20 transition-all duration-200 resize-none"
              maxLength={200}
              placeholder="Tell others about yourself..."
            />
            <div className="flex justify-between items-center mt-1">
              <p className="text-[#A0A0A0] text-xs">
                {formData.bio.length}/200 characters
              </p>
              <div className={`w-16 h-1 rounded-full ${
                formData.bio.length > 180 ? 'bg-red-500' : 
                formData.bio.length > 120 ? 'bg-yellow-500' : 'bg-[#00FFA3]'
              }`} style={{ width: `${(formData.bio.length / 200) * 64}px` }} />
            </div>
          </div>
          
          {/* Status */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00FFA3] focus:outline-none focus:ring-2 focus:ring-[#00FFA3]/20 transition-all duration-200"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status} className="bg-[#0D0D0D]">
                  {status}
                </option>
              ))}
            </select>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-700 text-[#A0A0A0] py-3 rounded-lg font-medium hover:border-gray-600 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] text-black py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#00FFA3]/50 transition-all duration-200 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Save Changes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4DFFDF] to-[#00FFA3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
