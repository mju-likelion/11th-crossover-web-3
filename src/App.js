import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Header from "./components/Header";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header isLoggedIn={false} />
          <Routes>
            <Route index path={"/login"} element={<Login />} />
            <Route index path={"/join"} element={<Join />} />
            <Route index path={"/content"} element={<Content />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
