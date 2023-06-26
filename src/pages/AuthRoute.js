import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const AuthRoute = ({isLoggedIn, component: Component}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            alert("로그인이 필요합니다.");
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return (
        isLoggedIn ? Component : null
    );
};

export default AuthRoute;

