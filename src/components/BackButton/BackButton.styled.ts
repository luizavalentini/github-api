import styled, { keyframes, Keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animation: Keyframes = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1);
  }
`;

export const ButtonContainer = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${animation} 1s ease-in-out forwards;

  &:hover {
    background: var(--card-color);
  }
`;
