import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../Images/logo1 (2).png";
import "../CSS/WebNavbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/About", label: "About Us" },
  { to: "/Contact", label: "Contact Us" },
];

const STICKY_SCROLL_THRESHOLD = 50;
const NAVBAR_BG = "#a8c6f3ff";

function WebNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () =>
      setIsSticky(window.scrollY > STICKY_SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: NAVBAR_BG }}
        variant="light"
        className={`custom-navbar ${isSticky ? "sticky" : ""}`}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
            <img src={logo} alt="Logo" className="navbar-logo img-fluid-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.to}
                  as={NavLink}
                  to={link.to}
                  onClick={() => setExpanded(false)}
                >
                  {link.label}
                </Nav.Link>
              ))}

              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/services"
                  onClick={() => setExpanded(false)}
                >
                  Nursing Care
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services"
                  onClick={() => setExpanded(false)}
                >
                  Post Operative Care
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services"
                  onClick={() => setExpanded(false)}
                >
                  Personal Care
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/services"
                  onClick={() => setExpanded(false)}
                >
                  Geriatric Care
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}
export default WebNavbar;

