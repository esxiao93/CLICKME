import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Display from "./Display";
import Scoreboard from "./Scoreboard";
import AboutUs from "./AboutUs";

function App() {

  const [page, setPage] = useState("/")

  return (
    <div>
      <h1>CLICKER GAME</h1>
      <NavBar onChangePage={setPage} />
      <Routes>
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route exact path="/" element={<Display />} />
      </Routes>
    </div>
  )
}

export default App;

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// <Router>
// <NavBar />
// <Switch>
//   <Route path="/" exact component={Display} />
//   <Route path="/scoreboard" component={Scoreboard} />
//   <Route path="/aboutus" component={AboutUs} />
// </Switch>
// </Router>