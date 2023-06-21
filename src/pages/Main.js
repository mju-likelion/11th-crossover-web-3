import WriteBtn from "../components/ShortBtn";
import { styled } from "styled-components";
import PROFILE_ME from "../asset/images/icon_profile_me.svg";
import PROFILE_DEFULAT from "../asset/images/icon_profile_default.svg";
import data from "../asset/data/PostDummyData.json";
import { Link } from "react-router-dom";


const Main = () => {


  return (
    <>
      <ContentBox>
        <ContentWrap>
          <ContentHeader>
            <Link to={`/write`}>
              <WriteBtn text="작성하기" isAble={true} type="W" />
            </Link>
          </ContentHeader>
          {data &&
            data.contents.map((item, idx) => {
              return (
                <Link to={`/${item.id}`} key={item.id}>
                  <ShowContent>
                    <ContentShow>
                      <img
                        src={item.mine ? PROFILE_ME : PROFILE_DEFULAT}
                        alt="profileImg"
                      />
                      <ShowBox>
                        <ContentName>{item.title}</ContentName>
                        <ContentText>{item.content}</ContentText>
                      </ShowBox>
                      <TimeShow>{item.time}</TimeShow>
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
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
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
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
`;

const TimeShow = styled.div`
  font-size: 20px;
  align-self: flex-end;
  padding-top: 13px;
  color: ${({ theme }) => theme.colors.GRAY};
`;
export default Main;
