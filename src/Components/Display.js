import React from 'react';
import Button from "./Button";
import ScoreboardForm from './ScoreboardForm';

function Display({seconds, click, onClick, buttonStop, onScoreSubmit}) {

  return (
    <div>
        <Button seconds={seconds} click={click} onClick={onClick} buttonStop={buttonStop}/>
        <ScoreboardForm click={click} onScoreSubmit={onScoreSubmit} />
    </div>
  )
}

export default Display;




// function terminateClick(e) {
//   if (setSeconds === 0){
//     e.stopPropagation()
//   }
// }