import React from "react";

//props là 1 object có property là value, onClick
const Cell = ({ value, onClick, this.props. }) => {
  // const { value, onClick } = props;
  // console.log(value, onClick);
  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
