import React from "react";
import styled from "styled-components";
import { VscMenu, VscGlobe } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Logo = styled.div`
  background: url("https://t1.kakaocdn.net/friends/new_store/2.0/mobile/new-logo-mo.png");
  background-size: 147px 24px;
  width: 147px;
  height: 24px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <VscMenu size="24" />
      <Logo></Logo>
      <div>
        <FiSearch size="24" />
        <VscGlobe size="24" />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
