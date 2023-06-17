import styled from "styled-components";
import CANCEL_ICON from "../asset/images/icon_cancel.svg";

const input = (props) => {
  const { isAble } = props;
  return (
    <>
      <InputBox>
        <InputFrame>
          <InputStyle placeholder="input filled" isAble={isAble}></InputStyle>
          <CancelBtn>
            <CancelImg src={CANCEL_ICON} />
          </CancelBtn>
        </InputFrame>
      </InputBox>
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

const InputFrame = styled.div`
  display: flex;
  align-items: center;
  width: 483px;
  height: 32px;
`;

const InputStyle = styled.input`
  width: 440px;
  height: 28px;
  border: none;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const CancelBtn = styled.button`
  margin-left: 11px;
  width: 32px;
  height: 32px;
`;

const CancelImg = styled.img``;

export default input;
