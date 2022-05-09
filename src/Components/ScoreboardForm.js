import React from 'react'

function ScoreboardForm({click}) {
  return (
<div className="ui segment blue inverted">
      <form className="ui form">
          <input 
          type="text" 
          name="name" 
          placeholder="NAME" 
          value=""
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