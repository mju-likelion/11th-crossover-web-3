import styled from "styled-components";
import CANCEL_ICON from "../asset/images/icon_cancel.svg";
import ERROR_ICON from "../asset/images/icon_error.svg";
import SUCCESS_ICON from "../asset/images/icon_success.svg";
import { useState } from "react";

const InputFilld = ({ helperText, placeholderText, isVaild, isError }) => {
  const [inputWrite, setinputWrite] = useState("");

  const displayText = (e) => {
    setinputWrite(e.target.value);
  };

  const onReset = (e) => {
    setinputWrite("");
  };

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
              <img src={SUCCESS_ICON} alt="success" />
            ) : isError ? (
              <img src={ERROR_ICON} alt="error" />
            ) : (
              ""
            )}
          </ShowImg>
          <CancelBtn onClick={onReset}>
            {inputWrite && <img src={CANCEL_ICON} alt="cancel" />}
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
  width: 1920px;
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
    isVaild ? theme.colors.GREEN : isError ? theme.colors.RED : "black"};
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
  margin-bottom: 21px;
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
  margin: 0 8px 0 18px;
`;
export default InputFilld;
