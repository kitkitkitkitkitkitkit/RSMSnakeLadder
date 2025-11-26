import React from 'react';
import { Dices, RotateCcw } from 'lucide-react';

const DiceSection = ({
  winner,
  animatingTeam,
  currentTeam,
  diceValue,
  rollDice,
  resetGame
}) => {
  return (
    <div className="text-center">
      {diceValue && (
        <div className="mb-2 text-5xl font-bold text-purple-600 animate-bounce">
          {diceValue}
        </div>
      )}
      <button
        onClick={rollDice}
        disabled={winner || animatingTeam}
        className={`w-full py-3 rounded-xl font-bold text-base transition-all shadow-lg ${
          winner || animatingTeam
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 hover:shadow-xl transform hover:scale-105'
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <Dices className="w-5 h-5" />
          <span className="text-sm">{winner ? 'Game Over' : animatingTeam ? 'Moving...' : `Roll (${currentTeam.toUpperCase()})`}</span>
        </div>
      </button>
      <button
        onClick={resetGame}
        className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all shadow-md text-sm"
      >
        <RotateCcw className="w-3 h-3" />
        Reset
      </button>
    </div>
  );
};

export default DiceSection;