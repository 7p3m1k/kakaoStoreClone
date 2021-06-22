import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { feedContents } from "../utils/data";
import styled from "styled-components";
import { BsHeart, BsChat, BsReply, IoIosArrowForward } from "react-icons/all";

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
      <Header />
      <Nav />
      {feedContents.map((feedItem, index) => {
        return (
          <>
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
            <FeedImg src={feedItem.feedImg} />
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
    </>
  );
}

export default Today;
