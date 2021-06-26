import React, { useState } from "react";
import styled from "styled-components";

const NonMembersLayOutWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`;

const LayOut = styled.div`
  width: 600px;
  height: 700px;
  margin: 0 auto;
  background: white;
  margin-top: 150px;
`;

const HeadName = styled.div`
  font-size: 32px;
  padding: 35px 0;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const OrderListWrap = styled.div`
  padding: 35px;

  span {
    color: #999;
    font-size: 20px;
    display: block;
  }
  input {
    border-bottom: 1px solid #999;
    width: 100%;
    margin-bottom: 30px;
    height: 70px;
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 220px;
  height: 60px;
  border: 1px solid #999;
  margin: 20px 20px 0 20px;
  font-size: 25px;
  background-color: ${props => (props.color ? "#f4c900;" : null)};
  color: ${props => (props.color ? "white" : null)};
`;

function NonMembersLayOut() {
  // document.body.style.overflow = "hidden";
  const [openO, setO] = useState(true);

  const closeBtn = () => {
    setO(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {openO ? (
        <NonMembersLayOutWrapper>
          <LayOut>
            <HeadName>비회원 주문조회</HeadName>
            <OrderListWrap>
              <span>주문번호 : </span>
              <input />
              <span>이름 : </span>
              <input />
              <span>이메일 : </span>
              <input />
              <Button onClick={closeBtn}>취소</Button>
              <Button color>주문확인</Button>
            </OrderListWrap>
          </LayOut>
        </NonMembersLayOutWrapper>
      ) : null}
    </>
  );
}

export default NonMembersLayOut;
