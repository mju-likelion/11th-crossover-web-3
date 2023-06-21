import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Main from "./pages/Main";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header isLoggedIn={false} />
          <Routes>
            <Route index path={"/login"} element={<Login />} />
            <Route index path={"/main"} element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
