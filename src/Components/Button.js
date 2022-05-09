import React from 'react';

function Button({click, onClick}) {


//JS CODE FOR CLICK COUNTER

  return (
    <div className="backplateForClickMeButton">
        <button type="button" className="clickMeButton" onClick={onClick}>CLICKER</button>
        <div className="counterText">
            COUNTER <br></br>
            {click}
        </div>
    </div>
  )
}

export default Button;