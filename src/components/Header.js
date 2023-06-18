import styled from "styled-components";
import Logo from "../asset/images/icon_logo.svg"
import LogoutIcon from "../asset/images/icon_logout.svg"


const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle src={Logo} alt="logo" />
            <LogoutStyle src={LogoutIcon} alt="logout" />
        </HeaderStyle>
    );
};


const HeaderStyle = styled.div`
  width: 1920px;
  height: 116px;
  padding-top: 36px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
`
const LogoStyle = styled.img`
    margin-left: 363px;
    height: 38px;
`
const LogoutStyle = styled.img`
  margin-right: 366px;
`

export default Header;