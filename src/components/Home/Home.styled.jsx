import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
margin-left: 20px;
text-decoration: none;
  font-size: 36px;
  color: #000;

  &.active {
    color: red;
  }
`;

export const ListNavItem = styled.ul`
  list-style: none;
  display: flex;
  height: 60px;
  box-shadow: 0px 5px 5px 0px rgba(150,142,150,1);
`;
export const List = styled.ul`
  list-style: none;
`;