import styled from "@emotion/styled";
import { colors } from "../../../constants";

const { black } = colors;

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${black};
  opacity: 0.5;
`;
