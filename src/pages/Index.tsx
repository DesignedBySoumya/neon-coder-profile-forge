
import React, { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { StatsGrid } from '../components/profile/StatsGrid';
import { LevelProgress } from '../components/profile/LevelProgress';
import { TabbedSection } from '../components/profile/TabbedSection';
import { AchievementsBadges } from '../components/profile/AchievementsBadges';
import { SkillsLanguages } from '../components/profile/SkillsLanguages';
import { ContributionHeatmap } from '../components/profile/ContributionHeatmap';
import { CommunityStats } from '../components/profile/CommunityStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Stats Grid */}
        <StatsGrid />
        
        {/* Level & XP Progress */}
        <LevelProgress />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content - Left & Center */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabbed Section */}
            <TabbedSection />
            
            {/* Achievements & Badges */}
            <AchievementsBadges />
            
            {/* Contribution Heatmap */}
            <ContributionHeatmap />
          </div>
          
          {/* Sidebar - Right */}
          <div className="space-y-8">
            {/* Skills & Languages */}
            <SkillsLanguages />
            
            {/* Community Stats */}
            <CommunityStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
