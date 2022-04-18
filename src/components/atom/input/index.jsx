import React from "react";
import { StyledInput } from "./styled";

export const Input = ({ onChange }) => {
  return <StyledInput placeholder="Nickname" onChange={onChange} />;
};
