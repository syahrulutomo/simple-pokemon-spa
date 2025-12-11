import React from "react";
import { StyledInput } from "./styled";

export const Input = ({ onChange }) => {
  // this component uses StyledComponent
  return <StyledInput placeholder="Nicknames" onChange={onChange} />;
};
