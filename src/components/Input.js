import ERROR_ICON from "../asset/images/icon_error.svg";
import CANCEL_ICON from "../asset/images/icon_cancel.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Input = ({
  value,
  setValue,
  placeholder,
  type,
  name,
  valid,
  register,
  onKeyDown,
}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const onClick = () => {
    setValue(name, "");
  };
  useEffect(() => {
    setIsEmpty(value[name] === "");
  }, [value, name]);
  useEffect(() => {
    setIsValid(valid?.message.length > 1);
  }, [valid?.message]);

  return (
    <InputContainer>
      <InputBox isEmpty={isEmpty} isValid={isValid}>
        <InputStyle
          placeholder={placeholder}
          isEmpty={isEmpty}
          isValid={isValid}
          type={type}
          value={value[name]}
          {...register(name)}
          onKeyDown={onKeyDown}
        />
        <ShowImg isEmpty={isEmpty} isValid={isValid}>
          {!isEmpty && isValid && <img src={ERROR_ICON} alt="error" />}
        </ShowImg>
        <CancelBtn onClick={onClick}>
          {value[name] && <img src={CANCEL_ICON} alt="cancel" />}
        </CancelBtn>
      </InputBox>

      <HelperTextBox isValid={isValid} isEmpty={isEmpty} value={value}>
        {valid && valid.message}
      </HelperTextBox>
    </InputContainer>
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
    ${({ isEmpty, isValid, theme }) =>
      isEmpty
        ? theme.colors.GRAY
        : isValid
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
  color: ${({ isEmpty, isValid, theme }) =>
    isEmpty
      ? theme.colors.GRAY
      : isValid
      ? theme.colors.RED
      : theme.colors.GRAY};
  background-color: transparent;

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
  visibility: ${({ isEmpty }) => (!isEmpty ? "visible" : "hidden")};
  color: ${({ isEmpty, isValid, theme }) =>
    isEmpty
      ? theme.colors.GRAY
      : isValid
      ? theme.colors.RED
      : theme.colors.GRAY};
`;
const ShowImg = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 18px;
`;
export default Input;
