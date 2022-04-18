import React from "react";
import { StyledToast } from "./styled";

export const Toast = ({ message }) => {
  return (
    <StyledToast>
      <span>{message}</span>
    </StyledToast>
  );
};
