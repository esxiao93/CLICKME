import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Scoreboard from "./Scoreboard";
import AboutUs from "./AboutUs";

function App() {

  const [page, setPage] = useState("/")
  const [click, setClick] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [scores, setScores] = useState([]);
  const [buttonStop, setButtonStop] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //GET SCORES TO RENDER ON SCOREBOARD
  useEffect(() => {
    fetch("http://localhost:8000/scores")
    .then(response => response.json())
    .then(scores => setScores(scores))
  },[])

  // const sortedScores = scores.sort((score1, score2) => {
  //   if (score1 > score2) {
  //     return score1.score.localeCompare(score2.score)
  //   }
  // })

  // Timer
  useEffect(() => {
    console.log(isClicked)
    if (seconds > 0 && click > 0) {
      setSeconds(seconds)
      setTimeout(() => setSeconds(seconds - 1), 1000)
      setButtonStop(false)
    } else if (seconds === 0 && click > 0){
      setSeconds(0)
      setButtonStop(true)
    }
  })


  //GAME CLICK BUTTON FUNCTION
  function handleClick() {
    // setIsClicked((isClicked) => !isClicked)
    setClick((click) => (click + 1))
  }


  //SUBMIT SCORE FUNCTION
  function handleScoreSubmission(newScore) {
    const updatedArray = [...scores, newScore]
    setScores(updatedArray)
  }

  const filteredScores = scores.sort((a,b) => {
    if(a.score === b.score){
      return b.score - a.score;
    } else {
      return b.score - a.score
    }
  })


  // for(i=0;i<10;i++){
  //   if(i>=10){break}
  // }

  let i = 0
  let topTen = filteredScores.map((score)=>{
    if(i < 10) {
      i++
      return score;
      ;
    } else if (i>=10) {break}
  })

  return (
    <div>
      <h1>CLICKER GAME</h1>
      <NavBar onChangePage={setPage} />
      <Routes>
          <Route 
            path="/scoreboard" 
            element={
              <Scoreboard
                scores={topTen}
              />
            } 
          />
          <Route 
            path="/aboutus" 
            element={<AboutUs />} 
          />
          <Route 
            exact path="/" 
            element={
              <Display 
                seconds={seconds} 
                click={click} 
                onClick={handleClick}
                buttonStop={buttonStop} 
                onScoreSubmit={handleScoreSubmission}
              />
            } 
          />
      </Routes>
    </div>
  )
}

export default App;