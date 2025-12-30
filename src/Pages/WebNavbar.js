import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import logo from "../Images/logo1.png";
import "../CSS/WebNavbar.css";
import nursingImg from "../Images/work1.jpg";
import postopImg from "../Images/work2.jpg";
import personalImg from "../Images/work4.jpg";
import geriatricImg from "../Images/work6.jpg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/About", label: "About Us" },
  { to: "/Contact", label: "Contact Us" },
];

const SERVICE_INFO = {
  "Nursing Care": {
    desc: "Our trained nurses provide professional, compassionate care at home. From post-hospital recovery to chronic illness management, we ensure your loved ones receive the best medical support.",
    img: nursingImg,
  },
  "Post Operative Care": {
    desc: "We provide expert post-surgery recovery assistance — including wound care, mobility support, and medication management — helping you heal faster and safer at home.",
    img: postopImg,
  },
  "Personal Care": {
    desc: "Our caregivers assist with hygiene, grooming, dressing, and daily living activities while maintaining privacy, dignity, and emotional support.",
    img: personalImg,
  },
  "Geriatric Care": {
    desc: "We offer specialized elderly care services focusing on comfort, companionship, and health monitoring for senior citizens’ physical and emotional well-being.",
    img: geriatricImg,
  },
};

const SERVICE_ORDER = Object.keys(SERVICE_INFO);
const STICKY_SCROLL_THRESHOLD = 50;
const NAVBAR_BG = "#a8c6f3ff";

function WebNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  useEffect(() => {
    const handleScroll = () =>
      setIsSticky(window.scrollY > STICKY_SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: NAVBAR_BG }}
        variant="light"
        className={`custom-navbar ${isSticky ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="Logo" className="navbar-logo img-fluid-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {NAV_LINKS.map((link) => (
                <Nav.Link key={link.to} as={NavLink} to={link.to}>
                  {link.label}
                </Nav.Link>
              ))}

              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                {SERVICE_ORDER.map((service) => (
                  <NavDropdown.Item
                    key={service}
                    onClick={() => handleShow(service)}
                  >
                    {service}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} centered animation size="md">
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-primary">
            {selectedService}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {selectedService && (
            <>
              <img
                src={SERVICE_INFO[selectedService].img}
                alt={selectedService}
                className="img-fluid rounded shadow-sm mb-3"
                style={{
                  maxHeight: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <p className="text-secondary">
                {SERVICE_INFO[selectedService].desc}
              </p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedService && (
            <Button variant="primary" onClick={() => navigate("/services")}>
              Learn More
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default WebNavbar;
