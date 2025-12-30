import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,useNavigate  } from "react-router-dom";
//import { NavLink } from "react-bootstrap";
import logo from '../Images/logo1.png';
import '../CSS/WebNavbar.css'
import  { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import nursingImg from "../Images/work1.jpg";
import postopImg from "../Images/work2.jpg";
import personalImg from "../Images/work4.jpg";
import geriatricImg from "../Images/work6.jpg";

function WebNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };
  const navigate = useNavigate();

  
  const handleClose = () => setShowModal(false);
  const serviceInfo = {
    "Nursing Care": {
      desc: "Our trained nurses provide professional, compassionate care at home. From post-hospital recovery to chronic illness management, we ensure your loved ones receive the best medical support.",
      img: nursingImg,
      link: "/nursing-care",
    },
    "Post Operative Care": {
      desc: "We provide expert post-surgery recovery assistance — including wound care, mobility support, and medication management — helping you heal faster and safer at home.",
      img: postopImg,
      link: "/post-operative-care",
    },
    "Personal Care": {
      desc: "Our caregivers assist with hygiene, grooming, dressing, and daily living activities while maintaining privacy, dignity, and emotional support.",
      img: personalImg,
      link: "/personal-care",
    },
    "Geriatric Care": {
      desc: "We offer specialized elderly care services focusing on comfort, companionship, and health monitoring for senior citizens’ physical and emotional well-being.",
      img: geriatricImg,
      link: "/geriatric-care",
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar expand="lg"  style={{ backgroundColor: '#a8c6f3ff' }} variant="light" className={`custom-navbar ${isSticky ? "sticky" : ""}`}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="navbar-logo img-fluid-logo"  /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            
                            <Nav.Link as={NavLink} to='/About'>About Us</Nav.Link>
                           
                            {/* <Nav.Link as={NavLink} to='/Contact'>Our Services</Nav.Link> */}
                             <Nav.Link as={NavLink} to='/Contact'>Contact Us</Nav.Link>
                           
                             <NavDropdown title="Our Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => handleShow("Nursing Care")}>
                                    Nursing Care
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleShow("Post Operative Care")}>
                                    Post Operative Care
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleShow("Personal Care")}>
                                    Personal Care
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleShow("Geriatric Care")}>
                                    Geriatric Care
                                    </NavDropdown.Item>
                             </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* 🌟 Service Info Modal */}
           {/* 🌟 Service Info Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        animation={true}
        size="md"
      >
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-primary">
            {selectedService}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {selectedService && (
            <>
              <img
                src={serviceInfo[selectedService].img}
                alt={selectedService}
                className="img-fluid rounded shadow-sm mb-3"
                style={{ maxHeight: "250px", objectFit: "cover", borderRadius: "12px" }}
              />
              <p className="text-secondary">{serviceInfo[selectedService].desc}</p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedService && (
            <Button
              variant="primary"
              onClick={() => navigate("/services")}
            >
              Learn More
            </Button>
          )}
        </Modal.Footer>
      </Modal>


    </>
  );
}
export default WebNavbar;