import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/all";
import styled from "styled-components";

const FooterWrpper = styled.div`
  background: rgb(242, 242, 242);
  margin: 0px auto;
  border-top: 1px solid ivory;
  padding: 0 13px 63px 13px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 110px;
    margin-top: 20px;
    margin-right: 5px;
  }
`;

const FooterInfoService = styled.ul`
  display: flex;
  margin: 20px 0;
  color: #666666;
  font-size: 14px;

  li {
    margin-right: 10px;

    &.bold {
      font-weight: bold;
    }
  }
`;

const FooterInfo = styled.ul`
  display: flex;

  ul {
    margin-right: 20px;
    color: #999999;

    li {
      margin: 5px 0;
    }
  }
`;

const Footer = () => {
  const [openCommerce, setCommerce] = useState(false);
  return (
    <FooterWrpper>
      <FooterInfoService>
        <li>제휴문의</li>
        <li>고객문의</li>
        <li>이용약관</li>
        <li className="bold">개인정보처리방침</li>
        <li>지식재산권보호센터</li>
      </FooterInfoService>
      <LogoWrapper>
        <div onClick={() => setCommerce(!openCommerce)}>
          <img
            src="https://t1.kakaocdn.net/friends/new_store/3.0/common/logo-footer-commerce.png"
            alt="Logo"
          />
          {openCommerce ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <img
          src="https://t1.kakaocdn.net/friends/new_store/3.0/common/logo-footer-best-family.png"
          alt="Bestfamily"
        />
      </LogoWrapper>
      {openCommerce ? (
        <FooterInfo>
          <ul>
            <li>(주)카카오커머스</li>
            <li>주소</li>
            <li>사업자등록번호</li>
            <li>통신판매업신고번호</li>
            <li>호스팅서비스사업자</li>
            <li>구매안전서비스</li>
            <li>이메일</li>
            <li>고객센터</li>
          </ul>
          <ul>
            <li>대표이사 홍은택</li>
            <li>경기도 성남시 분당구 대왕판교로 660 A동 5층</li>
            <li>891-88-00985</li>
            <li>제2019 - 성남분당B - 0090 호</li>
            <li>(주)카카오커머스</li>
            <li>
              <u>신한은행구매안전서비스 확인</u>
            </li>
            <li>store@kakaofriends.com</li>
            <li>1577-6263</li>
            <li>전화상담 (평일 10:00~18:00)</li>
            <li>카카오톡 상담 (평일 10:00~18:00)</li>
          </ul>
        </FooterInfo>
      ) : null}
    </FooterWrpper>
  );
};

export default Footer;
