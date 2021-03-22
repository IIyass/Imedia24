import React from "react";
import { bool, func, element } from "prop-types";
import { createPortal } from "react-dom";
import { ModalBackground, ModalContainer } from "./style";

const Modal = ({ open, onClose, children }) => {
  const modalContent = (
    <ModalBackground className="modalBackground" onMouseDown={onClose}>
      <ModalContainer
      className="modalContainer"
        onMouseDown={(event) => {
          event.stopPropagation();
          return false;
        }}
      >
        {children}
      </ModalContainer>
    </ModalBackground>
  );

  return open ? createPortal(modalContent, document.body) : null;
};

Modal.propTypes = {
  open: bool,
  onClose: func,
  children: element,
};

export default Modal;
