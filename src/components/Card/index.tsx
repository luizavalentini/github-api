import { FolderNotch, GithubLogo } from "phosphor-react";
import { CardBox } from "./Card.styled";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({name, description, language, to = ""}) => {
  return (
    <CardBox href={to} target="_blank" delay={1}>
      <span>
        <FolderNotch size={32} color="#fff5f5" weight="thin" />
        <GithubLogo size={32} color="#fff5f5" weight="thin" />
      </span>
      <div>
        <p className="nome">{name}</p>
        <p>{description}</p>
      </div>
      <p>{language}</p>
    </CardBox>
  );
};
