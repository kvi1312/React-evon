import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //board là tên biến giá trị mặc định, setBoard là dùng để tính toán, usestate truyền vào cho 9 cái giá trị là null để sau này dùng setBoard mà tính toán
  return (
    <div>
    {/* thằng board là props truyền vào cho Board */}
      <Board cells={board}></Board> 
    </div>
  );
};

export default Game;
