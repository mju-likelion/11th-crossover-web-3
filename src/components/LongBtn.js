import styled from "styled-components";


const LongBtn = (props) => {
    const {isAble} = props;

    return (
        <ButtonStyle isAble={isAble}>
            로그인
        </ButtonStyle>
    );
};


const ButtonStyle = styled.div`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  //false일 때 BLUE1, true일 때 #59A4FB
  background-color: ${({isAble, theme}) => isAble ? "#59A4FB" : theme.colors.BLUE1};
  font-size: 36px;
  font-weight: 600;
  color: white;
  line-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LongBtn;