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
import Content from "./pages/Content";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const toggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} toggle={toggle} />
          <Routes>
            <Route index path={"/"} element={<Main />} />
            <Route path={"/write"} element={<Post />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/join"} element={<Join />} />
            <Route path={"/:postId"} element={<Content />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
