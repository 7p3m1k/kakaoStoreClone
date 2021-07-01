import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyTabs = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  padding: 15px 0;
  width: 25%;
  text-align: center;
  background: #f8f8f8;
  font-size: 15px;

  a {
    color: #9b9b9b;
  }
`;

function MyTab() {
  return (
    <>
      <MyTabs>
        <TabItem>
          <Link to="/my/seen">최근 본</Link>
        </TabItem>
        <TabItem>
          <Link to="/my/미구현">내 활동</Link>
        </TabItem>
        <TabItem>
          <Link to="/my/cart">장바구니</Link>
        </TabItem>
        <TabItem>
          <Link to="/my/미구현">주문내역</Link>
        </TabItem>
      </MyTabs>
    </>
  );
}

export default MyTab;
