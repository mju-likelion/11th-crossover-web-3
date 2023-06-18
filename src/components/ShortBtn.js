import styled from "styled-components";


const ShortBtn = ({isAble, text, type}) => {

    return (
        <ButtonStyle isAble={isAble} text={text} type={type}>
            {text}
        </ButtonStyle>
    );
};


const ButtonStyle = styled.button`
  width: 233px;
  height: 70px;
  border-radius: 25px;
  background-color: ${({isAble, theme, type}) => type==="D" ? "#717171" : ((isAble && type==="W") ? "#2186FC" : theme.colors.BLUE1)};
  font-size: 21px;
  font-weight: 600;
  color: white;
  line-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ShortBtn;