"use client";

import { Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";

import { links } from "../Navbar";

const FooterNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="mx-auto">
          {links.map(({ title, link }, i) => (
            <NavItem key={i}>
              <NavLink href={`#${link}`} role="button" className="text-white">
                {title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterNav;
