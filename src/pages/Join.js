// import Header from "../components/Header";
import { styled } from "styled-components";
import InputFilld from "../components/InputFilld";
import AGREEBOX_FALSE from "../asset/images/icon_state_false.svg";
import AGREEBOX_TRUE from "../asset/images/icon_state_true.svg";
import { useState, useEffect } from "react";
import { data } from "../asset/data/data";
import AgreeBtn from "../components/LongBtn";
const Join = () => {
  const [imageSrc, setImageSrc] = useState(AGREEBOX_FALSE);
  const [isClicked, setIsClicked] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAble, setIsAble] = useState(false);
  const helperMsg = {
    id: "영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.",
    password:
      "영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.",
    email: "사용하실 이메일을 입력해주세요.",
  };

  const [idMsg, setIdMsg] = useState(helperMsg.id);
  const [passwordMsg, setPasswordMsg] = useState(helperMsg.password);
  const [emailMsg, setEmailMsg] = useState(helperMsg.email);

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(AGREEBOX_FALSE);
      setIsClicked(false);
    } else {
      setImageSrc(AGREEBOX_TRUE);
      setIsClicked(true);
    }
  };

  const IdReset = (e) => {
    e.preventDefault();
    setId("");
    setIdValid(false);
    setIdError(false);
    setIdMsg(helperMsg.id);
  };
  const PasswordReset = (e) => {
    e.preventDefault();
    setPassword("");
    setPasswordValid(false);
    setPasswordError(false);
    setPasswordMsg(helperMsg.password);
  };
  const EmailReset = (e) => {
    e.preventDefault();
    setEmail("");
    setEmailValid(false);
    setEmailError(false);
    setEmailMsg(helperMsg.email);
  };
  const onChangeId = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const checkId = (e) => {
    setId(e.target.value);
    const idRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{5,10}$/;

    if (idRegex.test(e.target.value)) {
      setIdMsg("사용 가능한 아이디 입니다.");
      setIdValid(true);
      setIdError(false);
    } else {
      setIdMsg("사용하실 수 없는 아이디 입니다.");
      setIdValid(false);
      setIdError(true);
    }
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,14}$/;
    if (passwordRegex.test(e.target.value)) {
      setPasswordMsg("사용 가능한 비밀번호 입니다.");
      setPasswordValid(true);
      setPasswordError(false);
    } else {
      setPasswordMsg("사용하실 수 없는 비밀번호 입니다.");
      setPasswordValid(false);
      setPasswordError(true);
    }
  };
  const checkEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (emailRegex.test(e.target.value)) {
      setEmailMsg("사용 가능한 이메일 입니다.");
      setEmailValid(true);
      setEmailError(false);
    } else {
      setEmailMsg("이메일 형식에 맞지 않습니다.");
      setEmailValid(false);
      setEmailError(true);
    }
  };

  useEffect(() => {
    setIsAble(id !== "" && password !== "" && email !== "" && isClicked);
  }, [id, password, email, isClicked]);

  return (
    <>
      <JoinBox>
        <JoinWrap>
          <JoinTopBox>
            <TopText>회원가입</TopText>
            <InputFilld
              placeholderText="아이디"
              type="text"
              value={id}
              isValid={idValid}
              isError={idError}
              helperText={idMsg}
              checkHandler={(e) => checkId(e)}
              onChange={(e) => onChangeId(e)}
              onClick={(e) => IdReset(e)}
            />
            <InputFilld
              placeholderText="비밀번호"
              type="password"
              value={password}
              isValid={passwordValid}
              isError={passwordError}
              helperText={passwordMsg}
              checkHandler={(e) => checkPassword(e)}
              onChange={(e) => onChangePassword(e)}
              onClick={(e) => PasswordReset(e)}
            />
            <InputFilld
              placeholderText="이메일"
              type="email"
              value={email}
              isValid={emailValid}
              isError={emailError}
              helperText={emailMsg}
              checkHandler={(e) => checkEmail(e)}
              onChange={(e) => onChangeEmail(e)}
              onClick={(e) => EmailReset(e)}
            />
          </JoinTopBox>
          <AgreeBox>
            <AgreeHeader>
              <AgreeTextFirst color={({ theme }) => theme.colors.GREEN}>
                [필수]
              </AgreeTextFirst>
              <AgreeTextSec>개인정보보호정책</AgreeTextSec>
              <AgreeCheckBtn onClick={handleClick}>
                <img src={imageSrc} alt="agreeCheck" />
              </AgreeCheckBtn>
            </AgreeHeader>
            <AgreeFilld>
              <Agreement>{data}</Agreement>
            </AgreeFilld>
          </AgreeBox>
          <AgreeBtn text="완료하기" isAble={isAble} />
        </JoinWrap>
      </JoinBox>
    </>
  );
};

const JoinBox = styled.div`
  width: 1920px;
  height: 1404px;
  display: flex;
  justify-content: center;
`;
const JoinWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
`;
const JoinTopBox = styled.form`
  width: 540px;
  height: 592px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TopText = styled.p`
  font-size: 54px;
  font-weight: 900;
  margin: 0px 171px 65px 170px;
`;
const AgreeBox = styled.div`
  width: 1166px;
  height: 410px;
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
`;
const AgreeHeader = styled.div`
  margin: 64px 0 0 10px;
  display: flex;
  align-items: center;
  height: 45px;
`;
const AgreeTextFirst = styled.p`
  font-size: 20px;
  text-align: left;
  margin: 7px 5px 13px 23px;
  font-weight: 900;
  color: ${(props) => props.color};
`;
const AgreeTextSec = styled(AgreeTextFirst)`
  color: black;
  font-weight: 900;
  margin-left: 2px;
`;
const AgreeCheckBtn = styled.button`
  margin: 7px 20px 13px 772px;
`;
const AgreeFilld = styled.div`
  height: 342px;
  width: 1113px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  align-self: center;
  font-size: 16px;
  padding: 19px 24px 19px 30px;
  white-space: pre-wrap;
`;
const Agreement = styled.div`
  height: 304px;
  width: 1070px;
  overflow: scroll;
`;

export default Join;
