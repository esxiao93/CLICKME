import React, {useState} from 'react'

function ScoreboardForm({click, onScoreSubmit}) {

  const [name, setName] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }
  // function handleScore(e) {
  //   setUpdatedClick(e.target.click)
  // }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:8000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        score: click
      }),
    })
    .then(response => response.json())
    .then((newScore => onScoreSubmit(newScore)));
    }

  return (
<div className="ui segment blue inverted">
      <form className="ui form" onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="name" 
          placeholder="NAME" 
          value={name}
          onChange={handleName}
          />
          <input 
          type="number" 
          name="score"
          value={click}
          readOnly={true}

          />
        <button className="ui button" type="submit">
          SUBMIT SCORE
        </button>
      </form>
    </div>
  )
}

export default ScoreboardForm