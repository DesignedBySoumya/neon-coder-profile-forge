
import React, { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { StatsGrid } from '../components/profile/StatsGrid';
import { TabbedSection } from '../components/profile/TabbedSection';
import { AchievementsBadges } from '../components/profile/AchievementsBadges';
import { SkillsLanguages } from '../components/profile/SkillsLanguages';
import { ContributionHeatmap } from '../components/profile/ContributionHeatmap';
import { CommunityStats } from '../components/profile/CommunityStats';
import { EditProfileModal } from '../components/profile/EditProfileModal';

const Index = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Three Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - User Identity & Quick Stats */}
          <div className="lg:col-span-3 space-y-6">
            <ProfileHeader onEditClick={() => setIsEditModalOpen(true)} />
            <StatsGrid />
          </div>
          
          {/* Middle Column - Main Dynamic Content */}
          <div className="lg:col-span-6 space-y-6">
            <AchievementsBadges />
            <ContributionHeatmap />
            <TabbedSection />
          </div>
          
          {/* Right Column - Supplementary Info */}
          <div className="lg:col-span-3 space-y-6">
            <SkillsLanguages />
            <CommunityStats />
          </div>
        </div>
      </div>
      
      {/* Edit Profile Modal */}
      <EditProfileModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
