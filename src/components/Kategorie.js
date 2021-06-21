import React from "react";
import styled from "styled-components";

const KategorieWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 30px;
`;

const Aa = styled.li`
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
        <Aa>전체</Aa>
        <Aa>테마 기획전</Aa>
        <Aa>토이</Aa>
        <Aa>리빙</Aa>
        <Aa>잡화</Aa>
        <Aa>문구</Aa>
        <Aa>의류</Aa>
        <Aa>파자마</Aa>
        <Aa>여행/레져</Aa>
        <Aa>생활테크</Aa>
        <Aa>폰 액세서리</Aa>
        <Aa>식품</Aa>
      </KategorieWrapper>
    </>
  );
}

export default Kategorie;
