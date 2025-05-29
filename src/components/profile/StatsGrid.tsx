
import React from 'react';

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  badge?: string;
  trend?: string;
  color?: string;
}

const StatCard = ({ icon, value, label, badge, trend, color = '#00FFA3' }: StatCardProps) => {
  return (
    <div className="group bg-[#1A1A1A] rounded-xl p-4 border border-gray-800 hover:border-[#00FFA3]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFA3]/20 cursor-pointer">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color }}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white group-hover:text-[#00FFA3] transition-colors duration-300">
              {value}
            </span>
            {badge && (
              <span className="bg-[#00FFA3] text-black text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-[#A0A0A0] text-xs mb-1">{label}</p>
      {trend && (
        <p className="text-[#00FFA3] text-xs font-medium">{trend}</p>
      )}
    </div>
  );
};

export const StatsGrid = () => {
  const stats = [
    { 
      icon: '🧩', 
      value: '347', 
      label: 'Problems Solved', 
      trend: '+12 this week',
      color: '#00FFA3'
    },
    { 
      icon: '🔥', 
      value: '23', 
      label: 'Current Streak', 
      trend: 'Personal best!',
      color: '#FF6B6B'
    },
    { 
      icon: '🏆', 
      value: '1,847', 
      label: 'Contest Rating', 
      badge: 'Expert',
      color: '#FFD86F'
    },
    { 
      icon: '📝', 
      value: '12', 
      label: 'Code Reviews', 
      badge: 'New',
      color: '#4DFFDF'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span>📊</span>
        Your Stats
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};
