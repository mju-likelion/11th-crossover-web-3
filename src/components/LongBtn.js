import styled from "styled-components";


const LongBtn = ({isAble, text}) => {

    return (
        <Button isAble={isAble}>
            {text}
        </Button>
    );
};


const Button = styled.button`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  //false일 때 BLUE1, true일 때 #59A4FB
  background-color: ${({isAble, theme}) => isAble ? theme.colors.BLUE2 : theme.colors.BLUE1};
  font-size: 36px;
  font-weight: 600;
  color: white;
  line-height: 44px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LongBtn;