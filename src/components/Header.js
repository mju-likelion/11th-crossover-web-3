import styled from "styled-components";
import logo from "../asset/images/icon_logo.svg";
import logoutIcon from "../asset/images/icon_logout.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, logout }) => {
  const navigate = useNavigate();

  return (
    <HeadarContainer>
      <LogoBtn onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </LogoBtn>
      <LogoutBtn isLoggedIn={isLoggedIn} onClick={logout}>
        <img src={logoutIcon} alt="logout" />
      </LogoutBtn>
    </HeadarContainer>
  );
};

const HeadarContainer = styled.div`
  width: 1920px;
  height: 116px;
  padding-top: 36px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
  top: 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.GRAY}`};
`;
const LogoBtn = styled.button`
  width: 195px;
  margin-left: 363px;
  height: 38px;
`;
const LogoutBtn = styled.button`
  visibility: ${({ isLoggedIn }) => (isLoggedIn ? `visible` : `hidden`)};
  margin-right: 365px;
`;

export default Header;
