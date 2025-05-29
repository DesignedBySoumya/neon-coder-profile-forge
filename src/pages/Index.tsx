
import React, { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { StatsGrid } from '../components/profile/StatsGrid';
import { LevelProgress } from '../components/profile/LevelProgress';
import { TabbedSection } from '../components/profile/TabbedSection';
import { AchievementsBadges } from '../components/profile/AchievementsBadges';
import { SkillsLanguages } from '../components/profile/SkillsLanguages';
import { ContributionHeatmap } from '../components/profile/ContributionHeatmap';
import { CommunityStats } from '../components/profile/CommunityStats';
import { EditProfileModal } from '../components/profile/EditProfileModal';

const Index = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E0F11] text-white font-inter">
      <div className="container mx-auto px-4 py-6 max-w-[1400px]">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-screen">
          
          {/* Left Sidebar - Sticky Profile & Stats */}
          <div className="lg:col-span-3 lg:sticky lg:top-6 lg:h-fit space-y-4">
            <ProfileHeader onEditClick={() => setIsEditModalOpen(true)} />
            <StatsGrid />
            <LevelProgress />
          </div>
          
          {/* Center Content - Main Tabs & Activities */}
          <div className="lg:col-span-6 space-y-6 overflow-hidden">
            <TabbedSection />
            <ContributionHeatmap />
            <div className="lg:hidden">
              <AchievementsBadges />
            </div>
          </div>
          
          {/* Right Sidebar - Skills & Community */}
          <div className="lg:col-span-3 space-y-4">
            <SkillsLanguages />
            <CommunityStats />
            <div className="hidden lg:block">
              <AchievementsBadges />
            </div>
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
