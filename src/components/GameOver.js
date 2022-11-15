import React from "react";

const GameOver = ({ score, onNewGame }) => {
  return (
    <div>
      <h1 className="GameOver">GAME OVER</h1>
      <h3 className="GameOver">Score: {score}</h3>
      <button className="GameOver_NewGame" onClick={onNewGame}>
        NEW GAME
      </button>
    </div>
  );
};

export default GameOver;
