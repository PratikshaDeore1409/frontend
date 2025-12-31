import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../CSS/Footer.css";

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

const CONTACT_LINES = [
  "📍 3, Trimurty society, Deopur, Dhule",
  "📞 +91 9373119075, +91 7058325196",
  "✉️ info@healthcare.com",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Column 1: About */}
          <Col md={4} sm={12} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to provide Hygienic and qualitative professional
              care servicee at doorstep. Compassion, safety and quality care are
              the heart of everything we do.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
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

          {/* Column 3: Contact + Socials */}
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <p>
              {CONTACT_LINES.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
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
            <p className="mb-0">
              © {currentYear} Healthcare. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
