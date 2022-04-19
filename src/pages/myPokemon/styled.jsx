import styled from "@emotion/styled";
import { colors } from "../../constants";

const {green} = colors

export const StyledTitle = styled.p`
  font-size: 18px;
  font-family: "Righteous", cursive;
  text-align: center;
`;

export const StyledText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: ${green};
  line-height: 32px;
  margin: 0;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
