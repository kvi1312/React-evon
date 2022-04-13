import React from 'react';

//props là 1 object có property là value,
const Cell = (props) => {
   return (
      <div className='game-cell' oncClick = {props.oncClick}>
         {props.value}
      </div>
   );
};

export default Cell;