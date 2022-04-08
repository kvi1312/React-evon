import React, { useState } from "react";

const Counter = () => {
   //stale state(trạng thái cũ) : là hiện tượng giá trị không phản ánh đúng thực tế 
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
