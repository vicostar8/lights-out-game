import React from "react";

const TableData = ({ row, column, boxData, onClick }) => {
  return (
    <td
      className={`Box ${boxData.isActive ? "Col-Active" : "Col"}`}
      onClick={() => onClick(row, column, boxData.id)}
    ></td>
  );
};

export default TableData;
