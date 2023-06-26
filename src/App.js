import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import Header from "./components/Header";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Join from "./pages/Join";
import Main from "./pages/Main";
import Post from "./pages/Post";
import {useEffect, useState} from "react";
import Content from "./pages/Content";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    // useEffect(() => {
    //     setIsLoggedIn(!!accessToken) //!! : boolean 으로 형변환 하는 방법
    //     console.log(isLoggedIn)
    // }, [accessToken])

    const loginToggle = () => {
        setIsLoggedIn(true)
        console.log("loginToggle 실행됨")
        console.log(isLoggedIn)

    }



    const logout = () => {
        window.localStorage.removeItem('accessToken');
        setIsLoggedIn(false)
    };


    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Header isLoggedIn={isLoggedIn} logout={logout}/>
                    <Routes>
                        <Route index path={"/"} element={<Main/>}/>

                        <Route path={"/login"} element={<Login loginToggle={loginToggle}/>} />
                        <Route path={"/join"} element={<Join/>}/>

                        <Route path={"/write"} element={<Post/>}/>
                        <Route path={"/:postId"} element={<Content/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
