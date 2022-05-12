import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Scoreboard from "./Scoreboard";
import AboutUs from "./AboutUs";

function App() {

  let duration = 10;
//State Variables
  const [page, setPage] = useState("/"); //Routing
  const [click, setClick] = useState(0); //Main Click For Game Button
  const [buttonStop, setButtonStop] = useState(false); //Disables Game Button
  const [seconds, setSeconds] = useState(10); //Timer
  const [scores, setScores] = useState([]); //Scores

//GAME CLICK BUTTON FUNCTION
  function handleClick() {
    setClick((click) => (click + 1))
  };

//TIMER TO BEGIN WHEN GAME BUTTON IS CLICKED
  useEffect(() => {
    console.log(seconds)
    if (seconds > 0 && click > 0) {
      setSeconds(seconds)
      setTimeout(() => setSeconds(seconds - 1), 1000)
      setButtonStop(false)
    } else if (seconds === 0 && click > 0){
      setSeconds(0)
      setButtonStop(true)
    }
  });  

//RESET BUTTON TO CLEAR OUT STORED SCORE AND RESET TIMER
  function handleReset() {
    if (seconds === 0) {
      setClick(0);
      setButtonStop(false);
      setSeconds(duration);
    }
  }

//SUBMIT SCORE FUNCTION
  function handleScoreSubmission(newScore) {
    const updatedArray = [...scores, newScore]
    setScores(updatedArray)
  };
  
//GET SCORES TO RENDER ON SCOREBOARD
  useEffect(() => {
    fetch("http://localhost:8000/scores")
    .then(response => response.json())
    .then(scores => setScores(scores));
  },[]);

//FILTER FOR SCORES FROM HIGHEST TO LOWEST
  const filteredScores = scores.sort((a,b) => {
    if(a.score === b.score){
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
//RETURN ONLY THE FIRST TEN SCORES (TOP TEN)
  const filteredTopTen = filteredScores.slice(0,10);

  return (
    <div>
      <div className="titleContainer">
      <h1 >CLICKER GAME</h1>
      </div>
      <div className="mainPage">
        <NavBar onChangePage={setPage} />
        <Routes>
            <Route 
              path="/scoreboard" 
              element={
                <Scoreboard
                  scores={filteredTopTen}
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
                  handleReset={handleReset}
                />
              } 
            />
        </Routes>
      </div>
    </div>    
  );
};

export default App;