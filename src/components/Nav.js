import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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

// const NavFocus = styled.div`
//   border-bottom: 5px solid black;
//   padding-bottom: 10px;
//   font-weight: 700;
// `;

function Nav() {
  return (
    <>
      <NavLists>
        <NavList>
          <Link to="/">오늘</Link>
        </NavList>
        <NavList>
          <Link to="/new">신규</Link>
        </NavList>
        <NavList>
          <Link to="/hot">인기</Link>
        </NavList>
        <NavList>
          <Link to="/products">마이</Link>
        </NavList>
      </NavLists>
    </>
  );
}

export default Nav;
