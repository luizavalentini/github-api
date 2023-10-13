import styled from "styled-components";

export const Container = styled.div`
  max-width: 888px;
  margin: 0 auto;
  padding: 15px 20px;
`;

export const ContainerError = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  text-align: center;
  gap: var(--gap-1);

  > img {
    padding-top: -15px;
    width: 200px;
  }
`;
export const ContainerError2 = styled.div`
  > img {
    padding-top: 40px;
    width: 100%;
  }
`;
