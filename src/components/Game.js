import React from "react";

import Table from "./Table";
import Form from "./Form";
import ResetButton from "./ResetButton";
import Score from "./Score";

const TheGame = ({ table, tableSize, score, onClick, onSubmit, onReset }) => {
  return (
    <div className="Game">
      <h1>
        <span className="NeonText_Static">Lights</span>{" "}
        <span className="NeonText">OUT</span>
      </h1>
      <Table table={table} onClick={onClick} />
      <Form onSubmit={onSubmit} />
      <div className="Game_Center_All">
        <Score value={score} />
        <ResetButton tableSize={tableSize} onReset={onReset} />
      </div>
    </div>
  );
};

export default TheGame;
