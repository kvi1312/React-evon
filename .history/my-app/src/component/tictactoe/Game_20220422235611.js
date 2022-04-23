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

//=============================== TIC TAC TOE WITH USE REDUCER ==========================//
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const action = {
  type: "CLICK",
  payload: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const { board, xIsNext } = state;
      const nextState = JSON.parse(JSON.stringify(state)); // next state này clone ra để set giá trị, ko gây ảnh hưởng giá trị ban đầu
      const { index, winner } = action.payload;
      if (winner || board[index]) return;

      console.log(nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !nextState;
      
      return nextState;
    default:
      throw new Error("invalid value");
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const winner = CalculatedWinner(state.board);

  const handleOnclick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleResetGame = () => {};
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
