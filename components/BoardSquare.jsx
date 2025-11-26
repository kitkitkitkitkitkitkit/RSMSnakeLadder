import React from 'react';
import { Trophy } from 'lucide-react';
import { BOARD_SIZE } from '../constants.js';

const BoardSquare = ({ position, teamsHere, hasLadder, ladderTarget, animatingTeam, teamColors }) => {
  const isFinish = position === BOARD_SIZE;

  return (
    <div className="relative">
      <div className={`aspect-square rounded-2xl border-4 flex items-center justify-center text-2xl font-bold relative overflow-hidden transition-all duration-300
        ${isFinish ? 'bg-gradient-to-br from-yellow-400 to-orange-500 border-yellow-600 shadow-lg' : 
          hasLadder ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-400' :
          'bg-gradient-to-br from-blue-50 to-purple-50 border-purple-300'}`}>
        
        <span className={`absolute top-1 left-2 text-lg ${isFinish ? 'text-white' : 'text-gray-600'}`}>
          {position}
        </span>

        {isFinish && (
          <Trophy className="w-12 h-12 text-white drop-shadow-lg" />
        )}

        {teamsHere.length > 0 && (
          <div className="absolute bottom-2 right-2 flex gap-1 flex-wrap max-w-[80%]">
            {teamsHere.map(team => (
              <div
                key={team}
                className={`w-7 h-7 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                  animatingTeam === team ? 'scale-150 ring-4 ring-purple-400 z-20' : ''
                }`}
                style={{ backgroundColor: teamColors[team] }}
              />
            ))}
          </div>
        )}
      </div>

      {hasLadder && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg font-bold z-10">
          ↑{ladderTarget}
        </div>
      )}
    </div>
  );
};

export default BoardSquare;