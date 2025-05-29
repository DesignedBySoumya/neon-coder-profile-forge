
import React from 'react';

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  badge?: string;
}

const StatCard = ({ icon, value, label, badge }: StatCardProps) => {
  return (
    <div className="group bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 hover:border-[#00FFA3]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFA3]/20 hover:scale-105 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="text-3xl text-[#00FFA3] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-white group-hover:text-[#00FFA3] transition-colors duration-300">
              {value}
            </span>
            {badge && (
              <span className="bg-[#00FFA3] text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                {badge}
              </span>
            )}
          </div>
          <p className="text-[#A0A0A0] text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};

export const StatsGrid = () => {
  const stats = [
    { icon: '🧩', value: '347', label: 'Problems Solved' },
    { icon: '🔥', value: '23', label: 'Current Streak' },
    { icon: '🏆', value: '1,847', label: 'Contest Rating', badge: 'Expert' },
    { icon: '📝', value: '12', label: 'Code Reviews', badge: 'New' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
