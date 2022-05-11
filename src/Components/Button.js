import React, {useState} from 'react';

function Button({seconds, click, onClick, buttonStop, handleReset}) {




  return (
    <div className="backgroundContainer">
      <div className="clickerGameContainer">
        <div className="timer">{seconds}</div>
          <button type="button" disabled={buttonStop} className="clickerButton" onClick={onClick}>CLICKER</button>
          <div className="counter">
              COUNTER <br></br>
              {click}
          </div>
          {seconds === 0 ? (
          <button className="resetButton" onClick={handleReset} >
              RESET <br></br>
          </button>
          ) : (
          null
          )}
      </div>
    </div>
  );
};

export default Button;