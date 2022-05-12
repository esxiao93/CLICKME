import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {

  return (
    <div className="navbarContainer">
      <nav>
        <NavLink activeClassName="homeLink" to="/">HOME</NavLink>
        <NavLink activeClassName="scoreboardLink" to="/scoreboard">SCOREBOARD</NavLink>
        <NavLink activeClassName="aboutUsLink" to="/aboutus">ABOUT</NavLink>
      </nav>
    </div>
  );
};
export default NavBar;