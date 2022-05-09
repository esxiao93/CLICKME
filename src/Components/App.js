import React from "react";
import NavBar from "./NavBar"
import Display from "./Display";
import Scoreboard from "./Scoreboard";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <h1>CLICKER GAME</h1>
      <NavBar />
      <Display />
      <Scoreboard />
      <AboutUs />
    </div>
  )
}

export default App;