import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styled from "styled-components";

const MyTabs = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  padding: 15px 0;
  width: 25%;
  text-align: center;
  background: #f8f8f8;
  font-size: 15px;

  color: ${props => (props.cart ? "black" : "#9b9b9b")};
`;

const Cart = styled.div`
  width: 100%;
  height: 467px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(252, 252, 252);
`;

const CartImg = styled.img`
  width: 184px;
  height: 184px;
  margin: 0 auto;
`;

const CartContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;

  p {
    color: #9a9a9e;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
  }

  button {
    width: 170px;
    height: 35px;
    background-color: #3c404e;
    color: white;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
  }
`;

function My() {
  return (
    <>
      <Header />
      <Nav />
      <MyTabs>
        <TabItem>최근 본</TabItem>
        <TabItem>내 활동</TabItem>
        <TabItem cart>
          <b>장바구니</b>
        </TabItem>
        <TabItem>주문내역</TabItem>
      </MyTabs>
      <Cart>
        <CartContents>
          <CartImg src="https://t1.kakaocdn.net/friends/new_store/3.0/common/ryan-shy-184.png" />
          <p>아직 관심 상품이 없네요!</p>
          <p>귀여운 프렌즈 상품을 추천드릴게요</p>
          <button>인기 상품 보기</button>
        </CartContents>
      </Cart>
    </>
  );
}

export default My;
