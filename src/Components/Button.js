import React from 'react';

function Button({seconds, click, onClick, buttonStop, handleReset}) {

  return (
    <div className="backgroundContainer">
      <div className="clickerGameContainer">
        <h1>-TIMER-</h1>
        <div className="timer">{seconds}</div>
          <button type="button" disabled={buttonStop} className="clickerButton" onClick={onClick}>
            <span className="buttonText">CLICKER</span>
          </button>
          <div className="counter">
              <span>COUNTER</span>
              <br></br>
              {click}
          </div>
          {seconds === 0 ? (
          <button className="resetButton" onClick={handleReset} >
              <span className="resetButtonText">PLAY AGAIN</span>
          </button>
          ) : (
          null
          )}
      </div>
    </div>
  );
};

export default Button;