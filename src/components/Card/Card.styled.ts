import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

type CardBoxType = {
  delay: number;
}

export const CardBox = styled.a<CardBoxType>`
  width: 200px;
  height: 200px;
  background-color: var(--card-color);
  border-radius: 10px;
  padding: 19px 14px;
  color: var(--white);
  font-weight: 200;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  animation: ${animation} 0.5s ease-in-out forwards .8s;

  &:hover {
    transform: scale(1.05);
    filter: brightness(2);
  }

  p {
    text-align: center;
    font-size: 12px;
  }

  .nome {
    margin-bottom: 5px;
  }

  > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  svg {
    background-color: transparent;
  }
`;
