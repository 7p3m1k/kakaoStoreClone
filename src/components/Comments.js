import React, { useState } from "react";
import styled from "styled-components";

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

export default function Comments() {
  const [comments, setComments] = useState(["봄"]);

  const addComments = e => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setComments(comments);
      } else {
        setComments([...comments, e.target.value]);
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <CommentLength>댓글 {comments.length}개</CommentLength>
      <ul>
        {comments.map((comment, index) => (
          <CommentWrapper key={index}>
            <strong>박**</strong>
            <Comment>{comment}</Comment>
          </CommentWrapper>
        ))}
        <Input
          placeholder="댓글을 달아주세요."
          onKeyUp={e => {
            addComments(e);
          }}
        />
      </ul>
    </>
  );
}
