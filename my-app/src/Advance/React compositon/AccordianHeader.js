import React from "react";
//specialize component

const AccordianHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div>
      <div className="header cursor-pointer" onClick={handleToggleShow}>
        {children}
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordianHeader;
