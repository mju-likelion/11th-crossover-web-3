import styled from "styled-components";


const LogInBtn = (props) => {
    const {isAble} = props;
    return (
        <ButtonStyle isAble={isAble}>
            작성하기
        </ButtonStyle>
    );
};


const ButtonStyle = styled.div`
  width: 233px;
  height: 70px;
  border-radius: 25px;
  
  //false일 대 BLUE1, true일 때 #59A4FB
  background-color: ${({isAble, theme}) => isAble ? "#2186FC" : theme.colors.BLUE1};
  font-size: 21px;
  font-weight: 600;
  color: white;
  line-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default LogInBtn;