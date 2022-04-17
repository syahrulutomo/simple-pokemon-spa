import React from "react";
import {
  StyledCard,
  StyledTitle,
  StyledTypeContainer,
  StyledType,
} from "./styled";
import Ivysaur from "../../../assets/ivysaur.png";

export const Card = () => {
  function setTypeColor(type) {
    switch (type) {
      case "grass":
        return "green";
      case "poison":
        return "purple";
      default:
        return "black";
    }
  }

  return (
    <StyledCard>
      <img src={Ivysaur} alt="ivysaur" />
      <StyledTitle>Bulbasaur</StyledTitle>
      <StyledTypeContainer>
        <StyledType color={setTypeColor("grass")}>Grass</StyledType>
        <StyledType color={setTypeColor("poison")}>Poison</StyledType>
      </StyledTypeContainer>
    </StyledCard>
  );
};
