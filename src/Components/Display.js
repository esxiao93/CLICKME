import React, {useState, useEffect} from 'react';
import Button from "./Button";
import Timer from "./Timer";
import ScoreboardForm from './ScoreboardForm';

function Display() {

  const [click, setClick] = useState(0);
  const [seconds, setSeconds] = useState(15);

  //Timer
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds-1), 1000)
    } else {
      setSeconds("TIME")
    }
  })


  //JS CODE FOR BUTTON FUNCTION
  function handleClick() {
    setClick((click) => (click + 1))
  }

  return (
    <div>
        <Timer seconds={seconds}/>
        <Button click={click} onClick={handleClick}/>
        <ScoreboardForm click={click} />
    </div>
  )
}

export default Display;