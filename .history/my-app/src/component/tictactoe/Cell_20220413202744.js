import React from "react";

//props là 1 object có property là value, onClick
const Cell = ({value,}) => {
  // const { value, onClick } = props;
  // console.log(value, onClick);
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
