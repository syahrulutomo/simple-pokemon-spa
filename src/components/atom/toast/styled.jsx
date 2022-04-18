import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const show = keyframes`
0% { top: -999px; }
100% { top: 70px; }
`;

export const StyledToast = styled.div`
  position: fixed;
  min-width: 250px;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 5px;
  background-color: #fff5c6;
  color: #ff9c00;
  font-size: 14px;
  animation: ${show} 1s 1;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  text-align: center;
`;
