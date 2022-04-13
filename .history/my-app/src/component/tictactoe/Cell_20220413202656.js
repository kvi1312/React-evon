import React from "react";

//props là 1 object có property là value, onClick
const Cell = (props) => {
  const {value, onClick}= props
  console.log(object);
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
