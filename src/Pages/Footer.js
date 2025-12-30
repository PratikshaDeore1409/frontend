import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Column 1: About */}
          <Col md={4} sm={12} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing professional healthcare services at
              your doorstep. Compassion, safety, and quality care are at the
              heart of everything we do.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={4} sm={12} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </Col>

          {/* Column 3: Contact + Socials */}
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <p>
              📍 123 Health Street, City, India <br />
              📞 +91 98765 43210 <br />
              ✉️ info@healthcare.com
            </p>
            <div className="footer-socials">
  <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
</div>

          </Col>
        </Row>

        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Healthcare. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
