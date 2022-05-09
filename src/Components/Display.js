import React, {useState, useEffect} from 'react';
import Button from "./Button";
import Timer from "./Timer";
import ScoreboardForm from './ScoreboardForm';

function Display() {

  const [click, setClick] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [scores, setScores] = useState([])

  //Timer
  // if timer is equal to 000000, then clickbutton => .propagation()
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setSeconds(0)
    }
  })


  //JS CODE FOR BUTTON FUNCTION
  function handleClick(e) {
    setClick((click) => (click + 1))
  }

  //SUBMIT SCORE FUNCTION
  function handleScoreSubmission(newScore) {
    const updatedArray = [...scores, newScore]
    setScores(updatedArray)
  }

  return (
    <div>
        <Timer seconds={seconds}/>
        <Button click={click} onClick={handleClick}/>
        <ScoreboardForm click={click} onScoreSubmit={handleScoreSubmission} />
    </div>
  )
}

export default Display;




// function terminateClick(e) {
//   if (setSeconds === 0){
//     e.stopPropagation()
//   }
// }