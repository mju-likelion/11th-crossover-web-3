import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import Header from "./components/Header";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./pages/Post";
import {useState} from "react";
import Content from "./pages/Content";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const toggle = () => {
        setIsLoggedIn((prev) => !prev)
    }


    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Header isLoggedIn={isLoggedIn} toggle={toggle}/>
                    <Routes>
                        <Route path={"/write"} element={<Post/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/post"} element={<Content PostId={1} isMine={true}/>}/>
                        {/*게시글 리스트 보이는 MainPage 미완성으로 임시로 props 넘겼습니다*/}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
