import React from "react";

//specialize component
const AccordianContent = ({ show }) => {
  return <div>{show && <div className="content">Accordian content</div>}</div>;
};

export default AccordianContent;
