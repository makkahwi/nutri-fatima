import Image from "next/image";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

export const links = [
  { title: "About Me", link: "about" },
  { title: "Coaching", link: "coaching" },
  { title: "Business Facilitation", link: "business" },
  { title: "Testimonials", link: "testimonials" },
  { title: "Blog", link: "blog" },
  { title: "Contact Me", link: "contact" },
];

const NavbarComp = () => {
  return (
    <Navbar
      style={{ minHeight: "10vh" }}
      className="px-5 m-0 w-100 bg-dark"
      fixed="top"
      expand="lg"
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

        <NavbarToggle aria-controls="basic-navbar-nav" className=" bg-white" />

        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto" navbar>
            {links.map(({ title, link }, i) => (
              <NavLink key={i}>
                <Link to={link} role="button">
                  <NavItem>
                    <NavLink className="text-white">{title}</NavLink>
                  </NavItem>
                </Link>
              </NavLink>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
