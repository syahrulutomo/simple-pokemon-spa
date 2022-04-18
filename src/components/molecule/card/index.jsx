import React from "react";
import {StyledCard, StyledTitle} from "./styled";
import {capitalize} from "../../../utils/capitalize";
import {useNavigate} from "react-router-dom";

export const Card = ({name, image, children}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${name}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <img src={image} alt={name} />
      <StyledTitle>{name ? capitalize(name) : null}</StyledTitle>
      {children}
    </StyledCard>
  );
};
