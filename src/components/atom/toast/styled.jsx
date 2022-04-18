import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../../constants";

const { lightblue, white } = colors;

const show = keyframes`
0% { top: -999px; }
100% { top: 70px; }
`;

export const StyledToast = styled.div`
  position: fixed;
  z-index: 999;
  min-width: 250px;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "success" ? lightblue : "#fff5c6"};
  color: ${(props) => (props.theme === "success" ? white : "#ff9c00")};
  font-size: 14px;
  animation: ${show} 1s 1;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  text-align: center;
`;
