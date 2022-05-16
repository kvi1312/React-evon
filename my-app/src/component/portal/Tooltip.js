import React, { useEffect, useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleMove = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };

  return (
    <div className="p-16">
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseMove={handleMove}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  console.log("🚀 ~ TooltipContent ~ coords", coords);
  return ReactDOM.createPortal(
    <p
      className="border rounded-xl bg-black text-white p-3 inline-block absolute -translate-y-full"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}
export default Tooltip;
