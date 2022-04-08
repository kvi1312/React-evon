import React, {useState}  from 'react';

const Counter = () => {
   const [count, setCount] = useState(0);
   const handleIncreament = () => {
      console.log("clicked");
   }
   return (
      <div onClick={handleInc}>
         Increasement
      </div>
   );
};

export default Counter;