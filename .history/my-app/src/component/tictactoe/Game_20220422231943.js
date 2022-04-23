import React, { useReducer, useState } from "react";
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
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
}
const action = {
  type: 'click',
  payload: 
}

//clean code
const Game = () => {
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "demo",
  // });

  const [state, dispatch] = useReducer(reducer, initialState);
  const winner = CalculatedWinner(state.board);

  const handleOnclick = (index) => {
    const boardCopy = [...state.board]; //clone board để giá trị mảng gốc k thay đổi
    if (winner || boardCopy[index]) return; //nếu có người thắng hoặc ô đã đc đánh rồi thì return
    boardCopy[index] = state.xIsNext ? "X" : "O"; //nếu muốn đánh tiếp theo là x còn k phải là 0
    console.log(state.xIsNext);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };

  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div className="">
      <Board cells={state.board} onClick={handleOnclick}></Board>
      <button className="button" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};
export default Game;
