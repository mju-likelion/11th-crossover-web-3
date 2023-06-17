import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Input from "./components/InputFilld";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Input />
      </ThemeProvider>
    </div>
  );
}

export default App;
