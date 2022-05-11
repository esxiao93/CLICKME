import React, {useState} from 'react';

function Button({seconds, click, onClick, buttonStop}) {

  return (
    <div className="backplateForClickMeButton">
      <div className="timerContainer">{seconds}</div>
      {/* {"" ? ( */}
        <button type="button" disabled={buttonStop} className="clickMeButton" onClick={onClick}>CLICKER</button>
      {/* ) : (
        <button type="button" onClick={onClick}>RESET</button>
      )}   */}
        <div className="counterText">
            COUNTER <br></br>
            {click}
        </div>
    </div>
  )
}

export default Button;