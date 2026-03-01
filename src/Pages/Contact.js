import React, { useEffect, useState } from "react";
import backgroundImage from "../Images/contact.webp";
import "../CSS/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import EnquiryForm from "../Components/EnquiryForm";
import { CONTACT_PAGE_DETAILS } from "../data/contactInfo";
import { openEnquiryForm } from "../utils/enquiry";

const INITIAL_FORM_DATA = {
  name: "",
  contact: "",
  location: "",
  service: "",
};

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const AOS_CONFIG = { duration: 1000, once: true };

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully!");
    setFormData(INITIAL_FORM_DATA);
  };

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      ...AOS_CONFIG,
      duration: shouldReduceMotion ? 450 : AOS_CONFIG.duration,
      disable: shouldReduceMotion,
    });
  }, []);

  const handleOpenForm = () => openEnquiryForm({ setDesktopFormData: setFormData });

  return (
    <>
      <div
        className="contact-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="contact-text" data-aos="fade-right">
          <h1>Best Service At Home</h1>
          <p>Better manage the well-being of elders</p>
          <p className="contact-service-note">
            Services available in Nashik and Dhule.
          </p>
        </div>

        <EnquiryForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <Container className="my-5 contact-section">
        <Row className="align-items-center p-5">
          <Col md={6} sm={12} data-aos="fade-up">
            <h2>Contact Information</h2>
            {CONTACT_PAGE_DETAILS.map((item) => (
              <p key={item.label} className="contact-item">
                <item.Icon className="contact-icon" aria-hidden="true" />
                <strong className="contact-label">{item.label}:</strong>
                <span className="contact-value">{item.value}</span>
              </p>
            ))}
            <div className="contact-enquire-wrap">
              <button
                className="btn btn-success mt-3 contact-enquire-btn"
                onClick={handleOpenForm}
              >
                Enquire Now
              </button>
            </div>
          </Col>

          <Col md={6} sm={12} className="contact-logo-col" data-aos="zoom-in">
            <img
              src={require("../Images/logo1 (2).png")}
              alt="Our Service Logo"
              className="img-fluid contact-logo"
              loading="lazy"
              decoding="async"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center" data-aos="fade-up">
            <h2>Connect with Us</h2>
            {SOCIAL_LINKS.map((link, index) => (
              <React.Fragment key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
                {index < SOCIAL_LINKS.length - 1 && " | "}
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
