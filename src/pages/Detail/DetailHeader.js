import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, BiHomeAlt, VscGlobe, FiSearch } from "react-icons/all";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 1px solid gray;
`;

function DetailHeader() {
  return (
    <>
      <HeaderWrapper>
        <div>
          <IoIosArrowBack size="24" />
          <BiHomeAlt size="24" />
        </div>
        제품 상세
        <div>
          <FiSearch size="24" />
          <VscGlobe size="24" />
        </div>
      </HeaderWrapper>
    </>
  );
}

export default DetailHeader;
