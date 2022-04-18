import React from "react";
import { StyledLoader } from "./styled";
import { Overlay } from "../overlay";

export const Loader = () => {
  return (
    <>
      <Overlay />
      <StyledLoader />
    </>
  );
};
