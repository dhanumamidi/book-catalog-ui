import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoWrapper,
} from "./navbarElements";
import logo from "../../assets/images/nav_logo.gif";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper to="/">
            <NavLogo src={logo} />
          </NavLogoWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};
