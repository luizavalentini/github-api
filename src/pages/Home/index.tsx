import React, { useState } from "react";
import { Container } from "./Home.styled";
import { TelegramLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [usuario, setUsuario] = useState<string>("");
  document.title = "Home";

  return (
    <Container>
      <h1>Gitstats</h1>
      <h2>Digite seu nome de usuário e veja informações sobre seu perfil</h2>
      <div>
        <input
          placeholder="username"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        {usuario.length > 0 ? (
            <Link to={`/perfil/${usuario}`}>
              <TelegramLogo size={32} color="#fff5f5" />
            </Link>
        ) : (
          <button disabled className="button-disabled">
            <TelegramLogo size={32} color="#fff5f5" />
          </button>
        )}
      </div>
    </Container>
  );
};
