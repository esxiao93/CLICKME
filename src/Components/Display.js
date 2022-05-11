import React from 'react';
import Button from "./Button";
import ScoreboardForm from './ScoreboardForm';

function Display({seconds, click, onClick, buttonStop, handleReset, onScoreSubmit}) {

  return (
    <div>
        <Button seconds={seconds} click={click} onClick={onClick} handleReset={handleReset} buttonStop={buttonStop} />
        <ScoreboardForm click={click} onScoreSubmit={onScoreSubmit} />
    </div>
  );
};

export default Display;