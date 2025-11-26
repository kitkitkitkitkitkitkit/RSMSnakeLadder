import React from 'react';

const GameLog = ({ gameLog }) => {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Game Log & Rules</h2>
      
      {/* Game Rules */}
      <div className="mb-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
        <h3 className="font-bold text-gray-700 mb-2 text-sm">Game Rules:</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>🎲 Roll the dice and move forward</li>
          <li>⚡️ Stop 9 → Ladder to Stop 11</li>
          <li>🏆 First team to reach Stop 12 wins!</li>
          <li>↔️ Use manual controls to adjust team positions if needed</li>
        </ul>
      </div>

      {/* Log */}
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {gameLog.length === 0 ? (
          <p className="text-gray-400 text-center py-4 text-sm">Roll the dice to start!</p>
        ) : (
          gameLog.map((log, idx) => (
            <div
              key={idx}
              className="p-2 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg border border-purple-100 text-xs text-gray-700"
            >
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameLog;