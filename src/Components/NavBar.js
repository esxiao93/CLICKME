import React from 'react';

function NavBar() {
  return (
      <div className="navBar">
        <navbar>
          <navlink className="gameLink">
            GAME
          </navlink>
          <navlink className="scoreboardLink">
            SCOREBOARD
          </navlink>
          <navlink className="aboutUsLink">
            ABOUT US
          </navlink>
        </navbar>
      </div>
  );
};

export default NavBar;