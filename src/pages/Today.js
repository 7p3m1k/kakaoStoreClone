import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { feedContents } from "../utils/data";
import styled, { createGlobalStyle } from "styled-components";
import { BsHeart, BsChat, BsReply, IoIosArrowForward } from "react-icons/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  // dotsClass: "todaySlider-dot",
};

// const Global = createGlobalStyle`

// .todaySlider-dot {
//   text-align: center;

// }

// .todaySlider-dot li{
//   position: relative;
//   display: inline-block;
//   width: 15px;
//   height: 15px;
//   padding: 0;
// }

//   .todaySlider-dot li button {
//   font-size: 0;
//   line-height: 0;
//   display: block;
//   width: 15px;
//   height: 15px;
//   padding: 5px;
//   cursor: pointer;
//   color: transparent;
//   border: 0;
//   outline: 0;
//   background: 0 0;
// }

// .todaySlider-dot li button:before {
//   font-size: 2.7rem;
//   line-height: 20px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 20px;
//   height: 20px;
//   content: '•';
//   text-align: center;
//   opacity: .75;
//   color: #e0e0e0;
// }

// .todaySlider-dot li.slick-active button:before {
//   opacity: .75;
//   color: black;
// }
// `;

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

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #f1f0f4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 0 10px 20px;
  margin: 20px 0;
  font-size: 16px;
  ::placeholder {
    color: gray;
  }
`;

const CommentLength = styled.div`
  color: #9a9a9e;
  font-size: 16px;
  margin: 10px 0;
`;

const CommentWrapper = styled.li`
  font-size: 16px;
`;

const Comment = styled.span`
  margin-left: 10px;
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

function Today() {
  const [comments, setComments] = useState(["봄"]);

  const addComments = event => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        setComments(comments);
      } else {
        setComments([...comments, event.target.value]);
        event.target.value = "";
      }
    }
  };

  return (
    <>
      {/* <Global /> */}
      <Header />
      <Nav />
      {feedContents.map((feedItem, index) => {
        return (
          <>
            {console.log(feedItem.slideImg)}
            <ProfileWrapper>
              <ProfileImg src={feedItem.profileImg} />
              <div>
                <ProfileName>
                  <strong>{feedItem.userName}</strong>
                </ProfileName>
                <BadgeTime>
                  <p>{feedItem.badge}</p>
                  {timeForToday(feedItem.date)}
                </BadgeTime>
              </div>
            </ProfileWrapper>
            {feedItem.slideImg ? (
              <Slider {...settings} dotsClass="todaySlider-dot">
                {feedItem.slideImg &&
                  feedItem.slideImg.map(el => {
                    return <img width="100%" src={el} />;
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
            <CommentLength>댓글 {comments.length}개</CommentLength>
            <ul>
              {comments.map((comment, index) => (
                <CommentWrapper key={index}>
                  <strong>박**</strong>
                  <Comment>{comment}</Comment>
                </CommentWrapper>
              ))}
            </ul>
            <Input
              placeholder="댓글을 달아주세요."
              onKeyUp={e => {
                addComments(e);
              }}
            />
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default Today;
