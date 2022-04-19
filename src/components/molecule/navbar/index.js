import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  StyledNavbar,
  StyledLogo,
  StyledPokeballContainer,
  StyledPokeball,
  StyledNavbarContainer,
} from "./styled";
// import logo from "./assets/Pokemon-logo.webp";
// import Pokeball from "./assets/pokeball.webp";

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
    <StyledNavbar data-testid="navbar">
      <StyledNavbarContainer>
        <StyledLogo onClick={handleClickLogo} src={`${process.env.PUBLIC_URL}/assets/Pokemon-logo.webp`} alt="logo" />
        <StyledPokeballContainer onClick={handleClickOwned} owned={totalOwned}>
          <StyledPokeball src={`${process.env.PUBLIC_URL}/assets/pokeball.webp`} alt="pokeball icon" />
        </StyledPokeballContainer>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};
