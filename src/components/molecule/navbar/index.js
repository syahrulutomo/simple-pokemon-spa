import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  StyledNavbar,
  StyledLogo,
  StyledPokeballContainer,
  StyledPokeball,
  StyledNavbarContainer
} from "./styled";
import logo from "../../../assets/Pokemon-logo.png";
import Pokeball from "../../../assets/pokeball.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const [localData] = useState(localStorage.getItem("pokemon"));
  const [totalOwned, setTotalOwned] = useState(0);

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickOwned = () => {
    navigate("/mypokemons");
  };

  useEffect(() => {
    if (localData) {
      setTotalOwned(JSON.parse(localStorage.getItem("pokemon")).list.length);
    }
  }, [localData]);

  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        <StyledLogo onClick={handleClickLogo} src={logo} alt="logo" />
        <StyledPokeballContainer onClick={handleClickOwned} owned={totalOwned}>
          <StyledPokeball src={Pokeball} />
        </StyledPokeballContainer>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};
