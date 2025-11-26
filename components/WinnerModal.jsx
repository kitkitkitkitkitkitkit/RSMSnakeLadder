import React from 'react';
import { Trophy } from 'lucide-react';
import { TEAM_COLORS } from '../constants.js';

const WinnerModal = ({ winner, resetGame }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-12 text-center shadow-2xl transform scale-110">
        <Trophy className="w-24 h-24 mx-auto mb-4 text-yellow-500" />
        <h2 className="text-5xl font-bold mb-4" style={{ color: TEAM_COLORS[winner] }}>
          {winner.toUpperCase()} WINS!
        </h2>
        <p className="text-gray-600 mb-6 text-xl">Congratulations! 🎉</p>
        <button
          onClick={resetGame}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinnerModal;