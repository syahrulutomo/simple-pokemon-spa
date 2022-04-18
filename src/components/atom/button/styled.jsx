import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { red, white } = colors;

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px;
  box-sizing: border-box;
  color: ${white};
  background-color: ${red};
  outline: none;
  border: 1px solid ${red};
  letter-spacing: 0.5px;
`;
