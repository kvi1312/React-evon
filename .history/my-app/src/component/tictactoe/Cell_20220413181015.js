import React from 'react';

//props 
const Cell = (props) => {
   return (
      <div className='game-cell' oncClick = {props.oncClick}>
         {props.value}
      </div>
   );
};

export default Cell;