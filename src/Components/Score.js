import React from 'react';

function Score({id, rank, name, score}) {
  return (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{score}</td>
    </tr>
  );
};

export default Score;