import React, {useState} from 'react'

function ScoreboardForm({click, onScoreSubmit}) {

  const [name, setName] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
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
          type="text" 
          name="score" 
          placeholder="SCORE" 
          value={click}
          />
        <button className="ui button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ScoreboardForm