import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack, BiHomeAlt, VscGlobe, FiSearch } from "react-icons/all";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;

  b {
    font-size: 20px;
  }
`;

function DetailHeader() {
  let history = useHistory();
  return (
    <>
      <HeaderWrapper>
        <div>
          <IoIosArrowBack size="24" onClick={() => history.goBack()} />
          <BiHomeAlt size="24" onClick={() => history.push("/")} />
        </div>
        <b>제품 상세</b>
        <div>
          <FiSearch size="24" />
          <VscGlobe size="24" />
        </div>
      </HeaderWrapper>
    </>
  );
}

export default DetailHeader;
