import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="top-header">
      <Navbar className="nav-bar" light expand="md">
        <NavbarBrand className="navbarBrand" href="/">
          Nhattien
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/photos" className="photo">
                Photos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="add-photo" href="/photos/add">
                Add Photo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="edit-photo" href="/photos/add/123">
                Edit Photo
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="navbarText">Mini Project</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
