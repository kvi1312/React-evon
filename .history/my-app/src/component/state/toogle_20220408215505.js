import React, { useState } from "react";

//_STATELESS FUNCTIONAL COMPONENT_ : là component nhưng không sử dụng state
//_STATEful FUNCTIONAL COMPONENT_ : là component nhưng có sử dụng state

function Toogle() {
  // 1. enabling state : useState(initial value)
  // 2. initialize state : useState(false)
  // 3. reading state : 
  // 4. updating state
  const array = useState(false); 
  console.log(array); //[false, function]
  console.log(array[1]);
  const 
  return <div className="toogle"></div>;
}
// function Toogle2(){
//    return <div className="toogle"></div>
// }

export default Toogle;