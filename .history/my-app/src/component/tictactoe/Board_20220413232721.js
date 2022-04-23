import React from "react";
import Cell from "./Cell";
import CalculatedWinner from "../../helpers";
const Board = (props) => {
  // const cells = [null, null, null, "x", "x", "x", null, null, null];
  // console.log(CalculatedWinner(cells));
  // console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)} //on click là prop truyền từ component Cell
          className={item!==null && item=== 'X' ? 'is-x'}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
