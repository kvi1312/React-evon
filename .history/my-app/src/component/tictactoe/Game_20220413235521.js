import React, { useState } from "react";
import CalculatedWinner from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

// const Game = () => {
//   const [board, setBoard] = useState(Array(9).fill(null)); //board là tên biến giá trị mặc định, setBoard là dùng để tính toán, usestate truyền vào cho 9 cái giá trị là null để sau này dùng setBoard mà tính toán
//   const [xIsNext, setXIsNext] = useState(true);
//   const winner = CalculatedWinner(board);

//   const handleClick = (index) => {
//     const boardCopy = [...board];
//     if (winner || boardCopy[index]) return;
//     boardCopy[index] = xIsNext ? "X" : "O";
//     setBoard(boardCopy);
//     setXIsNext((xIsNext) => !xIsNext);
//   };

//   const handleResetGame = () => {
//     setBoard(Array(9).fill(null));
//     setXIsNext(true);
//   };
//   return (
//     <div>
//       {/* thằng board là props truyền vào cho Board */}
//       <Board cells={board} onClick={handleClick}></Board>
//       {winner && <div className="game-winner">Winner is {winner}</div>}
//       <button className="button" onClick={handleResetGame}>
//         Reset game
//       </button>
//     </div>
//   );
// };
//clean code
const Game = ()=>{
  const [state, setState]=useState({
    board: Array(9).fill(null),
    xIsNext : true,
  });
  const handleOnclick = ()
  return(
    <div className="">
      <Board cells={state.board} onClick={handleOnClick}>

      </Board>
    </div>
  )
}
export default Game;
