import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./navbarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"></NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};
