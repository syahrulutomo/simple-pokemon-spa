import styled from "@emotion/styled";
import { colors } from "../../../constants";

const { grey } = colors;

export const StyledInput = styled.input`
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${grey};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 14px;
`;
