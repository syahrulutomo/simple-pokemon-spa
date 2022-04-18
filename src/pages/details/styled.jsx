import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

const { black, green } = colors;

export const StyledTitle = styled.p`
  font-family: "Righteous", cursive;
  font-size: 18px;
  margin-top: 0;
  color: ${black};
  text-align: center;
`;

export const StyledTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledType = styled.span`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : black)};
  font-family: "Righteous", cursive;
  &:nth-of-type(2n)&::before {
    content: " · ";
    color: ${black};
    display: inline-block;
    margin: 0 8px;
  }
`;

export const StyledImage = styled.img`
  width: 150px;
`;

export const StyledDetailContainer = styled.div`
  maxwidth: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledMovesContainer = styled.div`
  margin-top: 24px;
`;

export const StyledMove = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: ${green};
  line-height: 32px;
  margin: 0;
`;

export const StyledText = styled.p`
  font-family: "Poppins", sans-serif;
  margin-top: 0;
  color: ${black};
  line-height: 24px;
`;

export const StyledSpan = styled.span`
  color: ${green};
`;
