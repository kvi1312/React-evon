import React, {useState}  from 'react';

const Counter = () => {
   const [count, setCount] = useState(0);
   const handleIncreament = () => {
      console.log("clicked");
      setTimeout(function delay(){}))
   }
   return (
      <div onClick={handleIncreament}>
         Increasement
      </div>
   );
};

export default Counter;