import React from 'react';

const LadderVisualization = () => {
  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="ladderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.8 }} />
        </linearGradient>
      </defs>
      <g>
        <line 
          x1="31%" y1="75%" 
          x2="65%" y2="75%" 
          stroke="url(#ladderGradient)" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        <line 
          x1="31%" y1="65%" 
          x2="65%" y2="65%" 
          stroke="url(#ladderGradient)" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        <line x1="35%" y1="65%" x2="35%" y2="75%" stroke="url(#ladderGradient)" strokeWidth="6" />
        <line x1="42%" y1="65%" x2="42%" y2="75%" stroke="url(#ladderGradient)" strokeWidth="6" />
        <line x1="48%" y1="65%" x2="48%" y2="75%" stroke="url(#ladderGradient)" strokeWidth="6" />
        <line x1="54%" y1="65%" x2="54%" y2="75%" stroke="url(#ladderGradient)" strokeWidth="6" />
        <line x1="61%" y1="65%" x2="61%" y2="75%" stroke="url(#ladderGradient)" strokeWidth="6" />
      </g>
    </svg>
  );
};

export default LadderVisualization;