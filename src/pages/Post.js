import styled from "styled-components";
import { useEffect, useState } from "react";
import ShortBtn from "../components/ShortBtn";
import { AxiosWrite } from "../api/Post";
import { useNavigate } from "react-router-dom";

export const MAX_TITLE = 20;
export const MAX_CONTENT = 140;

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAble, setIsAble] = useState(false);
  const [writer, setWriter] = useState();
  const navigate = useNavigate();
  const onChangeTitle = (e) => {
    setTitle(e.target.value.slice(0, MAX_TITLE));
  };
  const onChangeContent = (e) => {
    setContent(e.target.value.slice(0, MAX_CONTENT));
  };
  useEffect(() => {
    setIsAble(title !== "" && content !== "");
  }, [title, content]);

  const postData = {
    title: title,
    content: content,
  };

  const writeBoard = (e) => {
    e.preventDefault();
    setWriter(sessionStorage.getItem("id"));
    AxiosWrite(writer, postData, callbackFunctions);
  };

  const callbackFunctions = {
    navigateSuccess: () => navigate("/"),
  };

  return (
    <>
      <Container>
        <InputBox height={"134px"}>
          <TitleEl>
            <Title>제목 :</Title>
            <TitleInput value={title} onChange={onChangeTitle} />
            <TextLimit>
              ( {title.length} / {MAX_TITLE} )
            </TextLimit>
          </TitleEl>
        </InputBox>
        <InputBox height={"751px"}>
          <TextArea value={content} onChange={onChangeContent} />
          <PostLimit>
            <TextLimit>
              ( {content.length} / {MAX_CONTENT} )
            </TextLimit>
          </PostLimit>
        </InputBox>
        <Notice>※ 작성된 게시글은 수정이 불가합니다.</Notice>
        <Button onClick={writeBoard}>
          <ShortBtn isAble={isAble} text={"작성하기"} type={"write"} />
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
`;
const InputBox = styled.div`
  width: 794px;
  height: ${(props) => props.height || "134px"};
  border: 2px solid GRAY;
  border-radius: 25px;
  padding: 55px 52px 51px 35px;
  margin-bottom: 16px;
`;
const TitleEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const TitleInput = styled.input`
  width: 561px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  border: none;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
  resize: none;
`;
const PostLimit = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -25px;
`;
const TextLimit = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: GRAY;
`;
const Notice = styled.div`
  width: 714px;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 500;
  color: GRAY;
`;
const Button = styled.div`
  margin-left: 497px;
`;

export default Post;
