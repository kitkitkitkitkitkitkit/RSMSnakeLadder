import React from 'react';
import { Trophy } from 'lucide-react';
import { TEAM_COLORS, BOARD_SIZE, LADDERS } from '../constants.js';
import LadderVisualization from './LadderVisualization.jsx';
import BoardSquare from './BoardSquare.jsx';
import StartPosition from './StartPosition.jsx';

const GameBoard = ({ positions, animatingTeam, getTeamsAtPosition }) => {
  return (
    <div className="lg:col-span-2 bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8">
      <div className="relative">
        {/* Board Path */}
        <div className="grid grid-cols-6 gap-4 relative">
          <LadderVisualization />

          {[...Array(BOARD_SIZE)].map((_, i) => {
            const position = i + 1;
            const teamsHere = getTeamsAtPosition(position);
            const hasLadder = position in LADDERS;

            return (
              <BoardSquare
                key={i}
                position={position}
                teamsHere={teamsHere}
                hasLadder={hasLadder}
                ladderTarget={LADDERS[position]}
                animatingTeam={animatingTeam}
                teamColors={TEAM_COLORS}
              />
            );
          })}
        </div>

        {/* Start position */}
        <StartPosition 
          getTeamsAtPosition={getTeamsAtPosition}
          animatingTeam={animatingTeam}
          teamColors={TEAM_COLORS}
        />
      </div>
    </div>
  );
};

export default GameBoard;