import styled from "styled-components";


const Post = () => {
    return (
        <Container>
            <InputBox height={"134px"}>
                <TitleEl>
                    <TitleTxt>제목 :</TitleTxt>
                    <TitleInput />
                    <TextLimit>(0/20)</TextLimit>
                </TitleEl>
            </InputBox>
            <InputBox height={"751px"}>
                <TextArea />
                <PostLimit>
                    <TextLimit>(0/140)</TextLimit>
                </PostLimit>
            </InputBox>
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 174px;
`
const InputBox = styled.div`
  width: 794px;
  height: ${(props) => props.height || "134px"};
  border: 2px solid GRAY;
  border-radius: 25px;
  padding: 55px 52px 51px 35px;
  margin-bottom: 16px;
`
const TitleEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TitleTxt = styled.div`
    font-size: 24px;
  font-weight: 600;
`
const TitleInput = styled.input`
  width: 561px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
`
const TextLimit = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: GRAY;
`
const TextArea = styled.textarea`
  width: 714px;
  height: 627px;
`
const PostLimit = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -25px;
`

export default Post;