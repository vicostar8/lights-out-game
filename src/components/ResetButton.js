import React from "react";
import { AiOutlineReload } from "react-icons/ai";
// import "../css/General.css";

const ResetButton = ({ tableSize, onReset }) => {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        fontWeight: "bold",
        fontSize: "2rem",
        backgroundColor: "#f4d25e",
      }}
      className="Game_Center_All"
      onClick={() => onReset(tableSize)}
    >
      <AiOutlineReload />
    </button>
  );
};

export default ResetButton;
