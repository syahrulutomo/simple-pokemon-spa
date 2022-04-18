import React from "react";
import { StyledCard, StyledTitle } from "./styled";
import { capitalize } from "../../../utils/capitalize";
import { useNavigate } from "react-router-dom";

export const Card = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <img src={image} alt="ivysaur" />
      <StyledTitle>{name ? capitalize(name) : null}</StyledTitle>
    </StyledCard>
  );
};
