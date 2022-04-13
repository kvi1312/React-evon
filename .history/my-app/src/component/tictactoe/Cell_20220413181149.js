import React from 'react';

//props là 1 object có property là value, onClick
const Cell = (props) => {
   return (
      <div className='game-cell' oncClick = {props.oncClick}>
         {props.value}
         console.log(props)
      </div>
    
   );
};

export default Cell;