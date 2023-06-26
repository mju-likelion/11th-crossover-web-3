import {useNavigate} from "react-router-dom";



const AuthRoute = ({isLoggedIn, component: Component}) => {
    const navigate = useNavigate();

    const notLoggedIn = () => {
        alert("로그인 하세요");
        // navigate("/login");
    }


    return (
        isLoggedIn ? Component : notLoggedIn
    );
};


//


export default AuthRoute;

