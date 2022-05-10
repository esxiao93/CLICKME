import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Scoreboard from "./Scoreboard";
import AboutUs from "./AboutUs";

function App() {

  const [page, setPage] = useState("/")
  const [click, setClick] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [scores, setScores] = useState([]);
  const [buttonStop, setButtonStop] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //GET SCORES TO RENDER ON SCOREBOARD
  useEffect(() => {
    fetch("http://localhost:8000/scores")
    .then(response => response.json())
    .then(sortedScores => setScores(sortedScores))
  },[])

  // const sortedScores = scores.sort((score1, score2) => {
  //   if (score1 > score2) {
  //     return score1.score.localeCompare(score2.score)
  //   }
  // })

  // Timer
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
      setButtonStop(false)
    } else {
      setSeconds(0)
      // setButtonStart(true)
      setButtonStop(true)
    }
  },[isClicked])


  //GAME CLICK BUTTON FUNCTION
  function handleClick() {
    setClick((click) => (click + 1))
    setIsClicked(true)
  }



  //SUBMIT SCORE FUNCTION
  function handleScoreSubmission(newScore) {
    const updatedArray = [...scores, newScore]
    setScores(updatedArray)
  }

  return (
    <div>
      <h1>CLICKER GAME</h1>
      <NavBar onChangePage={setPage} />
      <Routes>
          <Route 
            path="/scoreboard" 
            element={
              <Scoreboard
                scores={scores}
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