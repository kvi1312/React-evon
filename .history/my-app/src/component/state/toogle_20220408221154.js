import React, { useState } from "react";
import toogleStyles from "./toogle.module.css";
//_STATELESS FUNCTIONAL COMPONENT_ : là component nhưng không sử dụng state
//_STATEful FUNCTIONAL COMPONENT_ : là component nhưng có sử dụng state

function Toogle() {
  // 1. enabling state : useState(initial value)
  // 2. initialize state : useState(false)
  // 3. reading state :
  // 4. updating state
  const [on, setOn] = useState(false); //initial value is false, so it will be false when the component is rendered
  console.log(on, setOn);
  return (
    <div className="toogle" >
       <div className="spinner"></div>
    </div>
    
  );
}

export default Toogle;
