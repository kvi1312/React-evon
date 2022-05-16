import React, { useEffect, useState } from "react";

const Counter = () => {
  //stale state(trạng thái cũ) : là hiện tượng giá trị không phản ánh đúng thực tế, cách fix là sử dụng call back để khiến giá trị sau được tính bằng giá trị trước
  const [count, setCount] = useState(0);
  // const handleIncreament = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  // return <div onClick={handleIncreament}>Increasement {count}</div>;

  // DEPENDENCIES
  const [info, setInfo] = useState({
    firstName: "le",
    lastName: "khai",
  });
  useEffect(() => {
    console.log(count);
  }, []);

  useEffect(() => {
    console.log("from input");
  }, [info.firstName]);

  return (
    <div className="p-5 flex gap-x-4 items-center">
      <span className="text-2x1 font-bold">{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="inline-block bg-green-400 text-white p-3"
      >
        Increment
      </button>

      <div className="p-5 items-center gap-x-4 flex">
        <input
          type="text"
          name="firstName"
          value={info.firstName}
          onChange={(e) =>
            setInfo({
              ...info,
              firstName: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default Counter;
