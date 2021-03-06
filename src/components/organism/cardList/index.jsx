import React from "react";
import { StyledList } from "./styled";

export const List = ({ children }) => {
  return <StyledList data-testid="list">{children}</StyledList>;
};
