import { Error } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Error", () => {
  test("Checa se o titulo em imagem de erro aparece", () => {
    render(<Error />);
    expect(screen.getByAltText("title-hey")).toBeInTheDocument();
  });
});
describe("Error", () => {
  test("Checa se a imagem de erro aparece", () => {
    render(<Error />);
    expect(screen.getByAltText("error-404")).toBeInTheDocument();
  });
});
