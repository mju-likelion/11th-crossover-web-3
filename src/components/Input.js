import CANCEL_ICON from '../asset/images/icon_cancel.svg';
import ERROR_ICON from '../asset/images/icon_error.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Input = ({
                   placeholder,
                   type,
                   register,
                   errors,
                   value,
                   setValue,
                   name,
               }) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isError, setError] = useState(false);

    const onClick = () => {
        setValue(name, '');
    };
    useEffect(() => {
        setIsEmpty(value[name] === '');
    }, [value, name]);
    useEffect(() => {
        setError(errors?.message.length > 1);
    }, [errors?.message]);

    return (
        <InputContainer>
            <InputBox isEmpty={isEmpty} isError={isError}>
                <InputStyle
                    placeholder={placeholder}
                    isEmpty={isEmpty}
                    isError={isError}
                    type={type}
                    value={value[name]}
                    {...register(name)}
                />
                <ShowImg isEmpty={isEmpty} isError={isError}>
                    {!isEmpty && isError ? <img src={ERROR_ICON} alt='error' /> : null}
                </ShowImg>
                <CancelBtn onClick={onClick}>
                    {value[name] === '' ? null : <img src={CANCEL_ICON} alt='cancel' />}
                </CancelBtn>
            </InputBox>

            <HelperTextBox isError={isError} isEmpty={isEmpty} value={value}>
                {errors && errors.message}
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
  ${({ isEmpty, isError, theme }) =>
      isEmpty
          ? theme.colors.GRAY
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
  color: ${({ isEmpty, isError, theme }) =>
      isEmpty
          ? theme.colors.GRAY
          : isError
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
  visibility: ${({ isEmpty }) => (!isEmpty ? 'visible' : 'hidden')};
  color: ${({ isEmpty, isError, theme }) =>
      isEmpty
          ? theme.colors.GRAY
          : isError
              ? theme.colors.RED
              : theme.colors.GREEN};
`;
const ShowImg = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 18px;
`;
export default Input;