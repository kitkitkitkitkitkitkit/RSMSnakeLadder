import React, { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import ControlPanel from './components/ControlPanel.jsx';
import GameLog from './components/GameLog.jsx';
import WinnerModal from './components/WinnerModal.jsx';
import { useGameLogic } from './hooks/useGameLogic.js';

const SnakeLadderGame = () => {
  const {
    positions,
    currentTeam,
    diceValue,
    winner,
    gameLog,
    animatingTeam,
    rollDice,
    manualMove,
    resetGame,
    getTeamsAtPosition
  } = useGameLogic();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-2 drop-shadow-lg">
            🎲 Snake and Ladder 🎲
          </h1>
          <p className="text-center text-purple-200 mb-8 text-lg">New Year Party Game</p>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <GameBoard 
              positions={positions}
              animatingTeam={animatingTeam}
              getTeamsAtPosition={getTeamsAtPosition}
            />
            <ControlPanel 
              currentTeam={currentTeam}
              winner={winner}
              diceValue={diceValue}
              positions={positions}
              animatingTeam={animatingTeam}
              rollDice={rollDice}
              manualMove={manualMove}
              resetGame={resetGame}
            />
          </div>

          <GameLog gameLog={gameLog} />

          {winner && (
            <WinnerModal winner={winner} resetGame={resetGame} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeLadderGame;