import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
