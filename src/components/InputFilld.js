import styled from "styled-components";
import CANCEL_ICON from "../asset/images/icon_cancel.svg";
import ERROR_ICON from "../asset/images/icon_error.svg";
import SUCCESS_ICON from "../asset/images/icon_success.svg";
import { useState } from "react";

const InputFilld = () => {
  const [inputWrite, setinputWrite] = useState(false);
  const [inputShowImg, setinputShowImg] = useState(false);
  const [inputState, setinputState] = useState(false);
  const displayText = (e) => {
    setinputWrite(e.target.value);
  };

  const onReset = (e) => {
    setinputWrite("");
  };

  return (
    <>
      <InputContainer>
        <InputBox>
          <InputStyle
            onChange={displayText}
            value={inputWrite}
            placeholder="input filled"
          />
          <ShowImg>
            {inputShowImg ? (
              inputState ? (
                <InputImg src={SUCCESS_ICON} />
              ) : (
                <InputImg src={ERROR_ICON} />
              )
            ) : (
              ""
            )}
          </ShowImg>
          <CancelBtn onClick={onReset}>
            {inputWrite ? <img src={CANCEL_ICON} /> : ""}
          </CancelBtn>
        </InputBox>
        <HelperText>helper text</HelperText>
      </InputContainer>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 90px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputStyle = styled.input`
  display: flex;
  width: 393px;
  height: 28px;
  border: none;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const CancelBtn = styled.button`
  width: 32px;
  height: 32px;
`;

const HelperText = styled.p`
  height: 19px;
  width: 495px;
  margin-top: 10px;
  text-align: left;
  font-size: 16px;
`;
const ShowImg = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  margin-left: 18px;
`;

const InputImg = styled.img``;

export default InputFilld;
