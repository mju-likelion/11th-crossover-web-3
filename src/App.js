import GlobalStyle from "./styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";
import Header from "./components/Header";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./pages/Post";
import {useState} from "react";


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
                        {isLoggedIn ?
                            <Route path={"/write"} element={<Post/>}/>
                            :
                            <Route index path={"/login"} element={<Login/>}/>
                        }
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
