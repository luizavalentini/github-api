import { Home } from ".";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("Checa se o título do documento é Home", () => {
    render(<Home />);
    expect(document.title).toBe("Home");
  });

  test("Checa se existe um h2 escrito 'Digite seu nome de usuário e veja informações sobre seu perfil'", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "Digite seu nome de usuário e veja informações sobre seu perfil"
      )
    ).toBeInTheDocument();
  });

  test("Checa se existe um input com placeholder 'username'", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
  });

  test("Checa se existe um botão desabilitado", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

test("Digita no input o valor 'username' e espera um link", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText("username");
  fireEvent.change(input, {
    target: {
      value: "Daniel",
    },
  });
  expect(screen.getByRole("link")).toBeInTheDocument();
});

