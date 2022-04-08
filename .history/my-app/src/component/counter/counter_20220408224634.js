import React, { useState } from "react";

const Counter = () => {
   //stale state(trạng thái cũ) : là hiện tượng giá trị không phản ánh đúng thực tế, cách fix là sử dụng call back để khiến giá trị sau được tính bằng giá trị trước 
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handleIncreament}>Increasement {count}</div>;
};

export default Counter;
