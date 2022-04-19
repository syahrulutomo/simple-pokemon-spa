import React from "react";
import { StyledToast } from "./styled";

export const Toast = ({ theme, message }) => {
  return (
    <StyledToast theme={theme} data-testid="toast">
      <span>{message}</span>
    </StyledToast>
  );
};
