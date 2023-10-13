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

export const Container = styled.div`
  max-width: 888px;
  margin: 0 auto;
  padding: 124px 0;
  padding: 15px 20px;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 180px;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 668px) {
    grid-template-columns: 1fr;
    padding-top: 30px;
  }

  > .infos {
    margin-top: 20px;
    animation: ${animation} 0.5s ease-in-out forwards;
    h4 {
      font-size: 48px;
      color: var(--blue-100);
      margin-bottom: 15px;
    }
    span {
      display: grid;
      grid-template-columns: 30px 1fr;
      align-items: center;
      gap: 7px;
      margin-bottom: 10px;

      > p {
        font-size: 14px;
        font-weight: 400;
      }
    }

    .followers {
      display: flex;
      justify-content: space-between;
    }
  }
  > .image {
    max-width: 100%;
    padding: 0 40px;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: ${animation} 0.5s ease-in-out forwards 0.2s;

    @media (max-width: 668px) {
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
      border-radius: 50%;
      border: 2px solid var(--blue-100);
      padding: 2px;
    }
  }
`;

export const WrapperCard = styled.div`
  width: 100%;
  margin-top: 70px;
  gap: var(--gap-1);
  opacity: 0;
  animation: ${animation} 0.5s ease-in-out forwards 0.4s;
  > h3 {
    text-align: center;
    color: var(--blue-100);
    font-size: 32px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--gap-1);
    place-items: center;
    margin-top: 30px;
  }
`;
export const LoaderWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerError = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  text-align: center;
  gap: var(--gap-1);
  animation: ${animation} 0.5s ease-in-out forwards;

  > h1 {
    color: var(--blue-100);
    font-size: 60px;
    font-weight: 800;
  }
  > h2 {
    color: var(--white);
    font-size: 30px;
  }

  > img {
    padding-top: 15px;
    width: 100%;
  }

  @media (max-width: 668px) {
    padding: 20px;
  }
`;
