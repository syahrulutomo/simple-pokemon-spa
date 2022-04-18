import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { red, grey, blue } = colors;

export const StyledNavbar = styled.nav`
  padding: 10px 16px;
  box-sizing: border-box;
  box-shadow: 0 2px 15px 0 rgba(32, 32, 32, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  background-color: ${red};
`;

export const StyledLogo = styled.img`
  width: 75px;
  height: 32px;
  object-fit: contain;
`;

export const StyledPokeballContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 60%;
  transform: translateY(-50%);

  &:before {
    content: "${(props) => (props.owned ? props.owned : "")}";
    width: 14px;
    height: 14px;
    background-color: ${grey};
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 10px;
    font-weight: 700;
    color: ${blue};
    font-family: "Righteous", cursive;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledPokeball = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
