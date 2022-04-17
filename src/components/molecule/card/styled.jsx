import styled from "@emotion/styled";
import { colors } from "../../../constants/colors";

const { white, grey, black, green } = colors;

export const StyledCard = styled.div`
  width: calc((100% - 44px) / 2);
  margin-right: 8px;
  margin-bottom: 8px;
  border: 1px solid ${grey};
  padding: 8px;
  border-radius: 5px;
  background-color: ${white};
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${green};
  }
  &:nth-of-type(2n) {
    margin-right: 0;
  }
`;

export const StyledTitle = styled.p`
  font-size: 14px;
  color: linear-gradient(to bottom right, red, yellow);
  font-family: "Righteous", cursive;
  text-align: center;
  margin: 0;
`;

export const StyledTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledType = styled.span`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : black)};
  font-family: "Righteous", cursive;
  &:nth-of-type(2n)&::before {
    content: " · ";
    display: inline-block;
    margin: 0 8px;
  }
`;
