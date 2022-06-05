import React from "react";
import ModalBase from "./ModalBase";
const ModalAdvance = ({ children, header, ...props }) => {
  return <ModalBase {...props}>{children}</ModalBase>;
};

export default ModalAdvance;
