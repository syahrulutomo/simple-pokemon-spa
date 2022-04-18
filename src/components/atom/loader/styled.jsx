import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { red, grey, white, black } = colors;

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  &:before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${black};
  }
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${grey};
  }
  position: fixed;
  left: calc(50% - 30px);
  top: calc(50% - 30px);
  border: 12px solid ${red};
  border-radius: 50%;
  border-right: 12px solid ${grey};
  border-bottom: 12px solid ${grey};
  background-color: ${white};
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
