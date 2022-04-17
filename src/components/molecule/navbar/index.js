import React from "react";
import { StyledNavbar, StyledLogo } from "./styled";
import logo from "../../../assets/Pokemon-logo.png";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo src={logo} alt="logo" />
    </StyledNavbar>
  );
};
