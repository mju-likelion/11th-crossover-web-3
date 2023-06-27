import WriteBtn from "../components/ShortBtn";
import styled from "styled-components";
import PROFILE_ME from "../asset/images/icon_profile_me.svg";
import PROFILE_DEFULAT from "../asset/images/icon_profile_default.svg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {AxiosPost} from "../api/Post";

const Main = ({accessToken}) => {

    const [postList, setPostList] = useState([])
    // const [page, setPage]= useState(1)
    const page = 1;

    const callbackFunction = (newPostList) => {
        setPostList((prevPostList) => [...prevPostList, [newPostList]]);
    }

    // nowDate랑 createAt 비교해서
    // 24시간 전까지 -> 24시 형태로 시:분
    // 24시간 지난 경우 -> 1일전 , 2일전 …
    const dateCalculation = (createdAt) => {
        const nowDate = new Date();
        const createdAtDate = new Date(createdAt);
        const timeDiffInMilliseconds = Math.abs(nowDate - createdAtDate); // 시간 간격을 밀리초로 계산
        const timeDiffInDays = timeDiffInMilliseconds / 1000 / 60 / 60 / 24; // 각 초, 분, 시, 일

        const hours = createdAtDate.getHours(); // 시
        const minutes = createdAtDate.getMinutes(); // 분
        const todayTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

        return (
            {
                isToday: timeDiffInDays,
                todayTime: todayTime
            }
        )
    }

    useEffect(() => {
        AxiosPost(page, accessToken, callbackFunction)
        console.log(page)
    }, [])


    return (
        <>
            <ContentBox>
                <ContentWrap>
                    <ContentHeader>
                        <Link to={`/write`}>
                            <WriteBtn text="작성하기" isAble={true} type={"write"}/>
                        </Link>
                    </ContentHeader>
                    {
                        postList[page - 1] && postList[page - 1][0].map((item, index) => {
                            const isToday = dateCalculation(item.createdAt).isToday < 1;
                            const todayTime = dateCalculation(item.createdAt).todayTime;

                            return (
                                <Link to={`/${item.id}`} key={item.id}>
                                    <ShowContent>
                                        <ContentShow>
                                            <img
                                                src={item.isMine ? PROFILE_ME : PROFILE_DEFULAT}
                                                alt="profileImg"
                                            />
                                            <ShowBox>
                                                <ContentName>{item.title}</ContentName>
                                                <ContentText>{item.content}</ContentText>
                                            </ShowBox>
                                            <TimeShow>{isToday ? `${todayTime}` : `${isToday}days ago`}</TimeShow>
                                        </ContentShow>
                                    </ShowContent>
                                </Link>
                            );
                        })}
                </ContentWrap>
            </ContentBox>
        </>
    );
};

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrap = styled.div`
  width: 783px;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 23px 0;
`;
const ShowContent = styled.a`
  display: flex;
  margin-bottom: 54px;
`;
const ContentShow = styled.div`
  padding: 33px 42px;
  width: 783px;
  height: 343px;
  display: flex;
  border-radius: 25px;
  img {
    height: 62px;
    width: 62px;
  }
  border: 2px solid ${({theme}) => theme.colors.GRAY};
`;
const ShowBox = styled.div`
  width: 598px;
  height: 239px;
`;
const ContentName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 39px;
`;
const ContentText = styled.div`
  border-radius: 25px;
  height: 200px;
  width: 598px;
  margin: 17px 42px 71px 41.5px;
  padding: 20px 26px;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid ${({theme}) => theme.colors.BLUE1};
`;
const TimeShow = styled.div`
  font-size: 20px;
  align-self: flex-end;
  padding-top: 13px;
  color: ${({theme}) => theme.colors.GRAY};
`;
export default Main;
