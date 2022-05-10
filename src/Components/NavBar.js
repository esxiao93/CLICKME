import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {

  return (
    <nav ClassName="navBar">
      <NavLink className="homeLink" to="/">HOME</NavLink>
      <NavLink className="scoreboardLink" to="/scoreboard">SCOREBOARD</NavLink>
      <NavLink className="aboutUsLink" to="/aboutus">ABOUTUS</NavLink>
    </nav>
  );
}
export default NavBar;