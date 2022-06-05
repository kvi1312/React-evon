import React from "react";
import PortalAdvance from "./PortalAdvance";
import { CSSTransition } from "react-transition-group";
const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => (
          <PortalAdvance
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
          >
            {children}
          </PortalAdvance>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
