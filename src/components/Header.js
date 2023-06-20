import styled from "styled-components";
import logo from "../asset/images/icon_logo.svg"
import logoutIcon from "../asset/images/icon_logout.svg"
import {useNavigate} from "react-router-dom";


const Header = ({isLoggedIn, toggle}) => {
    const navigate = useNavigate()


    return (
        <Container>
            <Logo src={logo} alt="logo" onClick={()=>navigate("/")}/>
            <Logout src={logoutIcon} alt="logout" isLoggedIn={isLoggedIn} onClick={toggle} />
        </Container>
    );
};


const Container = styled.div`
  width: 1920px;
  height: 116px;
  padding-top: 36px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
  top: 0;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.GRAY}`};
`
const Logo = styled.img`
  margin-left: 363px;
  height: 38px;
`
const Logout = styled.img`
  visibility: ${({isLoggedIn}) => isLoggedIn ? `visible` : `hidden`};
  margin-right: 366px;
`

export default Header;