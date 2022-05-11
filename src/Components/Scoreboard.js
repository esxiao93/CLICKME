import React from "react";
import Score from "./Score";

function Scoreboard({scores}) {

  let r = 0;
  const scoreItems = scores.map((score) => {
    r++;
    return <Score 
    key={score.id}
    id={score.id}
    rank={r}
    name={score.name}
    score={score.score}
    />
  });

  // const handleClick = (e) => {
  //   console.log(e.target)
  // }

  return (
    // <div className="board">
    //   <h1 className="leaderboard">LEADERBOARD</h1>

    //   <div className="duration">
    //     <button onClick={handleClick} data-id="7">7 Days</button>
    //     <button onClick={handleClick} data-id="30">30 Days</button>
    //     <button onClick={handleClick} data-id="0">All-Time</button>
    //   </div>
      <table className="centerScores">
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
    // </div>
  );
};

export default Scoreboard;