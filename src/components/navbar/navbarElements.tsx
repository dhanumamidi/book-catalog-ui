import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/nav_logo.gif";

export const Nav = styled.nav`
  background: #101522;
  max-height: 80px;
  display: flex;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  background-image: url(${logo});
  width: 500px;
`;

export const NavSearch = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  display: inline-flex;
  height: 24px;
  font-size: 14px;
  font-weight: bolder;
  color: #9d9fb0;
  svg {
    height: 100%;
    width: 100%;
  }
`;
