import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { feedContents } from "../utils/data";
import styled from "styled-components";
import { BsHeart, BsChat, BsReply, IoIosArrowForward } from "react-icons/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comments from "../components/Comments";

function timeForToday(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ProfileName = styled.p`
  font-size: 16px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const BadgeTime = styled.div`
  display: flex;
`;

const ActionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const ChatBtn = styled.button`
  margin-left: 10px;
`;

const FeedImg = styled.img`
  width: 100%;
  border-radius: 3%;
  margin-top: 20px;
`;

const Likes = styled.div`
  font-size: 18px;
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 12px;
  font-weight: bold;
  white-space: pre-line;
`;

const Feed = styled.div`
  font-size: 16px;
  margin-top: 10px;
  white-space: pre-line;
`;

const ContentLink = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const BadgeColor = styled.p`
  color: ${props =>
    props.color.badge === "Daily Story"
      ? "#2f7ee6"
      : "Exclusive"
      ? "#ad32c5"
      : ""};
  font-size: 14px;
`;

function Today() {
  return (
    <>
      <Header />
      <Nav />
      {feedContents.map((feedItem, index) => {
        return (
          <React.Fragment key={index}>
            <ProfileWrapper>
              <ProfileImg src={feedItem.profileImg} />
              <div>
                <ProfileName>
                  <strong>{feedItem.userName}</strong>
                </ProfileName>
                <BadgeTime>
                  <BadgeColor color={feedItem}>
                    <b>{feedItem.badge}</b>
                  </BadgeColor>
                  {timeForToday(feedItem.date)}
                </BadgeTime>
              </div>
            </ProfileWrapper>
            {feedItem.slideImg ? (
              <Slider {...settings} dotsClass="todaySlider-dot">
                {feedItem.slideImg &&
                  feedItem.slideImg.map((el, index) => {
                    return <img width="100%" src={el} alt="el" key={index} />;
                  })}
              </Slider>
            ) : (
              <FeedImg src={feedItem.feedImg} />
            )}
            {feedItem.contentLink ? (
              <ContentLink>
                <strong>{feedItem.contentLink}</strong>
                <IoIosArrowForward />
              </ContentLink>
            ) : null}
            <ActionWrap>
              <div>
                <BsHeart size="24" />
                <ChatBtn>
                  <BsChat size="24" />
                </ChatBtn>
              </div>
              <BsReply size="26" />
            </ActionWrap>
            <Likes>
              좋아요 <b>{feedItem.likes}개</b>
            </Likes>
            <Title>{feedItem.title}</Title>
            <Feed>{feedItem.description}</Feed>
            <Comments />
          </React.Fragment>
        );
      })}
      <Footer />
    </>
  );
}

export default Today;
