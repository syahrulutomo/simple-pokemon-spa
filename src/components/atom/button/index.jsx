import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};
