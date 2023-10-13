import styled from "styled-components";

export const Container = styled.div`
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 180px;
  text-align: center;
  gap: var(--gap-1);

  > h1 {
    color: var(--blue-100);
    font-size: 48px;
    font-weight: 700;
  }
  > h2 {
    color: var(--white);
    font-size: 32px;
    font-weight: 400;
    padding: 0 20px;
  }
  > div {
    width: 100%;
    display: flex;
    gap: 7px;
    padding: 0 150px;


    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      padding: 0 20px;
      align-items: center;

    }

    input {
      width: 100%;
      background-color: var(--card-color);
      padding: 11px 0 11px 11px;
      border-radius: 6px;
      border: none;
      color: var(--white);
      font-size: 20px;
      font-weight: 400;
    }
    a {
      svg {
        background-color: transparent;
      }
      padding: 0 4px;
      width: 20%;
      background-color: var(--blue-100);
      border-radius: 6px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button-disabled {
      svg {
        background-color: transparent;
      }
      padding: 0 4px;
      width: 20%;
      background-color: var(--card-color);
      border-radius: 6px;
      border: none;
      display: flex;
      cursor: not-allowed;
      align-items: center;
      justify-content: center;
    }
  }
`;
