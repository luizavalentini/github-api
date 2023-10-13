import { useParams } from "react-router-dom";
import { Notepad, MapPin, UserPlus } from "phosphor-react";
import {
  Container,
  ContainerError,
  LoaderWrapper,
  Wrapper,
  WrapperCard,
} from "./Perfil.styled";
import { Card } from "../../components/Card";
import { useGetGithub } from "../../hooks/useGetGithub";
import { PacmanLoader } from "react-spinners";
import fotoError from "../../assets/error-image.svg";
import { BackButton } from "../../components/BackButton";

export const Perfil: React.FC = () => {
  const { username } = useParams();
  const { user, loading, error } = useGetGithub(`${username}`);
  console.log(error);

  if (loading) {
    return (
      <LoaderWrapper>
        <PacmanLoader color="#36d7b7" />
      </LoaderWrapper>
    );
  } else if (error) {
    return (
      <Container>
        <BackButton />
        <ContainerError>
          <h1>Oops!</h1>
          <h2>Parece que esse Usuário não existe!</h2>
          <img src={fotoError} alt="Imagem de erro - usuario não existente"></img>
        </ContainerError>
      </Container>
    );
  } else {
    return (
      <Container>
        <BackButton />
        <Wrapper>
          <div className="infos">
            <small>Nome:</small>
            <h4>{user?.infos.name ? user?.infos.name : "Não informado"}</h4>
            <span>
              <Notepad size={32} color="#fff5f5" />
              <p>{user?.infos.bio ? user?.infos.bio : "Não informado"}</p>
            </span>
            <span>
              <MapPin size={32} color="#fff5f5" />
              <p>
                {user?.infos.location ? user?.infos.location : "Não informado"}
              </p>
            </span>
            <div className="followers">
              <span>
                <UserPlus size={32} color="#fff5f5" />
                <p>{user?.infos.followers ? user?.infos.followers : 0}</p>
              </span>
              <span>
                <UserPlus size={32} color="#fff5f5" weight="fill" />
                <p>{user?.infos.following ? user?.infos.following : 0}</p>
              </span>
            </div>
          </div>
          <div className="image">
            <img src={user?.infos.avatarUrl} alt={user?.infos.name} />
          </div>
        </Wrapper>
        <WrapperCard className="card-container">
          <h3>Repositórios</h3>

          <div>
            {user &&
              user?.repos.map((card: any) => {
                return (
                  <Card
                    key={card.id}
                    to={card.htmlUrl}
                    name={card.name}
                    description={card.descrition}
                    language={card.language}
                  />
                );
              })}
          </div>
        </WrapperCard>
      </Container>
    );
  }
};
