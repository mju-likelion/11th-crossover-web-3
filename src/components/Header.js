import styled from "styled-components";
import logo from "../asset/images/icon_logo.svg"
import logoutIcon from "../asset/images/icon_logout.svg"


const Header = ({isLoggedIn}) => {

    return (
        <Container>
            <Logo src={logo} alt="logo"/>
            <Logout src={logoutIcon} alt="logout" isLoggedIn={isLoggedIn}/>
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
  position: fixed;
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