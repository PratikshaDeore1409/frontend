import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/Footer.css";
import { FOOTER_CONTACT_LINES } from "../data/contactInfo";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: <FaFacebookF aria-label="Facebook" /> },
  { href: "https://twitter.com", icon: <FaTwitter aria-label="Twitter" /> },
  {
    href: "https://instagram.com",
    icon: <FaInstagram aria-label="Instagram" />,
  },
  { href: "https://linkedin.com", icon: <FaLinkedin aria-label="LinkedIn" /> },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to provide hygienic and qualitative professional
              care service at doorstep. Compassion, safety and quality care are
              the heart of everything we do.
            </p>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <div className="footer-contact-lines">
              {FOOTER_CONTACT_LINES.map((item) => (
                <p key={item.label} className="footer-contact-item">
                  <item.Icon className="footer-contact-icon" aria-hidden="true" />
                  <span>{item.value}</span>
                </p>
              ))}
            </div>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.icon.props["aria-label"]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr />
        <Row>
          <Col className="text-center">
            <p className="footer-service-line mb-2">Serving Nashik and Dhule.</p>
            <p className="mb-0">
              &copy; {currentYear} SHARADA DOORSTEP SERVICES. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
