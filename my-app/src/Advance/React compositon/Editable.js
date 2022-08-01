import React from "react";
import useToggle from "../../hooks/useToggle";

const Editable = () => {
  const { value: show, handleToggle: handleToggleShow } = useToggle();
  return (
    <div>
      <div className="header cursor-pointer" onClick={handleToggleShow}>
        Edit show
      </div>
      {show && (
        <input type="text" className="p-5 rounded-lg border border-gray-500" />
      )}
    </div>
  );
};

export default Editable;
