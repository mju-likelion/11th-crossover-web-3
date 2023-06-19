import styled from "styled-components";
import CANCEL_ICON from "../asset/images/icon_cancel.svg";
import ERROR_ICON from "../asset/images/icon_error.svg";
import SUCCESS_ICON from "../asset/images/icon_success.svg";
import { useState } from "react";

const InputFilld = ({ helperText, placeholderText, isVaild, isError }) => {
  const [inputWrite, setinputWrite] = useState("");
  // const [inputError, setinputError] = useState(true);
  // const [inputState, setinputState] = useState(true);

  const displayText = (e) => {
    setinputWrite(e.target.value);
  };

  const onReset = (e) => {
    setinputWrite("");
  };

  // {
  //   placeholderText = "text filld";
  //   helperText = "helperText";
  //   isVaild = true;   //유효성검사 성공
  //   isError = false;  //에러
  // }

  return (
    <>
      <InputContainer>
        <InputBox isVaild={isVaild} isError={isError}>
          <InputStyle
            onChange={displayText}
            value={inputWrite}
            placeholder={placeholderText}
            isVaild={isVaild}
            isError={isError}
          />
          <ShowImg>
            {isVaild ? (
              <InputImg src={SUCCESS_ICON} />
            ) : isError ? (
              <InputImg src={ERROR_ICON} />
            ) : (
              ""
            )}
          </ShowImg>
          <CancelBtn onClick={onReset}>
            {inputWrite ? <img src={CANCEL_ICON} /> : ""}
          </CancelBtn>
        </InputBox>
        <HelperTextBox
          helperText={helperText}
          isVaild={isVaild}
          isError={isError}
        >
          {helperText}
        </HelperTextBox>
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
  border: 1px solid
    ${({ isVaild, isError, theme }) =>
      isVaild
        ? theme.colors.GREEN
        : isError
        ? theme.colors.RED
        : theme.colors.GRAY};
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
  color: ${({ isVaild, isError, theme }) =>
    isVaild
      ? theme.colors.GREEN
      : isError
      ? theme.colors.RED
      : theme.colors.GRAY};
  &::placeholder {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const CancelBtn = styled.button`
  width: 32px;
  height: 32px;
`;

const HelperTextBox = styled.p`
  height: 19px;
  width: 495px;
  margin-top: 10px;
  text-align: left;
  font-size: 16px;
  color: ${({ isVaild, isError, theme }) =>
    isVaild
      ? theme.colors.GREEN
      : isError
      ? theme.colors.RED
      : theme.colors.GRAY};
`;
const ShowImg = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  margin-left: 18px;
`;

const InputImg = styled.img``;

export default InputFilld;
