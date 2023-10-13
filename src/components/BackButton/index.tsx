import { CaretLeft } from "phosphor-react";
import { ButtonContainer } from "./BackButton.styled";

export const BackButton = () => {
  return (
    <ButtonContainer to="/" className="back-button">
      <CaretLeft size={32} color="#fff5f5" weight="thin" />
    </ButtonContainer>
  );
};
