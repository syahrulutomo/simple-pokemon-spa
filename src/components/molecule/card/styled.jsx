import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { white, grey, lightblue, blue } = colors;

export const StyledCard = styled.div`
  border: 1px solid ${grey};
  padding: 8px;
  border-radius: 5px;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${lightblue};
  }
`;

export const StyledTitle = styled.p`
  font-size: 16px;
  color: ${blue};
  font-family: "Righteous", cursive;
  text-align: center;
  margin: 0;
`;
