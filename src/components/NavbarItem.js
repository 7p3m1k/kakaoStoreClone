import React from "react";
import styled from "styled-components";

const NavbarItemActive = styled.div`
  border-bottom: 5px solid black;
  padding-bottom: 10px;
  font-weight: 700;
`;

const NavbarItemUnActive = styled.div`
  color: black;
`;

function NavbarItem({ menu, isActive }) {
  return isActive === true ? (
    <NavbarItemActive>{menu.name}</NavbarItemActive>
  ) : (
    <NavbarItemUnActive>{menu.name}</NavbarItemUnActive>
  );
}

export default NavbarItem;
