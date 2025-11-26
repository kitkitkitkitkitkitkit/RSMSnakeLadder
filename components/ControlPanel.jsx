import React from 'react';
import { Dices, Trophy, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { TEAM_COLORS, TEAMS, BOARD_SIZE } from '../constants.js';
import TeamsList from './TeamsList.jsx';
import DiceSection from './DiceSection.jsx';

const ControlPanel = ({
  currentTeam,
  winner,
  diceValue,
  positions,
  animatingTeam,
  rollDice,
  manualMove,
  resetGame
}) => {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Teams</h2>
      
      <TeamsList
        positions={positions}
        currentTeam={currentTeam}
        winner={winner}
        manualMove={manualMove}
      />

      <DiceSection
        winner={winner}
        animatingTeam={animatingTeam}
        currentTeam={currentTeam}
        diceValue={diceValue}
        rollDice={rollDice}
        resetGame={resetGame}
      />
    </div>
  );
};

export default ControlPanel;