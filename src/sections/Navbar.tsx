"use client";

import Image from "next/image";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { animateScroll, Link } from "react-scroll";

export const links = [
  { title: "عني", link: "about" },
  { title: "خدماتنا", link: "coaching" },
  { title: "شهادات العملاء", link: "testimonials" },
  { title: "المدونة", link: "blog" },
  { title: "تواصل الآن", link: "contact" },
];

const NavbarComp = () => {
  return (
    <Navbar
      style={{ minHeight: "10vh" }}
      className="px-5 m-0 w-100 bg-dark"
      fixed="top"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <NavbarBrand onClick={() => animateScroll.scrollToTop()} role="button">
          <Image
            src="/images/logo/logo-white.png"
            alt="Logo"
            width={543 * 0.075}
            height={771 * 0.075}
            priority
          />
        </NavbarBrand>

        <NavbarToggle aria-controls="navbar-nav" className=" bg-white" />

        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto" navbar>
            {links.map(({ title, link }, i) => (
              <NavLink
                as={Link}
                to={link}
                className="text-white"
                role="button"
                href="#"
                key={i}
              >
                {title}
              </NavLink>
            ))}
          </Nav>
        </NavbarCollapse>

        <Link
          to="contact"
          className="text-capitalize"
          style={{
            zIndex: 1000,
            fontSize: "calc(10px + 0.15vw)",
          }}
        >
          <Button variant="warning">احجز الآن</Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
