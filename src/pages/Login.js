import styled from "styled-components";
import LongBtn from "../components/LongBtn";


const Login = () => {

    return (
        <Wrapper>
            <Container>
                <Title>로그인</Title>
                <Input/>
                <Input/>
                <LoginBtn isAble={false} text={"로그인"}/>
                <SignUp>회원가입</SignUp>
            </Container>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 230px;
  position: absolute;
`
const Title = styled.div`
  width: 150px;
  height: 74px;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 65px;
`
const Input = styled.input`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  margin-bottom: 50px;
`
const LoginBtn = styled(LongBtn)`
  margin-top: 40px;
`
const SignUp = styled.p`
  color: ${({theme}) => theme.colors.GRAY};
  font-size: 20px;
  font-weight: 600;
  margin-left: auto;
  margin-right: 15px;
  position: relative;
  align-self: flex-end;
`

export default Login;