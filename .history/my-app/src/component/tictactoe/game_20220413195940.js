import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
const Game = () => {
  const [board, setBoard] = useState(Array())
  return (
    <div>
      <Board></Board>
    </div>
  );
};

export default Game;
