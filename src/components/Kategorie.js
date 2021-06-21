import React from "react";
import styled from "styled-components";

const KategorieWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 30px;
`;

const Item = styled.li`
  width: 200px;
  height: 50px;
  font-size: 15px;
  padding: 12px 0px;
  color: rgb(102, 102, 102);
`;

function Kategorie() {
  return (
    <>
      <KategorieWrapper>
        <Item>전체</Item>
        <Item>테마 기획전</Item>
        <Item>토이</Item>
        <Item>리빙</Item>
        <Item>잡화</Item>
        <Item>문구</Item>
        <Item>의류</Item>
        <Item>파자마</Item>
        <Item>여행/레져</Item>
        <Item>생활테크</Item>
        <Item>폰 액세서리</Item>
        <Item>식품</Item>
      </KategorieWrapper>
    </>
  );
}

export default Kategorie;
