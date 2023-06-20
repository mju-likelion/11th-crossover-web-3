import Component from "../components/Component";
import { styled } from "styled-components";
import InputFilld from "../components/InputFilld";
import AGREEBOX_FALSE from "../asset/images/icon_state_false.svg";
import AGREEBOX_TRUE from "../asset/images/icon_state_true.svg";
import { useState } from "react";
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
      <Component />
      <JoinBox>
        <JoinTopBox>
          <TopText>회원가입</TopText>
          <InputFilld />
          <InputFilld />
          <InputFilld />
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
          <AgreeFilld></AgreeFilld>
        </AgreeBox>
      </JoinBox>
    </>
  );
};

const JoinBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const JoinTopBox = styled.div`
  width: 540px;
  height: 592px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 114px;
`;
const TopText = styled.p`
  font-size: 54px;
  margin: 31px 171px 65px 170px;
`;
const AgreeBox = styled.div`
  width: 1166px;
  height: 410px;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;
const AgreeHeader = styled.div``;
const AgreeText = styled.p`
  font-size: 20px;
  text-align: left;
  display: block;
  float: left;
  margin: 7px 5px 13px 19px;
  color: ${(props) => props.color};
`;
const AgreeText2 = styled(AgreeText)`
  color: black;
  margin-left: 0;
`;
const AgreeCheckBtn = styled.button`
  display: block;
  float: right;
  margin: 7px 20px 13px 0;
`;
const AgreeFilld = styled.div`
  background-color: green;
  height: 342px;
  width: 1113px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  align-self: center;
  padding: 19px 24px 19px 30px;
`;

export default Join;
