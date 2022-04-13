import React from "react";
import Cell from "./Cell";
import CalculatedWinner from "../../helpers";
const Board = () => {
  const cells = [null, null, null, "x", "x", "x", null, null, null];
  console.log(CalculatedWinner(c));
  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
