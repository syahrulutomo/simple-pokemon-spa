import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { red, black, green, white, lightgrey } = colors;

export const StyledTable = styled.table`
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 300px;
  font-family: "Poppins", sans-serif;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: ${green};
  color: ${white};
`;

export const TBody = styled.tbody`
  // custom css goes here
`;

export const TR = styled.tr`
  &:nth-of-type(even) {
    background-color: ${lightgrey};
  }
`;

export const TH = styled.th`
  padding: 8px;
  font-weight: 500;
`;

export const TD = styled.td`
  text-align: center;
  color: ${black};
  padding: 4px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px;
  box-sizing: border-box;
  color: ${white};
  background-color: ${red};
  outline: none;
  border: 1px solid ${red};
  letter-spacing: 0.5px;
  margin-top: 24px;
`;
