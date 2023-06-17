import './App.css';
import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import LogInBtn from "./components/LogInBtn";
import WriteBtn from "./components/WriteBtn";
import DeleteBtn from "./components/DeleteBtn";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme} >
            <GlobalStyle />
            <LogInBtn isAble={false}/>
            <LogInBtn isAble={true}/>

            <WriteBtn isAble={false}/>
            <WriteBtn isAble={true}/>

            <DeleteBtn />

            <Header />

        </ThemeProvider>
    </div>
  );
}

export default App;
