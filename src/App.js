import './App.css';
import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import LongBtn from "./components/LongBtn";
import ShortBtn from "./components/ShortBtn";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme} >
            <GlobalStyle />

            <Header />
            <LongBtn isAble={false}/>
            <LongBtn isAble={true}/>
            <ShortBtn isAble={false} text={"작성하기"} type={"W"}/>
            <ShortBtn isAble={true} text={"작성하기"} type={"W"} />
            <ShortBtn text={"삭제하기"} type={"D"}/>
        </ThemeProvider>
    </div>
  );
}

export default App;
