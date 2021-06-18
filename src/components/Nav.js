import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import NavbarItem from "./NavbarItem";

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

function Nav() {
  const pathName = useLocation().pathname;

  const menus = [
    {
      name: "오늘",
      path: "/",
    },
    {
      name: "신규",
      path: "/new",
    },
    {
      name: "인기",
      path: "/hot",
    },
    {
      name: "마이",
      path: "/products",
    },
  ];

  return (
    <>
      <NavLists>
        {menus.map((menu, index) => (
          <NavList>
            <Link to={menu.path} key={index}>
              <NavbarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </Link>
          </NavList>
        ))}
      </NavLists>
    </>
  );
}

export default Nav;
