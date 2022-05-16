import React, { useEffect, useState } from "react";

const Timer = () => {
  const [mess, setMess] = useState("khaile");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(mess);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [mess]);

  return (
    <div>
      <input
        type="text"
        value={mess}
        onChange={(e) => setMess(e.target.value)}
      />
    </div>
  );
};

export default Timer;
