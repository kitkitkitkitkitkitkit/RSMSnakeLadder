import React from 'react';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { TEAM_COLORS, TEAMS, BOARD_SIZE } from '../constants.js';

const TeamsList = ({ positions, currentTeam, winner, manualMove }) => {
  return (
    <div className="space-y-2 mb-4">
      {TEAMS.map(team => (
        <div
          key={team}
          className={`flex items-center justify-between p-2 rounded-lg border-2 transition-all ${
            currentTeam === team && !winner
              ? 'border-purple-500 bg-purple-50 shadow-md'
              : 'border-gray-200 bg-gray-50'
          } ${winner === team ? 'bg-yellow-100 border-yellow-400' : ''}`}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full border-2 border-white shadow-lg flex-shrink-0"
              style={{ backgroundColor: TEAM_COLORS[team] }}
            />
            <span className="font-bold capitalize text-gray-700 text-xs">{team}</span>
            {winner === team && <Trophy className="w-3 h-3 text-yellow-600" />}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-gray-600 min-w-[20px] text-center">
              {positions[team]}
            </span>
            <div className="flex gap-0.5">
              <button
                onClick={() => manualMove(team, 'backward')}
                disabled={positions[team] === 0 || winner}
                className="p-0.5 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Move backward"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => manualMove(team, 'forward')}
                disabled={positions[team] === BOARD_SIZE || winner}
                className="p-0.5 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Move forward"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsList;