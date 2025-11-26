import { useState } from 'react';
import { LADDERS, TEAMS, BOARD_SIZE } from '../constants.js';

export const useGameLogic = () => {
  const [positions, setPositions] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });
  const [currentTeam, setCurrentTeam] = useState('red');
  const [diceValue, setDiceValue] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameLog, setGameLog] = useState([]);
  const [animatingTeam, setAnimatingTeam] = useState(null);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const animateMovement = async (team, startPos, endPos) => {
    setAnimatingTeam(team);
    
    for (let i = startPos + 1; i <= endPos; i++) {
      setPositions(prev => ({
        ...prev,
        [team]: i
      }));
      await sleep(400);
    }
    
    setAnimatingTeam(null);
  };

  const moveTeam = async (team, newPosition) => {
    setAnimatingTeam(team);
    await sleep(400);
    setPositions(prev => ({
      ...prev,
      [team]: newPosition
    }));
    setAnimatingTeam(null);
  };

  const rollDice = async () => {
    if (winner) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(roll);

    const startPos = positions[currentTeam];
    const newPosition = startPos + roll;
    let finalPosition = newPosition;

    if (newPosition > BOARD_SIZE) {
      finalPosition = startPos;
      setGameLog(prev => [`${currentTeam.toUpperCase()} rolled ${roll} but can't move past finish!`, ...prev.slice(0, 4)]);
    } else {
      await animateMovement(currentTeam, startPos, newPosition);
      
      if (LADDERS[newPosition]) {
        finalPosition = LADDERS[newPosition];
        setGameLog(prev => [`${currentTeam.toUpperCase()} rolled ${roll}, landed on ${newPosition}, climbed ladder to ${finalPosition}! 🪜`, ...prev.slice(0, 4)]);
        await sleep(600);
        await animateMovement(currentTeam, newPosition, finalPosition);
      } else {
        setGameLog(prev => [`${currentTeam.toUpperCase()} rolled ${roll} and moved to ${finalPosition}`, ...prev.slice(0, 4)]);
      }

      if (finalPosition === BOARD_SIZE) {
        setWinner(currentTeam);
        setGameLog(prev => [`🎉 ${currentTeam.toUpperCase()} WINS! 🎉`, ...prev]);
      }
    }

    const nextTeamIndex = (TEAMS.indexOf(currentTeam) + 1) % TEAMS.length;
    setCurrentTeam(TEAMS[nextTeamIndex]);
  };

  const manualMove = (team, direction) => {
    const currentPos = positions[team];
    const newPos = direction === 'forward' ? currentPos + 1 : currentPos - 1;
    
    if (newPos < 0 || newPos > BOARD_SIZE) return;
    
    moveTeam(team, newPos);
    setGameLog(prev => [`${team.toUpperCase()} manually moved to ${newPos}`, ...prev.slice(0, 4)]);
    
    if (newPos === BOARD_SIZE) {
      setWinner(team);
      setGameLog(prev => [`🎉 ${team.toUpperCase()} WINS! 🎉`, ...prev]);
    }
  };

  const resetGame = () => {
    setPositions({ red: 0, blue: 0, green: 0, yellow: 0 });
    setCurrentTeam('red');
    setDiceValue(null);
    setWinner(null);
    setGameLog([]);
    setAnimatingTeam(null);
  };

  const getTeamsAtPosition = (pos) => {
    return TEAMS.filter(team => positions[team] === pos);
  };

  return {
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
  };
};