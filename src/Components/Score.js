import React from 'react';

function Score({id, name, score}) {
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{score}</td>
    </tr>
  )
}

export default Score;