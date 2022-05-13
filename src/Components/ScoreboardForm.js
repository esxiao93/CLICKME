import React, {useState} from 'react';


function ScoreboardForm({click, onScoreSubmit}) {

//STATE VARIABLE FOR NAME
  const [name, setName] = useState("");

//FUNCTION TO CONTAIN THE NAME INPUT
  function handleName(e) {
    setName(e.target.value)
  };

//FUNCTION TO POST NAME INPUT AND SCORE HIDDEN TO SCOREBOARD
  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:8000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        score: click,
      }),
    })
    .then(response => response.json())
    .then((newScore => onScoreSubmit(newScore)))
    .then(setName(""));
    };

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
          <input 
          className="inputName"
          type="text" 
          name="name" 
          placeholder="ENTER NAME" 
          value={name}
          onChange={handleName}
          />
          <input 
          type="hidden" 
          name="score"
          value={click}
          readOnly={true}

          />
        <button className="uiButton" type="submit" >
          <span className="uiButtonText">SUBMIT SCORE</span>
        </button>
      </form>
    </div>
  );
};

export default ScoreboardForm;