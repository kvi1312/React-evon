import React from "react";

const Jsx = () => {
   const element = <div id="root">hello world</div>
   const elementR = React.createElement("div", { id: "root" }, "hello world");
   const element2 = (
      <div className="div"></div>
   )
}