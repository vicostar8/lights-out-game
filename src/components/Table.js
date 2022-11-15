import React from "react";
import TableData from "./TableData";
import "../css/General.css";

const Table = ({ table, onClick }) => {
  return (
    <table className="Game_Center_All">
      <tbody className="BoardGame">
        {table.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <TableData
                key={`${i}-${j}`}
                row={i}
                column={j}
                boxData={col}
                onClick={onClick}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
