import CANCEL_ICON from "../asset/images/icon_cancel.svg";
import ERROR_ICON from "../asset/images/icon_error.svg";
import SUCCESS_ICON from "../asset/images/icon_success.svg";
import styled from "styled-components";

const InputFilld = ({
  helperText,
  placeholderText,
  isValid,
  isError,
  onChange,
  onClick,
  checkHandler,
  value,
}) => {
  return (
    <>
      <InputContainer>
        <InputBox isValid={isValid} isError={isError}>
          <InputStyle
            onChange={(e) => {
              checkHandler(e);
              onChange(e);
            }}
            value={value}
            placeholder={placeholderText}
            isValid={isValid}
            isError={isError}
          />
          <ShowImg>
            {isValid ? (
              <img src={SUCCESS_ICON} alt="success" />
            ) : isError ? (
              <img src={ERROR_ICON} alt="error" />
            ) : (
              ""
            )}
          </ShowImg>
          <CancelBtn
            onClick={(e) => {
              onClick(e);
            }}
          >
            {value === "" || <img src={CANCEL_ICON} alt="cancel" />}
          </CancelBtn>
        </InputBox>
        <HelperTextBox
          helperText={helperText}
          isValid={isValid}
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
  border: 2px solid
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
  color: ${({ isValid, isError, theme }) =>
    isValid ? theme.colors.GREEN : isError ? theme.colors.RED : "black"};
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
  color: ${({ isValid, isError, theme }) =>
    isValid
      ? theme.colors.GREEN
      : isError
      ? theme.colors.RED
      : theme.colors.GRAY};
`;
const ShowImg = styled.image`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 18px;
`;
export default InputFilld;
