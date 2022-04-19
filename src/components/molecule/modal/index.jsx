import React from "react";
import { StyledModal } from "./styled";
import { Overlay } from "../../atom/overlay";

export const Modal = ({ children }) => {
  return (
    <>
      <Overlay />
      <StyledModal data-testid="modal">{children}</StyledModal>
    </>
  );
};
