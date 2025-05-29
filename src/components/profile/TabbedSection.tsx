
import React, { useState } from 'react';

const tabs = ['Overview', 'Solutions', 'Discussions', 'Projects'];

const tabContent = {
  Overview: [
    { type: 'submission', title: 'Two Sum - Solved', time: '2 hours ago', difficulty: 'Easy', xp: 25 },
    { type: 'achievement', title: 'Earned "Speed Demon" badge', time: '1 day ago', xp: 50 },
    { type: 'contest', title: 'Participated in Weekly Contest 321', time: '3 days ago', rank: '#142', xp: 100 },
    { type: 'submission', title: 'Binary Tree Level Order Traversal', time: '2 days ago', difficulty: 'Medium', xp: 50 },
    { type: 'discussion', title: 'Helped with dynamic programming question', time: '3 days ago', xp: 15 }
  ],
  Solutions: [
    { title: 'Binary Tree Inorder Traversal', language: 'Python', likes: 23, time: '1 day ago', difficulty: 'Medium', xp: 50 },
    { title: 'Merge Two Sorted Lists', language: 'JavaScript', likes: 45, time: '3 days ago', difficulty: 'Easy', xp: 25 },
    { title: 'Valid Parentheses', language: 'C++', likes: 67, time: '1 week ago', difficulty: 'Easy', xp: 25 },
    { title: 'Maximum Subarray', language: 'Python', likes: 34, time: '1 week ago', difficulty: 'Medium', xp: 50 },
    { title: 'Longest Palindromic Substring', language: 'Java', likes: 56, time: '2 weeks ago', difficulty: 'Medium', xp: 50 },
    { title: 'Container With Most Water', language: 'TypeScript', likes: 78, time: '2 weeks ago', difficulty: 'Medium', xp: 50 },
    { title: 'Regular Expression Matching', language: 'Python', likes: 89, time: '3 weeks ago', difficulty: 'Hard', xp: 100 }
  ],
  Discussions: [
    { title: 'Best approach for dynamic programming?', replies: 12, time: '2 days ago', category: 'Algorithms' },
    { title: 'Time complexity analysis help needed', replies: 5, time: '4 days ago', category: 'Theory' },
    { title: 'Interview preparation strategies', replies: 28, time: '1 week ago', category: 'Career' },
    { title: 'Debugging binary search implementation', replies: 8, time: '1 week ago', category: 'Help' },
    { title: 'Graph algorithms explained', replies: 15, time: '2 weeks ago', category: 'Tutorial' }
  ],
  Projects: [
    { title: 'AI Code Reviewer', tech: 'React, Node.js, OpenAI', stars: 234, status: 'Active', updated: '2 days ago' },
    { title: 'Leetcode Analytics Dashboard', tech: 'Vue.js, Python', stars: 89, status: 'Completed', updated: '1 week ago' },
    { title: 'Algorithm Visualizer', tech: 'D3.js, TypeScript', stars: 156, status: 'In Progress', updated: '3 days ago' },
    { title: 'Code Challenge Bot', tech: 'Discord.js, MongoDB', stars: 45, status: 'In Progress', updated: '1 week ago' }
  ]
};

export const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [solutionsPage, setSolutionsPage] = useState(0);
  const itemsPerPage = 5;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-[#00FFA3]/20 text-[#00FFA3] border border-[#00FFA3]/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'In Progress': return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  const paginatedSolutions = tabContent.Solutions.slice(
    solutionsPage * itemsPerPage,
    (solutionsPage + 1) * itemsPerPage
  );

  const totalSolutionPages = Math.ceil(tabContent.Solutions.length / itemsPerPage);

  return (
    <div className="bg-[#1A1A1A] rounded-xl border border-gray-800">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-800 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-300 relative ${
              activeTab === tab
                ? 'text-[#00FFA3] border-b-2 border-[#00FFA3]'
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FFA3] to-[#4DFFDF] animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activeTab === 'Overview' && tabContent.Overview.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-lg border border-gray-700 hover:border-[#00FFA3]/30 transition-all duration-300">
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.time}</p>
              </div>
              <div className="flex items-center gap-2">
                {item.difficulty && (
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                )}
                {item.rank && (
                  <span className="text-[#00FFA3] font-bold">{item.rank}</span>
                )}
                {item.xp && (
                  <span className="text-[#FFD86F] text-sm font-bold flex items-center gap-1">
                    🔥 {item.xp} XP
                  </span>
                )}
              </div>
            </div>
          ))}
          
          {activeTab === 'Solutions' && (
            <>
              {paginatedSolutions.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-lg border border-gray-700 hover:border-[#00FFA3]/30 transition-all duration-300">
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-[#A0A0A0] text-sm">{item.language} • {item.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-[#00FFA3]">
                      <span>👍</span>
                      <span className="font-bold">{item.likes}</span>
                    </div>
                    <span className="text-[#FFD86F] text-sm font-bold flex items-center gap-1">
                      🔥 {item.xp} XP
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Pagination */}
              {totalSolutionPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button
                    onClick={() => setSolutionsPage(Math.max(0, solutionsPage - 1))}
                    disabled={solutionsPage === 0}
                    className="px-3 py-1 bg-[#0D0D0D] border border-gray-700 rounded text-sm text-[#A0A0A0] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-[#A0A0A0]">
                    {solutionsPage + 1} of {totalSolutionPages}
                  </span>
                  <button
                    onClick={() => setSolutionsPage(Math.min(totalSolutionPages - 1, solutionsPage + 1))}
                    disabled={solutionsPage === totalSolutionPages - 1}
                    className="px-3 py-1 bg-[#0D0D0D] border border-gray-700 rounded text-sm text-[#A0A0A0] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'Discussions' && tabContent.Discussions.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-lg border border-gray-700 hover:border-[#00FFA3]/30 transition-all duration-300">
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.category} • {item.time}</p>
              </div>
              <div className="flex items-center gap-2 text-[#4DFFDF]">
                <span>💬</span>
                <span className="font-bold">{item.replies}</span>
              </div>
            </div>
          ))}
          
          {activeTab === 'Projects' && tabContent.Projects.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-[#0D0D0D] rounded-lg border border-gray-700 hover:border-[#00FFA3]/30 transition-all duration-300">
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.tech}</p>
                <p className="text-[#A0A0A0] text-xs">Updated {item.updated}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#FFD86F]">
                  <span>⭐</span>
                  <span className="font-bold">{item.stars}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
