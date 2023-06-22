import styled from "styled-components";
import LongBtn from "../components/LongBtn";
import InputFilld from "../components/InputFilld";
import { useEffect, useState } from "react";

const Login = () => {
  const [isAble, setIsAble] = useState(false);
  const [id, setId] = useState("");
  const changeId = (e) => {
    setId(e.target.value);
  };
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        {/*<form onSubmit={onsubmit}>*/}
        <InputBox
          helperText={
            "영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
          }
          placeholderText={"아이디"}
          value={id}
          onChange={changeId}
        />

        {/*<InputFilld*/}
        {/*    helperText={"영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요."}*/}
        {/*    placeholderText={"비밀번호"}*/}
        {/*    value={pwd}*/}
        {/*    onChange={changePwd}*/}
        {/*/>*/}
        <LoginBtn isAble={isAble} text={"로그인"} />
        <SignUp>
          <SignUpTxt>회원가입</SignUpTxt>
        </SignUp>
        {/*</form>*/}
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 145px;
`;
const Title = styled.div`
  width: 150px;
  height: 74px;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 65px;
`;
const InputBox = styled(InputFilld)`
  margin-bottom: 21px;
`;
const LoginBtn = styled(LongBtn)`
  margin-top: 40px;
`;
const SignUp = styled.div`
  display: flex;
  justify-content: end;
`;
const SignUpTxt = styled.div`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;

export default Login;
