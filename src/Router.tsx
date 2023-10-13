import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global.styled";
import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil";
import { Error } from "./pages/Error"

export const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:username" element={<Perfil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
