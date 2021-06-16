import React, { useState } from "react";
import styled from "styled-components";
import { VscMenu, VscGlobe, FiSearch } from "react-icons/all";
import { Link } from "react-router-dom";

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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <HeaderWrapper>
      <VscMenu size="24" />
      <Link to="/" onClick={openModal}>
        <Logo />
      </Link>
      <div>
        <FiSearch size="24" />
        <VscGlobe size="24" />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
