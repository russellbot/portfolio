import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkRouter,
  NavLinkScroll,
  Scroller
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">rh</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkRouter to="/work">Work</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/about">About</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/contact">Contact</NavLinkRouter>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
