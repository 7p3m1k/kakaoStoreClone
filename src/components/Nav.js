import React from "react";
import styled from "styled-components";

const NavLists = styled.ul`
  display: flex;
  margin-top: 20px;
`;

const NavList = styled.li`
  width: 25%;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid rgb(227, 229, 232);
`;

const NavMainView = styled.div`
  border-bottom: 5px solid black;
  padding-bottom: 10px;
  font-weight: 700;
`;

function Nav() {
  return (
    <>
      <NavLists>
        <NavList>
          <NavMainView>오늘</NavMainView>
        </NavList>
        <NavList>신규</NavList>
        <NavList>인기</NavList>
        <NavList>마이</NavList>
      </NavLists>
    </>
  );
}

export default Nav;
