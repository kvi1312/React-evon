import React, { useState } from "react";

const Counter = () => {
   //st
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    console.log("clicked");
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleIncreament}>Increasement {count}</div>;
};

export default Counter;
