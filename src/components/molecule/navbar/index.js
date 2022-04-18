import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledNavbar,
  StyledLogo,
  StyledPokeballContainer,
  StyledPokeball,
} from "./styled";
import logo from "../../../assets/Pokemon-logo.png";
import Pokeball from "../../../assets/pokeball.png";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickOwned = () => {
    navigate("/owned");
  };

  return (
    <StyledNavbar>
      <StyledLogo onClick={handleClickLogo} src={logo} alt="logo" />
      <StyledPokeballContainer onClick={handleClickOwned} owned="6">
        <StyledPokeball src={Pokeball} />
      </StyledPokeballContainer>
    </StyledNavbar>
  );
};
