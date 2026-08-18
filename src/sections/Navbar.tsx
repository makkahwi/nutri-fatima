"use client";

import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";

export const links = [
  { title: "عني", link: "about" },
  { title: "خدماتي", link: "services" },
  { title: "بدون حرمان", link: "fears" },
  { title: "نمط متوازن", link: "comprehensive" },
  { title: "مصادر", link: "pedia" },
  // { title: "برامج التغذية", link: "programs" },
  // { title: "الموسوعة الغذائية", link: "info" },
  // { title: "شهادات العملاء", link: "testimonials" },
  // { title: "المدونة", link: "blog" },
];

const NavbarComp = () => {
  return (
    <Navbar
      className="site-nav px-3 px-lg-5 m-0 w-100"
      fixed="top"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <NavbarBrand
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          role="button"
        >
          <Image
            src="/images/logo/logo-w.png"
            alt="Logo"
            width={771 * 0.075}
            height={771 * 0.075}
            priority
          />
        </NavbarBrand>

        <NavbarToggle aria-controls="navbar-nav" className=" bg-white" />

        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto" navbar>
            {links.map(({ title, link }, i) => (
              <NavLink
                href={`#${link}`}
                className="site-nav-link"
                role="button"
                key={i}
              >
                {title}
              </NavLink>
            ))}
          </Nav>
        </NavbarCollapse>

        <a href="#contact" className="text-capitalize nav-cta">
          <div className="btn btn-warning">احجزوا أول استشارة</div>
        </a>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
