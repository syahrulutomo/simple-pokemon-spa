import styled from "@emotion/styled";
import { colors } from "../../../constants";

const { grey, white } = colors;

export const StyledModal = styled.div`
  border-radius: 5px;
  border: 1px solid ${grey};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  padding: 8px;
  box-sizing: border-radius;
  background-color: ${white};
`;
