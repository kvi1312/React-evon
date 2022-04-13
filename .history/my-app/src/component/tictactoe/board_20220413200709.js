import React from "react";
import Cell from "./Cell";
import CalculatedWinner from "../../helpers";
const Board = (this.props.) => {
  const cells = [null, null, null, "x", "x", "x", null, null, null];
  console.log(CalculatedWinner(cells));
  return (
    <div className="game-board">
        {props.cells.map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
