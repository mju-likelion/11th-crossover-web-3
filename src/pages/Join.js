// import Header from "../components/Header";
import { styled } from "styled-components";
import InputFilld from "../components/InputFilld";
import AGREEBOX_FALSE from "../asset/images/icon_state_false.svg";
import AGREEBOX_TRUE from "../asset/images/icon_state_true.svg";
import { useState } from "react";
import { data } from "../asset/data/data";
import AgreeBtn from "../components/LongBtn";
const Join = () => {
  const [imageSrc, setImageSrc] = useState(AGREEBOX_FALSE);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(AGREEBOX_FALSE);
      setIsClicked(false);
    } else {
      setImageSrc(AGREEBOX_TRUE);
      setIsClicked(true);
    }
  };
  return (
    <>
      <JoinBox>
        <JoinWrap>
          <JoinTopBox>
            <TopText>회원가입</TopText>
            <InputFilld placeholderText="아이디" />
            <InputFilld placeholderText="비밀번호" />
            <InputFilld placeholderText="이메일" />
          </JoinTopBox>
          <AgreeBox>
            <AgreeHeader>
              <AgreeText color={({ theme }) => theme.colors.GREEN}>
                [필수]
              </AgreeText>
              <AgreeText2>개인정보보호정책</AgreeText2>
              <AgreeCheckBtn onClick={handleClick}>
                <img src={imageSrc} alt="agreecheck" />
              </AgreeCheckBtn>
            </AgreeHeader>
            <AgreeFilld>
              <Agreement>{data}</Agreement>
            </AgreeFilld>
          </AgreeBox>
          <AgreeBtn text="완료하기"></AgreeBtn>
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
const JoinWrap = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
`;
const JoinTopBox = styled.div`
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
const AgreeText = styled.p`
  font-size: 20px;
  text-align: left;
  margin: 7px 5px 13px 23px;
  font-weight: 900;
  color: ${(props) => props.color};
`;
const AgreeText2 = styled(AgreeText)`
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
