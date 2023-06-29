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
import AuthRoute from "./pages/AuthRoute";


function App() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken);
    const loginToggle = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        window.localStorage.removeItem('accessToken');
        setIsLoggedIn(false)
    };
    useEffect(() => {
        setIsLoggedIn(!!accessToken) //!! : boolean 으로 형변환 하는 방법
    }, [accessToken])

    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Header isLoggedIn={isLoggedIn} logout={logout}/>
                    <Routes>
                        <Route index path={"/"} element={
                            <AuthRoute isLoggedIn={isLoggedIn} component={<Main accessToken={accessToken}/>} />
                        }/>
                        <Route path={"/write"} element={
                            <AuthRoute isLoggedIn={isLoggedIn} component={<Post accessToken={accessToken}/>} />
                        }/>
                        <Route path={"/:postId"} element={
                            <AuthRoute isLoggedIn={isLoggedIn} component={<Content accessToken={accessToken}/>} />
                        }/>
                        <Route path={"/login"} element={<Login loginToggle={loginToggle}/>} />
                        <Route path={"/join"} element={<Join/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
