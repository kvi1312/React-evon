import React from "react";

const Jsx = () => {
   const element = <div id="root">hello world</div>
   const elementR = React.createElement("div", { id: "root" }, "hello world");
   const element2 = (
      <div>
         <span>hello</span><span>world</span>
      </div>
   );
   const element2R = React.createElement("div",{
      children:[
         React.createElement("span",null,"hello"),
         "",
         React.createElement("span", null , "world")
      ]
   })
   return <div className="heading" id="heading"> this is heading</div>
}

export default Jsx