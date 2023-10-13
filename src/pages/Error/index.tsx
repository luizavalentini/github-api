import { ContainerError, ContainerError2 } from "./Error.styled";
import group404 from "../../assets/404.svg";
import hey from "../../assets/hey-error.svg";

export const Error: React.FC = () => {
  return (

      <ContainerError>
        <img className="title" src={hey} alt="title-hey" />
        <ContainerError2>
          <img src={group404} alt="error-404" />
        </ContainerError2>
      </ContainerError>
  );
};
