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
  background-color: ${red};
  z-index: 999;
`;

export const StyledNavbarContainer = styled.div`
  max-width: 900px;
  min-width: 250px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const StyledLogo = styled.img`
  width: 75px;
  height: 32px;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPokeballContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 60%;
  transform: translateY(-50%);

  &:before {
    content: "${(props) => (props.owned > 0 ? props.owned : "")}";
    width: ${(props) => (props.owned > 0 ? "14px" : "0px")};
    height: ${(props) => (props.owned > 0 ? "14px" : "0px")};
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

  &:hover {
    cursor: pointer;
  }
`;

export const StyledPokeball = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
