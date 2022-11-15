import React from "react";

const Score = ({ value }) => {
  return (
    <h2 style={{ margin: "0px 20px", fontWeight: "bold", color: "#f4d25e" }}>
      Score: {value}
    </h2>
  );
};

export default Score;
