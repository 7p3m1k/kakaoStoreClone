import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import CharacterList from "./CharacterList";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  AiOutlineLock,
} from "react-icons/all";

const SlideUp = keyframes`
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0px);
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 500px;
  height: 100%;
  background-color: white;
  animation: 0.4s ${SlideUp} ease;
  padding: 30px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LoginLink = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;

const ViewGuestOrder = styled.div`
  font-size: 14px;
  margin-left: 20px;
`;

const ModalBanner = styled.img.attrs({
  src: "https://t1.kakaocdn.net/friends/prod/main_tab/banner/banner_20210609165504_mobile_kr.jpg",
})`
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
`;

const ModalMenuList = styled.li`
  font-size: 20px;
  line-height: 48px;

  ${props =>
    props.marginTop &&
    css`
      margin-top: 16px;
    `}

  ${props =>
    props.paddingBottom &&
    css`
      padding-bottom: 16px;
      border-bottom: 1px solid rgb(242, 242, 242);
    `}

    ${props =>
    props.arrow &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    `}
`;

const LoginBtn = styled.div`
  color: #9a9a9e;
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
`;

function SideModal({ showModal, closeModal, openModal }) {
  const [openCharacter, setCharacter] = useState(false);
  return (
    <>
      {showModal ? (
        <ModalWrapper onClick={closeModal}>
          <Modal onClick={e => e.stopPropagation()}>
            <UserInfo>
              <LoginLink>
                <u>로그인</u>이 필요해요 !
              </LoginLink>
              <ViewGuestOrder>
                비회원 주문조회 <IoIosArrowForward />
              </ViewGuestOrder>
            </UserInfo>
            <ModalBanner />
            <ul>
              <ModalMenuList marginTop>장바구니 내역</ModalMenuList>
              <ModalMenuList paddingBottom>주문·배송 내역</ModalMenuList>
              <ModalMenuList
                marginTop
                arrow
                onClick={() => setCharacter(!openCharacter)}
              >
                캐릭터 <IoIosArrowDown />
              </ModalMenuList>
              {openCharacter ? <CharacterList /> : null}
              <ModalMenuList paddingBottom arrow>
                카테고리
                <IoIosArrowDown />
              </ModalMenuList>
              <ModalMenuList marginTop>공지사항</ModalMenuList>
              <ModalMenuList paddingBottom>고객센터</ModalMenuList>
              <ModalMenuList marginTop paddingBottom>
                기프트카드 조회·환불
              </ModalMenuList>
              <ModalMenuList marginTop>브랜드 스토리</ModalMenuList>
              <ModalMenuList paddingBottom>매장안내</ModalMenuList>
            </ul>
            <LoginBtn>
              <AiOutlineLock />
              로그인
            </LoginBtn>
          </Modal>
        </ModalWrapper>
      ) : null}
    </>
  );
}

export default SideModal;