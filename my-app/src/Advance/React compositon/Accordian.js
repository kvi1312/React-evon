import React from "react";

import useToggle from "../../hooks/useToggle";
import AccordianContent from "./AccordianContent";
import AccordianHeader from "./AccordianHeader";

const Accordian = ({ header }) => {
  const { value: show, handleToggle: handleToggleShow } = useToggle();

  return (
    <div>
      <AccordianHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordianHeader>
      <AccordianContent show={show}></AccordianContent>
    </div>
  );
};

export default Accordian;
