import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 5px;
  column-count: 2;
  column-gap: 10px;
`;

function PictureList({ data }) {
  return (
    <>
      <Content>
        {data.map((x, i) => {
          return <img width="100%" key={i} src={x} alt="이미지" />;
        })}
      </Content>
    </>
  );
}

export default PictureList;
