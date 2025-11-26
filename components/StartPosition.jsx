import React from 'react';

const StartPosition = ({ getTeamsAtPosition, animatingTeam, teamColors }) => {
  const teamsAtStart = getTeamsAtPosition(0);

  return (
    <div className="absolute -left-20 top-8">
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 w-16 h-16 rounded-2xl border-4 border-gray-400 flex items-center justify-center shadow-xl">
        <span className="font-bold text-gray-700 text-xs">START</span>
      </div>
      {teamsAtStart.length > 0 && (
        <div className="absolute inset-0 flex items-center justify-center flex-wrap gap-1 p-2">
          {teamsAtStart.map(team => (
            <div
              key={team}
              className={`w-5 h-5 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                animatingTeam === team ? 'scale-150 ring-4 ring-purple-400' : ''
              }`}
              style={{ backgroundColor: teamColors[team] }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StartPosition;