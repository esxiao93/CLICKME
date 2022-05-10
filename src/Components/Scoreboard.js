import React from "react";
import Score from "./Score";

function Scoreboard({scores}) {

  const scoreItems = scores.map((score) => {
    return <Score 
    key={score.id}
    id={score.id}
    name={score.name}
    score={score.score}
    />
  })

  return (
      <table className="centerTheFuckingScores">
        <tbody>
          <tr>
            <th className="header">
              <h3 className="ui center aligned header">Rank</h3>
            </th>
            <th className="header">
              <h3 className="ui center aligned header">Name</h3>
            </th>
            <th className="header">
              <h3 className="ui center aligned header">Score</h3>
            </th>
          </tr>
          {scoreItems}
        </tbody>
      </table>
  )
}

export default Scoreboard;