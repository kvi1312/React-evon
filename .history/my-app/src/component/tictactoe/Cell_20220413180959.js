import React from 'react';

const Cell = (props) => {
   return (
      <div className='game-cell' oncClick = {props.oncClick}>
         {props.value}
      </div>
   );
};

export default Cell;