import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid #1dadec;
  transition: all 0.3s ease-out;
  background-color: #1dadec;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #242424;
    transform: scale(1.05);
    background: transparent;
    transition: all 0.3s ease-out;
  }
`;

export const StyledButtonOrange = styled(StyledButton)`
  color: #242424;
  border: 1px solid #ffc107;
  background-color: #ffc107;
`;

export const StyledButtonTransparent = styled(StyledButton)`
  color: #242424;
  border: 1px solid #ffc107;
  background-color: transparent;
`;

export const StyledButtonFinal = styled(StyledButton)`
  color: #242424;
  border: 1px solid #d1b000;
  background-color: #d1b000;
`;
