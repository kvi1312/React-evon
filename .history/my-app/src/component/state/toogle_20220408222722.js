import React, { useState } from "react";
import "./toogleStyle.css";
//_STATELESS FUNCTIONAL COMPONENT_ : là component nhưng không sử dụng state
//_STATEful FUNCTIONAL COMPONENT_ : là component nhưng có sử dụng state

function Toogle() {
  // 1. enabling state : useState(initial value)
  // 2. initialize state : useState(false)
  // 3. reading state :
  // 4. updating state
  const [on, setOn] = useState(false); //initial value is false, so it will be false when the component is rendered
  console.log(on, setOn);
  const handleToogle = () => {
    setOn((on) => {
      return !on; //trả về giá trị ngược với giá trị trước đó
  };
  return (
    <div className="">
      <div className={`toogle ${on ? "active" : ""}`} onClick={handleToogle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toogle-control">
        <div className="toogle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toogle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toogle;
